(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    lib.rocketThrust = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thrust"))
            .setTransform(0, 56, 1, 1, -1.571);
        this.addChild(instance1);
    });

    lib.rocket = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60
        });
        var instance2 = new Sprite(fromFrame("rocketBody"))
            .setTransform(-39, 35, 1, 1, -1.571);
        var instance1 = new lib.rocketThrust();
        this[instance1.name = "rocketThrust"] = instance1;
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 60, {
                "0": {
                    x: 19.25,
                    y: 7.2,
                    a: 0.43
                },
                "1": {
                    a: 0.45
                },
                "2": {
                    a: 0.47
                },
                "3": {
                    a: 0.49
                },
                "4": {
                    a: 0.51
                },
                "5": {
                    a: 0.53
                },
                "6": {
                    a: 0.55
                },
                "7": {
                    a: 0.57
                },
                "8": {
                    a: 0.59
                },
                "9": {
                    a: 0.61
                },
                "10": {
                    a: 0.63
                },
                "11": {
                    a: 0.64
                },
                "12": {
                    a: 0.66
                },
                "13": {
                    a: 0.68
                },
                "14": {
                    a: 0.7
                },
                "15": {
                    a: 0.73
                },
                "16": {
                    a: 0.75
                },
                "17": {
                    a: 0.77
                },
                "18": {
                    a: 0.79
                },
                "19": {
                    a: 0.8
                },
                "20": {
                    a: 0.82
                },
                "21": {
                    a: 0.84
                },
                "22": {
                    a: 0.86
                },
                "23": {
                    a: 0.88
                },
                "24": {
                    a: 0.9
                },
                "25": {
                    a: 0.92
                },
                "26": {
                    a: 0.94
                },
                "27": {
                    a: 0.96
                },
                "28": {
                    a: 0.98
                },
                "29": {
                    a: 1
                },
                "30": {
                    a: 0.97
                },
                "31": {
                    a: 0.95
                },
                "32": {
                    a: 0.92
                },
                "33": {
                    a: 0.9
                },
                "34": {
                    a: 0.87
                },
                "35": {
                    a: 0.85
                },
                "36": {
                    a: 0.82
                },
                "37": {
                    a: 0.79
                },
                "38": {
                    a: 0.77
                },
                "39": {
                    a: 0.74
                },
                "40": {
                    a: 0.72
                },
                "41": {
                    a: 0.69
                },
                "42": {
                    a: 0.67
                },
                "43": {
                    a: 0.64
                },
                "44": {
                    a: 0.62
                },
                "45": {
                    a: 0.59
                },
                "46": {
                    a: 0.56
                },
                "47": {
                    a: 0.54
                },
                "48": {
                    a: 0.51
                },
                "49": {
                    a: 0.49
                },
                "50": {
                    a: 0.46
                },
                "51": {
                    a: 0.44
                },
                "52": {
                    a: 0.41
                },
                "53": {
                    a: 0.38
                },
                "54": {
                    a: 0.36
                },
                "55": {
                    a: 0.33
                },
                "56": {
                    a: 0.31
                },
                "57": {
                    a: 0.28
                },
                "58": {
                    a: 0.26
                },
                "59": {
                    a: 0.23
                }
            });
    });

    lib.earth = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("earth"));
        this.addChild(instance1);
    });

    lib.pMask_moon = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("mars"));
        this.addChild(instance1);
    });

    lib.sun = Container.extend(function () {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("mars"))
            .setTransform(-125, -113);
        var instance1 = new lib.pMask_moon()
            .setTransform(-125, -113);
        this[instance1.name = "pMask"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.pMask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("phys_mask"));
        this.addChild(instance1);
    });

    lib.flares = Container.extend(function () {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("flare2"));
        var instance1 = new Sprite(fromFrame("flare1"))
            .setTransform(33, 162);
        this.addChild(instance2, instance1);
    });

    lib.Sun2 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60
        });
        var instance3 = new lib.flares();
        this[instance3.name = "flares"] = instance3;
        var instance2 = new Sprite(fromFrame("sun"));
        var instance1 = new lib.pMask()
            .setTransform(172, 170)
            .setAlpha(0.21);
        this[instance1.name = "pMask"] = instance1;
        this.addTimedChild(instance3, 0, 60, {
                "0": {
                    x: 404,
                    y: -69,
                    a: 0.21
                },
                "1": {
                    a: 0.24
                },
                "2": {
                    a: 0.27
                },
                "3": {
                    a: 0.29
                },
                "4": {
                    a: 0.32
                },
                "5": {
                    a: 0.35
                },
                "6": {
                    a: 0.38
                },
                "7": {
                    a: 0.4
                },
                "8": {
                    a: 0.43
                },
                "9": {
                    a: 0.46
                },
                "10": {
                    a: 0.48
                },
                "11": {
                    a: 0.51
                },
                "12": {
                    a: 0.54
                },
                "13": {
                    a: 0.57
                },
                "14": {
                    a: 0.59
                },
                "15": {
                    a: 0.62
                },
                "16": {
                    a: 0.64
                },
                "17": {
                    a: 0.67
                },
                "18": {
                    a: 0.7
                },
                "19": {
                    a: 0.73
                },
                "20": {
                    a: 0.75
                },
                "21": {
                    a: 0.78
                },
                "22": {
                    a: 0.81
                },
                "23": {
                    a: 0.84
                },
                "24": {
                    a: 0.86
                },
                "25": {
                    a: 0.89
                },
                "26": {
                    a: 0.92
                },
                "27": {
                    a: 0.95
                },
                "28": {
                    a: 0.97
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
            .addTimedChild(instance1);
    });

    lib.background = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("stars2x"))
            .setTransform(-960, -572, 0.651, 0.661);
        this.addChild(instance1);
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
        var instance4 = new lib.Sun2();
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
        "stars2x": "images/stars2x.png",
        "stage_atlas_1": "images/stage_atlas_1.json",
        "stage_atlas_2": "images/stage_atlas_2.json"
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