const ALLOWED_COMMANDS = ['forward', 'backward', 'left', 'right'];  // TODO - thrust

// _____ GLOBAL HELPER FUNCITON AVAILBALE TO PLAYER ______
function toG(r) {
    return r * 180 / Math.PI;
}

function getDistance(a, b) {
    let deltaX = a.x - b.x;
    let deltaY = a.y - b.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

function getVelocity(velocity) {
    if (Array.isArray(velocity)) return Math.abs(velocity[0] * velocity[1]);
    else if (typeof velocity === 'object' && typeof velocity.x !== 'undefined' && typeof velocity.y !== 'undefined') return Math.abs(velocity.x * velocity.y);
}

// ______________________________________________________

function navigate(data) {
    // data = rocket {x, y, rotation, velocity: {x, y}}, target {x, y}, forces {x, y}
    let forward = false, backward = false, left = false, right = false;

    let distance = getDistance(data.rocket, data.target);
    // const force = data.rocket.actingForce;
    const vel = data.rocket.velocity;
    const speed = p2.vec2.len(vel);
    // const forceLen = p2.vec2.len(force);
    const b = data.rocket.body;

    // if (data.actingForce && distance > 500) { //not landing
    //     // run away from gravity
    //     if (data.actingForce >= 0 && data.actingForce < 2.1) left = true;
    //     else if (data.actingForce <= 0 && data.actingForce > -2.1) right = true;
    //     forward = true;
    // } else {
        if (distance > 600) {
            if (data.rocketToTargetAngle > 0.05) right = true;
            else if (data.rocketToTargetAngle < -0.05) left = true;

            if (!left && !right && speed < 200) forward = true;
        } else {
            if (data.rocketToTargetAngle >= 0 && data.rocketToTargetAngle < 3.1) left = true;
            else if (data.rocketToTargetAngle <= 0 && data.rocketToTargetAngle > -3.1) right = true;
            if (!left && !right) {
                if (speed > MAX_LANDING_VELOCITY * 1.5) forward = true;
                else if (speed < MAX_LANDING_VELOCITY / 4) backward = true;
            }
        }
    // }

    // Detect if we're drifting and correct it(forces like gravity cause drift)

    // // console.log(vel);
    // if(forceLen > 0) {
    //     // data.rocket.ignoreGravity();
    // }

    return {forward, backward, left, right};
}


let src = navigate.toString().split('\n');
src.shift();
src.length -= 1;

const START_SCRIPT = src.join('\n');
const MAX_LANDING_VELOCITY = 30;
const TOLERABLE_ANGLE_DEVIATION = Math.PI / 12; // 15 degrees
const SIN_COS_TOLERATION = Math.sin( TOLERABLE_ANGLE_DEVIATION ); // 0.2588...
const HALF_PI = Math.PI / 2;
const THRUST_SPEED = 80;

var thrusts = {
    left: 0,
    right: 0,
    tail: 0,
    nose: 0,
}

class Game {

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.config = {rocket: {x: 0, y: 0, rotation: 0}};

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
    }

    tick() {
        let now = performance.now();
        let delta = Math.min(now - this.prevTime, 17); // cap at 17 mls per frame
        this.prevTime = now;

        this.update(delta, this._tick++);
        this.world.step(0.016); // ?!? TODO
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

        this._initCodePanel();

        this.init();
        //this.update(performance.now);

        // some how-to-animation
        // setTimeout(() => { // do some button click animation instead
            // this.hideSidePanel(() => {
                this.tick();
            // });
        // }, 1000);
    }

    showSidePanel() {
        TweenMax.to(this.sidePanel, 1.5, {right: 0});
        TweenMax.to(this.showPanelButton, 0.5, {opacity: 0});
        //this.showPanelButton.style.opacity = 0;
    }

    hideSidePanel(callback) {
        TweenMax.to(this.sidePanel, 1.5, {
            right: -460,
            onComplete: callback,
            onCompleteScope: this,
        });
        setTimeout(() => TweenMax.to(this.showPanelButton, 0.5, {opacity: 1}), 1000);
    }

    _gameOver(reason) {
        alert("You dieded. " + reason); // TODO - fail screen
    }

    _onWin() {
        console.info("Mission complete!");
        document.querySelector("#win-prompt").style.display = "block";
        document.getElementsByName("submission")[0].value = this.userCode.value; // TODO code input

        const constraint = new p2.LockConstraint(this.target, this.rocket);
        this.world.addConstraint(constraint);

    }

    init() {
        this.rocket.position[0] = this.config.rocket.x;
        this.rocket.position[1] = this.config.rocket.y;
        this.rocket.rotation = this.config.rocket.rotation;
        this.navigate = new Function('data', this.userCode.getValue()); // TODO catch user input errors
    }

    _initPhysicsWorld() {
        const world = new p2.World({
            gravity: [0, 0],
            broadphase: new p2.SAPBroadphase()
        });

        world.on('impact', (evt) => {
            if (evt.bodyA === this.target || evt.bodyB === this.target) {
                if (evt.bodyB === this.rocket || evt.bodyA === this.rocket) {
                    this._checkLanding();
                }
            }
        });

        this.world = world;
    }

    _checkLanding() {
        // check speed
        let speed = getVelocity(this.rocket.velocity);
        if (speed > MAX_LANDING_VELOCITY) return this._gameOver('Too fast.');

        // check angle
        let angleRadians = Math.atan2( // rocket entry angle
            this.rocket.position[1] - this.target.position[1],
            this.rocket.position[0] - this.target.position[0]
        );
        angleRadians += HALF_PI; // abcissa to ordinate based
        if ((Math.abs( Math.sin(angleRadians) - Math.sin(this.rocket.rotation)) > SIN_COS_TOLERATION) ||
            (Math.abs( Math.cos(angleRadians) - Math.cos(this.rocket.rotation)) > SIN_COS_TOLERATION)) { // OR tocket.angle?
                return this._gameOver('Bad entry angle.');
            }

        this._onWin();
    }

    _initPlanets() {
        const animateStage = this.animateStage;
        const sun = animateStage.sun;
        const moon = animateStage.target;
        const earth = animateStage.start;

        this._initPlanet(sun);
        this.target = this._initPlanet(moon);
        this.start = this._initPlanet(earth);
    }

    /**
     * @param {Pixi.Sprite} planet
     * @returns {p2.Body}
     * @private
     */
    _initPlanet(anim) {
        const world = this.world;
        const body = new Planet(anim, {
            mass: 0,
            angle: 0,
            velocity: [0, 0],
            angularVelocity: 0
        });

        world.addBody(body);
        this[anim.name] = body;
        this.planets.push(body);

        return body;
    }

    _initRocket() {
        const stage = this.animateStage;
        const world = this.world;
        const sprite = stage.rocket;
        const body = new Rocket(sprite, {
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

        // this.renderer.view.addEventListener('mousemove', (e) => {
        //     const r = this.rocket;
        //     const x = (((e.clientX) * (1920)) / (window.innerWidth));
        //     const y = (((e.clientY) * (1080)) / (window.innerHeight));

        //     // r.position[0] = x;
        //     // r.position[1] = y;
        //     const a = Math.atan2(r.position[1] - y, r.position[0] - x);
        // });

        this.stage.addChild(body.overlay);
    }

    _handleNavigation(command) {
        if (command.forward) {
            if (thrusts.tail < 10) thrusts.tail++;
            this.rocket._thrust(THRUST_SPEED);
        } else if (thrusts.tail > 0) thrusts.tail--;

        if (command.backward) {
            if (thrusts.nose < 10) thrusts.nose++;
            this.rocket._thrust(-(THRUST_SPEED));
        } else if (thrusts.nose > 0) thrusts.nose--;
        if (command.left) {
            if (thrusts.left < 10) thrusts.left++;
            this.rocket.rotation = this.rocket.rotation - .01;
        } else if (thrusts.left > 0) thrusts.left--;
        if (command.right) {
            if (thrusts.right < 10) thrusts.right++;
            this.rocket.rotation = this.rocket.rotation + .01;
        } else if (thrusts.right > 0) thrusts.right--;

        this.rocket.rotation = this.rocket.rotation % (2 * Math.PI);

        this.rocket.thrustLeft.alpha = thrusts.left / 10;
        this.rocket.thrustRight.alpha = thrusts.right / 10;
        this.rocket.thrustNose.alpha = thrusts.nose / 10;
        this.rocket.thrust.alpha = thrusts.tail / 10;
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
        const t = this.target;

        // console.log(this.rocketActingForce);

        r.applyForce(this.rocketActingForce);

        this._handleNavigation(this.navigationOutput);
    }

    get navigationOutput() {

        const actingForceDirection = this.rocketActingForce;
        const actingForceValue = p2.vec2.len(actingForceDirection);
        const actingForceAngle = this._planetToObjectAngle([
            actingForceDirection[0] + this.rocket.position[0],
            actingForceDirection[1] + this.rocket.position[1]
        ]);

        let output = this.navigate({ // TODO catch user input errors
            rocket: {
                x: this.rocket.position[0],
                y: this.rocket.position[1],
                rotation: this.rocket.rotation,
                velocity: this.rocket.velocity,
                ignoreGravity: () => this.rocket.applyForce(p2.vec2.negate([], actingForceDirection)),
                body: this.rocket,
            },
            actingForce: actingForceValue > 10 ? actingForceAngle : null, // ignore weak forces
            target: {x: this.target.position[0], y: this.target.position[1]},
            rocketToTargetAngle: this._planetToObjectAngle(this.target.position),
        });

        // filter non allowed commands
        for (let key in output) {
            if (ALLOWED_COMMANDS.indexOf(key) === -1) delete output[key];
        }
        return output;
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

        let a = rocketAngle, b = planetAngle;

        if (a > 0) {
            if (b < 0 && b < a - Math.PI) return a - b - 2 * Math.PI;
            else if (b < 0 && b >= a - Math.PI) return a - b;
            else return a - b;
        } else if (a < 0) {
            if (b > 0 && b <= Math.PI + a) return a - b;
            else if (b > 0 && b > Math.PI + a) return 2 * Math.PI + a - b;
            else return a - b;
        } else return -b;
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
}