const ALLOWED_COMMANDS = ['x', 'y', 'rotation'];
const START_SCRIPT =
`// data = {rocket = {x, y, rotation}, target = {x, y}, gravity, flare, meteor}
let x = data.rocket.x - 3;
let y = data.rocket.y - 3;
let rotation = data.rocket.rotation - 0.006;

return {x, y, rotation};`;

class Game {

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.config = {rocket: {x: 0, y: 0, rotation: 0}};
        this.rocket = null;

        this.container = document.querySelector('#game-container');
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

        this.renderer = PIXI.autoDetectRenderer(1920, 1080, {
            backgroundColor: 0xEE3322,
        });

        this.container.querySelector("#canvas-container").appendChild(this.renderer.view);

        this.stage = new PIXI.Container();

        this.launchButton.addEventListener('click', this.hideSidePanel.bind(this, this.init.bind(this)));
        this.showPanelButton.addEventListener('click', this.showSidePanel.bind(this));

        PIXI.animate.load(lib.stage, this.onLoaded.bind(this)); // TODO loader
    }

    onLoaded(inst) {
        this.stage.addChild(inst);
        this.rocket = inst.rocket;

        // cache initial settings
        this.config.rocket.x = this.rocket.x;
        this.config.rocket.y = this.rocket.y;
        this.config.rocket.rotation = this.rocket.rotation;

        this.init();

        this.renderer.render(this.stage);
        //this.update(performance.now);

        // some how-to-animation
        setTimeout(() => { // do some button click animation instead
            this.hideSidePanel(() => {
                this.update(performance.now);
            });
        }, 1000);

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
        this.rocket.x = this.config.rocket.x;
        this.rocket.y = this.config.rocket.y;
        this.rocket.rotation = this.config.rocket.rotation;
        this.navigate = new Function('data', this.userCode.getValue()); // TODO catch user input errors
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

    /** define rocket movement */
    navigate(data) {
        // user input evaled here
    }
}