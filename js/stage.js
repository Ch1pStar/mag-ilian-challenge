(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.rocket = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("rocket"))
            .setTransform(0, 113, 1, 1, -1.571);
        this.addChild(instance1);
    });

    lib.earth = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("earth"));
        this.addChild(instance1);
    });

    lib.sun = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("mars"))
            .setTransform(-125, -113);
        this.addChild(instance1);
    });

    lib.Sun2 = Container.extend(function () {
        Container.call(this);
        var instance3 = new Sprite(fromFrame("flare2"))
            .setTransform(404, -69);
        var instance2 = new Sprite(fromFrame("flare1"))
            .setTransform(437, 93);
        var instance1 = new Sprite(fromFrame("sun"));
        this.addChild(instance3, instance2, instance1);
    });

    lib.background = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("stars2x"))
            .setTransform(-960, -572, 0.651, 0.661);
        this.addChild(instance1);
    });

    lib.stage = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60,
            loop: false
        });
        var instance5 = new lib.background()
            .setTransform(960, 570.5);
        var instance4 = new lib.Sun2()
            .setTransform(449, 452);
        this[instance4.name = "sun"] = instance4;
        var instance3 = new lib.sun()
            .setTransform(204, 192);
        this[instance3.name = "target"] = instance3;
        var instance2 = new lib.earth()
            .setTransform(1601, 767);
        this[instance2.name = "start"] = instance2;
        var instance1 = new lib.rocket()
            .setTransform(1580, 787);
        this[instance1.name = "rocket"] = instance1;
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.stage.assets = {
        "stars2x": "images/stars2x.png",
        "stage_atlas_1": "images/stage_atlas_1.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.stage,
        background: 0x0,
        width: 1920,
        height: 1080,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}