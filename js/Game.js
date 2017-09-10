const ALLOWED_COMMANDS = ['x', 'y', 'rotation'];

function navigate(data) {
    // data = {rocket = {x, y, rotation}, target = {x, y}, gravity, flare, meteor}
    let x = data.rocket.x// - 6;
    let y = data.rocket.y// - 3;
    let rotation = data.rocket.rotation// - 0.003;

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
        this.zoom = 100;
        this.rocket = null;
        this.planets = [];
        this.container = document.querySelector('#game-container');
        this.renderer = PIXI.autoDetectRenderer(1920, 1080, {
            backgroundColor: 0,
        });
        this.container.querySelector("#canvas-container").appendChild(this.renderer.view);
        this.stage = new PIXI.Container();

        let prevTime = performance.now;
        let time = 16.6;

        const update = this.update = (t) => {
            time = Math.min(t - prevTime, 17);
            prevTime = t;

            this._doUpdate(time);
            // this.world.step(time*.001);
            this.world.step(0.016);
            this.renderer.render(this.stage);

            requestAnimationFrame(update);
        };

        PIXI.animate.load(lib.stage, (inst) => this.onLoaded(inst)); // TODO loader
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
                this.update(performance.now);
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
    }

    _initPlanets() {
        const animateStage = this.animateStage;
        const sun = animateStage.sun;
        const moon = animateStage.target;

        this._initPlanet(sun);
        this._initPlanet(moon);
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

        body.addShape(shape);
        body.sprite = rocket;
        world.addBody(body);


        // const g = new PIXI.Graphics();
        // g.beginFill(0xff00ff);
        // g.drawRect(-rocket.width/2, -rocket.height/2, rocket.width, rocket.height);
        // g.endFill();
        // g.alpha = 0.1;
        // this.stage.addChild(g);


        body.position = new Proxy(body.position, {
            set: (target, property, value, receiver) => {
                target[property] = value;
                rocket.x = target[0];
                rocket.y = target[1];
                rocket.rotation = body.rotation + 1; // adjust for natural rocket texture rotation

                // g.position.x = target[0];
                // g.position.y = target[1];

                return true;
            }
        });

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

        rocket.velocity = p2.vec2.add(rocket.velocity, n, rocket.velocity);
    }

    _doUpdate(t) {

        let navigationCommands = this.navigate({ // TODO catch user input errors
            rocket: {x: this.rocket.x, y: this.rocket.y, rotation: this.rocket.rotation},
            target: {x: 0, y: 0},
            flare: 0, // some horizontal force
            gravity: 0, // some vertical force
            meteor: 0 // after how much time?
        });

        // filter non allowed commands
        for (let key in navigationCommands) {
            if (ALLOWED_COMMANDS.indexOf(key) === -1) delete navigationCommands[key];
        }

        Object.assign(this.rocket, navigationCommands);


        this._applyPlanetGravitation(this.sun);
        this._applyPlanetGravitation(this.target);
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