(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.fire = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("fire"));
        this.addChild(instance1);
    });

    lib.thrust = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 71
        });
        var instance1 = new lib.fire();
        this.addTimedChild(instance1, 0, 71, {
            "0": {
                x: 3.15,
                y: 0,
                sx: 1,
                sy: 1,
                a: 1
            },
            "1": {
                x: 2.775,
                y: 1.05,
                sx: 1.024,
                sy: 1.024
            },
            "2": {
                x: 2.401,
                y: 2.15,
                sx: 1.048,
                sy: 1.048
            },
            "3": {
                x: 1.976,
                y: 3.2,
                sx: 1.072,
                sy: 1.072
            },
            "4": {
                x: 1.601,
                y: 4.3,
                sx: 1.096,
                sy: 1.096
            },
            "5": {
                x: 1.226,
                y: 5.35,
                sx: 1.119,
                sy: 1.119
            },
            "6": {
                x: 0.802,
                y: 6.4,
                sx: 1.143,
                sy: 1.143
            },
            "7": {
                x: 0.427,
                y: 7.5,
                sx: 1.167,
                sy: 1.167
            },
            "8": {
                x: 0,
                y: 8.5,
                sx: 1.191,
                sy: 1.191
            },
            "9": {
                x: 0.35,
                y: 7.663,
                sx: 1.172,
                sy: 1.172
            },
            "10": {
                x: 0.65,
                y: 6.827,
                sx: 1.153,
                sy: 1.153
            },
            "11": {
                x: 0.95,
                y: 5.991,
                sx: 1.134,
                sy: 1.134
            },
            "12": {
                x: 1.3,
                y: 5.104,
                sx: 1.115,
                sy: 1.115
            },
            "13": {
                x: 1.6,
                y: 4.268,
                sx: 1.096,
                sy: 1.096
            },
            "14": {
                x: 1.9,
                y: 3.431,
                sx: 1.076,
                sy: 1.076
            },
            "15": {
                x: 2.25,
                y: 2.595,
                sx: 1.057,
                sy: 1.057
            },
            "16": {
                x: 2.55,
                y: 1.709,
                sx: 1.038,
                sy: 1.038
            },
            "17": {
                x: 2.85,
                y: 0.872,
                sx: 1.019,
                sy: 1.019
            },
            "18": {
                x: 3.15,
                y: 0,
                sx: 1,
                sy: 1
            },
            "19": {
                x: 2.86,
                y: 0.9,
                sx: 1.019,
                sy: 1.019
            },
            "20": {
                x: 2.52,
                y: 1.7,
                sx: 1.038,
                sy: 1.038
            },
            "21": {
                x: 2.231,
                y: 2.6,
                sx: 1.057,
                sy: 1.057
            },
            "22": {
                x: 1.891,
                y: 3.45,
                sx: 1.076,
                sy: 1.076
            },
            "23": {
                x: 1.601,
                y: 4.3,
                sx: 1.096,
                sy: 1.096
            },
            "24": {
                x: 1.261,
                y: 5.15,
                sx: 1.115,
                sy: 1.115
            },
            "25": {
                x: 0.972,
                y: 6,
                sx: 1.134,
                sy: 1.134
            },
            "26": {
                x: 0.632,
                y: 6.85,
                sx: 1.153,
                sy: 1.153
            },
            "27": {
                x: 0.342,
                y: 7.7,
                sx: 1.172,
                sy: 1.172
            },
            "28": {
                x: 0,
                y: 8.5,
                sx: 1.191,
                sy: 1.191
            },
            "29": {
                x: 1.05,
                y: 8.613,
                sx: 1.123,
                sy: 1.123,
                a: 0.9
            },
            "30": {
                x: 2.1,
                y: 8.726,
                sx: 1.055,
                sy: 1.055,
                a: 0.8
            },
            "31": {
                x: 3.15,
                y: 8.789,
                sx: 0.986,
                sy: 0.986,
                a: 0.7
            },
            "32": {
                x: 4.2,
                y: 8.902,
                sx: 0.918,
                sy: 0.918,
                a: 0.6
            },
            "33": {
                x: 5.25,
                y: 9.015,
                sx: 0.85,
                sy: 0.85,
                a: 0.5
            },
            "34": {
                x: 6.3,
                y: 9.128,
                sx: 0.782,
                sy: 0.782,
                a: 0.4
            },
            "35": {
                x: 7.35,
                y: 9.242,
                sx: 0.714,
                sy: 0.714,
                a: 0.3
            },
            "36": {
                x: 8.4,
                y: 9.304,
                sx: 0.645,
                sy: 0.645,
                a: 0.2
            },
            "37": {
                x: 9.45,
                y: 9.418,
                sx: 0.577,
                sy: 0.577,
                a: 0.1
            },
            "38": {
                x: 10.45,
                y: 9.5,
                sx: 0.509,
                sy: 0.509,
                a: 0
            }
        });
    });

    lib.ring = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[12]);
        this.addChild(instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance2 = new lib.ring();
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[0]);
        var instance3 = new Graphics()
            .drawCommands(shapes.stage[1]);
        var instance4 = new Graphics()
            .drawCommands(shapes.stage[2]);
        var instance5 = new Graphics()
            .drawCommands(shapes.stage[3]);
        var instance6 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance7 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance8 = new Graphics()
            .drawCommands(shapes.stage[6]);
        var instance9 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance10 = new Graphics()
            .drawCommands(shapes.stage[8]);
        var instance11 = new Graphics()
            .drawCommands(shapes.stage[9]);
        var instance12 = new Graphics()
            .drawCommands(shapes.stage[10]);
        var instance13 = new Graphics()
            .drawCommands(shapes.stage[11]);
        this.addTimedChild(instance2, 0, 23, {
                "0": {
                    x: 2.05,
                    y: 1.55,
                    sx: 0.56,
                    sy: 0.56,
                    a: 1
                },
                "1": {
                    x: 1.601,
                    y: 1.114,
                    sx: 0.601,
                    sy: 0.601
                },
                "2": {
                    x: 0.155,
                    y: -0.342,
                    sx: 0.725,
                    sy: 0.725,
                    a: 0.99
                },
                "3": {
                    x: -2.287,
                    y: -2.77,
                    sx: 0.932,
                    sy: 0.932,
                    a: 0.97
                },
                "4": {
                    x: -5.677,
                    y: -6.168,
                    sx: 1.222,
                    sy: 1.222,
                    a: 0.95
                },
                "5": {
                    x: -10.014,
                    y: -10.488,
                    sx: 1.594,
                    sy: 1.594,
                    a: 0.92
                },
                "6": {
                    x: -15.249,
                    y: -15.778,
                    sx: 2.049,
                    sy: 2.049,
                    a: 0.88
                },
                "7": {
                    x: -21.53,
                    y: -22.04,
                    sx: 2.586,
                    sy: 2.586,
                    a: 0.84
                },
                "8": {
                    x: -28.809,
                    y: -29.272,
                    sx: 3.206,
                    sy: 3.206,
                    a: 0.79
                },
                "9": {
                    x: -37.034,
                    y: -37.476,
                    sx: 3.909,
                    sy: 3.909,
                    a: 0.73
                },
                "10": {
                    x: -46.157,
                    y: -46.6,
                    sx: 4.695,
                    sy: 4.695,
                    a: 0.67
                },
                "11": {
                    x: -56.326,
                    y: -56.746,
                    sx: 5.564,
                    sy: 5.564,
                    a: 0.61
                },
                "12": {
                    x: -67.444,
                    y: -67.862,
                    sx: 6.515,
                    sy: 6.515,
                    a: 0.53
                },
                "13": {
                    x: -79.458,
                    y: -79.9,
                    sx: 7.549,
                    sy: 7.549,
                    a: 0.45
                },
                "14": {
                    x: -92.65,
                    y: -93.15,
                    sx: 8.665,
                    sy: 8.665,
                    a: 0.36
                },
                "15": {
                    x: -103.236,
                    y: -103.789,
                    sx: 9.576,
                    sy: 9.576,
                    a: 0.27
                },
                "16": {
                    x: -112.475,
                    y: -113.023,
                    sx: 10.365,
                    sy: 10.365,
                    a: 0.2
                },
                "17": {
                    x: -120.316,
                    y: -120.902,
                    sx: 11.033,
                    sy: 11.033,
                    a: 0.14
                },
                "18": {
                    x: -126.709,
                    y: -127.327,
                    sx: 11.579,
                    sy: 11.579,
                    a: 0.09
                },
                "19": {
                    x: -131.752,
                    y: -132.345,
                    sx: 12.004,
                    sy: 12.004,
                    a: 0.05
                },
                "20": {
                    x: -135.298,
                    y: -135.858,
                    sx: 12.308,
                    sy: 12.308,
                    a: 0.02
                },
                "21": {
                    x: -137.395,
                    y: -138.016,
                    sx: 12.49,
                    sy: 12.49,
                    a: 0
                },
                "22": {
                    x: -138.25,
                    y: -138.75,
                    sx: 12.551,
                    sy: 12.551
                }
            })
            .addTimedChild(instance1, 0, 2)
            .addTimedChild(instance3, 2, 2)
            .addTimedChild(instance4, 4, 2)
            .addTimedChild(instance5, 6, 2)
            .addTimedChild(instance6, 8, 2)
            .addTimedChild(instance7, 10, 2)
            .addTimedChild(instance8, 12, 2)
            .addTimedChild(instance9, 14, 2)
            .addTimedChild(instance10, 16, 2)
            .addTimedChild(instance11, 18, 2)
            .addTimedChild(instance12, 20, 2)
            .addTimedChild(instance13, 22, 1);
    });

    lib.rtop = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("rocketTop"));
        this.addChild(instance1);
    });

    lib.lfang = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("rightFang"));
        this.addChild(instance1);
    });

    lib.rfang = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("leftFang"));
        this.addChild(instance1);
    });

    lib.rbody = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("rocketBody"));
        this.addChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 40, loop: false });
        var instance4 = new lib.rbody();
        var instance3 = new lib.rfang();
        var instance2 = new lib.lfang();
        var instance1 = new lib.rtop();
        this.addTimedChild(instance4, 0, 40, {
                "0": {
                    x: 6.85,
                    y: 14.65,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0,
                    a: 1
                },
                "15": {
                    x: 11.187,
                    y: 22.905,
                    r: 0.14,
                    a: 0.94
                },
                "16": {
                    x: 15.652,
                    y: 31.548,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.276,
                    a: 0.88
                },
                "17": {
                    x: 20.139,
                    y: 40.446,
                    r: 0.407,
                    a: 0.83
                },
                "18": {
                    x: 24.488,
                    y: 49.673,
                    r: 0.534,
                    a: 0.77
                },
                "19": {
                    x: 28.929,
                    y: 59.097,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.66,
                    a: 0.72
                },
                "20": {
                    x: 32.993,
                    y: 68.714,
                    r: 0.779,
                    a: 0.67
                },
                "21": {
                    x: 36.896,
                    y: 78.4,
                    r: 0.893,
                    a: 0.62
                },
                "22": {
                    x: 40.555,
                    y: 88.207,
                    sx: 0.999,
                    sy: 0.999,
                    r: 1.006,
                    a: 0.57
                },
                "23": {
                    x: 43.821,
                    y: 97.92,
                    r: 1.111,
                    a: 0.53
                },
                "24": {
                    x: 46.748,
                    y: 107.593,
                    r: 1.212,
                    a: 0.48
                },
                "25": {
                    x: 49.335,
                    y: 117.052,
                    r: 1.309,
                    a: 0.45
                },
                "26": {
                    x: 51.697,
                    y: 126.48,
                    r: 1.404,
                    a: 0.41
                },
                "27": {
                    x: 53.69,
                    y: 135.482,
                    sx: 1,
                    sy: 1,
                    r: 1.492,
                    a: 0.37
                },
                "28": {
                    x: 55.293,
                    y: 144.134,
                    kx: 4.711,
                    ky: 1.572,
                    r: 0,
                    a: 0.33
                },
                "29": {
                    x: 56.735,
                    y: 152.706,
                    kx: 4.629,
                    ky: 1.654,
                    a: 0.3
                },
                "30": {
                    x: 57.863,
                    y: 160.759,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 4.554,
                    ky: 1.729,
                    a: 0.27
                },
                "31": {
                    x: 58.831,
                    y: 168.554,
                    kx: 4.481,
                    ky: 1.802,
                    a: 0.23
                },
                "32": {
                    x: 59.501,
                    y: 175.803,
                    kx: 4.415,
                    ky: 1.868,
                    a: 0.21
                },
                "33": {
                    x: 59.995,
                    y: 182.664,
                    kx: 4.353,
                    ky: 1.93,
                    a: 0.18
                },
                "34": {
                    x: 60.4,
                    y: 189.137,
                    kx: 4.293,
                    ky: 1.99,
                    a: 0.16
                },
                "35": {
                    x: 60.609,
                    y: 195.082,
                    kx: 4.24,
                    ky: 2.043,
                    a: 0.13
                },
                "36": {
                    x: 60.757,
                    y: 200.499,
                    kx: 4.191,
                    ky: 2.092,
                    a: 0.11
                },
                "37": {
                    x: 60.791,
                    y: 205.537,
                    sx: 0.998,
                    sy: 0.998,
                    kx: 4.144,
                    ky: 2.139,
                    a: 0.09
                },
                "38": {
                    x: 60.789,
                    y: 210,
                    kx: 4.104,
                    ky: 2.179,
                    a: 0.07
                },
                "39": {
                    x: 60.708,
                    y: 214.186,
                    kx: 4.065,
                    ky: 2.218,
                    a: 0.06
                }
            })
            .addTimedChild(instance3, 0, 40, {
                "0": {
                    x: 0,
                    y: 53.8,
                    sx: 1,
                    sy: 1,
                    r: 0,
                    a: 1
                },
                "15": {
                    x: -6.351,
                    y: 57.105,
                    r: 0.092,
                    a: 0.94
                },
                "16": {
                    x: -12.422,
                    y: 60.313,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.184,
                    a: 0.88
                },
                "17": {
                    x: -18.305,
                    y: 63.588,
                    r: 0.271,
                    a: 0.83
                },
                "18": {
                    x: -23.925,
                    y: 66.893,
                    r: 0.355,
                    a: 0.77
                },
                "19": {
                    x: -29.331,
                    y: 70.214,
                    r: 0.438,
                    a: 0.72
                },
                "20": {
                    x: -34.547,
                    y: 73.371,
                    r: 0.52,
                    a: 0.67
                },
                "21": {
                    x: -39.611,
                    y: 76.636,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.595,
                    a: 0.62
                },
                "22": {
                    x: -44.425,
                    y: 79.776,
                    r: 0.669,
                    a: 0.57
                },
                "23": {
                    x: -49.099,
                    y: 82.932,
                    r: 0.74,
                    a: 0.53
                },
                "24": {
                    x: -53.618,
                    y: 86.021,
                    r: 0.809,
                    a: 0.48
                },
                "25": {
                    x: -57.95,
                    y: 88.982,
                    r: 0.871,
                    a: 0.45
                },
                "26": {
                    x: -62.055,
                    y: 91.949,
                    r: 0.936,
                    a: 0.41
                },
                "27": {
                    x: -66.017,
                    y: 94.763,
                    r: 0.994,
                    a: 0.37
                },
                "28": {
                    x: -69.811,
                    y: 97.464,
                    sx: 0.999,
                    sy: 0.999,
                    r: 1.05,
                    a: 0.33
                },
                "29": {
                    x: -73.51,
                    y: 100.121,
                    r: 1.103,
                    a: 0.3
                },
                "30": {
                    x: -76.91,
                    y: 102.697,
                    r: 1.155,
                    a: 0.27
                },
                "31": {
                    x: -80.2,
                    y: 105.065,
                    r: 1.203,
                    a: 0.23
                },
                "32": {
                    x: -83.306,
                    y: 107.342,
                    r: 1.247,
                    a: 0.21
                },
                "33": {
                    x: -86.204,
                    y: 109.524,
                    r: 1.29,
                    a: 0.18
                },
                "34": {
                    x: -88.954,
                    y: 111.537,
                    r: 1.33,
                    a: 0.16
                },
                "35": {
                    x: -91.479,
                    y: 113.441,
                    r: 1.365,
                    a: 0.13
                },
                "36": {
                    x: -93.902,
                    y: 115.192,
                    r: 1.396,
                    a: 0.11
                },
                "37": {
                    x: -96.067,
                    y: 116.773,
                    sx: 1,
                    sy: 1,
                    r: 1.427,
                    a: 0.09
                },
                "38": {
                    x: -97.979,
                    y: 118.286,
                    r: 1.456,
                    a: 0.07
                },
                "39": {
                    x: -99.757,
                    y: 119.582,
                    r: 1.479,
                    a: 0.06
                }
            })
            .addTimedChild(instance2, 0, 40, {
                "0": {
                    x: 38.35,
                    y: 53.8,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0,
                    a: 1
                },
                "15": {
                    x: 49.416,
                    y: 57.485,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.184,
                    a: 0.94
                },
                "16": {
                    x: 60.384,
                    y: 61.418,
                    r: 0.368,
                    a: 0.88
                },
                "17": {
                    x: 70.98,
                    y: 65.681,
                    r: 0.543,
                    a: 0.83
                },
                "18": {
                    x: 81.232,
                    y: 70.269,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.714,
                    a: 0.77
                },
                "19": {
                    x: 91.066,
                    y: 75.039,
                    r: 0.88,
                    a: 0.72
                },
                "20": {
                    x: 100.449,
                    y: 80.046,
                    sx: 0.999,
                    sy: 0.999,
                    r: 1.041,
                    a: 0.67
                },
                "21": {
                    x: 109.32,
                    y: 85.089,
                    r: 1.194,
                    a: 0.62
                },
                "22": {
                    x: 117.625,
                    y: 90.191,
                    r: 1.339,
                    a: 0.57
                },
                "23": {
                    x: 125.402,
                    y: 95.377,
                    sx: 1,
                    sy: 1,
                    r: 1.483,
                    a: 0.53
                },
                "24": {
                    x: 132.627,
                    y: 100.396,
                    kx: 4.668,
                    ky: 1.615,
                    r: 0,
                    a: 0.48
                },
                "25": {
                    x: 139.332,
                    y: 105.299,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 4.541,
                    ky: 1.742,
                    a: 0.45
                },
                "26": {
                    x: 145.531,
                    y: 110.128,
                    kx: 4.415,
                    ky: 1.868,
                    a: 0.41
                },
                "27": {
                    x: 151.274,
                    y: 114.746,
                    kx: 4.297,
                    ky: 1.986,
                    a: 0.37
                },
                "28": {
                    x: 156.493,
                    y: 119.238,
                    kx: 4.183,
                    ky: 2.1,
                    a: 0.33
                },
                "29": {
                    x: 161.342,
                    y: 123.334,
                    sx: 0.998,
                    sy: 0.998,
                    kx: 4.078,
                    ky: 2.205,
                    a: 0.3
                },
                "30": {
                    x: 165.734,
                    y: 127.3,
                    kx: 3.977,
                    ky: 2.306,
                    a: 0.27
                },
                "31": {
                    x: 169.77,
                    y: 131.048,
                    kx: 3.881,
                    ky: 2.402,
                    a: 0.23
                },
                "32": {
                    x: 173.404,
                    y: 134.522,
                    kx: 3.789,
                    ky: 2.494,
                    a: 0.21
                },
                "33": {
                    x: 176.71,
                    y: 137.697,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 3.706,
                    ky: 2.577,
                    a: 0.18
                },
                "34": {
                    x: 179.745,
                    y: 140.623,
                    kx: 3.627,
                    ky: 2.656,
                    a: 0.16
                },
                "35": {
                    x: 182.523,
                    y: 143.236,
                    kx: 3.557,
                    ky: 2.726,
                    a: 0.13
                },
                "36": {
                    x: 184.955,
                    y: 145.622,
                    kx: 3.491,
                    ky: 2.792,
                    a: 0.11
                },
                "37": {
                    x: 187.18,
                    y: 147.765,
                    kx: 3.43,
                    ky: 2.853,
                    a: 0.09
                },
                "38": {
                    x: 189.093,
                    y: 149.742,
                    kx: 3.374,
                    ky: 2.91,
                    a: 0.07
                },
                "39": {
                    x: 190.895,
                    y: 151.388,
                    kx: 3.325,
                    ky: 2.958,
                    a: 0.06
                }
            })
            .addTimedChild(instance1, 0, 40, {
                "0": {
                    x: 11.85,
                    y: 0,
                    sx: 1,
                    sy: 1,
                    r: 0,
                    a: 1
                },
                "15": {
                    x: 10.929,
                    y: -3.252,
                    r: -0.14,
                    a: 0.94
                },
                "16": {
                    x: 10.293,
                    y: -6.423,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.276,
                    a: 0.88
                },
                "17": {
                    x: 9.919,
                    y: -9.436,
                    r: -0.407,
                    a: 0.83
                },
                "18": {
                    x: 9.884,
                    y: -12.225,
                    r: -0.534,
                    a: 0.77
                },
                "19": {
                    x: 9.994,
                    y: -14.907,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.66,
                    a: 0.72
                },
                "20": {
                    x: 10.37,
                    y: -17.611,
                    r: -0.779,
                    a: 0.67
                },
                "21": {
                    x: 10.869,
                    y: -20.216,
                    r: -0.893,
                    a: 0.62
                },
                "22": {
                    x: 11.633,
                    y: -22.795,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.006,
                    a: 0.57
                },
                "23": {
                    x: 12.448,
                    y: -25.357,
                    r: -1.111,
                    a: 0.53
                },
                "24": {
                    x: 13.454,
                    y: -27.984,
                    r: -1.212,
                    a: 0.48
                },
                "25": {
                    x: 14.417,
                    y: -30.586,
                    r: -1.309,
                    a: 0.45
                },
                "26": {
                    x: 15.514,
                    y: -33.029,
                    r: -1.404,
                    a: 0.41
                },
                "27": {
                    x: 16.584,
                    y: -35.61,
                    sx: 1,
                    sy: 1,
                    r: -1.492,
                    a: 0.37
                },
                "28": {
                    x: 17.587,
                    y: -38.1,
                    r: -1.572,
                    a: 0.33
                },
                "29": {
                    x: 18.715,
                    y: -40.556,
                    r: -1.654,
                    a: 0.3
                },
                "30": {
                    x: 19.788,
                    y: -42.996,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.729,
                    a: 0.27
                },
                "31": {
                    x: 20.833,
                    y: -45.325,
                    r: -1.802,
                    a: 0.23
                },
                "32": {
                    x: 21.73,
                    y: -47.619,
                    r: -1.868,
                    a: 0.21
                },
                "33": {
                    x: 22.69,
                    y: -49.782,
                    r: -1.93,
                    a: 0.18
                },
                "34": {
                    x: 23.628,
                    y: -51.858,
                    r: -1.99,
                    a: 0.16
                },
                "35": {
                    x: 24.363,
                    y: -53.837,
                    r: -2.043,
                    a: 0.13
                },
                "36": {
                    x: 25.109,
                    y: -55.712,
                    r: -2.092,
                    a: 0.11
                },
                "37": {
                    x: 25.829,
                    y: -57.47,
                    sx: 0.998,
                    sy: 0.998,
                    r: -2.139,
                    a: 0.09
                },
                "38": {
                    x: 26.437,
                    y: -59.058,
                    r: -2.179,
                    a: 0.07
                },
                "39": {
                    x: 27.016,
                    y: -60.488,
                    r: -2.218,
                    a: 0.06
                }
            });
    });

    lib.rocket = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 41,
            labels: {
                start: 0,
                explode: 14,
                explode_end: 39
            }
        });
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        var instance2 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 40, {
                "0": {
                    x: 0.45,
                    y: 1.1,
                    sx: 1.835,
                    sy: 1.835
                },
                "14": {
                    y: -0.4
                }
            })
            .addTimedChild(instance2, 14, 26, {
                "14": {
                    x: 26.45,
                    y: 64.4,
                    sx: 2.001,
                    sy: 2.001
                }
            })
            .addAction(function () {
                this.gotoAndPlay('start');
            }, 13)
            .addAction(function () {
                this.gotoAndStop('explode_end');
            }, 40);
    });

    lib.earth_g_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("earth_gravity_mask"));
        this.addChild(instance1);
    });

    lib.earth_phys_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("earth"));
        this.addChild(instance1);
    });

    lib.earth = Container.extend(function () {
        Container.call(this);
        var instance3 = new Sprite(fromFrame("earth"));
        var instance2 = new lib.earth_phys_mask();
        this[instance2.name = "pMask"] = instance2;
        var instance1 = new lib.earth_g_mask()
            .setTransform(-148, -156);
        this[instance1.name = "gMask"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.mars_g_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("mars_gravity_mask"));
        this.addChild(instance1);
    });

    lib.mars_phys_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("target"));
        this.addChild(instance1);
    });

    lib.target = Container.extend(function () {
        Container.call(this);
        var instance3 = new Sprite(fromFrame("target"));
        var instance2 = new lib.mars_phys_mask();
        this[instance2.name = "pMask"] = instance2;
        var instance1 = new lib.mars_g_mask()
            .setTransform(-166, -179.25);
        this[instance1.name = "gMask"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.sun_g_mask = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sun_gravity_mask"));
        this.addChild(instance1);
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
        var instance4 = new lib.radiation();
        this[instance4.name = "radiation"] = instance4;
        var instance3 = new Sprite(fromFrame("sun"));
        var instance2 = new lib.sun_phys_mask();
        this[instance2.name = "pMask"] = instance2;
        var instance1 = new lib.sun_g_mask();
        this[instance1.name = "gMask"] = instance1;
        this.addTimedChild(instance4, 0, 60, {
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
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 60, {
                "0": {
                    x: -584.8,
                    y: -580.8,
                    sx: 1.961,
                    sy: 1.961
                },
                "29": {
                    y: -580.7
                }
            });
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
        var instance6 = new lib.background()
            .setTransform(960, 570.5);
        this[instance6.name = "background"] = instance6;
        var instance5 = new lib.Sun2();
        this[instance5.name = "sun"] = instance5;
        var instance4 = new lib.target()
            .setTransform(101.55, 111.15, 0.612, 0.612);
        this[instance4.name = "target"] = instance4;
        var instance3 = new lib.earth()
            .setTransform(1601, 767);
        this[instance3.name = "start"] = instance3;
        var instance2 = new lib.rocket()
            .setTransform(1709.45, 609.7);
        this[instance2.name = "rocket"] = instance2;
        var instance1 = new lib.thrust()
            .setTransform(1741.05, 749.7)
            .setAlpha(0);
        this[instance1.name = "thrust"] = instance1;
        this.addTimedChild(instance6, 5, 30)
            .addTimedChild(instance5, 5, 30, {
                "5": {
                    x: 532.75,
                    y: 596.9,
                    sx: 0.666,
                    sy: 0.666,
                    a: 0
                },
                "6": {
                    x: 532.792,
                    y: 596.941,
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
                    x: 532.708,
                    y: 596.873,
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
                    x: 532.75,
                    y: 596.9,
                    a: 1
                }
            })
            .addTimedChild(instance4, 5, 30)
            .addTimedChild(instance3, 5, 30)
            .addTimedChild(instance2, 5, 30)
            .addTimedChild(instance1, 5, 30);
    });

    lib.stage.assets = {
        "fire": "images/fire.png",
        "rocketTop": "images/rocketTop.png",
        "rightFang": "images/rightFang.png",
        "leftFang": "images/leftFang.png",
        "rocketBody": "images/rocketBody.png",
        "earth_gravity_mask": "images/earth_gravity_mask.png",
        "earth": "images/earth.png",
        "mars_gravity_mask": "images/mars_gravity_mask.png",
        "target": "images/target.png",
        "sun_gravity_mask": "images/sun_gravity_mask.png",
        "sun": "images/sun.png",
        "sunPulse": "images/sunPulse.png",
        "stars2x": "images/stars2x.png",
        "bg": "images/bg.png",
        "stage": "images/stage.shapes.txt"
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