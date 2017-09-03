const ALLOWED_COMMANDS = ['x', 'y', 'rotation'];

class Game {

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.config = {rocket: {x: 0, y: 0, rotation: 0}};
        this.rocket = null;
        this.navigateInput = null;

        this.container = document.querySelector('#game-container');
        this.navigateInput = this.container.querySelector('#navigate-input');
        this.launchButton = this.container.querySelector('#launch-button');

        this.renderer = PIXI.autoDetectRenderer(this.width, this.height, {
            backgroundColor: 0xEE3322,
        });

        this.container.insertBefore(this.renderer.view, this.container.firstChild);

        this.stage = new PIXI.Container();

        this.launchButton.addEventListener('click', this.init.bind(this));

        PIXI.animate.load(lib.stage, this.onLoaded.bind(this));
    }

    onLoaded(inst) {
        this.stage.addChild(inst);
        this.rocket = inst.rocket;

        // cache initial settings
        this.config.rocket.x = this.rocket.x;
        this.config.rocket.y = this.rocket.y;
        this.config.rocket.rotation = this.rocket.rotation;

        this.init();

        this.update(performance.now);
    }

    init() {
        this.rocket.x = this.config.rocket.x;
        this.rocket.y = this.config.rocket.y;
        this.rocket.rotation = this.config.rocket.rotation;
        this.navigate = new Function('data', this.navigateInput.value); // TODO catch user input errors

    }

    update(t) {

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

        this.renderer.render(this.stage);

        requestAnimationFrame(this.update.bind(this));
    }

    navigate(data) {
        // user input evaled here
    }
}