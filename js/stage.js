(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.rocket = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("rocket"));
        this.addChild(instance1);
    });

    lib.earth_phys_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("earth"));
        this.addChild(instance1);
    });

    lib.earth = Container.extend(function () {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("earth"));
        var instance1 = new lib.earth_phys_mask();
        this[instance1.name = "pMask"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.mars_phys_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("target"));
        this.addChild(instance1);
    });

    lib.target = Container.extend(function () {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("target"));
        var instance1 = new lib.mars_phys_mask();
        this[instance1.name = "pMask"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.sun_phys_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sun"));
        this.addChild(instance1);
    });

    lib.radiation = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sunPulse"));
        this.addChild(instance1);
    });

    lib.Sun2 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60
        });
        var instance3 = new lib.radiation();
        this[instance3.name = "radiation"] = instance3;
        var instance2 = new Sprite(fromFrame("sun"));
        var instance1 = new lib.sun_phys_mask();
        this[instance1.name = "pMask"] = instance1;
        this.addTimedChild(instance3, 0, 60, {
                "0": {
                    x: -17,
                    y: -17,
                    a: 0
                },
                "1": {
                    a: 0.04
                },
                "2": {
                    a: 0.07
                },
                "3": {
                    a: 0.1
                },
                "4": {
                    a: 0.14
                },
                "5": {
                    a: 0.17
                },
                "6": {
                    a: 0.21
                },
                "7": {
                    a: 0.24
                },
                "8": {
                    a: 0.28
                },
                "9": {
                    a: 0.31
                },
                "10": {
                    a: 0.34
                },
                "11": {
                    a: 0.38
                },
                "12": {
                    a: 0.41
                },
                "13": {
                    a: 0.45
                },
                "14": {
                    a: 0.48
                },
                "15": {
                    a: 0.52
                },
                "16": {
                    a: 0.55
                },
                "17": {
                    a: 0.59
                },
                "18": {
                    a: 0.62
                },
                "19": {
                    a: 0.66
                },
                "20": {
                    a: 0.69
                },
                "21": {
                    a: 0.72
                },
                "22": {
                    a: 0.76
                },
                "23": {
                    a: 0.79
                },
                "24": {
                    a: 0.83
                },
                "25": {
                    a: 0.86
                },
                "26": {
                    a: 0.9
                },
                "27": {
                    a: 0.93
                },
                "28": {
                    a: 0.96
                },
                "29": {
                    a: 1
                },
                "30": {
                    a: 0.96
                },
                "31": {
                    a: 0.93
                },
                "32": {
                    a: 0.9
                },
                "33": {
                    a: 0.87
                },
                "34": {
                    a: 0.83
                },
                "35": {
                    a: 0.8
                },
                "36": {
                    a: 0.77
                },
                "37": {
                    a: 0.73
                },
                "38": {
                    a: 0.7
                },
                "39": {
                    a: 0.67
                },
                "40": {
                    a: 0.63
                },
                "41": {
                    a: 0.6
                },
                "42": {
                    a: 0.57
                },
                "43": {
                    a: 0.54
                },
                "44": {
                    a: 0.5
                },
                "45": {
                    a: 0.46
                },
                "46": {
                    a: 0.43
                },
                "47": {
                    a: 0.4
                },
                "48": {
                    a: 0.37
                },
                "49": {
                    a: 0.33
                },
                "50": {
                    a: 0.3
                },
                "51": {
                    a: 0.27
                },
                "52": {
                    a: 0.23
                },
                "53": {
                    a: 0.2
                },
                "54": {
                    a: 0.17
                },
                "55": {
                    a: 0.13
                },
                "56": {
                    a: 0.1
                },
                "57": {
                    a: 0.07
                },
                "58": {
                    a: 0.04
                },
                "59": {
                    a: 0
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 1);
    });

    lib.background = Container.extend(function () {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("bg"))
            .setTransform(-960, -569, 0.769, 0.618);
        var instance1 = new Sprite(fromFrame("stars2x"))
            .setTransform(-964, -569, 0.651, 0.661);
        this.addChild(instance2, instance1);
    });

    lib.stage = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 35,
            framerate: 60,
            loop: false,
            labels: {
                start: 5
            }
        });
        var instance5 = new lib.background()
            .setTransform(960, 570.5);
        this[instance5.name = "background"] = instance5;
        var instance4 = new lib.Sun2();
        this[instance4.name = "sun"] = instance4;
        var instance3 = new lib.target();
        this[instance3.name = "target"] = instance3;
        var instance2 = new lib.earth()
            .setTransform(1601, 767);
        this[instance2.name = "start"] = instance2;
        var instance1 = new lib.rocket()
            .setTransform(1709.45, 609.7);
        this[instance1.name = "rocket"] = instance1;
        this.addTimedChild(instance5, 5, 30)
            .addTimedChild(instance4, 5, 30, {
                "5": {
                    x: 449,
                    y: 452,
                    a: 0
                },
                "6": {
                    a: 0.04
                },
                "7": {
                    a: 0.07
                },
                "8": {
                    a: 0.1
                },
                "9": {
                    a: 0.14
                },
                "10": {
                    a: 0.17
                },
                "11": {
                    a: 0.21
                },
                "12": {
                    a: 0.24
                },
                "13": {
                    a: 0.28
                },
                "14": {
                    a: 0.31
                },
                "15": {
                    a: 0.34
                },
                "16": {
                    a: 0.38
                },
                "17": {
                    a: 0.41
                },
                "18": {
                    a: 0.45
                },
                "19": {
                    a: 0.48
                },
                "20": {
                    a: 0.52
                },
                "21": {
                    a: 0.55
                },
                "22": {
                    a: 0.59
                },
                "23": {
                    a: 0.62
                },
                "24": {
                    a: 0.66
                },
                "25": {
                    a: 0.69
                },
                "26": {
                    a: 0.72
                },
                "27": {
                    a: 0.76
                },
                "28": {
                    a: 0.79
                },
                "29": {
                    a: 0.83
                },
                "30": {
                    a: 0.86
                },
                "31": {
                    a: 0.9
                },
                "32": {
                    a: 0.93
                },
                "33": {
                    a: 0.96
                },
                "34": {
                    a: 1
                }
            })
            .addTimedChild(instance3, 5, 30)
            .addTimedChild(instance2, 5, 30)
            .addTimedChild(instance1, 5, 30);
    });

    lib.stage.assets = {
        "rocket": "images/rocket.png",
        "earth": "images/earth.png",
        "target": "images/target.png",
        "sun": "images/sun.png",
        "sunPulse": "images/sunPulse.png",
        "stars2x": "images/stars2x.png",
        "bg": "images/bg.png"
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
        totalFrames: 35,
        library: lib
    };
}