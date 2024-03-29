const ALLOWED_COMMANDS = ['forward', 'backward', 'left', 'right', 'stop'];

// _____ HELPER FUNCTIONS AVAILABLE TO PLAYER ______
const toG = (r) => {
    return r * 180 / Math.PI;
}

const getDistance = (a, b) => {
    let deltaX = a.x - b.x;
    let deltaY = a.y - b.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

const getSpeed = (velocity) => {
    if (Array.isArray(velocity) || velocity instanceof Float32Array) return p2.vec2.len(velocity);
    else if (typeof velocity === 'object' && typeof velocity.x !== 'undefined' && typeof velocity.y !== 'undefined') return p2.vec2.len([velocity.x, velocity.y]);
}

// ______________________________________________________

function navigate(data) {
// {number} data.rocket.y
// {number} data.rocket.rotation - ориентация на ракетата в радиани, [-π, π], 0 = нагоре
// {number} data.rocket.velocity - скорост на ракетата, базирана на вектора на движение, пр скорост на вектор [2,3] е ~3.6
// {number} data.rocket.direction - ъгъл в радиани между посоката на движение на ракетата и целта, в интервала [-π, π], където π нараства по часовниката стрелка ('вдясно'), 0 е липса на отклонение
// {number} drift - ъгъл в радиани показваш отклонение от ориентацията на ракетата и посоката и на движение, [-π, π]
// {number} data.gravityDirection - ъгъл в радиани на външна сила (гравитация), действаща на ракетата, на баса на ориентацията на ракетата, [-π, π]
// {number} data.targetDirection - ъгъл в радиани между крайната цел и ориентацията на ракетата, [-π, π]
// {number} data.target.x - х на центъра на крайната цел
// {number} data.target.y - y на центъра на крайната цел

let forward = false,
    backward = false,
    left = false,
    right = false,
    stop = false;

const targetDirection = data.targetDirection;

const badDirection = Math.abs(targetDirection) > 0.05;
const rotateToTarget = () => {
    if (targetDirection > 0.001) right = true;
    else if (targetDirection < -0.001) left = true;
};

if (badDirection) rotateToTarget();
forward = true;

return {forward, backward, left, right, stop};
}


let src = navigate.toString().split('\n');
src.shift();
src.length -= 1;

const START_SCRIPT = src.join('\n');
const MAX_LANDING_VELOCITY = 40;
const TOLERABLE_ANGLE_DEVIATION = Math.PI / 12; // 15 degrees
const SIN_COS_TOLERATION = Math.sin( TOLERABLE_ANGLE_DEVIATION ); // 0.2588...
const HALF_PI = Math.PI / 2;
const THRUST_SPEED = 40;

class Game {

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.config = {rocket: {x: 0, y: 0, rotation: 0}};
        this.launchButton = null, this.showPanelButton = null, this.helpButton = null, this.termsAndConditions = null;
        this.gameStarted = false;

        this.rocket = null;
        this.target = null;
        this.planets = [];
        this.container = document.querySelector('#game-container');
        this.renderer = PIXI.autoDetectRenderer(1920, 1080, {
            backgroundColor: 0,
        });
        this.container.querySelector("#canvas-container").appendChild(this.renderer.view);
        this.stage = new PIXI.Container();

        this.prevTime = performance.now();

        this.tickBound = this.tick.bind(this);

        PIXI.animate.load(lib.stage, (inst) => this.onLoaded(inst)); // TODO loader

        this._tick = 0;

        this._showSidePanelCounter = 1;
        this._userInputs = [];

        this._hasInputError = false;
    }

    tick() {
        if (this._hasInputError) {
            return requestAnimationFrame(this.tickBound);
        }

        let now = performance.now();
        let delta = Math.min(now - this.prevTime, 17); // cap at 17 mls per frame

        this.prevTime = now;
        this.update(delta, this._tick++);
        this.world.step(delta*.001);
        this.renderer.render(this.stage);

        requestAnimationFrame(this.tickBound);
    }

    onLoaded(inst) {
        inst.name = 'animateStage';
        this.animateStage = inst;
        this.stage.addChild(inst);
        inst.gotoAndPlay('start');

        this._initPhysicsWorld();
        this._initRocket();
        this._initPlanets();

        this._initGUI();
        this._initCodePanel();

        this.init();
        this.renderer.render(this.stage);
    }

    startGame() {
        this.gameStarted = true;
        this.tick();
    }

    showSidePanel() {
        this._showSidePanelCounter += 1;

        TweenMax.to(this.sidePanel, 1.5, {right: 0});
        TweenMax.to(this.showPanelButton, 0.5, {opacity: 0});
    }

    hideSidePanel(callback) {
        if(this._userInputs.length <= 3 && this._showSidePanelCounter % 10 === 0) {
            this._userInputs.push('--------------------------------- NEW INPUT ---------------------------------');
            this._userInputs.push(this.userCode.options.value);
        }

        TweenMax.to(this.sidePanel, 1.5, {
            right: -460,
            onComplete: callback,
            onCompleteScope: this,
        });
        setTimeout(() => TweenMax.to(this.showPanelButton, 0.5, {opacity: 1}), 1000);
    }

    _gameOver(reason) {
        this.rocket.die(this.showSidePanel.bind(this));

        // const constraint = new p2.LockConstraint(this.target, this.rocket);
        // this.world.addConstraint(constraint);

        console.info("Rocket crash. " + reason);
    }

    _onWin() {
        this._userInputs.push('-------------------------------- FINAL INPUT --------------------------------');
        this._userInputs.push(this.userCode.options.value);

        console.info("Mission complete!");

        document.querySelector('.splash-btn-container').style.display = "none";
        document.querySelector('.condition-btn-container').style.display = "none";
        document.querySelector('#show-side-panel').style.display = "none";

        document.querySelector("#win-prompt").style.display = "block";
        document.getElementsByName("submission")[0].value = this._userInputs; // TODO code input

        const constraint = new p2.LockConstraint(this.target, this.rocket);
        this.world.addConstraint(constraint);

        const oldSp = this.rocket.sprite;

        this.animateStage.removeChild(oldSp);

        const winAnim = this.rocket.winAnim;


        winAnim.transform = oldSp.transform;

        this.animateStage.addChild(winAnim);
    }

    init() {
        this._hasInputError = false;

        this.rocket.position[0] = this.config.rocket.x;
        this.rocket.position[1] = this.config.rocket.y + 5; // TODO fix in flash
        this.rocket.rotation = this.config.rocket.rotation;
        this.rocket.restart();
        // this.rocket.mass = 1;
        // this.rocket.angle = 0;
        // this.rocket.velocity = [0, 0];
        // this.rocket.angularVelocity = 0;

        try {
            this.navigate = new Function('data', this.userCode.getValue()); // TODO catch user input errors
        }
        catch(e) {
            this._hasInputError = true;
            console.error('An error has occurred!!!');
        }

    }

    _initPhysicsWorld() {
        const world = new p2.World({
            gravity: [0, 0],
            broadphase: new p2.SAPBroadphase()
        });

        world.on('impact', (evt) => {
            const bA = evt.bodyA;
            const bB = evt.bodyB;

            if (bB === this.rocket || bA === this.rocket) {
                if (getSpeed(this.rocket.velocity) > MAX_LANDING_VELOCITY) return this._gameOver('Collided.');
                if (bA === this.target || bB === this.target) {
                    this._checkLanding();
                }
            }
        });

        this.world = world;
    }

    _checkLanding() {
        // check angle
        let angleRadians = Math.atan2( // rocket entry angle
            this.rocket.position[1] - this.target.position[1],
            this.rocket.position[0] - this.target.position[0]
        );
        angleRadians += HALF_PI; // abcissa to ordinate based
        if ((Math.abs( Math.sin(angleRadians) - Math.sin(this.rocket.rotation)) > SIN_COS_TOLERATION) ||
            (Math.abs( Math.cos(angleRadians) - Math.cos(this.rocket.rotation)) > SIN_COS_TOLERATION)) { // OR tocket.angle?
                return this._gameOver('Rocket tipped.');
            }

        this._onWin();
    }

    _initPlanets() {
        const animateStage = this.animateStage;
        const sun = animateStage.sun;
        const moon = animateStage.target;
        const earth = animateStage.start;

        this._initPlanet(sun, 500);
        this.target = this._initPlanet(moon, 350);
        this._initPlanet(earth, 400);
    }

    /**
     * @param {Pixi.Sprite} planet
     * @returns {p2.Body}
     * @private
     */
    _initPlanet(anim, gravityRadius) {
        const world = this.world;
        const body = new Planet(anim, {
            mass: 0,
            angle: 0,
            velocity: [0, 0],
            angularVelocity: 0,
            gravityRadius,
        });

        world.addBody(body);
        this[anim.name] = body;
        this.planets.push(body);


        this.stage.addChild(body.overlay);

        return body;
    }

    _initRocket() {
        const stage = this.animateStage;
        const world = this.world;
        const sprite = stage.rocket;
        const body = new Rocket(sprite, lib.thrust,{
            mass: 1,
            angle: 0,
            velocity: [0, 0],
            angularVelocity: 0,
        });
        world.addBody(body);

        this.rocket = body;

        // cache initial settings
        this.config.rocket.x = sprite.x;
        this.config.rocket.y = sprite.y;
        this.config.rocket.rotation = sprite.rotation;


        this.renderer.view.addEventListener('mousemove', (e) => {
            // const r = this.rocket;
            // const x = (((e.clientX) * (1920)) / (window.innerWidth));
            // const y = (((e.clientY) * (1080)) / (window.innerHeight));

            // r.position[0] = x;
            // r.position[1] = y;

            // r.velocity = [0,0];
        });

        // this.stage.addChild(body.overlay);

        this.animateStage.removeChild(this.animateStage.thrust); // ?? why
        this.animateStage.removeChild(this.animateStage.thrust); // ?? why
    }

    get rocketActingForce() {
        const r = this.rocket;
        const f = [0,0];
        const ps = this.planets;

        for(let i=0;i<ps.length;i++) {
            const p = ps[i];

            p2.vec2.add(f, f, p.getPullForce(r));
        }

        return f;
    }

    update(delta, tick) {
        const r = this.rocket;
        const force = this.rocketActingForce;

        // console.log(force);
        r.applyForce(force);
        this.rocket.update(this.navigationOutput);
    }

    get navigationOutput() {

        const actingForceDirection = this.rocketActingForce;
        const actingForceValue = getSpeed(actingForceDirection);
        const actingForceAngle = this._planetToObjectAngle([
            actingForceDirection[0] + this.rocket.position[0],
            actingForceDirection[1] + this.rocket.position[1]
        ]);
        const driftForceAngle = this._planetToObjectAngle([
            this.rocket.velocity[0] + this.rocket.position[0],
            this.rocket.velocity[1] + this.rocket.position[1]
        ]);

        let output = this.navigate({ // TODO catch user input errors
            rocket: {
                x: this.rocket.position[0],
                y: this.rocket.position[1],
                rotation: this.rocket.rotation,
                velocity: this.rocket.velocity,
                direction: this._rocketMovementToTargetAngle(),
                drift: getSpeed(this.rocket.velocity) < 1 ? 0 : driftForceAngle
            },
            gravityDirection: actingForceValue > 7 ? actingForceAngle : null, // ignore weak forces
            target: {x: this.target.position[0], y: this.target.position[1]},
            targetDirection: this._planetToObjectAngle(this.target.position),
        });

        // filter non allowed commands
        for (let key in output) {
            if (ALLOWED_COMMANDS.indexOf(key) === -1) delete output[key];
        }

        if(typeof output !== 'object' || output === undefined || Object.keys(output).length !== ALLOWED_COMMANDS.length) {
            console.error('Invalid Input!!!');
            this._hasInputError = true;

            return {
                forward: false,
                backward: false,
                left: false,
                right: false
            };
        } else {
            return output;
        }
    }

    /** define rocket movement */
    navigate(data) {
        // user input evaled here
    }

    /**
     * rocket rotation 0 is up, grows clockwise
     * target {Array[2]} x, y
     * @returns {number} Relative angle between rocket oreitnation and target center.
     *  [-Pi; 0) target to left of rocket
     *  (0, Pi] target to right of rocket
     * @private
     */
    _planetToObjectAngle(target) {
        let planetAngle = Math.atan2( // target to rocket to abcissa
            this.rocket.position[1] - target[1],
            target[0] - this.rocket.position[0]
        );

        let rocketAngle = (Math.PI / 2 - this.rocket.rotation ) % (2 * Math.PI); // rocket vector to abcissa
        if (rocketAngle < -Math.PI)  rocketAngle = (2 * Math.PI) + rocketAngle; // convert -200 to 20
        else if (rocketAngle > Math.PI)  rocketAngle = rocketAngle - 2 * Math.PI; // convert 200 to -20

        return orientationBetweenAngles(rocketAngle, planetAngle);
    }

    _rocketMovementToTargetAngle() {
        let planetAngle = Math.atan2(
            this.rocket.position[1] - this.target.position[1],
            this.target.position[0] - this.rocket.position[0]
        );

        const rocketMovementAngle = -Math.atan2(this.rocket.velocity[1],this.rocket.velocity[0]);

        return orientationBetweenAngles(rocketMovementAngle, planetAngle);
    }

    _initCodePanel() {
        this.sidePanel = this.container.querySelector('#side-panel');
        this.userCode = CodeMirror(this.container.querySelector('#code-container'), {
            value: START_SCRIPT,
            mode:  "javascript",
            theme: "monokai",
            lineWrapping: true,
            lineNumbers: true,
            autofocus: true,
            cursorHeight: 1.2
        });
        this.userCode.execCommand('goDocEnd'); // move cursor to end
        this.launchButton = this.container.querySelector('#launch-button');
        this.showPanelButton = this.container.querySelector('#show-side-panel');

        this.launchButton.addEventListener('click', this.hideSidePanel.bind(this, this.init.bind(this)));
        this.showPanelButton.addEventListener('click', this.showSidePanel.bind(this));
    }

    _initGUI() {
        document.querySelector('.splash-btn-container').addEventListener('click', this.toggleHelp.bind(this));
        document.querySelector('#splash-container .close').addEventListener('click', this.toggleHelp.bind(this));
        document.querySelector('#splash-container button').addEventListener('click', this.toggleHelp.bind(this));
        document.querySelector('.condition-btn-container').addEventListener('click', this.toggleConditions.bind(this));
        document.querySelector('#condition-container .close').addEventListener('click', this.toggleConditions.bind(this));
    }

    toggleHelp() {
        let howTo = document.querySelector('#splash-container');
        howTo.classList.toggle('hidden');
        if (howTo.classList.contains('hidden')) {
            howTo.style.display = 'none';
            if (!this.gameStarted) this.startGame();
        } else {
            howTo.style.display = 'block';
        }
    }

    toggleConditions() {
        let howTo = document.querySelector('#condition-container');
        howTo.classList.toggle('hidden');
        if (howTo.classList.contains('hidden')) {
            howTo.style.display = 'none';
        } else {
            howTo.style.display = 'block';
        }

    }
}