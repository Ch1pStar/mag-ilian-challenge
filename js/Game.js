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
    return Math.abs(velocity.x * velocity.y);
}

// ______________________________________________________

function navigate(data) {
    // data = rocket {x, y, rotation, velocity: {x, y}}, target {x, y}, forces {x, y}
    let forward = false, backward = false, left = false, right = false;

    let distance = getDistance(data.rocket, data.target);

    if (distance > 800) {
        let angleDeltaSin = Math.sin(data.rocketToTargetAngle);
        if (data.rocketToTargetAngle > 0.1) {
            right = true;
        } else if (data.rocketToTargetAngle < -0.1) {
            left = true;
        }

        if (!left && !right && getVelocity(data.rocket.velocity) < 4000) {
            forward = true;
        }
    } else {
        if (data.rocketToTargetAngle >= 0 && data.rocketToTargetAngle < 3) {
            left = true;
        } else if (data.rocketToTargetAngle <= 0 && data.rocketToTargetAngle > -3) {
            right = true;
        }
        if (!left && !right) {
            if (getVelocity(data.rocket.velocity) > 800) forward = true;
            else if (getVelocity(data.rocket.velocity) < 400) backward = true;
        }
        // SOME DISTANCE CALCULATIONS - forward if too fast after rotation, backaward if not moving towards target
    }

    return {forward, backward, left, right};
}


let src = navigate.toString().split('\n');
src.shift();
src.length -= 1;

const START_SCRIPT = src.join('\n');
const MAX_LANDING_VELOCITY = 800;
const TOLERABLE_ANGLE_DEVIATION = Math.PI / 12; // 15 degrees
const SIN_COS_TOLERATION = Math.sin( TOLERABLE_ANGLE_DEVIATION ); // 0.2588...
const HALF_PI = Math.PI / 2;
const THRUST_SPEED = 80;


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
        let speed = Math.abs(this.rocket.velocity[0] * this.rocket.velocity[1]);
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

        this._initPlanet(sun);
        this.target = this._initPlanet(moon);
    }

    /**
     * @param {Pixi.Sprite} planet
     * @returns {p2.Body}
     * @private
     */
    _initPlanet(planet) {
        const world = this.world;
        const body = new p2.Body({
            mass: 0,
            position: [0, 0],
            angle: 0,
            velocity: [0, 0],
            angularVelocity: 0
        });
        const pMask = planet.pMask;
        const pos = pMask.toGlobal(new PIXI.Point(0,0));
        const radius = pMask.width/2;

        const x = pos.x;
        const y = pos.y;
        const shape = new p2.Circle({radius});

        body.addShape(shape);
        body.position.set([x, y]);

        body.sprite = planet;
        world.addBody(body);
        this[planet.name] = body;
        this.planets.push(planet);

        body.position = new Proxy(body.position, {
            set: function(target, property, value, receiver) {
                target[property] = value;
                planet.x = target[0] - (pMask.x+pMask.width/2);
                planet.y = target[1] - (pMask.y+pMask.height/2);

                return true;
            }
        });

        pMask.visible = false;

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

        stage.addChild(this.rocket.overlay);

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

    }

    _handleNavigation(command) {
        if (command.forward) this.rocket._thrust(THRUST_SPEED);
        if (command.backward) this.rocket._thrust(-(THRUST_SPEED / 2));
        if (command.left) this.rocket.rotation = this.rocket.rotation - .15 ;
        if (command.right) this.rocket.rotation = this.rocket.rotation + .15;

        this.rocket.rotation = this.rocket.rotation % (2 * Math.PI);
    }

    _applyPlanetGravitation(planet) {
        const rocket = this.rocket;
        const diff = [];
        const f = [];

        p2.vec2.sub(diff, planet.position, rocket.position);
        p2.vec2.normalize(f, diff);

        rocket.applyForce(f);

        return rocket.velocity;
    }

    update(delta, tick) {
        const r = this.rocket;
        const t = this.target;

        this._handleNavigation(this.navigationOutput);

        // this._applyPlanetGravitation(this.sun);
        // this._applyPlanetGravitation(this.target);
    }

    get navigationOutput() {
        let output = this.navigate({ // TODO catch user input errors
            rocket: {
                x: this.rocket.position[0],
                y: this.rocket.position[1],
                rotation: this.rocket.rotation,
                velocity: {
                    x: this.rocket.velocity[0],
                    y: this.rocket.velocity[1]
                }
            },
            target: {x: this.target.position[0], y: this.target.position[1]},
            rocketToTargetAngle: this._planetToRocketAngle(),
            forces: {x: 0, y: 0}, // TODO
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
     * @returns {number} Relative angle between rocket oreitnation and target center.
     *  [-Pi; 0) target to left of rocket
     *  (0, Pi] target to right of rocket
     * @private
     */
    _planetToRocketAngle() {
        let planetAngle = Math.atan2( // target to rocket to abcissa
            this.rocket.position[1] - this.target.position[1],
            this.target.position[0] - this.rocket.position[0]
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