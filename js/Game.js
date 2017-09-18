const ALLOWED_COMMANDS = ['x', 'y', 'rotation']; // TODO - thrust

function navigate(data) {
    // data = {rocket = {x, y, rotation}, target = {x, y}, gravity, flare, meteor}
    let x = data.rocket.x;// - 6;
    let y = data.rocket.y;// - 3;
    let rotation = data.rocket.rotation;// - 0.003;

    return {x, y, rotation};
}

let src = navigate.toString().split('\n');
src.shift();
src.length -= 1;

const START_SCRIPT = src.join('\n');

class Game {

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.config = {rocket: {x: 0, y: 0, rotation: 0}};
        //this.zoom = 100;
        this.rocket = null;
        this.target = null;
        this.base = null; // used for checking landing direction
        this.planets = [];
        this.container = document.querySelector('#game-container');
        this.renderer = PIXI.autoDetectRenderer(1920, 1080, { backgroundColor: 0 });
        this.container.querySelector("#canvas-container").appendChild(this.renderer.view);
        this.stage = new PIXI.Container();

        this.prevTime = performance.now();

        this.tickBound = this.tick.bind(this);

        PIXI.animate.load(lib.stage, (inst) => this.onLoaded(inst)); // TODO loader

        const TOLERABLE_ANGLE_DEVIATION = Math.PI / 12; // 15 degrees
        const SIN_COS_TOLERATION = Math.sin( TOLERABLE_ANGLE_DEVIATION ); // 0.2588...
        const HALF_PI = Math.PI / 2;

        document.addEventListener('mousemove', (e) => {
           console.log("move to", e.clientX, e.clientY);
            this.rocket.position[0] = e.clientX;
            this.rocket.position[1] = e.clientY;
            var angleRadians = Math.atan2(this.rocket.position[1] - this.target.position[1], this.rocket.position[0] - this.target.position[0]); // rocket entry angle
            angleRadians += HALF_PI; // abcissa to ordinate based
            console.log("Angle = ", angleRadians);
            if (Math.abs( Math.sin(angleRadians) - Math.sin(this.rocket.rotation)) < SIN_COS_TOLERATION) { // OR tocket.angle?
                console.log("SIN OK ");
                if (Math.abs( Math.cos(angleRadians) - Math.cos(this.rocket.rotation)) < SIN_COS_TOLERATION) {
                    console.log("COS OK ")
                    alert(" ANGLE IS GOOD")
                }
            }
        });
    }

    tick() {
        let now = performance.now();
        let delta = Math.min(now - this.prevTime, 17); // cap at 17 mls per frame
        this.prevTime = now;

        this.update(delta);
        // this.world.step(time*.001);
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

        //setTimeout(this.onWin.bind(this), 3000); // testing
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

    //onWin() {
    //    console.info("Mission complete!");
    //    document.querySelector("#win-prompt").style.display = "block"
    //    document.getElementsByName("submission")[0].value = this.userCode.value;
    //}

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

        this.world = world;

        world.on('impact', (evt) => {
            //console.log(this.base);
            //console.log(this.target);
            if (evt.bodyA === this.target || evt.bodyB === this.target) {
                console.log('CHECK LANDING 1');
                if (evt.bodyB === this.base || evt.bodyA === this.base) {
                    console.log('CHECK LANDING 2');
                    this._checkLanding();
                    alert("DD")
                }
            }
            //if ((evt.bodyA === this.base && evt.bodyB === this.target) ||
            //    (evt.bodyB === this.base && evt.bodyA === this.target))
            //{
            //    console.log('CHECK LANDING');
            //    this._checkLanding();
            //}

        })
    }

    _checkLanding() {
        let speed = Math.abs(this.rocket.velocity[0] * this.rocket.velocity[1]);
        if (speed > 10) console.log(" > > > > > > > > > TOO FAST");

        //var p1 = {
        //    x: 20,
        //    y: 20
        //};
        //
        //var p2 = {
        //    x: 40,
        //    y: 40
        //};

// angle in radians
        var angleRadians = Math.atan2(this.rocket.position[1] - this.target.position[1], this.rocket.position[0] - this.target.position[0]);
        console.log("Angle", angleRadians);
        //console.log(this.rocket.velocity);
        //console.log(this.rocket.rotation);
        //console.log(this.rocket.position[0], this.rocket.position[1]);
        //console.log(this.target.position[0], this.target.position[1]);
    }

    _initPlanets() {
        const animateStage = this.animateStage;
        const sun = animateStage.sun;
        const moon = animateStage.target;

        // this._initPlanet(sun);
        this.target = this._initPlanet(moon);
    }

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
        body.position.set([1000, 450]);

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
        const rocket = stage.rocket;
        const body = new p2.Body({
            mass: 1,
            position: [rocket.x-rocket.width, rocket.y-rocket.height],
            angle: 0,
            velocity: [0, 0],
            angularVelocity: 0
        });
        const shape = new p2.Box({
            width: rocket.width,
            height: rocket.height,
        });

        //const base = new p2.Line({length: rocket.width / 4});
        //body.addShape(base, [-base.length/2, shape.height/2]);
        // const base = new p2.Box({
        //     width: rocket.width,
        //     height: rocket.height,
        // });
        // body.addShape(base); // TODO DOESN'T WORK - BAD COLLISION
         body.addShape(shape);
        body.sprite = rocket;
        world.addBody(body);
        //this.base = body;

        //const g = new PIXI.Graphics();
        //g.beginFill(0xff00ff);
        //g.drawRect(-rocket.width/2, -rocket.height/2, rocket.width, rocket.height);
        //g.endFill();
        //g.alpha = 0.6;
        //this.stage.addChild(g);

        //const g2 = new PIXI.Graphics();
        //g2.lineStyle(2, 0xff00ff);
        //g2.moveTo(-base.length/2, shape.height/2);
        //g2.lineTo(base.length, shape.height/2);

        //this.stage.addChild(g2);


        body.position = new Proxy(body.position, {
            set: (target, property, value, receiver) => {
                target[property] = value;
                rocket.x = target[0];
                rocket.y = target[1];
                rocket.rotation = body.rotation + 1; // adjust for natural rocket texture rotation

                //g.position.x = target[0];
                //g.position.y = target[1];

                //g2.position.x = target[0];
                //g2.position.y = target[1];

                return true;
            }
        });

 
        // document.addEventListener('mousemove', (e) => {
        //     body.position = [e.clientX, e.clientY];
        // });

        this.rocket = body;

        // cache initial settings
        this.config.rocket.x = rocket.x;
        this.config.rocket.y = rocket.y;
        this.config.rocket.rotation = rocket.rotation;
    }

    _applyPlanetGravitation(planet) {
        const rocket = this.rocket;
        const diff = [];
        const n = [];

        p2.vec2.sub(diff, planet.position, rocket.position);
        p2.vec2.normalize(n, diff);

        rocket.velocity = p2.vec2.add(rocket.velocity, n, rocket.velocity); //todo move in update
    }

    update(delta) {

        let rocketThrust = this.navigationOutput
        Object.assign(this.rocket, rocketThrust); // TODO update rocket dynamics

        // this._applyPlanetGravitation(this.sun);
        //this._applyPlanetGravitation(this.target);
    }

    get navigationOutput() {
        let output = this.navigate({ // TODO catch user input errors
            rocket: {x: this.rocket.x, y: this.rocket.y, rotation: this.rocket.rotation},
            target: {x: 0, y: 0},
            flare: 0, // some horizontal force
            gravity: 0, // some vertical force
            meteor: 0 // after how much time?
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