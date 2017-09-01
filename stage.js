(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.son = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.stage[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[0]);
        this.addChild(instance2, instance1);
    });

    lib.Racket = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[2]);
        this.addChild(instance1);
    });

    lib.stage = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60,
            loop: false
        });
        var instance3 = new Graphics()
            .drawCommands(shapes.stage[3]);
        var instance2 = new lib.Racket()
            .setTransform(813.85, 568.4);
        this[instance2.name = "racket"] = instance2;
        var instance1 = new lib.son()
            .setTransform(60.2, 53.5);
        this[instance1.name = "son"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.stage.assets = {
        "stage": "images/stage.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.stage,
        background: 0xffffff,
        width: 1018,
        height: 800,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}