(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

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

    lib.fire = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("fire"));
        this.addChild(instance1);
    });

    lib.flagpost = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 297
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[35]);
        var instance2 = new Graphics()
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
            .drawCommands(shapes.stage[8]);
        var instance13 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance14 = new Graphics()
            .drawCommands(shapes.stage[10]);
        var instance15 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance16 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance17 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance18 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance19 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance20 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance21 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance22 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance23 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance24 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance25 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance26 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance27 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance28 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance29 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance30 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance31 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance32 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance33 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance34 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance35 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance36 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance37 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance38 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance39 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance40 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance41 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance42 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance43 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance44 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance45 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance46 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance47 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance48 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance49 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance50 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance51 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance52 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance53 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance54 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance55 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance56 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance57 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance58 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance59 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance60 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance61 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance62 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance63 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance64 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance65 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance66 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance67 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance68 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance69 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance70 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance71 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance72 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance73 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance74 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance75 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance76 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance77 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance78 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance79 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance80 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance81 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance82 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance83 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance84 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance85 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance86 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance87 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance88 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance89 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance90 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance91 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance92 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance93 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance94 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance95 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance96 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance97 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance98 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance99 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance100 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance101 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance102 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance103 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance104 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance105 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance106 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance107 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance108 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance109 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance110 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance111 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance112 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance113 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance114 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance115 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance116 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance117 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance118 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance119 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance120 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance121 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance122 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance123 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance124 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance125 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance126 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance127 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance128 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance129 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance130 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance131 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance132 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance133 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance134 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance135 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance136 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance137 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance138 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance139 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance140 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance141 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance142 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance143 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance144 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance145 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance146 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance147 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance148 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance149 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance150 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance151 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance152 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance153 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance154 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance155 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance156 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance157 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance158 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance159 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance160 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance161 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance162 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance163 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance164 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance165 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance166 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance167 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance168 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance169 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance170 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance171 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance172 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance173 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance174 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance175 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance176 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance177 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance178 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance179 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance180 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance181 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance182 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance183 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance184 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance185 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance186 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance187 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance188 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance189 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance190 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance191 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance192 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance193 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance194 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance195 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance196 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance197 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance198 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance199 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance200 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance201 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance202 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance203 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance204 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance205 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance206 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance207 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance208 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance209 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance210 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance211 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance212 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance213 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance214 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance215 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance216 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance217 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance218 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance219 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance220 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance221 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance222 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance223 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance224 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance225 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance226 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance227 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance228 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance229 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance230 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance231 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance232 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance233 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance234 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance235 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance236 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance237 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance238 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance239 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance240 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance241 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance242 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance243 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance244 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance245 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance246 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance247 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance248 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance249 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance250 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance251 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance252 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance253 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance254 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance255 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance256 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance257 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance258 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance259 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance260 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance261 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance262 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance263 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance264 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance265 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance266 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance267 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance268 = new Graphics()
            .drawCommands(shapes.stage[10]);
        var instance269 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance270 = new Graphics()
            .drawCommands(shapes.stage[8]);
        var instance271 = new Graphics()
            .drawCommands(shapes.stage[9]);
        var instance272 = new Graphics()
            .drawCommands(shapes.stage[8]);
        var instance273 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance274 = new Graphics()
            .drawCommands(shapes.stage[6]);
        var instance275 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance276 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance277 = new Graphics()
            .drawCommands(shapes.stage[3]);
        var instance278 = new Graphics()
            .drawCommands(shapes.stage[2]);
        var instance279 = new Graphics()
            .drawCommands(shapes.stage[1]);
        var instance280 = new Graphics()
            .drawCommands(shapes.stage[0]);
        this.addTimedChild(instance1)
            .addTimedChild(instance2, 4, 1)
            .addTimedChild(instance3, 5, 1)
            .addTimedChild(instance4, 6, 1)
            .addTimedChild(instance5, 7, 1)
            .addTimedChild(instance6, 8, 2, {
                "8": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "9": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance7, 10, 1)
            .addTimedChild(instance8, 11, 1)
            .addTimedChild(instance9, 12, 1)
            .addTimedChild(instance10, 13, 1)
            .addTimedChild(instance11, 14, 1)
            .addTimedChild(instance12, 15, 1, {
                "15": {
                    x: 0.3,
                    sx: 0.937
                }
            })
            .addTimedChild(instance13, 16, 1, {
                "16": {
                    x: 0.7,
                    sx: 0.861
                }
            })
            .addTimedChild(instance14, 17, 1)
            .addTimedChild(instance15, 18, 1, {
                "18": {
                    x: 1.8,
                    sx: 0.644
                }
            })
            .addTimedChild(instance16, 19, 6, {
                "19": {
                    x: 2,
                    y: -0.2,
                    sx: 0.601,
                    sy: 1.018
                },
                "20": {
                    x: 1.35,
                    sx: 0.729
                },
                "21": {
                    x: 0.7,
                    sx: 0.857
                },
                "22": {
                    x: 0.05,
                    sx: 0.988
                },
                "23": {
                    x: -0.6,
                    sx: 1.116
                },
                "24": {
                    x: -1.2,
                    sx: 1.244
                }
            })
            .addTimedChild(instance17, 25, 1)
            .addTimedChild(instance18, 26, 1)
            .addTimedChild(instance19, 27, 1)
            .addTimedChild(instance20, 28, 1)
            .addTimedChild(instance21, 29, 1)
            .addTimedChild(instance22, 30, 1)
            .addTimedChild(instance23, 31, 1)
            .addTimedChild(instance24, 32, 1)
            .addTimedChild(instance25, 33, 1)
            .addTimedChild(instance26, 34, 1)
            .addTimedChild(instance27, 35, 1)
            .addTimedChild(instance28, 36, 1)
            .addTimedChild(instance29, 37, 1)
            .addTimedChild(instance30, 38, 1)
            .addTimedChild(instance31, 39, 1)
            .addTimedChild(instance32, 40, 1)
            .addTimedChild(instance33, 41, 1)
            .addTimedChild(instance34, 42, 1)
            .addTimedChild(instance35, 43, 1)
            .addTimedChild(instance36, 44, 1)
            .addTimedChild(instance37, 45, 1)
            .addTimedChild(instance38, 46, 1)
            .addTimedChild(instance39, 47, 1)
            .addTimedChild(instance40, 48, 1)
            .addTimedChild(instance41, 49, 1, {
                "49": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance42, 50, 1)
            .addTimedChild(instance43, 51, 1)
            .addTimedChild(instance44, 52, 1)
            .addTimedChild(instance45, 53, 1)
            .addTimedChild(instance46, 54, 1)
            .addTimedChild(instance47, 55, 1)
            .addTimedChild(instance48, 56, 1)
            .addTimedChild(instance49, 57, 1)
            .addTimedChild(instance50, 58, 1)
            .addTimedChild(instance51, 59, 1)
            .addTimedChild(instance52, 60, 1)
            .addTimedChild(instance53, 61, 1)
            .addTimedChild(instance54, 62, 1)
            .addTimedChild(instance55, 63, 1)
            .addTimedChild(instance56, 64, 1)
            .addTimedChild(instance57, 65, 1)
            .addTimedChild(instance58, 66, 1)
            .addTimedChild(instance59, 67, 1)
            .addTimedChild(instance60, 68, 1)
            .addTimedChild(instance61, 69, 1)
            .addTimedChild(instance62, 70, 1)
            .addTimedChild(instance63, 71, 1)
            .addTimedChild(instance64, 72, 1)
            .addTimedChild(instance65, 73, 1)
            .addTimedChild(instance66, 74, 1, {
                "74": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance67, 75, 1)
            .addTimedChild(instance68, 76, 1)
            .addTimedChild(instance69, 77, 1)
            .addTimedChild(instance70, 78, 1)
            .addTimedChild(instance71, 79, 1)
            .addTimedChild(instance72, 80, 1)
            .addTimedChild(instance73, 81, 1)
            .addTimedChild(instance74, 82, 1)
            .addTimedChild(instance75, 83, 1)
            .addTimedChild(instance76, 84, 1)
            .addTimedChild(instance77, 85, 1)
            .addTimedChild(instance78, 86, 1)
            .addTimedChild(instance79, 87, 1)
            .addTimedChild(instance80, 88, 1)
            .addTimedChild(instance81, 89, 1)
            .addTimedChild(instance82, 90, 1)
            .addTimedChild(instance83, 91, 1)
            .addTimedChild(instance84, 92, 1)
            .addTimedChild(instance85, 93, 1)
            .addTimedChild(instance86, 94, 1)
            .addTimedChild(instance87, 95, 1)
            .addTimedChild(instance88, 96, 1)
            .addTimedChild(instance89, 97, 1)
            .addTimedChild(instance90, 98, 1)
            .addTimedChild(instance91, 99, 1, {
                "99": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance92, 100, 1)
            .addTimedChild(instance93, 101, 1)
            .addTimedChild(instance94, 102, 1)
            .addTimedChild(instance95, 103, 1)
            .addTimedChild(instance96, 104, 1)
            .addTimedChild(instance97, 105, 1)
            .addTimedChild(instance98, 106, 1)
            .addTimedChild(instance99, 107, 1)
            .addTimedChild(instance100, 108, 1)
            .addTimedChild(instance101, 109, 1)
            .addTimedChild(instance102, 110, 1)
            .addTimedChild(instance103, 111, 1)
            .addTimedChild(instance104, 112, 1)
            .addTimedChild(instance105, 113, 1)
            .addTimedChild(instance106, 114, 1)
            .addTimedChild(instance107, 115, 1)
            .addTimedChild(instance108, 116, 1)
            .addTimedChild(instance109, 117, 1)
            .addTimedChild(instance110, 118, 1)
            .addTimedChild(instance111, 119, 1)
            .addTimedChild(instance112, 120, 1)
            .addTimedChild(instance113, 121, 1)
            .addTimedChild(instance114, 122, 1)
            .addTimedChild(instance115, 123, 1)
            .addTimedChild(instance116, 124, 1, {
                "124": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance117, 125, 1)
            .addTimedChild(instance118, 126, 1)
            .addTimedChild(instance119, 127, 1)
            .addTimedChild(instance120, 128, 1)
            .addTimedChild(instance121, 129, 1)
            .addTimedChild(instance122, 130, 1)
            .addTimedChild(instance123, 131, 1)
            .addTimedChild(instance124, 132, 1)
            .addTimedChild(instance125, 133, 1)
            .addTimedChild(instance126, 134, 1)
            .addTimedChild(instance127, 135, 1)
            .addTimedChild(instance128, 136, 1)
            .addTimedChild(instance129, 137, 1)
            .addTimedChild(instance130, 138, 1)
            .addTimedChild(instance131, 139, 1)
            .addTimedChild(instance132, 140, 1)
            .addTimedChild(instance133, 141, 1)
            .addTimedChild(instance134, 142, 1)
            .addTimedChild(instance135, 143, 1)
            .addTimedChild(instance136, 144, 1)
            .addTimedChild(instance137, 145, 1)
            .addTimedChild(instance138, 146, 1)
            .addTimedChild(instance139, 147, 1)
            .addTimedChild(instance140, 148, 1)
            .addTimedChild(instance141, 149, 1, {
                "149": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance142, 150, 1)
            .addTimedChild(instance143, 151, 1)
            .addTimedChild(instance144, 152, 1)
            .addTimedChild(instance145, 153, 1)
            .addTimedChild(instance146, 154, 1)
            .addTimedChild(instance147, 155, 1)
            .addTimedChild(instance148, 156, 1)
            .addTimedChild(instance149, 157, 1)
            .addTimedChild(instance150, 158, 1)
            .addTimedChild(instance151, 159, 1)
            .addTimedChild(instance152, 160, 1)
            .addTimedChild(instance153, 161, 1)
            .addTimedChild(instance154, 162, 1)
            .addTimedChild(instance155, 163, 1)
            .addTimedChild(instance156, 164, 1)
            .addTimedChild(instance157, 165, 1)
            .addTimedChild(instance158, 166, 1)
            .addTimedChild(instance159, 167, 1)
            .addTimedChild(instance160, 168, 1)
            .addTimedChild(instance161, 169, 1)
            .addTimedChild(instance162, 170, 1)
            .addTimedChild(instance163, 171, 1)
            .addTimedChild(instance164, 172, 1)
            .addTimedChild(instance165, 173, 1)
            .addTimedChild(instance166, 174, 1, {
                "174": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance167, 175, 1)
            .addTimedChild(instance168, 176, 1)
            .addTimedChild(instance169, 177, 1)
            .addTimedChild(instance170, 178, 1)
            .addTimedChild(instance171, 179, 1)
            .addTimedChild(instance172, 180, 1)
            .addTimedChild(instance173, 181, 1)
            .addTimedChild(instance174, 182, 1)
            .addTimedChild(instance175, 183, 1)
            .addTimedChild(instance176, 184, 1)
            .addTimedChild(instance177, 185, 1)
            .addTimedChild(instance178, 186, 1)
            .addTimedChild(instance179, 187, 1)
            .addTimedChild(instance180, 188, 1)
            .addTimedChild(instance181, 189, 1)
            .addTimedChild(instance182, 190, 1)
            .addTimedChild(instance183, 191, 1)
            .addTimedChild(instance184, 192, 1)
            .addTimedChild(instance185, 193, 1)
            .addTimedChild(instance186, 194, 1)
            .addTimedChild(instance187, 195, 1)
            .addTimedChild(instance188, 196, 1)
            .addTimedChild(instance189, 197, 1)
            .addTimedChild(instance190, 198, 1)
            .addTimedChild(instance191, 199, 1, {
                "199": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance192, 200, 1)
            .addTimedChild(instance193, 201, 1)
            .addTimedChild(instance194, 202, 1)
            .addTimedChild(instance195, 203, 1)
            .addTimedChild(instance196, 204, 1)
            .addTimedChild(instance197, 205, 1)
            .addTimedChild(instance198, 206, 1)
            .addTimedChild(instance199, 207, 1)
            .addTimedChild(instance200, 208, 1)
            .addTimedChild(instance201, 209, 1)
            .addTimedChild(instance202, 210, 1)
            .addTimedChild(instance203, 211, 1)
            .addTimedChild(instance204, 212, 1)
            .addTimedChild(instance205, 213, 1)
            .addTimedChild(instance206, 214, 1)
            .addTimedChild(instance207, 215, 1)
            .addTimedChild(instance208, 216, 1)
            .addTimedChild(instance209, 217, 1)
            .addTimedChild(instance210, 218, 1)
            .addTimedChild(instance211, 219, 1)
            .addTimedChild(instance212, 220, 1)
            .addTimedChild(instance213, 221, 1)
            .addTimedChild(instance214, 222, 1)
            .addTimedChild(instance215, 223, 1)
            .addTimedChild(instance216, 224, 1, {
                "224": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance217, 225, 1)
            .addTimedChild(instance218, 226, 1)
            .addTimedChild(instance219, 227, 1)
            .addTimedChild(instance220, 228, 1)
            .addTimedChild(instance221, 229, 1)
            .addTimedChild(instance222, 230, 1)
            .addTimedChild(instance223, 231, 1)
            .addTimedChild(instance224, 232, 1)
            .addTimedChild(instance225, 233, 1)
            .addTimedChild(instance226, 234, 1)
            .addTimedChild(instance227, 235, 1)
            .addTimedChild(instance228, 236, 1)
            .addTimedChild(instance229, 237, 1)
            .addTimedChild(instance230, 238, 1)
            .addTimedChild(instance231, 239, 1)
            .addTimedChild(instance232, 240, 1)
            .addTimedChild(instance233, 241, 1)
            .addTimedChild(instance234, 242, 1)
            .addTimedChild(instance235, 243, 1)
            .addTimedChild(instance236, 244, 1)
            .addTimedChild(instance237, 245, 1)
            .addTimedChild(instance238, 246, 1)
            .addTimedChild(instance239, 247, 1)
            .addTimedChild(instance240, 248, 1)
            .addTimedChild(instance241, 249, 1, {
                "249": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance242, 250, 1)
            .addTimedChild(instance243, 251, 1)
            .addTimedChild(instance244, 252, 1)
            .addTimedChild(instance245, 253, 1)
            .addTimedChild(instance246, 254, 1)
            .addTimedChild(instance247, 255, 1)
            .addTimedChild(instance248, 256, 1)
            .addTimedChild(instance249, 257, 1)
            .addTimedChild(instance250, 258, 1)
            .addTimedChild(instance251, 259, 1)
            .addTimedChild(instance252, 260, 1)
            .addTimedChild(instance253, 261, 1)
            .addTimedChild(instance254, 262, 1)
            .addTimedChild(instance255, 263, 1)
            .addTimedChild(instance256, 264, 1)
            .addTimedChild(instance257, 265, 1)
            .addTimedChild(instance258, 266, 1)
            .addTimedChild(instance259, 267, 1)
            .addTimedChild(instance260, 268, 1)
            .addTimedChild(instance261, 269, 1)
            .addTimedChild(instance262, 270, 1)
            .addTimedChild(instance263, 271, 1)
            .addTimedChild(instance264, 272, 1)
            .addTimedChild(instance265, 273, 1)
            .addTimedChild(instance266, 274, 7, {
                "274": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                },
                "276": {
                    x: -0.6,
                    sx: 1.116
                },
                "277": {
                    x: 0.05,
                    sx: 0.988
                },
                "278": {
                    x: 0.7,
                    sx: 0.857
                },
                "279": {
                    x: 1.35,
                    sx: 0.729
                },
                "280": {
                    x: 2,
                    sx: 0.601
                }
            })
            .addTimedChild(instance267, 281, 1, {
                "281": {
                    x: 1.8,
                    sx: 0.644
                }
            })
            .addTimedChild(instance268, 282, 1)
            .addTimedChild(instance269, 283, 1, {
                "283": {
                    x: 0.7,
                    sx: 0.861
                }
            })
            .addTimedChild(instance270, 284, 1, {
                "284": {
                    x: 0.3,
                    sx: 0.937
                }
            })
            .addTimedChild(instance271, 285, 1)
            .addTimedChild(instance272, 286, 1)
            .addTimedChild(instance273, 287, 1)
            .addTimedChild(instance274, 288, 1)
            .addTimedChild(instance275, 289, 1)
            .addTimedChild(instance276, 290, 2, {
                "290": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                },
                "291": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance277, 292, 1)
            .addTimedChild(instance278, 293, 1)
            .addTimedChild(instance279, 294, 1)
            .addTimedChild(instance280, 295, 1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 267, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[35]);
        var instance2 = new Graphics()
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
            .drawCommands(shapes.stage[8]);
        var instance13 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance14 = new Graphics()
            .drawCommands(shapes.stage[10]);
        var instance15 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance16 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance17 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance18 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance19 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance20 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance21 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance22 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance23 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance24 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance25 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance26 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance27 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance28 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance29 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance30 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance31 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance32 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance33 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance34 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance35 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance36 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance37 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance38 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance39 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance40 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance41 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance42 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance43 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance44 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance45 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance46 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance47 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance48 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance49 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance50 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance51 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance52 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance53 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance54 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance55 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance56 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance57 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance58 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance59 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance60 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance61 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance62 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance63 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance64 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance65 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance66 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance67 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance68 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance69 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance70 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance71 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance72 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance73 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance74 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance75 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance76 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance77 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance78 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance79 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance80 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance81 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance82 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance83 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance84 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance85 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance86 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance87 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance88 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance89 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance90 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance91 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance92 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance93 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance94 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance95 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance96 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance97 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance98 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance99 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance100 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance101 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance102 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance103 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance104 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance105 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance106 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance107 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance108 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance109 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance110 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance111 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance112 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance113 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance114 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance115 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance116 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance117 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance118 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance119 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance120 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance121 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance122 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance123 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance124 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance125 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance126 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance127 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance128 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance129 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance130 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance131 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance132 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance133 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance134 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance135 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance136 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance137 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance138 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance139 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance140 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance141 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance142 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance143 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance144 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance145 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance146 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance147 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance148 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance149 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance150 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance151 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance152 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance153 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance154 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance155 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance156 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance157 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance158 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance159 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance160 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance161 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance162 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance163 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance164 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance165 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance166 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance167 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance168 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance169 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance170 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance171 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance172 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance173 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance174 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance175 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance176 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance177 = new Graphics()
            .drawCommands(shapes.stage[21]);
        var instance178 = new Graphics()
            .drawCommands(shapes.stage[22]);
        var instance179 = new Graphics()
            .drawCommands(shapes.stage[23]);
        var instance180 = new Graphics()
            .drawCommands(shapes.stage[24]);
        var instance181 = new Graphics()
            .drawCommands(shapes.stage[25]);
        var instance182 = new Graphics()
            .drawCommands(shapes.stage[26]);
        var instance183 = new Graphics()
            .drawCommands(shapes.stage[27]);
        var instance184 = new Graphics()
            .drawCommands(shapes.stage[28]);
        var instance185 = new Graphics()
            .drawCommands(shapes.stage[29]);
        var instance186 = new Graphics()
            .drawCommands(shapes.stage[30]);
        var instance187 = new Graphics()
            .drawCommands(shapes.stage[31]);
        var instance188 = new Graphics()
            .drawCommands(shapes.stage[32]);
        var instance189 = new Graphics()
            .drawCommands(shapes.stage[33]);
        var instance190 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance191 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance192 = new Graphics()
            .drawCommands(shapes.stage[11]);
        var instance193 = new Graphics()
            .drawCommands(shapes.stage[12]);
        var instance194 = new Graphics()
            .drawCommands(shapes.stage[13]);
        var instance195 = new Graphics()
            .drawCommands(shapes.stage[14]);
        var instance196 = new Graphics()
            .drawCommands(shapes.stage[15]);
        var instance197 = new Graphics()
            .drawCommands(shapes.stage[16]);
        var instance198 = new Graphics()
            .drawCommands(shapes.stage[17]);
        var instance199 = new Graphics()
            .drawCommands(shapes.stage[18]);
        var instance200 = new Graphics()
            .drawCommands(shapes.stage[19]);
        var instance201 = new Graphics()
            .drawCommands(shapes.stage[20]);
        var instance202 = new Graphics()
            .drawCommands(shapes.stage[34]);
        var instance203 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance204 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance205 = new Graphics()
            .drawCommands(shapes.stage[10]);
        var instance206 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance207 = new Graphics()
            .drawCommands(shapes.stage[8]);
        var instance208 = new Graphics()
            .drawCommands(shapes.stage[9]);
        var instance209 = new Graphics()
            .drawCommands(shapes.stage[8]);
        var instance210 = new Graphics()
            .drawCommands(shapes.stage[7]);
        var instance211 = new Graphics()
            .drawCommands(shapes.stage[6]);
        var instance212 = new Graphics()
            .drawCommands(shapes.stage[5]);
        var instance213 = new Graphics()
            .drawCommands(shapes.stage[4]);
        var instance214 = new Graphics()
            .drawCommands(shapes.stage[3]);
        var instance215 = new Graphics()
            .drawCommands(shapes.stage[2]);
        var instance216 = new Graphics()
            .drawCommands(shapes.stage[1]);
        var instance217 = new Graphics()
            .drawCommands(shapes.stage[0]);
        this.addTimedChild(instance1)
            .addTimedChild(instance2, 4, 1)
            .addTimedChild(instance3, 5, 1)
            .addTimedChild(instance4, 6, 1)
            .addTimedChild(instance5, 7, 1)
            .addTimedChild(instance6, 8, 2, {
                "8": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "9": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance7, 10, 1)
            .addTimedChild(instance8, 11, 1)
            .addTimedChild(instance9, 12, 1)
            .addTimedChild(instance10, 13, 1)
            .addTimedChild(instance11, 14, 1)
            .addTimedChild(instance12, 15, 1, {
                "15": {
                    x: 0.3,
                    sx: 0.937
                }
            })
            .addTimedChild(instance13, 16, 1, {
                "16": {
                    x: 0.7,
                    sx: 0.861
                }
            })
            .addTimedChild(instance14, 17, 1)
            .addTimedChild(instance15, 18, 1, {
                "18": {
                    x: 1.8,
                    sx: 0.644
                }
            })
            .addTimedChild(instance16, 19, 6, {
                "19": {
                    x: 2,
                    y: -0.2,
                    sx: 0.601,
                    sy: 1.018
                },
                "20": {
                    x: 1.35,
                    sx: 0.729
                },
                "21": {
                    x: 0.7,
                    sx: 0.857
                },
                "22": {
                    x: 0.05,
                    sx: 0.988
                },
                "23": {
                    x: -0.6,
                    sx: 1.116
                },
                "24": {
                    x: -1.2,
                    sx: 1.244
                }
            })
            .addTimedChild(instance17, 25, 1)
            .addTimedChild(instance18, 26, 1)
            .addTimedChild(instance19, 27, 1)
            .addTimedChild(instance20, 28, 1)
            .addTimedChild(instance21, 29, 1)
            .addTimedChild(instance22, 30, 1)
            .addTimedChild(instance23, 31, 1)
            .addTimedChild(instance24, 32, 1)
            .addTimedChild(instance25, 33, 1)
            .addTimedChild(instance26, 34, 1)
            .addTimedChild(instance27, 35, 1)
            .addTimedChild(instance28, 36, 1)
            .addTimedChild(instance29, 37, 1)
            .addTimedChild(instance30, 38, 1)
            .addTimedChild(instance31, 39, 1)
            .addTimedChild(instance32, 40, 1)
            .addTimedChild(instance33, 41, 1)
            .addTimedChild(instance34, 42, 1)
            .addTimedChild(instance35, 43, 1)
            .addTimedChild(instance36, 44, 1)
            .addTimedChild(instance37, 45, 1)
            .addTimedChild(instance38, 46, 1)
            .addTimedChild(instance39, 47, 1)
            .addTimedChild(instance40, 48, 1)
            .addTimedChild(instance41, 49, 1, {
                "49": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance42, 50, 1)
            .addTimedChild(instance43, 51, 1)
            .addTimedChild(instance44, 52, 1)
            .addTimedChild(instance45, 53, 1)
            .addTimedChild(instance46, 54, 1)
            .addTimedChild(instance47, 55, 1)
            .addTimedChild(instance48, 56, 1)
            .addTimedChild(instance49, 57, 1)
            .addTimedChild(instance50, 58, 1)
            .addTimedChild(instance51, 59, 1)
            .addTimedChild(instance52, 60, 1)
            .addTimedChild(instance53, 61, 1)
            .addTimedChild(instance54, 62, 1)
            .addTimedChild(instance55, 63, 1)
            .addTimedChild(instance56, 64, 1)
            .addTimedChild(instance57, 65, 1)
            .addTimedChild(instance58, 66, 1)
            .addTimedChild(instance59, 67, 1)
            .addTimedChild(instance60, 68, 1)
            .addTimedChild(instance61, 69, 1)
            .addTimedChild(instance62, 70, 1)
            .addTimedChild(instance63, 71, 1)
            .addTimedChild(instance64, 72, 1)
            .addTimedChild(instance65, 73, 1)
            .addTimedChild(instance66, 74, 1, {
                "74": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance67, 75, 1)
            .addTimedChild(instance68, 76, 1)
            .addTimedChild(instance69, 77, 1)
            .addTimedChild(instance70, 78, 1)
            .addTimedChild(instance71, 79, 1)
            .addTimedChild(instance72, 80, 1)
            .addTimedChild(instance73, 81, 1)
            .addTimedChild(instance74, 82, 1)
            .addTimedChild(instance75, 83, 1)
            .addTimedChild(instance76, 84, 1)
            .addTimedChild(instance77, 85, 1)
            .addTimedChild(instance78, 86, 1)
            .addTimedChild(instance79, 87, 1)
            .addTimedChild(instance80, 88, 1)
            .addTimedChild(instance81, 89, 1)
            .addTimedChild(instance82, 90, 1)
            .addTimedChild(instance83, 91, 1)
            .addTimedChild(instance84, 92, 1)
            .addTimedChild(instance85, 93, 1)
            .addTimedChild(instance86, 94, 1)
            .addTimedChild(instance87, 95, 1)
            .addTimedChild(instance88, 96, 1)
            .addTimedChild(instance89, 97, 1)
            .addTimedChild(instance90, 98, 1)
            .addTimedChild(instance91, 99, 1, {
                "99": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance92, 100, 1)
            .addTimedChild(instance93, 101, 1)
            .addTimedChild(instance94, 102, 1)
            .addTimedChild(instance95, 103, 1)
            .addTimedChild(instance96, 104, 1)
            .addTimedChild(instance97, 105, 1)
            .addTimedChild(instance98, 106, 1)
            .addTimedChild(instance99, 107, 1)
            .addTimedChild(instance100, 108, 1)
            .addTimedChild(instance101, 109, 1)
            .addTimedChild(instance102, 110, 1)
            .addTimedChild(instance103, 111, 1)
            .addTimedChild(instance104, 112, 1)
            .addTimedChild(instance105, 113, 1)
            .addTimedChild(instance106, 114, 1)
            .addTimedChild(instance107, 115, 1)
            .addTimedChild(instance108, 116, 1)
            .addTimedChild(instance109, 117, 1)
            .addTimedChild(instance110, 118, 1)
            .addTimedChild(instance111, 119, 1)
            .addTimedChild(instance112, 120, 1)
            .addTimedChild(instance113, 121, 1)
            .addTimedChild(instance114, 122, 1)
            .addTimedChild(instance115, 123, 1)
            .addTimedChild(instance116, 124, 1, {
                "124": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance117, 125, 1)
            .addTimedChild(instance118, 126, 1)
            .addTimedChild(instance119, 127, 1)
            .addTimedChild(instance120, 128, 1)
            .addTimedChild(instance121, 129, 1)
            .addTimedChild(instance122, 130, 1)
            .addTimedChild(instance123, 131, 1)
            .addTimedChild(instance124, 132, 1)
            .addTimedChild(instance125, 133, 1)
            .addTimedChild(instance126, 134, 1)
            .addTimedChild(instance127, 135, 1)
            .addTimedChild(instance128, 136, 1)
            .addTimedChild(instance129, 137, 1)
            .addTimedChild(instance130, 138, 1)
            .addTimedChild(instance131, 139, 1)
            .addTimedChild(instance132, 140, 1)
            .addTimedChild(instance133, 141, 1)
            .addTimedChild(instance134, 142, 1)
            .addTimedChild(instance135, 143, 1)
            .addTimedChild(instance136, 144, 1)
            .addTimedChild(instance137, 145, 1)
            .addTimedChild(instance138, 146, 1)
            .addTimedChild(instance139, 147, 1)
            .addTimedChild(instance140, 148, 1)
            .addTimedChild(instance141, 149, 1, {
                "149": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance142, 150, 1)
            .addTimedChild(instance143, 151, 1)
            .addTimedChild(instance144, 152, 1)
            .addTimedChild(instance145, 153, 1)
            .addTimedChild(instance146, 154, 1)
            .addTimedChild(instance147, 155, 1)
            .addTimedChild(instance148, 156, 1)
            .addTimedChild(instance149, 157, 1)
            .addTimedChild(instance150, 158, 1)
            .addTimedChild(instance151, 159, 1)
            .addTimedChild(instance152, 160, 1)
            .addTimedChild(instance153, 161, 1)
            .addTimedChild(instance154, 162, 1)
            .addTimedChild(instance155, 163, 1)
            .addTimedChild(instance156, 164, 1)
            .addTimedChild(instance157, 165, 1)
            .addTimedChild(instance158, 166, 1)
            .addTimedChild(instance159, 167, 1)
            .addTimedChild(instance160, 168, 1)
            .addTimedChild(instance161, 169, 1)
            .addTimedChild(instance162, 170, 1)
            .addTimedChild(instance163, 171, 1)
            .addTimedChild(instance164, 172, 1)
            .addTimedChild(instance165, 173, 1)
            .addTimedChild(instance166, 174, 1, {
                "174": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance167, 175, 1)
            .addTimedChild(instance168, 176, 1)
            .addTimedChild(instance169, 177, 1)
            .addTimedChild(instance170, 178, 1)
            .addTimedChild(instance171, 179, 1)
            .addTimedChild(instance172, 180, 1)
            .addTimedChild(instance173, 181, 1)
            .addTimedChild(instance174, 182, 1)
            .addTimedChild(instance175, 183, 1)
            .addTimedChild(instance176, 184, 1)
            .addTimedChild(instance177, 185, 1)
            .addTimedChild(instance178, 186, 1)
            .addTimedChild(instance179, 187, 1)
            .addTimedChild(instance180, 188, 1)
            .addTimedChild(instance181, 189, 1)
            .addTimedChild(instance182, 190, 1)
            .addTimedChild(instance183, 191, 1)
            .addTimedChild(instance184, 192, 1)
            .addTimedChild(instance185, 193, 1)
            .addTimedChild(instance186, 194, 1)
            .addTimedChild(instance187, 195, 1)
            .addTimedChild(instance188, 196, 1)
            .addTimedChild(instance189, 197, 1)
            .addTimedChild(instance190, 198, 1)
            .addTimedChild(instance191, 199, 1, {
                "199": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                }
            })
            .addTimedChild(instance192, 200, 1)
            .addTimedChild(instance193, 201, 1)
            .addTimedChild(instance194, 202, 1)
            .addTimedChild(instance195, 203, 1)
            .addTimedChild(instance196, 204, 1)
            .addTimedChild(instance197, 205, 1)
            .addTimedChild(instance198, 206, 1)
            .addTimedChild(instance199, 207, 1)
            .addTimedChild(instance200, 208, 1)
            .addTimedChild(instance201, 209, 1)
            .addTimedChild(instance202, 210, 1)
            .addTimedChild(instance203, 211, 7, {
                "211": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                },
                "213": {
                    x: -0.6,
                    sx: 1.116
                },
                "214": {
                    x: 0.05,
                    sx: 0.988
                },
                "215": {
                    x: 0.7,
                    sx: 0.857
                },
                "216": {
                    x: 1.35,
                    sx: 0.729
                },
                "217": {
                    x: 2,
                    sx: 0.601
                }
            })
            .addTimedChild(instance204, 218, 1, {
                "218": {
                    x: 1.8,
                    sx: 0.644
                }
            })
            .addTimedChild(instance205, 219, 1)
            .addTimedChild(instance206, 220, 1, {
                "220": {
                    x: 0.7,
                    sx: 0.861
                }
            })
            .addTimedChild(instance207, 221, 1, {
                "221": {
                    x: 0.3,
                    sx: 0.937
                }
            })
            .addTimedChild(instance208, 222, 1)
            .addTimedChild(instance209, 223, 1)
            .addTimedChild(instance210, 224, 1)
            .addTimedChild(instance211, 225, 1)
            .addTimedChild(instance212, 226, 1)
            .addTimedChild(instance213, 227, 2, {
                "227": {
                    x: -1.2,
                    y: -0.2,
                    sx: 1.244,
                    sy: 1.018
                },
                "228": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance214, 229, 1)
            .addTimedChild(instance215, 230, 1)
            .addTimedChild(instance216, 231, 1)
            .addTimedChild(instance217, 232, 35);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 351, loop: false });
        var instance5 = new lib.fire();
        var instance6 = new lib.flagpost();
        var instance7 = new Graphic1(MovieClip.SYNCHED);
        var instance4 = new lib.rbody();
        var instance3 = new lib.rfang();
        var instance2 = new lib.lfang();
        var instance1 = new lib.rtop();
        this.addTimedChild(instance5, 0, 39, {
                "0": {
                    x: 10.85,
                    y: 71.55,
                    sx: 1,
                    sy: 1,
                    a: 1
                },
                "1": {
                    x: 10.459,
                    y: 72.61,
                    sx: 1.024,
                    sy: 1.024
                },
                "2": {
                    x: 10.069,
                    y: 73.719,
                    sx: 1.048,
                    sy: 1.048
                },
                "3": {
                    x: 9.678,
                    y: 74.779,
                    sx: 1.072,
                    sy: 1.072
                },
                "4": {
                    x: 9.287,
                    y: 75.839,
                    sx: 1.096,
                    sy: 1.096
                },
                "5": {
                    x: 8.896,
                    y: 76.899,
                    sx: 1.119,
                    sy: 1.119
                },
                "6": {
                    x: 8.506,
                    y: 77.958,
                    sx: 1.143,
                    sy: 1.143
                },
                "7": {
                    x: 8.115,
                    y: 79.018,
                    sx: 1.167,
                    sy: 1.167
                },
                "8": {
                    x: 7.7,
                    y: 80.05,
                    sx: 1.191,
                    sy: 1.191
                },
                "9": {
                    x: 8.076,
                    y: 79.264,
                    sx: 1.172,
                    sy: 1.172
                },
                "10": {
                    x: 8.353,
                    y: 78.379,
                    sx: 1.153,
                    sy: 1.153
                },
                "11": {
                    x: 8.679,
                    y: 77.545,
                    sx: 1.134,
                    sy: 1.134
                },
                "12": {
                    x: 9.006,
                    y: 76.66,
                    sx: 1.115,
                    sy: 1.115
                },
                "13": {
                    x: 9.332,
                    y: 75.875,
                    sx: 1.096,
                    sy: 1.096
                },
                "14": {
                    x: 9.608,
                    y: 74.99,
                    sx: 1.076,
                    sy: 1.076
                },
                "15": {
                    x: 9.935,
                    y: 74.155,
                    sx: 1.057,
                    sy: 1.057
                },
                "16": {
                    x: 10.261,
                    y: 73.271,
                    sx: 1.038,
                    sy: 1.038
                },
                "17": {
                    x: 10.588,
                    y: 72.436,
                    sx: 1.019,
                    sy: 1.019
                },
                "18": {
                    x: 10.85,
                    y: 71.55,
                    sx: 1,
                    sy: 1
                },
                "19": {
                    x: 10.557,
                    y: 72.468,
                    sx: 1.019,
                    sy: 1.019
                },
                "20": {
                    x: 10.265,
                    y: 73.286,
                    sx: 1.038,
                    sy: 1.038
                },
                "21": {
                    x: 9.922,
                    y: 74.153,
                    sx: 1.057,
                    sy: 1.057
                },
                "22": {
                    x: 9.63,
                    y: 74.971,
                    sx: 1.076,
                    sy: 1.076
                },
                "23": {
                    x: 9.287,
                    y: 75.839,
                    sx: 1.096,
                    sy: 1.096
                },
                "24": {
                    x: 8.994,
                    y: 76.657,
                    sx: 1.115,
                    sy: 1.115
                },
                "25": {
                    x: 8.652,
                    y: 77.575,
                    sx: 1.134,
                    sy: 1.134
                },
                "26": {
                    x: 8.359,
                    y: 78.392,
                    sx: 1.153,
                    sy: 1.153
                },
                "27": {
                    x: 8.017,
                    y: 79.26,
                    sx: 1.172,
                    sy: 1.172
                },
                "28": {
                    x: 7.7,
                    y: 80.05,
                    sx: 1.191,
                    sy: 1.191
                },
                "29": {
                    x: 8.859,
                    y: 80.213,
                    sx: 1.123,
                    sy: 1.123,
                    a: 0.9
                },
                "30": {
                    x: 9.968,
                    y: 80.328,
                    sx: 1.055,
                    sy: 1.055,
                    a: 0.8
                },
                "31": {
                    x: 11.127,
                    y: 80.491,
                    sx: 0.986,
                    sy: 0.986,
                    a: 0.7
                },
                "32": {
                    x: 12.236,
                    y: 80.657,
                    sx: 0.918,
                    sy: 0.918,
                    a: 0.6
                },
                "33": {
                    x: 13.344,
                    y: 80.821,
                    sx: 0.85,
                    sy: 0.85,
                    a: 0.5
                },
                "34": {
                    x: 14.503,
                    y: 80.935,
                    sx: 0.782,
                    sy: 0.782,
                    a: 0.4
                },
                "35": {
                    x: 15.612,
                    y: 81.101,
                    sx: 0.714,
                    sy: 0.714,
                    a: 0.3
                },
                "36": {
                    x: 16.721,
                    y: 81.263,
                    sx: 0.645,
                    sy: 0.645,
                    a: 0.2
                },
                "37": {
                    x: 17.88,
                    y: 81.379,
                    sx: 0.577,
                    sy: 0.577,
                    a: 0.1
                },
                "38": {
                    x: 18.95,
                    y: 81.5,
                    sx: 0.509,
                    sy: 0.509,
                    a: 0
                }
            })
            .addTimedChild(instance6, 69, 15, {
                "69": {
                    x: 22.2,
                    y: 15.4,
                    sy: 0.201
                },
                "70": {
                    x: 22.15,
                    y: 4.289,
                    sy: 0.464
                },
                "71": {
                    x: 22.1,
                    y: -6.871,
                    sy: 0.728
                },
                "72": {
                    x: 22.05,
                    y: -18.08,
                    sy: 0.992
                },
                "73": {
                    x: 22,
                    y: -29.191,
                    sy: 1.255
                },
                "74": {
                    x: 21.95,
                    y: -40.4,
                    sy: 1.519
                },
                "75": {
                    y: -33.623,
                    sy: 1.328
                },
                "76": {
                    y: -26.896,
                    sy: 1.137
                },
                "77": {
                    y: -20.169,
                    sy: 0.946
                },
                "78": {
                    y: -13.442,
                    sy: 0.755
                },
                "79": {
                    y: -6.65,
                    sy: 0.565
                },
                "80": {
                    y: -10.076,
                    sy: 0.652
                },
                "81": {
                    y: -13.451,
                    sy: 0.739
                },
                "82": {
                    y: -16.927,
                    sy: 0.826
                },
                "83": {
                    y: -20.302,
                    sy: 0.913
                }
            })
            .addTimedChild(instance7, 84, 267, {
                "84": {
                    x: 21.95,
                    y: -23.8,
                    sy: 1
                },
                "317": {
                    y: -31.772,
                    sy: 1.224
                },
                "318": {
                    y: -39.694,
                    sy: 1.447
                },
                "319": {
                    y: -47.666,
                    sy: 1.671
                },
                "320": {
                    y: -55.638,
                    sy: 1.894
                },
                "321": {
                    y: -63.56,
                    sy: 2.118
                },
                "322": {
                    y: -71.482,
                    sy: 2.342
                },
                "323": {
                    y: -79.504,
                    sy: 2.565
                },
                "324": {
                    y: -87.4,
                    sy: 2.789
                },
                "325": {
                    y: -64.652,
                    sy: 2.366
                },
                "326": {
                    y: -41.856,
                    sy: 1.944
                },
                "327": {
                    y: -19.16,
                    sy: 1.521
                },
                "328": {
                    y: 3.586,
                    sy: 1.098
                },
                "329": {
                    y: 26.35,
                    sy: 0.676
                }
            })
            .addTimedChild(instance4, 0, 351, {
                "0": {
                    x: 6.85,
                    y: 14.65,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "29": {
                    x: 5.914,
                    y: 17.493,
                    sy: 0.965,
                    r: -0.04
                },
                "30": {
                    x: 4.966,
                    y: 20.439,
                    sy: 0.929,
                    r: -0.084
                },
                "31": {
                    x: 4.158,
                    y: 23.365,
                    sy: 0.894,
                    r: -0.128
                },
                "32": {
                    x: 3.44,
                    y: 26.323,
                    sx: 0.999,
                    sy: 0.858,
                    r: -0.171
                },
                "33": {
                    x: 2.91,
                    y: 29.368,
                    sy: 0.823,
                    r: -0.215
                },
                "34": {
                    x: 2.35,
                    y: 32.45,
                    sx: 1,
                    sy: 0.788,
                    r: -0.262
                },
                "35": {
                    x: 4.214,
                    y: 31.744,
                    sx: 0.999,
                    sy: 0.759,
                    r: -0.154
                },
                "36": {
                    x: 6.084,
                    y: 31.375,
                    sx: 1,
                    sy: 0.73,
                    r: -0.049
                },
                "37": {
                    x: 7.785,
                    y: 31.208,
                    sy: 0.702,
                    r: 0.049
                },
                "38": {
                    x: 9.719,
                    y: 31.254,
                    sx: 0.999,
                    sy: 0.673,
                    r: 0.154
                },
                "39": {
                    x: 11.7,
                    y: 31.35,
                    sx: 1,
                    sy: 0.644,
                    r: 0.262
                },
                "40": {
                    x: 11.335,
                    y: 23.866,
                    sx: 1.018,
                    sy: 0.783,
                    r: 0.215
                },
                "41": {
                    x: 10.619,
                    y: 16.303,
                    sx: 1.036,
                    sy: 0.922,
                    r: 0.171
                },
                "42": {
                    x: 9.64,
                    y: 8.77,
                    sx: 1.054,
                    sy: 1.061,
                    r: 0.128
                },
                "43": {
                    x: 8.294,
                    y: 1.284,
                    sx: 1.073,
                    sy: 1.2,
                    r: 0.084
                },
                "44": {
                    x: 6.682,
                    y: -6.138,
                    sx: 1.091,
                    sy: 1.339,
                    r: 0.04
                },
                "45": {
                    x: 4.75,
                    y: -13.65,
                    sx: 1.11,
                    sy: 1.478,
                    r: 0
                },
                "46": {
                    x: 4.998,
                    y: -9.434,
                    sx: 1.097,
                    sy: 1.406
                },
                "47": {
                    x: 5.246,
                    y: -5.169,
                    sx: 1.085,
                    sy: 1.334
                },
                "48": {
                    x: 5.443,
                    y: -0.953,
                    sx: 1.073,
                    sy: 1.262
                },
                "49": {
                    x: 5.691,
                    y: 3.262,
                    sx: 1.061,
                    sy: 1.19
                },
                "50": {
                    x: 5.939,
                    y: 7.578,
                    sx: 1.049,
                    sy: 1.118
                },
                "51": {
                    x: 6.137,
                    y: 11.793,
                    sx: 1.037,
                    sy: 1.046
                },
                "52": {
                    x: 6.385,
                    y: 16.008,
                    sx: 1.024,
                    sy: 0.974
                },
                "53": {
                    x: 6.633,
                    y: 20.274,
                    sx: 1.012,
                    sy: 0.902
                },
                "54": {
                    x: 6.85,
                    y: 24.5,
                    sx: 1,
                    sy: 0.83
                },
                "55": {
                    y: 22.606,
                    sy: 0.864
                },
                "56": {
                    y: 20.563,
                    sy: 0.898
                },
                "57": {
                    y: 18.62,
                    sy: 0.932
                },
                "58": {
                    y: 16.626,
                    sy: 0.966
                },
                "59": {
                    y: 14.65,
                    sy: 1
                }
            })
            .addTimedChild(instance3, 0, 351, {
                "0": {
                    x: 0,
                    y: 53.8,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "29": {
                    x: 0.593,
                    y: 55.502,
                    sy: 0.965,
                    r: -0.04
                },
                "30": {
                    x: 1.094,
                    y: 57.162,
                    sy: 0.929,
                    r: -0.084
                },
                "31": {
                    x: 1.722,
                    y: 58.892,
                    sy: 0.894,
                    r: -0.128
                },
                "32": {
                    x: 2.324,
                    y: 60.551,
                    sx: 0.999,
                    sy: 0.858,
                    r: -0.171
                },
                "33": {
                    x: 3.047,
                    y: 62.305,
                    sy: 0.823,
                    r: -0.215
                },
                "34": {
                    x: 3.75,
                    y: 64,
                    sx: 1,
                    sy: 0.788,
                    r: -0.262
                },
                "35": {
                    x: 2.737,
                    y: 61.781,
                    sx: 0.999,
                    sy: 0.759,
                    r: -0.154
                },
                "36": {
                    x: 1.634,
                    y: 59.702,
                    sx: 1,
                    sy: 0.73,
                    r: -0.049
                },
                "37": {
                    x: 0.535,
                    y: 57.79,
                    sy: 0.702,
                    r: 0.049
                },
                "38": {
                    x: -0.493,
                    y: 55.863,
                    sx: 0.999,
                    sy: 0.673,
                    r: 0.154
                },
                "39": {
                    x: -1.45,
                    y: 53.9,
                    sx: 1,
                    sy: 0.644,
                    r: 0.262
                },
                "40": {
                    x: -1.32,
                    y: 52.269,
                    sx: 1.018,
                    sy: 0.783,
                    r: 0.215
                },
                "41": {
                    x: -1.334,
                    y: 50.646,
                    sx: 1.036,
                    sy: 0.922,
                    r: 0.171
                },
                "42": {
                    x: -1.571,
                    y: 48.982,
                    sx: 1.054,
                    sy: 1.061,
                    r: 0.128
                },
                "43": {
                    x: -1.882,
                    y: 47.312,
                    sx: 1.073,
                    sy: 1.2,
                    r: 0.084
                },
                "44": {
                    x: -2.317,
                    y: 45.718,
                    sx: 1.091,
                    sy: 1.339,
                    r: 0.04
                },
                "45": {
                    x: -2.85,
                    y: 44.2,
                    sx: 1.11,
                    sy: 1.478,
                    r: 0
                },
                "46": {
                    x: -2.469,
                    y: 45.644,
                    sx: 1.097,
                    sy: 1.406
                },
                "47": {
                    x: -2.187,
                    y: 47.039,
                    sx: 1.085,
                    sy: 1.334
                },
                "48": {
                    x: -1.856,
                    y: 48.484,
                    sx: 1.073,
                    sy: 1.262
                },
                "49": {
                    x: -1.525,
                    y: 49.929,
                    sx: 1.061,
                    sy: 1.19
                },
                "50": {
                    x: -1.193,
                    y: 51.275,
                    sx: 1.049,
                    sy: 1.118
                },
                "51": {
                    x: -0.912,
                    y: 52.72,
                    sx: 1.037,
                    sy: 1.046
                },
                "52": {
                    x: -0.581,
                    y: 54.166,
                    sx: 1.024,
                    sy: 0.974
                },
                "53": {
                    x: -0.3,
                    y: 55.561,
                    sx: 1.012,
                    sy: 0.902
                },
                "54": {
                    x: 0,
                    y: 57,
                    sx: 1,
                    sy: 0.83
                },
                "55": {
                    y: 56.391,
                    sy: 0.864
                },
                "56": {
                    y: 55.734,
                    sy: 0.898
                },
                "57": {
                    y: 55.175,
                    sy: 0.932
                },
                "58": {
                    y: 54.517,
                    sy: 0.966
                },
                "59": {
                    y: 53.8,
                    sy: 1
                }
            })
            .addTimedChild(instance2, 0, 351, {
                "0": {
                    x: 38.35,
                    y: 53.8,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "29": {
                    x: 38.707,
                    y: 53.805,
                    sy: 0.965,
                    r: -0.04
                },
                "30": {
                    x: 39.048,
                    y: 53.845,
                    sy: 0.929,
                    r: -0.084
                },
                "31": {
                    x: 39.393,
                    y: 53.911,
                    sy: 0.894,
                    r: -0.128
                },
                "32": {
                    x: 39.791,
                    y: 53.915,
                    sx: 0.999,
                    sy: 0.858,
                    r: -0.171
                },
                "33": {
                    x: 40.288,
                    y: 54.027,
                    sy: 0.823,
                    r: -0.215
                },
                "34": {
                    x: 40.8,
                    y: 54.05,
                    sx: 1,
                    sy: 0.788,
                    r: -0.262
                },
                "35": {
                    x: 39.824,
                    y: 55.882,
                    sx: 0.999,
                    sy: 0.759,
                    r: -0.154
                },
                "36": {
                    x: 38.792,
                    y: 57.748,
                    sx: 1,
                    sy: 0.73,
                    r: -0.049
                },
                "37": {
                    x: 37.695,
                    y: 59.702,
                    sy: 0.702,
                    r: 0.049
                },
                "38": {
                    x: 36.65,
                    y: 61.771,
                    sx: 0.999,
                    sy: 0.673,
                    r: 0.154
                },
                "39": {
                    x: 35.6,
                    y: 63.85,
                    sx: 1,
                    sy: 0.644,
                    r: 0.262
                },
                "40": {
                    x: 36.611,
                    y: 60.626,
                    sx: 1.018,
                    sy: 0.783,
                    r: 0.215
                },
                "41": {
                    x: 37.521,
                    y: 57.304,
                    sx: 1.036,
                    sy: 0.922,
                    r: 0.171
                },
                "42": {
                    x: 38.294,
                    y: 54.069,
                    sx: 1.054,
                    sy: 1.061,
                    r: 0.128
                },
                "43": {
                    x: 38.824,
                    y: 50.757,
                    sx: 1.073,
                    sy: 1.2,
                    r: 0.084
                },
                "44": {
                    x: 39.309,
                    y: 47.504,
                    sx: 1.091,
                    sy: 1.339,
                    r: 0.04
                },
                "45": {
                    x: 39.7,
                    y: 44.2,
                    sx: 1.11,
                    sy: 1.478,
                    r: 0
                },
                "46": {
                    x: 39.563,
                    y: 45.644,
                    sx: 1.097,
                    sy: 1.406
                },
                "47": {
                    x: 39.478,
                    y: 47.089,
                    sx: 1.085,
                    sy: 1.334
                },
                "48": {
                    x: 39.292,
                    y: 48.484,
                    sx: 1.073,
                    sy: 1.262
                },
                "49": {
                    x: 39.106,
                    y: 49.879,
                    sx: 1.061,
                    sy: 1.19
                },
                "50": {
                    x: 39.02,
                    y: 51.375,
                    sx: 1.049,
                    sy: 1.118
                },
                "51": {
                    x: 38.834,
                    y: 52.77,
                    sx: 1.037,
                    sy: 1.046
                },
                "52": {
                    x: 38.698,
                    y: 54.166,
                    sx: 1.024,
                    sy: 0.974
                },
                "53": {
                    x: 38.563,
                    y: 55.611,
                    sx: 1.012,
                    sy: 0.902
                },
                "54": {
                    x: 38.35,
                    y: 57,
                    sx: 1,
                    sy: 0.83
                },
                "55": {
                    x: 38.349,
                    y: 56.391,
                    sy: 0.864
                },
                "56": {
                    y: 55.784,
                    sy: 0.898
                },
                "57": {
                    y: 55.075,
                    sy: 0.932
                },
                "58": {
                    y: 54.467,
                    sy: 0.966
                },
                "59": {
                    x: 38.35,
                    y: 53.8,
                    sy: 1
                }
            })
            .addTimedChild(instance1, 0, 351, {
                "0": {
                    x: 11.85,
                    y: 0,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "29": {
                    x: 10.489,
                    y: 3.322,
                    sy: 0.965,
                    r: -0.04
                },
                "30": {
                    x: 9.155,
                    y: 6.656,
                    sy: 0.929,
                    r: -0.084
                },
                "31": {
                    x: 7.899,
                    y: 9.942,
                    sy: 0.894,
                    r: -0.128
                },
                "32": {
                    x: 6.62,
                    y: 13.33,
                    sx: 0.999,
                    sy: 0.858,
                    r: -0.171
                },
                "33": {
                    x: 5.419,
                    y: 16.673,
                    sy: 0.823,
                    r: -0.215
                },
                "34": {
                    x: 4.25,
                    y: 20,
                    sx: 1,
                    sy: 0.788,
                    r: -0.262
                },
                "35": {
                    x: 7.056,
                    y: 20.643,
                    sx: 0.999,
                    sy: 0.759,
                    r: -0.154
                },
                "36": {
                    x: 9.91,
                    y: 21.251,
                    sx: 1,
                    sy: 0.73,
                    r: -0.049
                },
                "37": {
                    x: 12.839,
                    y: 22.051,
                    sy: 0.702,
                    r: 0.049
                },
                "38": {
                    x: 15.872,
                    y: 22.853,
                    sx: 0.999,
                    sy: 0.673,
                    r: 0.154
                },
                "39": {
                    x: 19,
                    y: 23.5,
                    sx: 1,
                    sy: 0.644,
                    r: 0.262
                },
                "40": {
                    x: 17.781,
                    y: 13.763,
                    sx: 1.018,
                    sy: 0.783,
                    r: 0.215
                },
                "41": {
                    x: 16.404,
                    y: 3.886,
                    sx: 1.036,
                    sy: 0.922,
                    r: 0.171
                },
                "42": {
                    x: 14.975,
                    y: -5.876,
                    sx: 1.054,
                    sy: 1.061,
                    r: 0.128
                },
                "43": {
                    x: 13.491,
                    y: -15.745,
                    sx: 1.073,
                    sy: 1.2,
                    r: 0.084
                },
                "44": {
                    x: 11.9,
                    y: -25.49,
                    sx: 1.091,
                    sy: 1.339,
                    r: 0.04
                },
                "45": {
                    x: 10.3,
                    y: -35.3,
                    sx: 1.11,
                    sy: 1.478,
                    r: 0
                },
                "46": {
                    x: 7.802,
                    y: -28.983,
                    sx: 1.097,
                    sy: 1.405,
                    r: -0.127
                },
                "47": {
                    x: 5.646,
                    y: -22.539,
                    sx: 1.084,
                    sy: 1.333,
                    r: -0.254
                },
                "48": {
                    x: 3.84,
                    y: -16.093,
                    sx: 1.072,
                    sy: 1.26,
                    r: -0.381
                },
                "49": {
                    x: 2.484,
                    y: -9.606,
                    sx: 1.059,
                    sy: 1.188,
                    r: -0.512
                },
                "50": {
                    x: 1.511,
                    y: -3.292,
                    sx: 1.047,
                    sy: 1.116,
                    r: -0.639
                },
                "51": {
                    x: 0.835,
                    y: 2.874,
                    sx: 1.035,
                    sy: 1.044,
                    r: -0.766
                },
                "52": {
                    x: 0.489,
                    y: 8.942,
                    sx: 1.023,
                    sy: 0.972,
                    r: -0.897
                },
                "53": {
                    x: 0.414,
                    y: 14.656,
                    sx: 1.011,
                    sy: 0.9,
                    r: -1.024
                },
                "54": {
                    x: 0.7,
                    y: 20.3,
                    sx: 1,
                    sy: 0.83,
                    r: -1.151
                },
                "55": {
                    x: 3.681,
                    y: 27.008,
                    sy: 0.864,
                    r: -1.601
                },
                "56": {
                    x: 7.772,
                    y: 31.104,
                    sx: 0.999,
                    sy: 0.897,
                    r: -2.052
                },
                "57": {
                    x: 11.989,
                    y: 32.489,
                    sx: 0.998,
                    sy: 0.93,
                    r: -2.503
                },
                "58": {
                    x: 15.008,
                    y: 31.221,
                    sx: 0.999,
                    sy: 0.965,
                    r: -2.954
                },
                "59": {
                    x: 15.65,
                    y: 28.25,
                    sx: 1,
                    sy: 1,
                    kx: 3.403,
                    ky: 2.88,
                    r: 0
                },
                "60": {
                    x: 14.036,
                    y: 28.689,
                    kx: 3.246,
                    ky: 3.037
                },
                "61": {
                    x: 12.207,
                    y: 28.827,
                    kx: 0,
                    ky: 0,
                    r: -3.093
                },
                "62": {
                    x: 9.969,
                    y: 28.751,
                    sx: 0.999,
                    sy: 0.999,
                    r: -2.935
                },
                "63": {
                    x: 7.502,
                    y: 28.48,
                    r: -2.778
                },
                "64": {
                    x: 4.8,
                    y: 27.95,
                    sx: 1,
                    sy: 1,
                    r: -2.618
                },
                "331": {
                    x: 1.32,
                    y: 25.241,
                    sx: 0.998,
                    sy: 0.998,
                    r: -2.323
                },
                "332": {
                    x: -1.263,
                    y: 21.581,
                    sx: 0.999,
                    sy: 0.999,
                    r: -2.025
                },
                "333": {
                    x: -2.733,
                    y: 17.265,
                    r: -1.728
                },
                "334": {
                    x: -2.802,
                    y: 12.85,
                    sx: 1,
                    sy: 1,
                    r: -1.435
                },
                "335": {
                    x: -1.568,
                    y: 8.496,
                    sx: 0.999,
                    sy: 0.999,
                    r: -1.138
                },
                "336": {
                    x: 0.857,
                    y: 4.754,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.84
                },
                "337": {
                    x: 4.302,
                    y: 1.854,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.543
                },
                "338": {
                    x: 8.433,
                    y: 0.015,
                    r: -0.245
                },
                "339": {
                    x: 12.95,
                    y: -0.4,
                    sx: 1,
                    sy: 1,
                    r: 0.049
                },
                "340": {
                    x: 10.691,
                    y: -0.324,
                    r: -0.101
                },
                "341": {
                    x: 8.385,
                    y: 0.07,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.253
                },
                "342": {
                    x: 6.2,
                    y: 0.8,
                    sx: 1,
                    sy: 1,
                    r: -0.404
                },
                "343": {
                    x: 8.227,
                    y: 0.188,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.267
                },
                "344": {
                    x: 10.203,
                    y: -0.262,
                    sx: 1,
                    sy: 1,
                    r: -0.132
                },
                "345": {
                    x: 12.2,
                    y: -0.45,
                    r: 0.001
                }
            });
    });

    lib.gradient = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("gradient"));
        this.addChild(instance1);
    });

    lib.fireworkDot = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[36]);
        this.addChild(instance1);
    });

    lib.fireballInside = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 10
        });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 231, loop: false });
        var instance2 = new lib.fireballInside();
        var instance3 = new lib.fireballInside();
        var instance4 = new lib.fireballInside();
        var instance5 = new lib.fireballInside();
        var instance6 = new lib.fireballInside();
        var instance7 = new lib.fireballInside();
        var instance8 = new lib.fireballInside();
        var instance9 = new lib.fireballInside();
        var instance10 = new lib.fireballInside();
        var instance27 = new lib.fireballInside();
        var instance26 = new lib.fireballInside();
        var instance25 = new lib.fireballInside();
        var instance24 = new lib.fireballInside();
        var instance23 = new lib.fireballInside();
        var instance22 = new lib.fireballInside();
        var instance21 = new lib.fireballInside();
        var instance42 = new Graphic18(MovieClip.SYNCHED);
        var instance41 = new Graphic17(MovieClip.SYNCHED);
        var instance40 = new Graphic16(MovieClip.SYNCHED);
        var instance39 = new Graphic15(MovieClip.SYNCHED);
        var instance38 = new Graphic14(MovieClip.SYNCHED);
        var instance37 = new Graphic13(MovieClip.SYNCHED);
        var instance35 = new Graphic12(MovieClip.SYNCHED);
        var instance20 = new lib.fireballInside();
        var instance18 = new lib.fireballInside();
        var instance17 = new lib.fireballInside();
        var instance16 = new lib.fireballInside();
        var instance15 = new lib.fireballInside();
        var instance14 = new lib.fireballInside();
        var instance13 = new lib.fireballInside();
        var instance12 = new lib.fireballInside();
        var instance36 = new Graphic11(MovieClip.SYNCHED);
        var instance34 = new Graphic10(MovieClip.SYNCHED);
        var instance33 = new Graphic9(MovieClip.SYNCHED);
        var instance32 = new Graphic8(MovieClip.SYNCHED);
        var instance31 = new Graphic7(MovieClip.SYNCHED);
        var instance30 = new Graphic6(MovieClip.SYNCHED);
        var instance29 = new Graphic5(MovieClip.SYNCHED);
        var instance19 = new Graphic4(MovieClip.SYNCHED);
        var instance1 = new lib.fireballInside();
        var instance28 = new Graphic3(MovieClip.SYNCHED);
        var instance50 = new lib.fireballInside();
        var instance49 = new lib.fireballInside();
        var instance48 = new lib.fireballInside();
        var instance47 = new lib.fireballInside();
        var instance46 = new lib.fireballInside();
        var instance45 = new lib.fireballInside();
        var instance44 = new lib.fireballInside();
        var instance43 = new lib.fireballInside();
        var instance58 = new lib.fireballInside();
        var instance57 = new lib.fireballInside();
        var instance56 = new lib.fireballInside();
        var instance55 = new lib.fireballInside();
        var instance54 = new lib.fireballInside();
        var instance53 = new lib.fireballInside();
        var instance52 = new lib.fireballInside();
        var instance51 = new lib.fireballInside();
        var instance11 = new lib.gradient();
        this.addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "1": {
                    y: 2.4,
                    a: 0.95
                },
                "2": {
                    y: 4.85,
                    a: 0.9
                },
                "3": {
                    y: 7.25,
                    a: 0.85
                },
                "4": {
                    y: 9.7,
                    a: 0.8
                },
                "5": {
                    y: 11.65,
                    a: 0.74
                },
                "6": {
                    y: 13.6,
                    a: 0.68
                },
                "7": {
                    y: 15.55,
                    a: 0.62
                },
                "8": {
                    y: 17.5,
                    a: 0.56
                },
                "9": {
                    y: 19.45,
                    a: 0.5
                },
                "10": {
                    y: 22.05,
                    a: 0.46
                },
                "11": {
                    y: 24.65,
                    a: 0.42
                },
                "12": {
                    y: 27.25,
                    a: 0.38
                },
                "13": {
                    y: 29.85,
                    a: 0.34
                },
                "14": {
                    y: 32.45,
                    a: 0.3
                },
                "15": {
                    y: 35.7,
                    a: 0.24
                },
                "16": {
                    y: 38.95,
                    a: 0.18
                },
                "17": {
                    y: 42.2,
                    a: 0.12
                },
                "18": {
                    y: 45.45,
                    a: 0.06
                },
                "19": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance3, 4, 20, {
                "4": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "5": {
                    y: 2.4,
                    a: 0.95
                },
                "6": {
                    y: 4.85,
                    a: 0.9
                },
                "7": {
                    y: 7.25,
                    a: 0.85
                },
                "8": {
                    y: 9.7,
                    a: 0.8
                },
                "9": {
                    y: 11.65,
                    a: 0.74
                },
                "10": {
                    y: 13.6,
                    a: 0.68
                },
                "11": {
                    y: 15.55,
                    a: 0.62
                },
                "12": {
                    y: 17.5,
                    a: 0.56
                },
                "13": {
                    y: 19.45,
                    a: 0.5
                },
                "14": {
                    y: 22.05,
                    a: 0.46
                },
                "15": {
                    y: 24.65,
                    a: 0.42
                },
                "16": {
                    y: 27.25,
                    a: 0.38
                },
                "17": {
                    y: 29.85,
                    a: 0.34
                },
                "18": {
                    y: 32.45,
                    a: 0.3
                },
                "19": {
                    y: 35.7,
                    a: 0.24
                },
                "20": {
                    y: 38.95,
                    a: 0.18
                },
                "21": {
                    y: 42.2,
                    a: 0.12
                },
                "22": {
                    y: 45.45,
                    a: 0.06
                },
                "23": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance4, 8, 20, {
                "8": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "9": {
                    y: 2.4,
                    a: 0.95
                },
                "10": {
                    y: 4.85,
                    a: 0.9
                },
                "11": {
                    y: 7.25,
                    a: 0.85
                },
                "12": {
                    y: 9.7,
                    a: 0.8
                },
                "13": {
                    y: 11.65,
                    a: 0.74
                },
                "14": {
                    y: 13.6,
                    a: 0.68
                },
                "15": {
                    y: 15.55,
                    a: 0.62
                },
                "16": {
                    y: 17.5,
                    a: 0.56
                },
                "17": {
                    y: 19.45,
                    a: 0.5
                },
                "18": {
                    y: 22.05,
                    a: 0.46
                },
                "19": {
                    y: 24.65,
                    a: 0.42
                },
                "20": {
                    y: 27.25,
                    a: 0.38
                },
                "21": {
                    y: 29.85,
                    a: 0.34
                },
                "22": {
                    y: 32.45,
                    a: 0.3
                },
                "23": {
                    y: 35.7,
                    a: 0.24
                },
                "24": {
                    y: 38.95,
                    a: 0.18
                },
                "25": {
                    y: 42.2,
                    a: 0.12
                },
                "26": {
                    y: 45.45,
                    a: 0.06
                },
                "27": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance5, 12, 20, {
                "12": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "13": {
                    y: 2.4,
                    a: 0.95
                },
                "14": {
                    y: 4.85,
                    a: 0.9
                },
                "15": {
                    y: 7.25,
                    a: 0.85
                },
                "16": {
                    y: 9.7,
                    a: 0.8
                },
                "17": {
                    y: 11.65,
                    a: 0.74
                },
                "18": {
                    y: 13.6,
                    a: 0.68
                },
                "19": {
                    y: 15.55,
                    a: 0.62
                },
                "20": {
                    y: 17.5,
                    a: 0.56
                },
                "21": {
                    y: 19.45,
                    a: 0.5
                },
                "22": {
                    y: 22.05,
                    a: 0.46
                },
                "23": {
                    y: 24.65,
                    a: 0.42
                },
                "24": {
                    y: 27.25,
                    a: 0.38
                },
                "25": {
                    y: 29.85,
                    a: 0.34
                },
                "26": {
                    y: 32.45,
                    a: 0.3
                },
                "27": {
                    y: 35.7,
                    a: 0.24
                },
                "28": {
                    y: 38.95,
                    a: 0.18
                },
                "29": {
                    y: 42.2,
                    a: 0.12
                },
                "30": {
                    y: 45.45,
                    a: 0.06
                },
                "31": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance6, 16, 20, {
                "16": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "17": {
                    y: 2.4,
                    a: 0.95
                },
                "18": {
                    y: 4.85,
                    a: 0.9
                },
                "19": {
                    y: 7.25,
                    a: 0.85
                },
                "20": {
                    y: 9.7,
                    a: 0.8
                },
                "21": {
                    y: 11.65,
                    a: 0.74
                },
                "22": {
                    y: 13.6,
                    a: 0.68
                },
                "23": {
                    y: 15.55,
                    a: 0.62
                },
                "24": {
                    y: 17.5,
                    a: 0.56
                },
                "25": {
                    y: 19.45,
                    a: 0.5
                },
                "26": {
                    y: 22.05,
                    a: 0.46
                },
                "27": {
                    y: 24.65,
                    a: 0.42
                },
                "28": {
                    y: 27.25,
                    a: 0.38
                },
                "29": {
                    y: 29.85,
                    a: 0.34
                },
                "30": {
                    y: 32.45,
                    a: 0.3
                },
                "31": {
                    y: 35.7,
                    a: 0.24
                },
                "32": {
                    y: 38.95,
                    a: 0.18
                },
                "33": {
                    y: 42.2,
                    a: 0.12
                },
                "34": {
                    y: 45.45,
                    a: 0.06
                },
                "35": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance7, 20, 20, {
                "20": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "21": {
                    y: 2.4,
                    a: 0.95
                },
                "22": {
                    y: 4.85,
                    a: 0.9
                },
                "23": {
                    y: 7.25,
                    a: 0.85
                },
                "24": {
                    y: 9.7,
                    a: 0.8
                },
                "25": {
                    y: 11.65,
                    a: 0.74
                },
                "26": {
                    y: 13.6,
                    a: 0.68
                },
                "27": {
                    y: 15.55,
                    a: 0.62
                },
                "28": {
                    y: 17.5,
                    a: 0.56
                },
                "29": {
                    y: 19.45,
                    a: 0.5
                },
                "30": {
                    y: 22.05,
                    a: 0.46
                },
                "31": {
                    y: 24.65,
                    a: 0.42
                },
                "32": {
                    y: 27.25,
                    a: 0.38
                },
                "33": {
                    y: 29.85,
                    a: 0.34
                },
                "34": {
                    y: 32.45,
                    a: 0.3
                },
                "35": {
                    y: 35.7,
                    a: 0.24
                },
                "36": {
                    y: 38.95,
                    a: 0.18
                },
                "37": {
                    y: 42.2,
                    a: 0.12
                },
                "38": {
                    y: 45.45,
                    a: 0.06
                },
                "39": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance8, 24, 20, {
                "24": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "25": {
                    y: 2.4,
                    a: 0.95
                },
                "26": {
                    y: 4.85,
                    a: 0.9
                },
                "27": {
                    y: 7.25,
                    a: 0.85
                },
                "28": {
                    y: 9.7,
                    a: 0.8
                },
                "29": {
                    y: 11.65,
                    a: 0.74
                },
                "30": {
                    y: 13.6,
                    a: 0.68
                },
                "31": {
                    y: 15.55,
                    a: 0.62
                },
                "32": {
                    y: 17.5,
                    a: 0.56
                },
                "33": {
                    y: 19.45,
                    a: 0.5
                },
                "34": {
                    y: 22.05,
                    a: 0.46
                },
                "35": {
                    y: 24.65,
                    a: 0.42
                },
                "36": {
                    y: 27.25,
                    a: 0.38
                },
                "37": {
                    y: 29.85,
                    a: 0.34
                },
                "38": {
                    y: 32.45,
                    a: 0.3
                },
                "39": {
                    y: 35.7,
                    a: 0.24
                },
                "40": {
                    y: 38.95,
                    a: 0.18
                },
                "41": {
                    y: 42.2,
                    a: 0.12
                },
                "42": {
                    y: 45.45,
                    a: 0.06
                },
                "43": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance9, 28, 22, {
                "28": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "29": {
                    y: 2.4,
                    a: 0.95
                },
                "30": {
                    y: 4.85,
                    a: 0.9
                },
                "31": {
                    y: 7.25,
                    a: 0.85
                },
                "32": {
                    y: 9.7,
                    a: 0.8
                },
                "33": {
                    y: 11.65,
                    a: 0.74
                },
                "34": {
                    y: 13.6,
                    a: 0.68
                },
                "35": {
                    y: 15.55,
                    a: 0.62
                },
                "36": {
                    y: 17.5,
                    a: 0.56
                },
                "37": {
                    y: 19.45,
                    a: 0.5
                },
                "38": {
                    y: 22.05,
                    a: 0.46
                },
                "39": {
                    y: 24.65,
                    a: 0.42
                },
                "40": {
                    y: 27.25,
                    a: 0.38
                },
                "41": {
                    y: 29.85,
                    a: 0.34
                },
                "42": {
                    y: 32.45,
                    a: 0.3
                },
                "43": {
                    y: 35.7,
                    a: 0.24
                },
                "44": {
                    y: 38.95,
                    a: 0.18
                },
                "45": {
                    y: 42.2,
                    a: 0.12
                },
                "46": {
                    y: 45.45,
                    a: 0.06
                },
                "47": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance10, 32, 18, {
                "32": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "33": {
                    y: 2.4,
                    a: 0.95
                },
                "34": {
                    y: 4.85,
                    a: 0.9
                },
                "35": {
                    y: 7.25,
                    a: 0.85
                },
                "36": {
                    y: 9.7,
                    a: 0.8
                },
                "37": {
                    y: 11.65,
                    a: 0.74
                },
                "38": {
                    y: 13.6,
                    a: 0.68
                },
                "39": {
                    y: 15.55,
                    a: 0.62
                },
                "40": {
                    y: 17.5,
                    a: 0.56
                },
                "41": {
                    y: 19.45,
                    a: 0.5
                },
                "42": {
                    y: 22.05,
                    a: 0.46
                },
                "43": {
                    y: 24.65,
                    a: 0.42
                },
                "44": {
                    y: 27.25,
                    a: 0.38
                },
                "45": {
                    y: 29.85,
                    a: 0.34
                },
                "46": {
                    y: 32.45,
                    a: 0.3
                },
                "47": {
                    y: 37.85,
                    a: 0.2
                },
                "48": {
                    y: 43.3,
                    a: 0.1
                },
                "49": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance27, 64, 10, {
                "64": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: -2.3
                },
                "66": {
                    x: -8.95
                },
                "67": {
                    x: -15.65
                },
                "68": {
                    x: -22.35
                },
                "69": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance26, 64, 10, {
                "64": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: 6.8,
                    y: -1.8
                },
                "66": {
                    x: 12.45,
                    y: -1.55
                },
                "67": {
                    x: 18.1,
                    y: -1.35
                },
                "68": {
                    x: 23.7,
                    y: -1.15
                },
                "69": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance25, 64, 10, {
                "64": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: 1.05,
                    y: 8.2
                },
                "66": {
                    x: 1.35,
                    y: 13
                },
                "67": {
                    x: 1.6,
                    y: 17.75
                },
                "68": {
                    x: 1.8,
                    y: 22.5
                },
                "69": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance24, 64, 10, {
                "64": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: 2.8,
                    y: -6
                },
                "66": {
                    x: 2.35,
                    y: -12.2
                },
                "67": {
                    x: 1.95,
                    y: -18.45
                },
                "68": {
                    x: 1.45,
                    y: -24.65
                },
                "69": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance23, 64, 10, {
                "64": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "65": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "66": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "67": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "68": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "69": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance22, 64, 10, {
                "64": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "65": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "66": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "67": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "68": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "69": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance21, 64, 4, {
                "64": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "65": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "66": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "67": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance42, 74, 9, {
                "74": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance41, 74, 9, {
                "74": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance40, 74, 9, {
                "74": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance39, 74, 9, {
                "74": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance38, 74, 9, {
                "74": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance37, 74, 9, {
                "74": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance35, 68, 15, {
                "68": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "69": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "74": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "75": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance20, 64, 10, {
                "64": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: -3.9,
                    y: -4.15
                },
                "66": {
                    x: -7.6,
                    y: -8.7
                },
                "67": {
                    x: -11.3,
                    y: -13.3
                },
                "68": {
                    x: -15.05,
                    y: -17.9
                },
                "69": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance18, 58, 10, {
                "58": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: -2.3
                },
                "60": {
                    x: -8.95
                },
                "61": {
                    x: -15.65
                },
                "62": {
                    x: -22.35
                },
                "63": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance17, 58, 10, {
                "58": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: 6.8,
                    y: -1.8
                },
                "60": {
                    x: 12.45,
                    y: -1.55
                },
                "61": {
                    x: 18.1,
                    y: -1.35
                },
                "62": {
                    x: 23.7,
                    y: -1.15
                },
                "63": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance16, 58, 10, {
                "58": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: 1.05,
                    y: 8.2
                },
                "60": {
                    x: 1.35,
                    y: 13
                },
                "61": {
                    x: 1.6,
                    y: 17.75
                },
                "62": {
                    x: 1.8,
                    y: 22.5
                },
                "63": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance15, 58, 10, {
                "58": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: 2.8,
                    y: -6
                },
                "60": {
                    x: 2.35,
                    y: -12.2
                },
                "61": {
                    x: 1.95,
                    y: -18.45
                },
                "62": {
                    x: 1.45,
                    y: -24.65
                },
                "63": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance14, 58, 10, {
                "58": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "59": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "60": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "61": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "62": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "63": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance13, 58, 10, {
                "58": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "59": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "60": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "61": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "62": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "63": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance12, 58, 4, {
                "58": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "59": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "60": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "61": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance36, 74, 9, {
                "74": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance34, 68, 9, {
                "68": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance33, 68, 9, {
                "68": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance32, 68, 9, {
                "68": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 68, 9, {
                "68": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance30, 68, 9, {
                "68": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance29, 68, 9, {
                "68": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance19, 62, 15, {
                "62": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "63": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "68": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "69": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance1, 0, 68, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "51": {
                    x: -1.45,
                    y: -1.45,
                    sx: 1.229,
                    sy: 1.229
                },
                "52": {
                    x: -2.95,
                    y: -2.95,
                    sx: 1.458,
                    sy: 1.458
                },
                "53": {
                    x: -4.45,
                    y: -4.45,
                    sx: 1.687,
                    sy: 1.687
                },
                "54": {
                    x: -5.95,
                    y: -5.95,
                    sx: 1.916,
                    sy: 1.916
                },
                "55": {
                    x: -7.4,
                    y: -7.4,
                    sx: 2.145,
                    sy: 2.145
                },
                "56": {
                    x: -8.9,
                    y: -8.9,
                    sx: 2.374,
                    sy: 2.374
                },
                "57": {
                    x: -10.4,
                    y: -10.4,
                    sx: 2.603,
                    sy: 2.603
                },
                "58": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: -3.9,
                    y: -4.15
                },
                "60": {
                    x: -7.6,
                    y: -8.7
                },
                "61": {
                    x: -11.3,
                    y: -13.3
                },
                "62": {
                    x: -15.05,
                    y: -17.9
                },
                "63": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance28, 68, 9, {
                "68": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance50, 77, 1, {
                "77": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance49, 77, 1, {
                "77": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance48, 77, 1, {
                "77": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance47, 77, 1, {
                "77": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance46, 77, 1, {
                "77": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance45, 77, 1, {
                "77": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance44, 77, 1, {
                "77": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance43, 77, 1, {
                "77": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance58, 83, 1, {
                "83": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance57, 83, 1, {
                "83": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance56, 83, 1, {
                "83": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance55, 83, 1, {
                "83": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance54, 83, 1, {
                "83": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance53, 83, 1, {
                "83": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance52, 83, 1, {
                "83": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance51, 83, 1, {
                "83": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance11, 58, 27, {
                "58": {
                    x: -47.75,
                    y: -45.65,
                    sx: 0.329,
                    sy: 0.329,
                    a: 1
                },
                "59": {
                    x: -65.454,
                    y: -63.357,
                    sx: 0.439,
                    sy: 0.439,
                    a: 0.96
                },
                "60": {
                    x: -83.152,
                    y: -81.058,
                    sx: 0.548,
                    sy: 0.548,
                    a: 0.92
                },
                "61": {
                    x: -100.857,
                    y: -98.765,
                    sx: 0.657,
                    sy: 0.657,
                    a: 0.88
                },
                "62": {
                    x: -118.555,
                    y: -116.466,
                    sx: 0.767,
                    sy: 0.767,
                    a: 0.85
                },
                "63": {
                    x: -136.259,
                    y: -134.124,
                    sx: 0.876,
                    sy: 0.876,
                    a: 0.81
                },
                "64": {
                    x: -153.964,
                    y: -151.881,
                    sx: 0.985,
                    sy: 0.985,
                    a: 0.77
                },
                "65": {
                    x: -171.712,
                    y: -169.582,
                    sx: 1.095,
                    sy: 1.095,
                    a: 0.73
                },
                "66": {
                    x: -189.417,
                    y: -187.29,
                    sx: 1.204,
                    sy: 1.204,
                    a: 0.69
                },
                "67": {
                    x: -207.121,
                    y: -204.997,
                    sx: 1.313,
                    sy: 1.313,
                    a: 0.65
                },
                "68": {
                    x: -224.819,
                    y: -222.698,
                    sx: 1.423,
                    sy: 1.423,
                    a: 0.62
                },
                "69": {
                    x: -242.524,
                    y: -240.405,
                    sx: 1.532,
                    sy: 1.532,
                    a: 0.58
                },
                "70": {
                    x: -260.272,
                    y: -258.156,
                    sx: 1.641,
                    sy: 1.641,
                    a: 0.54
                },
                "71": {
                    x: -277.976,
                    y: -275.813,
                    sx: 1.751,
                    sy: 1.751,
                    a: 0.5
                },
                "72": {
                    x: -295.682,
                    y: -293.521,
                    sx: 1.86,
                    sy: 1.86,
                    a: 0.46
                },
                "73": {
                    x: -313.379,
                    y: -311.222,
                    sx: 1.969,
                    sy: 1.969,
                    a: 0.42
                },
                "74": {
                    x: -331.084,
                    y: -328.929,
                    sx: 2.079,
                    sy: 2.079,
                    a: 0.38
                },
                "75": {
                    x: -348.782,
                    y: -346.63,
                    sx: 2.188,
                    sy: 2.188,
                    a: 0.35
                },
                "76": {
                    x: -366.536,
                    y: -364.388,
                    sx: 2.297,
                    sy: 2.297,
                    a: 0.31
                },
                "77": {
                    x: -384.241,
                    y: -382.095,
                    sx: 2.407,
                    sy: 2.407,
                    a: 0.27
                },
                "78": {
                    x: -401.939,
                    y: -399.796,
                    sx: 2.516,
                    sy: 2.516,
                    a: 0.23
                },
                "79": {
                    x: -419.644,
                    y: -417.504,
                    sx: 2.625,
                    sy: 2.625,
                    a: 0.19
                },
                "80": {
                    x: -437.349,
                    y: -435.161,
                    sx: 2.735,
                    sy: 2.735,
                    a: 0.15
                },
                "81": {
                    x: -455.047,
                    y: -452.862,
                    sx: 2.844,
                    sy: 2.844,
                    a: 0.12
                },
                "82": {
                    x: -472.801,
                    y: -470.619,
                    sx: 2.953,
                    sy: 2.953,
                    a: 0.08
                },
                "83": {
                    x: -490.499,
                    y: -488.32,
                    sx: 3.062,
                    sy: 3.062,
                    a: 0.04
                },
                "84": {
                    x: -508.25,
                    y: -506.15,
                    sx: 3.172,
                    sy: 3.172,
                    a: 0
                }
            });
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic26 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic27 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic34 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 241, loop: false });
        var instance2 = new lib.fireballInside();
        var instance3 = new lib.fireballInside();
        var instance4 = new lib.fireballInside();
        var instance5 = new lib.fireballInside();
        var instance6 = new lib.fireballInside();
        var instance7 = new lib.fireballInside();
        var instance8 = new lib.fireballInside();
        var instance9 = new lib.fireballInside();
        var instance10 = new lib.fireballInside();
        var instance27 = new lib.fireballInside();
        var instance26 = new lib.fireballInside();
        var instance25 = new lib.fireballInside();
        var instance24 = new lib.fireballInside();
        var instance23 = new lib.fireballInside();
        var instance22 = new lib.fireballInside();
        var instance21 = new lib.fireballInside();
        var instance42 = new Graphic35(MovieClip.SYNCHED);
        var instance41 = new Graphic34(MovieClip.SYNCHED);
        var instance40 = new Graphic33(MovieClip.SYNCHED);
        var instance39 = new Graphic32(MovieClip.SYNCHED);
        var instance38 = new Graphic31(MovieClip.SYNCHED);
        var instance37 = new Graphic30(MovieClip.SYNCHED);
        var instance35 = new Graphic29(MovieClip.SYNCHED);
        var instance20 = new lib.fireballInside();
        var instance18 = new lib.fireballInside();
        var instance17 = new lib.fireballInside();
        var instance16 = new lib.fireballInside();
        var instance15 = new lib.fireballInside();
        var instance14 = new lib.fireballInside();
        var instance13 = new lib.fireballInside();
        var instance12 = new lib.fireballInside();
        var instance36 = new Graphic28(MovieClip.SYNCHED);
        var instance34 = new Graphic27(MovieClip.SYNCHED);
        var instance33 = new Graphic26(MovieClip.SYNCHED);
        var instance32 = new Graphic25(MovieClip.SYNCHED);
        var instance31 = new Graphic24(MovieClip.SYNCHED);
        var instance30 = new Graphic23(MovieClip.SYNCHED);
        var instance29 = new Graphic22(MovieClip.SYNCHED);
        var instance19 = new Graphic21(MovieClip.SYNCHED);
        var instance1 = new lib.fireballInside();
        var instance28 = new Graphic20(MovieClip.SYNCHED);
        var instance50 = new lib.fireballInside();
        var instance49 = new lib.fireballInside();
        var instance48 = new lib.fireballInside();
        var instance47 = new lib.fireballInside();
        var instance46 = new lib.fireballInside();
        var instance45 = new lib.fireballInside();
        var instance44 = new lib.fireballInside();
        var instance43 = new lib.fireballInside();
        var instance58 = new lib.fireballInside();
        var instance57 = new lib.fireballInside();
        var instance56 = new lib.fireballInside();
        var instance55 = new lib.fireballInside();
        var instance54 = new lib.fireballInside();
        var instance53 = new lib.fireballInside();
        var instance52 = new lib.fireballInside();
        var instance51 = new lib.fireballInside();
        var instance11 = new lib.gradient();
        this.addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "1": {
                    y: 2.4,
                    a: 0.95
                },
                "2": {
                    y: 4.85,
                    a: 0.9
                },
                "3": {
                    y: 7.25,
                    a: 0.85
                },
                "4": {
                    y: 9.7,
                    a: 0.8
                },
                "5": {
                    y: 11.65,
                    a: 0.74
                },
                "6": {
                    y: 13.6,
                    a: 0.68
                },
                "7": {
                    y: 15.55,
                    a: 0.62
                },
                "8": {
                    y: 17.5,
                    a: 0.56
                },
                "9": {
                    y: 19.45,
                    a: 0.5
                },
                "10": {
                    y: 22.05,
                    a: 0.46
                },
                "11": {
                    y: 24.65,
                    a: 0.42
                },
                "12": {
                    y: 27.25,
                    a: 0.38
                },
                "13": {
                    y: 29.85,
                    a: 0.34
                },
                "14": {
                    y: 32.45,
                    a: 0.3
                },
                "15": {
                    y: 35.7,
                    a: 0.24
                },
                "16": {
                    y: 38.95,
                    a: 0.18
                },
                "17": {
                    y: 42.2,
                    a: 0.12
                },
                "18": {
                    y: 45.45,
                    a: 0.06
                },
                "19": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance3, 4, 20, {
                "4": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "5": {
                    y: 2.4,
                    a: 0.95
                },
                "6": {
                    y: 4.85,
                    a: 0.9
                },
                "7": {
                    y: 7.25,
                    a: 0.85
                },
                "8": {
                    y: 9.7,
                    a: 0.8
                },
                "9": {
                    y: 11.65,
                    a: 0.74
                },
                "10": {
                    y: 13.6,
                    a: 0.68
                },
                "11": {
                    y: 15.55,
                    a: 0.62
                },
                "12": {
                    y: 17.5,
                    a: 0.56
                },
                "13": {
                    y: 19.45,
                    a: 0.5
                },
                "14": {
                    y: 22.05,
                    a: 0.46
                },
                "15": {
                    y: 24.65,
                    a: 0.42
                },
                "16": {
                    y: 27.25,
                    a: 0.38
                },
                "17": {
                    y: 29.85,
                    a: 0.34
                },
                "18": {
                    y: 32.45,
                    a: 0.3
                },
                "19": {
                    y: 35.7,
                    a: 0.24
                },
                "20": {
                    y: 38.95,
                    a: 0.18
                },
                "21": {
                    y: 42.2,
                    a: 0.12
                },
                "22": {
                    y: 45.45,
                    a: 0.06
                },
                "23": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance4, 8, 20, {
                "8": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "9": {
                    y: 2.4,
                    a: 0.95
                },
                "10": {
                    y: 4.85,
                    a: 0.9
                },
                "11": {
                    y: 7.25,
                    a: 0.85
                },
                "12": {
                    y: 9.7,
                    a: 0.8
                },
                "13": {
                    y: 11.65,
                    a: 0.74
                },
                "14": {
                    y: 13.6,
                    a: 0.68
                },
                "15": {
                    y: 15.55,
                    a: 0.62
                },
                "16": {
                    y: 17.5,
                    a: 0.56
                },
                "17": {
                    y: 19.45,
                    a: 0.5
                },
                "18": {
                    y: 22.05,
                    a: 0.46
                },
                "19": {
                    y: 24.65,
                    a: 0.42
                },
                "20": {
                    y: 27.25,
                    a: 0.38
                },
                "21": {
                    y: 29.85,
                    a: 0.34
                },
                "22": {
                    y: 32.45,
                    a: 0.3
                },
                "23": {
                    y: 35.7,
                    a: 0.24
                },
                "24": {
                    y: 38.95,
                    a: 0.18
                },
                "25": {
                    y: 42.2,
                    a: 0.12
                },
                "26": {
                    y: 45.45,
                    a: 0.06
                },
                "27": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance5, 12, 20, {
                "12": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "13": {
                    y: 2.4,
                    a: 0.95
                },
                "14": {
                    y: 4.85,
                    a: 0.9
                },
                "15": {
                    y: 7.25,
                    a: 0.85
                },
                "16": {
                    y: 9.7,
                    a: 0.8
                },
                "17": {
                    y: 11.65,
                    a: 0.74
                },
                "18": {
                    y: 13.6,
                    a: 0.68
                },
                "19": {
                    y: 15.55,
                    a: 0.62
                },
                "20": {
                    y: 17.5,
                    a: 0.56
                },
                "21": {
                    y: 19.45,
                    a: 0.5
                },
                "22": {
                    y: 22.05,
                    a: 0.46
                },
                "23": {
                    y: 24.65,
                    a: 0.42
                },
                "24": {
                    y: 27.25,
                    a: 0.38
                },
                "25": {
                    y: 29.85,
                    a: 0.34
                },
                "26": {
                    y: 32.45,
                    a: 0.3
                },
                "27": {
                    y: 35.7,
                    a: 0.24
                },
                "28": {
                    y: 38.95,
                    a: 0.18
                },
                "29": {
                    y: 42.2,
                    a: 0.12
                },
                "30": {
                    y: 45.45,
                    a: 0.06
                },
                "31": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance6, 16, 20, {
                "16": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "17": {
                    y: 2.4,
                    a: 0.95
                },
                "18": {
                    y: 4.85,
                    a: 0.9
                },
                "19": {
                    y: 7.25,
                    a: 0.85
                },
                "20": {
                    y: 9.7,
                    a: 0.8
                },
                "21": {
                    y: 11.65,
                    a: 0.74
                },
                "22": {
                    y: 13.6,
                    a: 0.68
                },
                "23": {
                    y: 15.55,
                    a: 0.62
                },
                "24": {
                    y: 17.5,
                    a: 0.56
                },
                "25": {
                    y: 19.45,
                    a: 0.5
                },
                "26": {
                    y: 22.05,
                    a: 0.46
                },
                "27": {
                    y: 24.65,
                    a: 0.42
                },
                "28": {
                    y: 27.25,
                    a: 0.38
                },
                "29": {
                    y: 29.85,
                    a: 0.34
                },
                "30": {
                    y: 32.45,
                    a: 0.3
                },
                "31": {
                    y: 35.7,
                    a: 0.24
                },
                "32": {
                    y: 38.95,
                    a: 0.18
                },
                "33": {
                    y: 42.2,
                    a: 0.12
                },
                "34": {
                    y: 45.45,
                    a: 0.06
                },
                "35": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance7, 20, 20, {
                "20": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "21": {
                    y: 2.4,
                    a: 0.95
                },
                "22": {
                    y: 4.85,
                    a: 0.9
                },
                "23": {
                    y: 7.25,
                    a: 0.85
                },
                "24": {
                    y: 9.7,
                    a: 0.8
                },
                "25": {
                    y: 11.65,
                    a: 0.74
                },
                "26": {
                    y: 13.6,
                    a: 0.68
                },
                "27": {
                    y: 15.55,
                    a: 0.62
                },
                "28": {
                    y: 17.5,
                    a: 0.56
                },
                "29": {
                    y: 19.45,
                    a: 0.5
                },
                "30": {
                    y: 22.05,
                    a: 0.46
                },
                "31": {
                    y: 24.65,
                    a: 0.42
                },
                "32": {
                    y: 27.25,
                    a: 0.38
                },
                "33": {
                    y: 29.85,
                    a: 0.34
                },
                "34": {
                    y: 32.45,
                    a: 0.3
                },
                "35": {
                    y: 35.7,
                    a: 0.24
                },
                "36": {
                    y: 38.95,
                    a: 0.18
                },
                "37": {
                    y: 42.2,
                    a: 0.12
                },
                "38": {
                    y: 45.45,
                    a: 0.06
                },
                "39": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance8, 24, 20, {
                "24": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "25": {
                    y: 2.4,
                    a: 0.95
                },
                "26": {
                    y: 4.85,
                    a: 0.9
                },
                "27": {
                    y: 7.25,
                    a: 0.85
                },
                "28": {
                    y: 9.7,
                    a: 0.8
                },
                "29": {
                    y: 11.65,
                    a: 0.74
                },
                "30": {
                    y: 13.6,
                    a: 0.68
                },
                "31": {
                    y: 15.55,
                    a: 0.62
                },
                "32": {
                    y: 17.5,
                    a: 0.56
                },
                "33": {
                    y: 19.45,
                    a: 0.5
                },
                "34": {
                    y: 22.05,
                    a: 0.46
                },
                "35": {
                    y: 24.65,
                    a: 0.42
                },
                "36": {
                    y: 27.25,
                    a: 0.38
                },
                "37": {
                    y: 29.85,
                    a: 0.34
                },
                "38": {
                    y: 32.45,
                    a: 0.3
                },
                "39": {
                    y: 35.7,
                    a: 0.24
                },
                "40": {
                    y: 38.95,
                    a: 0.18
                },
                "41": {
                    y: 42.2,
                    a: 0.12
                },
                "42": {
                    y: 45.45,
                    a: 0.06
                },
                "43": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance9, 28, 22, {
                "28": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "29": {
                    y: 2.4,
                    a: 0.95
                },
                "30": {
                    y: 4.85,
                    a: 0.9
                },
                "31": {
                    y: 7.25,
                    a: 0.85
                },
                "32": {
                    y: 9.7,
                    a: 0.8
                },
                "33": {
                    y: 11.65,
                    a: 0.74
                },
                "34": {
                    y: 13.6,
                    a: 0.68
                },
                "35": {
                    y: 15.55,
                    a: 0.62
                },
                "36": {
                    y: 17.5,
                    a: 0.56
                },
                "37": {
                    y: 19.45,
                    a: 0.5
                },
                "38": {
                    y: 22.05,
                    a: 0.46
                },
                "39": {
                    y: 24.65,
                    a: 0.42
                },
                "40": {
                    y: 27.25,
                    a: 0.38
                },
                "41": {
                    y: 29.85,
                    a: 0.34
                },
                "42": {
                    y: 32.45,
                    a: 0.3
                },
                "43": {
                    y: 35.7,
                    a: 0.24
                },
                "44": {
                    y: 38.95,
                    a: 0.18
                },
                "45": {
                    y: 42.2,
                    a: 0.12
                },
                "46": {
                    y: 45.45,
                    a: 0.06
                },
                "47": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance10, 32, 18, {
                "32": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "33": {
                    y: 2.4,
                    a: 0.95
                },
                "34": {
                    y: 4.85,
                    a: 0.9
                },
                "35": {
                    y: 7.25,
                    a: 0.85
                },
                "36": {
                    y: 9.7,
                    a: 0.8
                },
                "37": {
                    y: 11.65,
                    a: 0.74
                },
                "38": {
                    y: 13.6,
                    a: 0.68
                },
                "39": {
                    y: 15.55,
                    a: 0.62
                },
                "40": {
                    y: 17.5,
                    a: 0.56
                },
                "41": {
                    y: 19.45,
                    a: 0.5
                },
                "42": {
                    y: 22.05,
                    a: 0.46
                },
                "43": {
                    y: 24.65,
                    a: 0.42
                },
                "44": {
                    y: 27.25,
                    a: 0.38
                },
                "45": {
                    y: 29.85,
                    a: 0.34
                },
                "46": {
                    y: 32.45,
                    a: 0.3
                },
                "47": {
                    y: 37.85,
                    a: 0.2
                },
                "48": {
                    y: 43.3,
                    a: 0.1
                },
                "49": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance27, 61, 10, {
                "61": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: -2.3
                },
                "63": {
                    x: -8.95
                },
                "64": {
                    x: -15.65
                },
                "65": {
                    x: -22.35
                },
                "66": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance26, 61, 10, {
                "61": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: 6.8,
                    y: -1.8
                },
                "63": {
                    x: 12.45,
                    y: -1.55
                },
                "64": {
                    x: 18.1,
                    y: -1.35
                },
                "65": {
                    x: 23.7,
                    y: -1.15
                },
                "66": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance25, 61, 10, {
                "61": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: 1.05,
                    y: 8.2
                },
                "63": {
                    x: 1.35,
                    y: 13
                },
                "64": {
                    x: 1.6,
                    y: 17.75
                },
                "65": {
                    x: 1.8,
                    y: 22.5
                },
                "66": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance24, 61, 10, {
                "61": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: 2.8,
                    y: -6
                },
                "63": {
                    x: 2.35,
                    y: -12.2
                },
                "64": {
                    x: 1.95,
                    y: -18.45
                },
                "65": {
                    x: 1.45,
                    y: -24.65
                },
                "66": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance23, 61, 10, {
                "61": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "62": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "63": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "64": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "65": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "66": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance22, 61, 10, {
                "61": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "62": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "63": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "64": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "65": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "66": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance21, 61, 4, {
                "61": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "62": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "63": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "64": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance42, 71, 9, {
                "71": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance41, 71, 9, {
                "71": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance40, 71, 9, {
                "71": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance39, 71, 9, {
                "71": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance38, 71, 9, {
                "71": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance37, 71, 9, {
                "71": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance35, 65, 15, {
                "65": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "66": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "71": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "72": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance20, 61, 10, {
                "61": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: -3.9,
                    y: -4.15
                },
                "63": {
                    x: -7.6,
                    y: -8.7
                },
                "64": {
                    x: -11.3,
                    y: -13.3
                },
                "65": {
                    x: -15.05,
                    y: -17.9
                },
                "66": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance18, 55, 10, {
                "55": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -2.3
                },
                "57": {
                    x: -8.95
                },
                "58": {
                    x: -15.65
                },
                "59": {
                    x: -22.35
                },
                "60": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance17, 55, 10, {
                "55": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 6.8,
                    y: -1.8
                },
                "57": {
                    x: 12.45,
                    y: -1.55
                },
                "58": {
                    x: 18.1,
                    y: -1.35
                },
                "59": {
                    x: 23.7,
                    y: -1.15
                },
                "60": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance16, 55, 10, {
                "55": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 1.05,
                    y: 8.2
                },
                "57": {
                    x: 1.35,
                    y: 13
                },
                "58": {
                    x: 1.6,
                    y: 17.75
                },
                "59": {
                    x: 1.8,
                    y: 22.5
                },
                "60": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance15, 55, 10, {
                "55": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 2.8,
                    y: -6
                },
                "57": {
                    x: 2.35,
                    y: -12.2
                },
                "58": {
                    x: 1.95,
                    y: -18.45
                },
                "59": {
                    x: 1.45,
                    y: -24.65
                },
                "60": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance14, 55, 10, {
                "55": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance13, 55, 10, {
                "55": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance12, 55, 4, {
                "55": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance36, 71, 9, {
                "71": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance34, 65, 9, {
                "65": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance33, 65, 9, {
                "65": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance32, 65, 9, {
                "65": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 65, 9, {
                "65": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance30, 65, 9, {
                "65": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance29, 65, 9, {
                "65": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance19, 59, 15, {
                "59": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "60": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "65": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "66": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance1, 0, 65, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "50": {
                    x: -4.45,
                    y: -4.45,
                    sx: 1.687,
                    sy: 1.687
                },
                "51": {
                    x: -5.95,
                    y: -5.95,
                    sx: 1.916,
                    sy: 1.916
                },
                "52": {
                    x: -7.4,
                    y: -7.4,
                    sx: 2.145,
                    sy: 2.145
                },
                "53": {
                    x: -8.9,
                    y: -8.9,
                    sx: 2.374,
                    sy: 2.374
                },
                "54": {
                    x: -10.4,
                    y: -10.4,
                    sx: 2.603,
                    sy: 2.603
                },
                "55": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -3.9,
                    y: -4.15
                },
                "57": {
                    x: -7.6,
                    y: -8.7
                },
                "58": {
                    x: -11.3,
                    y: -13.3
                },
                "59": {
                    x: -15.05,
                    y: -17.9
                },
                "60": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance28, 65, 9, {
                "65": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance50, 74, 1, {
                "74": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance49, 74, 1, {
                "74": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance48, 74, 1, {
                "74": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance47, 74, 1, {
                "74": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance46, 74, 1, {
                "74": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance45, 74, 1, {
                "74": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance44, 74, 1, {
                "74": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance43, 74, 1, {
                "74": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance58, 80, 1, {
                "80": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance57, 80, 1, {
                "80": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance56, 80, 1, {
                "80": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance55, 80, 1, {
                "80": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance54, 80, 1, {
                "80": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance53, 80, 1, {
                "80": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance52, 80, 1, {
                "80": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance51, 80, 1, {
                "80": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance11, 55, 27, {
                "55": {
                    x: -47.75,
                    y: -45.65,
                    sx: 0.329,
                    sy: 0.329,
                    a: 1
                },
                "56": {
                    x: -65.454,
                    y: -63.357,
                    sx: 0.439,
                    sy: 0.439,
                    a: 0.96
                },
                "57": {
                    x: -83.152,
                    y: -81.058,
                    sx: 0.548,
                    sy: 0.548,
                    a: 0.92
                },
                "58": {
                    x: -100.857,
                    y: -98.765,
                    sx: 0.657,
                    sy: 0.657,
                    a: 0.88
                },
                "59": {
                    x: -118.555,
                    y: -116.466,
                    sx: 0.767,
                    sy: 0.767,
                    a: 0.85
                },
                "60": {
                    x: -136.259,
                    y: -134.124,
                    sx: 0.876,
                    sy: 0.876,
                    a: 0.81
                },
                "61": {
                    x: -153.964,
                    y: -151.881,
                    sx: 0.985,
                    sy: 0.985,
                    a: 0.77
                },
                "62": {
                    x: -171.712,
                    y: -169.582,
                    sx: 1.095,
                    sy: 1.095,
                    a: 0.73
                },
                "63": {
                    x: -189.417,
                    y: -187.29,
                    sx: 1.204,
                    sy: 1.204,
                    a: 0.69
                },
                "64": {
                    x: -207.121,
                    y: -204.997,
                    sx: 1.313,
                    sy: 1.313,
                    a: 0.65
                },
                "65": {
                    x: -224.819,
                    y: -222.698,
                    sx: 1.423,
                    sy: 1.423,
                    a: 0.62
                },
                "66": {
                    x: -242.524,
                    y: -240.405,
                    sx: 1.532,
                    sy: 1.532,
                    a: 0.58
                },
                "67": {
                    x: -260.272,
                    y: -258.156,
                    sx: 1.641,
                    sy: 1.641,
                    a: 0.54
                },
                "68": {
                    x: -277.976,
                    y: -275.813,
                    sx: 1.751,
                    sy: 1.751,
                    a: 0.5
                },
                "69": {
                    x: -295.682,
                    y: -293.521,
                    sx: 1.86,
                    sy: 1.86,
                    a: 0.46
                },
                "70": {
                    x: -313.379,
                    y: -311.222,
                    sx: 1.969,
                    sy: 1.969,
                    a: 0.42
                },
                "71": {
                    x: -331.084,
                    y: -328.929,
                    sx: 2.079,
                    sy: 2.079,
                    a: 0.38
                },
                "72": {
                    x: -348.782,
                    y: -346.63,
                    sx: 2.188,
                    sy: 2.188,
                    a: 0.35
                },
                "73": {
                    x: -366.536,
                    y: -364.388,
                    sx: 2.297,
                    sy: 2.297,
                    a: 0.31
                },
                "74": {
                    x: -384.241,
                    y: -382.095,
                    sx: 2.407,
                    sy: 2.407,
                    a: 0.27
                },
                "75": {
                    x: -401.939,
                    y: -399.796,
                    sx: 2.516,
                    sy: 2.516,
                    a: 0.23
                },
                "76": {
                    x: -419.644,
                    y: -417.504,
                    sx: 2.625,
                    sy: 2.625,
                    a: 0.19
                },
                "77": {
                    x: -437.349,
                    y: -435.161,
                    sx: 2.735,
                    sy: 2.735,
                    a: 0.15
                },
                "78": {
                    x: -455.047,
                    y: -452.862,
                    sx: 2.844,
                    sy: 2.844,
                    a: 0.12
                },
                "79": {
                    x: -472.801,
                    y: -470.619,
                    sx: 2.953,
                    sy: 2.953,
                    a: 0.08
                },
                "80": {
                    x: -490.499,
                    y: -488.32,
                    sx: 3.062,
                    sy: 3.062,
                    a: 0.04
                },
                "81": {
                    x: -508.25,
                    y: -506.15,
                    sx: 3.172,
                    sy: 3.172,
                    a: 0
                }
            });
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic51 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic52 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic53 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 251, loop: false });
        var instance2 = new lib.fireballInside();
        var instance3 = new lib.fireballInside();
        var instance4 = new lib.fireballInside();
        var instance5 = new lib.fireballInside();
        var instance6 = new lib.fireballInside();
        var instance7 = new lib.fireballInside();
        var instance8 = new lib.fireballInside();
        var instance9 = new lib.fireballInside();
        var instance10 = new lib.fireballInside();
        var instance27 = new lib.fireballInside();
        var instance26 = new lib.fireballInside();
        var instance25 = new lib.fireballInside();
        var instance24 = new lib.fireballInside();
        var instance23 = new lib.fireballInside();
        var instance22 = new lib.fireballInside();
        var instance21 = new lib.fireballInside();
        var instance42 = new Graphic52(MovieClip.SYNCHED);
        var instance41 = new Graphic51(MovieClip.SYNCHED);
        var instance40 = new Graphic50(MovieClip.SYNCHED);
        var instance39 = new Graphic49(MovieClip.SYNCHED);
        var instance38 = new Graphic48(MovieClip.SYNCHED);
        var instance37 = new Graphic47(MovieClip.SYNCHED);
        var instance35 = new Graphic46(MovieClip.SYNCHED);
        var instance20 = new lib.fireballInside();
        var instance18 = new lib.fireballInside();
        var instance17 = new lib.fireballInside();
        var instance16 = new lib.fireballInside();
        var instance15 = new lib.fireballInside();
        var instance14 = new lib.fireballInside();
        var instance13 = new lib.fireballInside();
        var instance12 = new lib.fireballInside();
        var instance36 = new Graphic45(MovieClip.SYNCHED);
        var instance34 = new Graphic44(MovieClip.SYNCHED);
        var instance33 = new Graphic43(MovieClip.SYNCHED);
        var instance32 = new Graphic42(MovieClip.SYNCHED);
        var instance31 = new Graphic41(MovieClip.SYNCHED);
        var instance30 = new Graphic40(MovieClip.SYNCHED);
        var instance29 = new Graphic39(MovieClip.SYNCHED);
        var instance19 = new Graphic38(MovieClip.SYNCHED);
        var instance1 = new lib.fireballInside();
        var instance28 = new Graphic37(MovieClip.SYNCHED);
        var instance50 = new lib.fireballInside();
        var instance49 = new lib.fireballInside();
        var instance48 = new lib.fireballInside();
        var instance47 = new lib.fireballInside();
        var instance46 = new lib.fireballInside();
        var instance45 = new lib.fireballInside();
        var instance44 = new lib.fireballInside();
        var instance43 = new lib.fireballInside();
        var instance58 = new lib.fireballInside();
        var instance57 = new lib.fireballInside();
        var instance56 = new lib.fireballInside();
        var instance55 = new lib.fireballInside();
        var instance54 = new lib.fireballInside();
        var instance53 = new lib.fireballInside();
        var instance52 = new lib.fireballInside();
        var instance51 = new lib.fireballInside();
        var instance11 = new lib.gradient();
        this.addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "1": {
                    y: 2.4,
                    a: 0.95
                },
                "2": {
                    y: 4.85,
                    a: 0.9
                },
                "3": {
                    y: 7.25,
                    a: 0.85
                },
                "4": {
                    y: 9.7,
                    a: 0.8
                },
                "5": {
                    y: 11.65,
                    a: 0.74
                },
                "6": {
                    y: 13.6,
                    a: 0.68
                },
                "7": {
                    y: 15.55,
                    a: 0.62
                },
                "8": {
                    y: 17.5,
                    a: 0.56
                },
                "9": {
                    y: 19.45,
                    a: 0.5
                },
                "10": {
                    y: 22.05,
                    a: 0.46
                },
                "11": {
                    y: 24.65,
                    a: 0.42
                },
                "12": {
                    y: 27.25,
                    a: 0.38
                },
                "13": {
                    y: 29.85,
                    a: 0.34
                },
                "14": {
                    y: 32.45,
                    a: 0.3
                },
                "15": {
                    y: 35.7,
                    a: 0.24
                },
                "16": {
                    y: 38.95,
                    a: 0.18
                },
                "17": {
                    y: 42.2,
                    a: 0.12
                },
                "18": {
                    y: 45.45,
                    a: 0.06
                },
                "19": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance3, 4, 20, {
                "4": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "5": {
                    y: 2.4,
                    a: 0.95
                },
                "6": {
                    y: 4.85,
                    a: 0.9
                },
                "7": {
                    y: 7.25,
                    a: 0.85
                },
                "8": {
                    y: 9.7,
                    a: 0.8
                },
                "9": {
                    y: 11.65,
                    a: 0.74
                },
                "10": {
                    y: 13.6,
                    a: 0.68
                },
                "11": {
                    y: 15.55,
                    a: 0.62
                },
                "12": {
                    y: 17.5,
                    a: 0.56
                },
                "13": {
                    y: 19.45,
                    a: 0.5
                },
                "14": {
                    y: 22.05,
                    a: 0.46
                },
                "15": {
                    y: 24.65,
                    a: 0.42
                },
                "16": {
                    y: 27.25,
                    a: 0.38
                },
                "17": {
                    y: 29.85,
                    a: 0.34
                },
                "18": {
                    y: 32.45,
                    a: 0.3
                },
                "19": {
                    y: 35.7,
                    a: 0.24
                },
                "20": {
                    y: 38.95,
                    a: 0.18
                },
                "21": {
                    y: 42.2,
                    a: 0.12
                },
                "22": {
                    y: 45.45,
                    a: 0.06
                },
                "23": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance4, 8, 20, {
                "8": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "9": {
                    y: 2.4,
                    a: 0.95
                },
                "10": {
                    y: 4.85,
                    a: 0.9
                },
                "11": {
                    y: 7.25,
                    a: 0.85
                },
                "12": {
                    y: 9.7,
                    a: 0.8
                },
                "13": {
                    y: 11.65,
                    a: 0.74
                },
                "14": {
                    y: 13.6,
                    a: 0.68
                },
                "15": {
                    y: 15.55,
                    a: 0.62
                },
                "16": {
                    y: 17.5,
                    a: 0.56
                },
                "17": {
                    y: 19.45,
                    a: 0.5
                },
                "18": {
                    y: 22.05,
                    a: 0.46
                },
                "19": {
                    y: 24.65,
                    a: 0.42
                },
                "20": {
                    y: 27.25,
                    a: 0.38
                },
                "21": {
                    y: 29.85,
                    a: 0.34
                },
                "22": {
                    y: 32.45,
                    a: 0.3
                },
                "23": {
                    y: 35.7,
                    a: 0.24
                },
                "24": {
                    y: 38.95,
                    a: 0.18
                },
                "25": {
                    y: 42.2,
                    a: 0.12
                },
                "26": {
                    y: 45.45,
                    a: 0.06
                },
                "27": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance5, 12, 20, {
                "12": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "13": {
                    y: 2.4,
                    a: 0.95
                },
                "14": {
                    y: 4.85,
                    a: 0.9
                },
                "15": {
                    y: 7.25,
                    a: 0.85
                },
                "16": {
                    y: 9.7,
                    a: 0.8
                },
                "17": {
                    y: 11.65,
                    a: 0.74
                },
                "18": {
                    y: 13.6,
                    a: 0.68
                },
                "19": {
                    y: 15.55,
                    a: 0.62
                },
                "20": {
                    y: 17.5,
                    a: 0.56
                },
                "21": {
                    y: 19.45,
                    a: 0.5
                },
                "22": {
                    y: 22.05,
                    a: 0.46
                },
                "23": {
                    y: 24.65,
                    a: 0.42
                },
                "24": {
                    y: 27.25,
                    a: 0.38
                },
                "25": {
                    y: 29.85,
                    a: 0.34
                },
                "26": {
                    y: 32.45,
                    a: 0.3
                },
                "27": {
                    y: 35.7,
                    a: 0.24
                },
                "28": {
                    y: 38.95,
                    a: 0.18
                },
                "29": {
                    y: 42.2,
                    a: 0.12
                },
                "30": {
                    y: 45.45,
                    a: 0.06
                },
                "31": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance6, 16, 20, {
                "16": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "17": {
                    y: 2.4,
                    a: 0.95
                },
                "18": {
                    y: 4.85,
                    a: 0.9
                },
                "19": {
                    y: 7.25,
                    a: 0.85
                },
                "20": {
                    y: 9.7,
                    a: 0.8
                },
                "21": {
                    y: 11.65,
                    a: 0.74
                },
                "22": {
                    y: 13.6,
                    a: 0.68
                },
                "23": {
                    y: 15.55,
                    a: 0.62
                },
                "24": {
                    y: 17.5,
                    a: 0.56
                },
                "25": {
                    y: 19.45,
                    a: 0.5
                },
                "26": {
                    y: 22.05,
                    a: 0.46
                },
                "27": {
                    y: 24.65,
                    a: 0.42
                },
                "28": {
                    y: 27.25,
                    a: 0.38
                },
                "29": {
                    y: 29.85,
                    a: 0.34
                },
                "30": {
                    y: 32.45,
                    a: 0.3
                },
                "31": {
                    y: 35.7,
                    a: 0.24
                },
                "32": {
                    y: 38.95,
                    a: 0.18
                },
                "33": {
                    y: 42.2,
                    a: 0.12
                },
                "34": {
                    y: 45.45,
                    a: 0.06
                },
                "35": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance7, 20, 20, {
                "20": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "21": {
                    y: 2.4,
                    a: 0.95
                },
                "22": {
                    y: 4.85,
                    a: 0.9
                },
                "23": {
                    y: 7.25,
                    a: 0.85
                },
                "24": {
                    y: 9.7,
                    a: 0.8
                },
                "25": {
                    y: 11.65,
                    a: 0.74
                },
                "26": {
                    y: 13.6,
                    a: 0.68
                },
                "27": {
                    y: 15.55,
                    a: 0.62
                },
                "28": {
                    y: 17.5,
                    a: 0.56
                },
                "29": {
                    y: 19.45,
                    a: 0.5
                },
                "30": {
                    y: 22.05,
                    a: 0.46
                },
                "31": {
                    y: 24.65,
                    a: 0.42
                },
                "32": {
                    y: 27.25,
                    a: 0.38
                },
                "33": {
                    y: 29.85,
                    a: 0.34
                },
                "34": {
                    y: 32.45,
                    a: 0.3
                },
                "35": {
                    y: 35.7,
                    a: 0.24
                },
                "36": {
                    y: 38.95,
                    a: 0.18
                },
                "37": {
                    y: 42.2,
                    a: 0.12
                },
                "38": {
                    y: 45.45,
                    a: 0.06
                },
                "39": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance8, 24, 20, {
                "24": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "25": {
                    y: 2.4,
                    a: 0.95
                },
                "26": {
                    y: 4.85,
                    a: 0.9
                },
                "27": {
                    y: 7.25,
                    a: 0.85
                },
                "28": {
                    y: 9.7,
                    a: 0.8
                },
                "29": {
                    y: 11.65,
                    a: 0.74
                },
                "30": {
                    y: 13.6,
                    a: 0.68
                },
                "31": {
                    y: 15.55,
                    a: 0.62
                },
                "32": {
                    y: 17.5,
                    a: 0.56
                },
                "33": {
                    y: 19.45,
                    a: 0.5
                },
                "34": {
                    y: 22.05,
                    a: 0.46
                },
                "35": {
                    y: 24.65,
                    a: 0.42
                },
                "36": {
                    y: 27.25,
                    a: 0.38
                },
                "37": {
                    y: 29.85,
                    a: 0.34
                },
                "38": {
                    y: 32.45,
                    a: 0.3
                },
                "39": {
                    y: 35.7,
                    a: 0.24
                },
                "40": {
                    y: 38.95,
                    a: 0.18
                },
                "41": {
                    y: 42.2,
                    a: 0.12
                },
                "42": {
                    y: 45.45,
                    a: 0.06
                },
                "43": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance9, 28, 17, {
                "28": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "29": {
                    y: 2.4,
                    a: 0.95
                },
                "30": {
                    y: 4.85,
                    a: 0.9
                },
                "31": {
                    y: 7.25,
                    a: 0.85
                },
                "32": {
                    y: 9.7,
                    a: 0.8
                },
                "33": {
                    y: 11.65,
                    a: 0.74
                },
                "34": {
                    y: 13.6,
                    a: 0.68
                },
                "35": {
                    y: 15.55,
                    a: 0.62
                },
                "36": {
                    y: 17.5,
                    a: 0.56
                },
                "37": {
                    y: 19.45,
                    a: 0.5
                },
                "38": {
                    y: 22.05,
                    a: 0.46
                },
                "39": {
                    y: 24.65,
                    a: 0.42
                },
                "40": {
                    y: 27.25,
                    a: 0.38
                },
                "41": {
                    y: 29.85,
                    a: 0.34
                },
                "42": {
                    y: 32.45,
                    a: 0.3
                },
                "43": {
                    y: 35.7,
                    a: 0.24
                },
                "44": {
                    y: 38.95,
                    a: 0.18
                }
            })
            .addTimedChild(instance10, 32, 13, {
                "32": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "33": {
                    y: 2.4,
                    a: 0.95
                },
                "34": {
                    y: 4.85,
                    a: 0.9
                },
                "35": {
                    y: 7.25,
                    a: 0.85
                },
                "36": {
                    y: 9.7,
                    a: 0.8
                },
                "37": {
                    y: 11.65,
                    a: 0.74
                },
                "38": {
                    y: 13.6,
                    a: 0.68
                },
                "39": {
                    y: 15.55,
                    a: 0.62
                },
                "40": {
                    y: 17.5,
                    a: 0.56
                },
                "41": {
                    y: 19.45,
                    a: 0.5
                },
                "42": {
                    y: 22.05,
                    a: 0.46
                },
                "43": {
                    y: 24.65,
                    a: 0.42
                },
                "44": {
                    y: 27.25,
                    a: 0.38
                }
            })
            .addTimedChild(instance27, 55, 10, {
                "55": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -2.3
                },
                "57": {
                    x: -8.95
                },
                "58": {
                    x: -15.65
                },
                "59": {
                    x: -22.35
                },
                "60": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance26, 55, 10, {
                "55": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 6.8,
                    y: -1.8
                },
                "57": {
                    x: 12.45,
                    y: -1.55
                },
                "58": {
                    x: 18.1,
                    y: -1.35
                },
                "59": {
                    x: 23.7,
                    y: -1.15
                },
                "60": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance25, 55, 10, {
                "55": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 1.05,
                    y: 8.2
                },
                "57": {
                    x: 1.35,
                    y: 13
                },
                "58": {
                    x: 1.6,
                    y: 17.75
                },
                "59": {
                    x: 1.8,
                    y: 22.5
                },
                "60": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance24, 55, 10, {
                "55": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 2.8,
                    y: -6
                },
                "57": {
                    x: 2.35,
                    y: -12.2
                },
                "58": {
                    x: 1.95,
                    y: -18.45
                },
                "59": {
                    x: 1.45,
                    y: -24.65
                },
                "60": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance23, 55, 10, {
                "55": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance22, 55, 10, {
                "55": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance21, 55, 4, {
                "55": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance42, 65, 9, {
                "65": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance41, 65, 9, {
                "65": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance40, 65, 9, {
                "65": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance39, 65, 9, {
                "65": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance38, 65, 9, {
                "65": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance37, 65, 9, {
                "65": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance35, 59, 15, {
                "59": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "60": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "65": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "66": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance20, 55, 10, {
                "55": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -3.9,
                    y: -4.15
                },
                "57": {
                    x: -7.6,
                    y: -8.7
                },
                "58": {
                    x: -11.3,
                    y: -13.3
                },
                "59": {
                    x: -15.05,
                    y: -17.9
                },
                "60": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance18, 49, 10, {
                "49": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: -2.3
                },
                "51": {
                    x: -8.95
                },
                "52": {
                    x: -15.65
                },
                "53": {
                    x: -22.35
                },
                "54": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance17, 49, 10, {
                "49": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: 6.8,
                    y: -1.8
                },
                "51": {
                    x: 12.45,
                    y: -1.55
                },
                "52": {
                    x: 18.1,
                    y: -1.35
                },
                "53": {
                    x: 23.7,
                    y: -1.15
                },
                "54": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance16, 49, 10, {
                "49": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: 1.05,
                    y: 8.2
                },
                "51": {
                    x: 1.35,
                    y: 13
                },
                "52": {
                    x: 1.6,
                    y: 17.75
                },
                "53": {
                    x: 1.8,
                    y: 22.5
                },
                "54": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance15, 49, 10, {
                "49": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: 2.8,
                    y: -6
                },
                "51": {
                    x: 2.35,
                    y: -12.2
                },
                "52": {
                    x: 1.95,
                    y: -18.45
                },
                "53": {
                    x: 1.45,
                    y: -24.65
                },
                "54": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance14, 49, 10, {
                "49": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "50": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "51": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "52": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "53": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "54": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance13, 49, 10, {
                "49": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "50": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "51": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "52": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "53": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "54": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance12, 49, 4, {
                "49": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "50": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "51": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "52": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance36, 65, 9, {
                "65": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance34, 59, 9, {
                "59": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance33, 59, 9, {
                "59": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance32, 59, 9, {
                "59": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 59, 9, {
                "59": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance30, 59, 9, {
                "59": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance29, 59, 9, {
                "59": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance19, 53, 15, {
                "53": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "54": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "59": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "60": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance1, 0, 59, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "45": {
                    x: -5.95,
                    y: -5.95,
                    sx: 1.916,
                    sy: 1.916
                },
                "46": {
                    x: -7.4,
                    y: -7.4,
                    sx: 2.145,
                    sy: 2.145
                },
                "47": {
                    x: -8.9,
                    y: -8.9,
                    sx: 2.374,
                    sy: 2.374
                },
                "48": {
                    x: -10.4,
                    y: -10.4,
                    sx: 2.603,
                    sy: 2.603
                },
                "49": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: -3.9,
                    y: -4.15
                },
                "51": {
                    x: -7.6,
                    y: -8.7
                },
                "52": {
                    x: -11.3,
                    y: -13.3
                },
                "53": {
                    x: -15.05,
                    y: -17.9
                },
                "54": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance28, 59, 9, {
                "59": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance50, 68, 1, {
                "68": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance49, 68, 1, {
                "68": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance48, 68, 1, {
                "68": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance47, 68, 1, {
                "68": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance46, 68, 1, {
                "68": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance45, 68, 1, {
                "68": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance44, 68, 1, {
                "68": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance43, 68, 1, {
                "68": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance58, 74, 1, {
                "74": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance57, 74, 1, {
                "74": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance56, 74, 1, {
                "74": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance55, 74, 1, {
                "74": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance54, 74, 1, {
                "74": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance53, 74, 1, {
                "74": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance52, 74, 1, {
                "74": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance51, 74, 1, {
                "74": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance11, 49, 27, {
                "49": {
                    x: -47.75,
                    y: -45.65,
                    sx: 0.329,
                    sy: 0.329,
                    a: 1
                },
                "50": {
                    x: -65.454,
                    y: -63.357,
                    sx: 0.439,
                    sy: 0.439,
                    a: 0.96
                },
                "51": {
                    x: -83.152,
                    y: -81.058,
                    sx: 0.548,
                    sy: 0.548,
                    a: 0.92
                },
                "52": {
                    x: -100.857,
                    y: -98.765,
                    sx: 0.657,
                    sy: 0.657,
                    a: 0.88
                },
                "53": {
                    x: -118.555,
                    y: -116.466,
                    sx: 0.767,
                    sy: 0.767,
                    a: 0.85
                },
                "54": {
                    x: -136.259,
                    y: -134.124,
                    sx: 0.876,
                    sy: 0.876,
                    a: 0.81
                },
                "55": {
                    x: -153.964,
                    y: -151.881,
                    sx: 0.985,
                    sy: 0.985,
                    a: 0.77
                },
                "56": {
                    x: -171.712,
                    y: -169.582,
                    sx: 1.095,
                    sy: 1.095,
                    a: 0.73
                },
                "57": {
                    x: -189.417,
                    y: -187.29,
                    sx: 1.204,
                    sy: 1.204,
                    a: 0.69
                },
                "58": {
                    x: -207.121,
                    y: -204.997,
                    sx: 1.313,
                    sy: 1.313,
                    a: 0.65
                },
                "59": {
                    x: -224.819,
                    y: -222.698,
                    sx: 1.423,
                    sy: 1.423,
                    a: 0.62
                },
                "60": {
                    x: -242.524,
                    y: -240.405,
                    sx: 1.532,
                    sy: 1.532,
                    a: 0.58
                },
                "61": {
                    x: -260.272,
                    y: -258.156,
                    sx: 1.641,
                    sy: 1.641,
                    a: 0.54
                },
                "62": {
                    x: -277.976,
                    y: -275.813,
                    sx: 1.751,
                    sy: 1.751,
                    a: 0.5
                },
                "63": {
                    x: -295.682,
                    y: -293.521,
                    sx: 1.86,
                    sy: 1.86,
                    a: 0.46
                },
                "64": {
                    x: -313.379,
                    y: -311.222,
                    sx: 1.969,
                    sy: 1.969,
                    a: 0.42
                },
                "65": {
                    x: -331.084,
                    y: -328.929,
                    sx: 2.079,
                    sy: 2.079,
                    a: 0.38
                },
                "66": {
                    x: -348.782,
                    y: -346.63,
                    sx: 2.188,
                    sy: 2.188,
                    a: 0.35
                },
                "67": {
                    x: -366.536,
                    y: -364.388,
                    sx: 2.297,
                    sy: 2.297,
                    a: 0.31
                },
                "68": {
                    x: -384.241,
                    y: -382.095,
                    sx: 2.407,
                    sy: 2.407,
                    a: 0.27
                },
                "69": {
                    x: -401.939,
                    y: -399.796,
                    sx: 2.516,
                    sy: 2.516,
                    a: 0.23
                },
                "70": {
                    x: -419.644,
                    y: -417.504,
                    sx: 2.625,
                    sy: 2.625,
                    a: 0.19
                },
                "71": {
                    x: -437.349,
                    y: -435.161,
                    sx: 2.735,
                    sy: 2.735,
                    a: 0.15
                },
                "72": {
                    x: -455.047,
                    y: -452.862,
                    sx: 2.844,
                    sy: 2.844,
                    a: 0.12
                },
                "73": {
                    x: -472.801,
                    y: -470.619,
                    sx: 2.953,
                    sy: 2.953,
                    a: 0.08
                },
                "74": {
                    x: -490.499,
                    y: -488.32,
                    sx: 3.062,
                    sy: 3.062,
                    a: 0.04
                },
                "75": {
                    x: -508.25,
                    y: -506.15,
                    sx: 3.172,
                    sy: 3.172,
                    a: 0
                }
            });
    });

    var Graphic54 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic55 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic56 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic57 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic58 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic59 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic60 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic61 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic62 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic63 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic64 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic65 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic66 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic67 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic68 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic69 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic70 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 205, loop: false });
        var instance2 = new lib.fireballInside();
        var instance3 = new lib.fireballInside();
        var instance4 = new lib.fireballInside();
        var instance5 = new lib.fireballInside();
        var instance6 = new lib.fireballInside();
        var instance7 = new lib.fireballInside();
        var instance8 = new lib.fireballInside();
        var instance9 = new lib.fireballInside();
        var instance10 = new lib.fireballInside();
        var instance27 = new lib.fireballInside();
        var instance26 = new lib.fireballInside();
        var instance25 = new lib.fireballInside();
        var instance24 = new lib.fireballInside();
        var instance23 = new lib.fireballInside();
        var instance22 = new lib.fireballInside();
        var instance21 = new lib.fireballInside();
        var instance42 = new Graphic69(MovieClip.SYNCHED);
        var instance41 = new Graphic68(MovieClip.SYNCHED);
        var instance40 = new Graphic67(MovieClip.SYNCHED);
        var instance39 = new Graphic66(MovieClip.SYNCHED);
        var instance38 = new Graphic65(MovieClip.SYNCHED);
        var instance37 = new Graphic64(MovieClip.SYNCHED);
        var instance35 = new Graphic63(MovieClip.SYNCHED);
        var instance20 = new lib.fireballInside();
        var instance18 = new lib.fireballInside();
        var instance17 = new lib.fireballInside();
        var instance16 = new lib.fireballInside();
        var instance15 = new lib.fireballInside();
        var instance14 = new lib.fireballInside();
        var instance13 = new lib.fireballInside();
        var instance12 = new lib.fireballInside();
        var instance36 = new Graphic62(MovieClip.SYNCHED);
        var instance34 = new Graphic61(MovieClip.SYNCHED);
        var instance33 = new Graphic60(MovieClip.SYNCHED);
        var instance32 = new Graphic59(MovieClip.SYNCHED);
        var instance31 = new Graphic58(MovieClip.SYNCHED);
        var instance30 = new Graphic57(MovieClip.SYNCHED);
        var instance29 = new Graphic56(MovieClip.SYNCHED);
        var instance19 = new Graphic55(MovieClip.SYNCHED);
        var instance1 = new lib.fireballInside();
        var instance28 = new Graphic54(MovieClip.SYNCHED);
        var instance50 = new lib.fireballInside();
        var instance49 = new lib.fireballInside();
        var instance48 = new lib.fireballInside();
        var instance47 = new lib.fireballInside();
        var instance46 = new lib.fireballInside();
        var instance45 = new lib.fireballInside();
        var instance44 = new lib.fireballInside();
        var instance43 = new lib.fireballInside();
        var instance58 = new lib.fireballInside();
        var instance57 = new lib.fireballInside();
        var instance56 = new lib.fireballInside();
        var instance55 = new lib.fireballInside();
        var instance54 = new lib.fireballInside();
        var instance53 = new lib.fireballInside();
        var instance52 = new lib.fireballInside();
        var instance51 = new lib.fireballInside();
        var instance11 = new lib.gradient();
        this.addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "1": {
                    y: 2.4,
                    a: 0.95
                },
                "2": {
                    y: 4.85,
                    a: 0.9
                },
                "3": {
                    y: 7.25,
                    a: 0.85
                },
                "4": {
                    y: 9.7,
                    a: 0.8
                },
                "5": {
                    y: 11.65,
                    a: 0.74
                },
                "6": {
                    y: 13.6,
                    a: 0.68
                },
                "7": {
                    y: 15.55,
                    a: 0.62
                },
                "8": {
                    y: 17.5,
                    a: 0.56
                },
                "9": {
                    y: 19.45,
                    a: 0.5
                },
                "10": {
                    y: 22.05,
                    a: 0.46
                },
                "11": {
                    y: 24.65,
                    a: 0.42
                },
                "12": {
                    y: 27.25,
                    a: 0.38
                },
                "13": {
                    y: 29.85,
                    a: 0.34
                },
                "14": {
                    y: 32.45,
                    a: 0.3
                },
                "15": {
                    y: 35.7,
                    a: 0.24
                },
                "16": {
                    y: 38.95,
                    a: 0.18
                },
                "17": {
                    y: 42.2,
                    a: 0.12
                },
                "18": {
                    y: 45.45,
                    a: 0.06
                },
                "19": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance3, 4, 20, {
                "4": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "5": {
                    y: 2.4,
                    a: 0.95
                },
                "6": {
                    y: 4.85,
                    a: 0.9
                },
                "7": {
                    y: 7.25,
                    a: 0.85
                },
                "8": {
                    y: 9.7,
                    a: 0.8
                },
                "9": {
                    y: 11.65,
                    a: 0.74
                },
                "10": {
                    y: 13.6,
                    a: 0.68
                },
                "11": {
                    y: 15.55,
                    a: 0.62
                },
                "12": {
                    y: 17.5,
                    a: 0.56
                },
                "13": {
                    y: 19.45,
                    a: 0.5
                },
                "14": {
                    y: 22.05,
                    a: 0.46
                },
                "15": {
                    y: 24.65,
                    a: 0.42
                },
                "16": {
                    y: 27.25,
                    a: 0.38
                },
                "17": {
                    y: 29.85,
                    a: 0.34
                },
                "18": {
                    y: 32.45,
                    a: 0.3
                },
                "19": {
                    y: 35.7,
                    a: 0.24
                },
                "20": {
                    y: 38.95,
                    a: 0.18
                },
                "21": {
                    y: 42.2,
                    a: 0.12
                },
                "22": {
                    y: 45.45,
                    a: 0.06
                },
                "23": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance4, 8, 20, {
                "8": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "9": {
                    y: 2.4,
                    a: 0.95
                },
                "10": {
                    y: 4.85,
                    a: 0.9
                },
                "11": {
                    y: 7.25,
                    a: 0.85
                },
                "12": {
                    y: 9.7,
                    a: 0.8
                },
                "13": {
                    y: 11.65,
                    a: 0.74
                },
                "14": {
                    y: 13.6,
                    a: 0.68
                },
                "15": {
                    y: 15.55,
                    a: 0.62
                },
                "16": {
                    y: 17.5,
                    a: 0.56
                },
                "17": {
                    y: 19.45,
                    a: 0.5
                },
                "18": {
                    y: 22.05,
                    a: 0.46
                },
                "19": {
                    y: 24.65,
                    a: 0.42
                },
                "20": {
                    y: 27.25,
                    a: 0.38
                },
                "21": {
                    y: 29.85,
                    a: 0.34
                },
                "22": {
                    y: 32.45,
                    a: 0.3
                },
                "23": {
                    y: 35.7,
                    a: 0.24
                },
                "24": {
                    y: 38.95,
                    a: 0.18
                },
                "25": {
                    y: 42.2,
                    a: 0.12
                },
                "26": {
                    y: 45.45,
                    a: 0.06
                },
                "27": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance5, 12, 20, {
                "12": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "13": {
                    y: 2.4,
                    a: 0.95
                },
                "14": {
                    y: 4.85,
                    a: 0.9
                },
                "15": {
                    y: 7.25,
                    a: 0.85
                },
                "16": {
                    y: 9.7,
                    a: 0.8
                },
                "17": {
                    y: 11.65,
                    a: 0.74
                },
                "18": {
                    y: 13.6,
                    a: 0.68
                },
                "19": {
                    y: 15.55,
                    a: 0.62
                },
                "20": {
                    y: 17.5,
                    a: 0.56
                },
                "21": {
                    y: 19.45,
                    a: 0.5
                },
                "22": {
                    y: 22.05,
                    a: 0.46
                },
                "23": {
                    y: 24.65,
                    a: 0.42
                },
                "24": {
                    y: 27.25,
                    a: 0.38
                },
                "25": {
                    y: 29.85,
                    a: 0.34
                },
                "26": {
                    y: 32.45,
                    a: 0.3
                },
                "27": {
                    y: 35.7,
                    a: 0.24
                },
                "28": {
                    y: 38.95,
                    a: 0.18
                },
                "29": {
                    y: 42.2,
                    a: 0.12
                },
                "30": {
                    y: 45.45,
                    a: 0.06
                },
                "31": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance6, 16, 20, {
                "16": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "17": {
                    y: 2.4,
                    a: 0.95
                },
                "18": {
                    y: 4.85,
                    a: 0.9
                },
                "19": {
                    y: 7.25,
                    a: 0.85
                },
                "20": {
                    y: 9.7,
                    a: 0.8
                },
                "21": {
                    y: 11.65,
                    a: 0.74
                },
                "22": {
                    y: 13.6,
                    a: 0.68
                },
                "23": {
                    y: 15.55,
                    a: 0.62
                },
                "24": {
                    y: 17.5,
                    a: 0.56
                },
                "25": {
                    y: 19.45,
                    a: 0.5
                },
                "26": {
                    y: 22.05,
                    a: 0.46
                },
                "27": {
                    y: 24.65,
                    a: 0.42
                },
                "28": {
                    y: 27.25,
                    a: 0.38
                },
                "29": {
                    y: 29.85,
                    a: 0.34
                },
                "30": {
                    y: 32.45,
                    a: 0.3
                },
                "31": {
                    y: 35.7,
                    a: 0.24
                },
                "32": {
                    y: 38.95,
                    a: 0.18
                },
                "33": {
                    y: 42.2,
                    a: 0.12
                },
                "34": {
                    y: 45.45,
                    a: 0.06
                },
                "35": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance7, 20, 20, {
                "20": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "21": {
                    y: 2.4,
                    a: 0.95
                },
                "22": {
                    y: 4.85,
                    a: 0.9
                },
                "23": {
                    y: 7.25,
                    a: 0.85
                },
                "24": {
                    y: 9.7,
                    a: 0.8
                },
                "25": {
                    y: 11.65,
                    a: 0.74
                },
                "26": {
                    y: 13.6,
                    a: 0.68
                },
                "27": {
                    y: 15.55,
                    a: 0.62
                },
                "28": {
                    y: 17.5,
                    a: 0.56
                },
                "29": {
                    y: 19.45,
                    a: 0.5
                },
                "30": {
                    y: 22.05,
                    a: 0.46
                },
                "31": {
                    y: 24.65,
                    a: 0.42
                },
                "32": {
                    y: 27.25,
                    a: 0.38
                },
                "33": {
                    y: 29.85,
                    a: 0.34
                },
                "34": {
                    y: 32.45,
                    a: 0.3
                },
                "35": {
                    y: 35.7,
                    a: 0.24
                },
                "36": {
                    y: 38.95,
                    a: 0.18
                },
                "37": {
                    y: 42.2,
                    a: 0.12
                },
                "38": {
                    y: 45.45,
                    a: 0.06
                },
                "39": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance8, 24, 20, {
                "24": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "25": {
                    y: 2.4,
                    a: 0.95
                },
                "26": {
                    y: 4.85,
                    a: 0.9
                },
                "27": {
                    y: 7.25,
                    a: 0.85
                },
                "28": {
                    y: 9.7,
                    a: 0.8
                },
                "29": {
                    y: 11.65,
                    a: 0.74
                },
                "30": {
                    y: 13.6,
                    a: 0.68
                },
                "31": {
                    y: 15.55,
                    a: 0.62
                },
                "32": {
                    y: 17.5,
                    a: 0.56
                },
                "33": {
                    y: 19.45,
                    a: 0.5
                },
                "34": {
                    y: 22.05,
                    a: 0.46
                },
                "35": {
                    y: 24.65,
                    a: 0.42
                },
                "36": {
                    y: 27.25,
                    a: 0.38
                },
                "37": {
                    y: 29.85,
                    a: 0.34
                },
                "38": {
                    y: 32.45,
                    a: 0.3
                },
                "39": {
                    y: 35.7,
                    a: 0.24
                },
                "40": {
                    y: 38.95,
                    a: 0.18
                },
                "41": {
                    y: 42.2,
                    a: 0.12
                },
                "42": {
                    y: 45.45,
                    a: 0.06
                },
                "43": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance9, 28, 17, {
                "28": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "29": {
                    y: 2.4,
                    a: 0.95
                },
                "30": {
                    y: 4.85,
                    a: 0.9
                },
                "31": {
                    y: 7.25,
                    a: 0.85
                },
                "32": {
                    y: 9.7,
                    a: 0.8
                },
                "33": {
                    y: 11.65,
                    a: 0.74
                },
                "34": {
                    y: 13.6,
                    a: 0.68
                },
                "35": {
                    y: 15.55,
                    a: 0.62
                },
                "36": {
                    y: 17.5,
                    a: 0.56
                },
                "37": {
                    y: 19.45,
                    a: 0.5
                },
                "38": {
                    y: 22.05,
                    a: 0.46
                },
                "39": {
                    y: 24.65,
                    a: 0.42
                },
                "40": {
                    y: 27.25,
                    a: 0.38
                },
                "41": {
                    y: 29.85,
                    a: 0.34
                },
                "42": {
                    y: 32.45,
                    a: 0.3
                },
                "43": {
                    y: 35.7,
                    a: 0.24
                },
                "44": {
                    y: 38.95,
                    a: 0.18
                }
            })
            .addTimedChild(instance10, 32, 13, {
                "32": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "33": {
                    y: 2.4,
                    a: 0.95
                },
                "34": {
                    y: 4.85,
                    a: 0.9
                },
                "35": {
                    y: 7.25,
                    a: 0.85
                },
                "36": {
                    y: 9.7,
                    a: 0.8
                },
                "37": {
                    y: 11.65,
                    a: 0.74
                },
                "38": {
                    y: 13.6,
                    a: 0.68
                },
                "39": {
                    y: 15.55,
                    a: 0.62
                },
                "40": {
                    y: 17.5,
                    a: 0.56
                },
                "41": {
                    y: 19.45,
                    a: 0.5
                },
                "42": {
                    y: 22.05,
                    a: 0.46
                },
                "43": {
                    y: 24.65,
                    a: 0.42
                },
                "44": {
                    y: 27.25,
                    a: 0.38
                }
            })
            .addTimedChild(instance27, 55, 10, {
                "55": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -2.3
                },
                "57": {
                    x: -8.95
                },
                "58": {
                    x: -15.65
                },
                "59": {
                    x: -22.35
                },
                "60": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance26, 55, 10, {
                "55": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 6.8,
                    y: -1.8
                },
                "57": {
                    x: 12.45,
                    y: -1.55
                },
                "58": {
                    x: 18.1,
                    y: -1.35
                },
                "59": {
                    x: 23.7,
                    y: -1.15
                },
                "60": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance25, 55, 10, {
                "55": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 1.05,
                    y: 8.2
                },
                "57": {
                    x: 1.35,
                    y: 13
                },
                "58": {
                    x: 1.6,
                    y: 17.75
                },
                "59": {
                    x: 1.8,
                    y: 22.5
                },
                "60": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance24, 55, 10, {
                "55": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 2.8,
                    y: -6
                },
                "57": {
                    x: 2.35,
                    y: -12.2
                },
                "58": {
                    x: 1.95,
                    y: -18.45
                },
                "59": {
                    x: 1.45,
                    y: -24.65
                },
                "60": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance23, 55, 10, {
                "55": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance22, 55, 10, {
                "55": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance21, 55, 4, {
                "55": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance42, 65, 9, {
                "65": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance41, 65, 9, {
                "65": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance40, 65, 9, {
                "65": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance39, 65, 9, {
                "65": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance38, 65, 9, {
                "65": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance37, 65, 9, {
                "65": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance35, 59, 15, {
                "59": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "60": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "65": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "66": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance20, 55, 10, {
                "55": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -3.9,
                    y: -4.15
                },
                "57": {
                    x: -7.6,
                    y: -8.7
                },
                "58": {
                    x: -11.3,
                    y: -13.3
                },
                "59": {
                    x: -15.05,
                    y: -17.9
                },
                "60": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance18, 49, 10, {
                "49": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: -2.3
                },
                "51": {
                    x: -8.95
                },
                "52": {
                    x: -15.65
                },
                "53": {
                    x: -22.35
                },
                "54": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance17, 49, 10, {
                "49": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: 6.8,
                    y: -1.8
                },
                "51": {
                    x: 12.45,
                    y: -1.55
                },
                "52": {
                    x: 18.1,
                    y: -1.35
                },
                "53": {
                    x: 23.7,
                    y: -1.15
                },
                "54": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance16, 49, 10, {
                "49": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: 1.05,
                    y: 8.2
                },
                "51": {
                    x: 1.35,
                    y: 13
                },
                "52": {
                    x: 1.6,
                    y: 17.75
                },
                "53": {
                    x: 1.8,
                    y: 22.5
                },
                "54": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance15, 49, 10, {
                "49": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: 2.8,
                    y: -6
                },
                "51": {
                    x: 2.35,
                    y: -12.2
                },
                "52": {
                    x: 1.95,
                    y: -18.45
                },
                "53": {
                    x: 1.45,
                    y: -24.65
                },
                "54": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance14, 49, 10, {
                "49": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "50": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "51": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "52": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "53": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "54": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance13, 49, 10, {
                "49": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "50": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "51": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "52": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "53": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "54": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance12, 49, 4, {
                "49": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "50": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "51": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "52": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance36, 65, 9, {
                "65": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance34, 59, 9, {
                "59": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance33, 59, 9, {
                "59": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance32, 59, 9, {
                "59": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 59, 9, {
                "59": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance30, 59, 9, {
                "59": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance29, 59, 9, {
                "59": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance19, 53, 15, {
                "53": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "54": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "59": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "60": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance1, 0, 59, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "45": {
                    x: -5.95,
                    y: -5.95,
                    sx: 1.916,
                    sy: 1.916
                },
                "46": {
                    x: -7.4,
                    y: -7.4,
                    sx: 2.145,
                    sy: 2.145
                },
                "47": {
                    x: -8.9,
                    y: -8.9,
                    sx: 2.374,
                    sy: 2.374
                },
                "48": {
                    x: -10.4,
                    y: -10.4,
                    sx: 2.603,
                    sy: 2.603
                },
                "49": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "50": {
                    x: -3.9,
                    y: -4.15
                },
                "51": {
                    x: -7.6,
                    y: -8.7
                },
                "52": {
                    x: -11.3,
                    y: -13.3
                },
                "53": {
                    x: -15.05,
                    y: -17.9
                },
                "54": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "55": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "56": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "57": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "58": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance28, 59, 9, {
                "59": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "60": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "61": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "62": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "63": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "64": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "65": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "66": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "67": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance50, 68, 1, {
                "68": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance49, 68, 1, {
                "68": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance48, 68, 1, {
                "68": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance47, 68, 1, {
                "68": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance46, 68, 1, {
                "68": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance45, 68, 1, {
                "68": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance44, 68, 1, {
                "68": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance43, 68, 1, {
                "68": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance58, 74, 1, {
                "74": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance57, 74, 1, {
                "74": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance56, 74, 1, {
                "74": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance55, 74, 1, {
                "74": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance54, 74, 1, {
                "74": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance53, 74, 1, {
                "74": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance52, 74, 1, {
                "74": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance51, 74, 1, {
                "74": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance11, 49, 27, {
                "49": {
                    x: -47.75,
                    y: -45.65,
                    sx: 0.329,
                    sy: 0.329,
                    a: 1
                },
                "50": {
                    x: -65.454,
                    y: -63.357,
                    sx: 0.439,
                    sy: 0.439,
                    a: 0.96
                },
                "51": {
                    x: -83.152,
                    y: -81.058,
                    sx: 0.548,
                    sy: 0.548,
                    a: 0.92
                },
                "52": {
                    x: -100.857,
                    y: -98.765,
                    sx: 0.657,
                    sy: 0.657,
                    a: 0.88
                },
                "53": {
                    x: -118.555,
                    y: -116.466,
                    sx: 0.767,
                    sy: 0.767,
                    a: 0.85
                },
                "54": {
                    x: -136.259,
                    y: -134.124,
                    sx: 0.876,
                    sy: 0.876,
                    a: 0.81
                },
                "55": {
                    x: -153.964,
                    y: -151.881,
                    sx: 0.985,
                    sy: 0.985,
                    a: 0.77
                },
                "56": {
                    x: -171.712,
                    y: -169.582,
                    sx: 1.095,
                    sy: 1.095,
                    a: 0.73
                },
                "57": {
                    x: -189.417,
                    y: -187.29,
                    sx: 1.204,
                    sy: 1.204,
                    a: 0.69
                },
                "58": {
                    x: -207.121,
                    y: -204.997,
                    sx: 1.313,
                    sy: 1.313,
                    a: 0.65
                },
                "59": {
                    x: -224.819,
                    y: -222.698,
                    sx: 1.423,
                    sy: 1.423,
                    a: 0.62
                },
                "60": {
                    x: -242.524,
                    y: -240.405,
                    sx: 1.532,
                    sy: 1.532,
                    a: 0.58
                },
                "61": {
                    x: -260.272,
                    y: -258.156,
                    sx: 1.641,
                    sy: 1.641,
                    a: 0.54
                },
                "62": {
                    x: -277.976,
                    y: -275.813,
                    sx: 1.751,
                    sy: 1.751,
                    a: 0.5
                },
                "63": {
                    x: -295.682,
                    y: -293.521,
                    sx: 1.86,
                    sy: 1.86,
                    a: 0.46
                },
                "64": {
                    x: -313.379,
                    y: -311.222,
                    sx: 1.969,
                    sy: 1.969,
                    a: 0.42
                },
                "65": {
                    x: -331.084,
                    y: -328.929,
                    sx: 2.079,
                    sy: 2.079,
                    a: 0.38
                },
                "66": {
                    x: -348.782,
                    y: -346.63,
                    sx: 2.188,
                    sy: 2.188,
                    a: 0.35
                },
                "67": {
                    x: -366.536,
                    y: -364.388,
                    sx: 2.297,
                    sy: 2.297,
                    a: 0.31
                },
                "68": {
                    x: -384.241,
                    y: -382.095,
                    sx: 2.407,
                    sy: 2.407,
                    a: 0.27
                },
                "69": {
                    x: -401.939,
                    y: -399.796,
                    sx: 2.516,
                    sy: 2.516,
                    a: 0.23
                },
                "70": {
                    x: -419.644,
                    y: -417.504,
                    sx: 2.625,
                    sy: 2.625,
                    a: 0.19
                },
                "71": {
                    x: -437.349,
                    y: -435.161,
                    sx: 2.735,
                    sy: 2.735,
                    a: 0.15
                },
                "72": {
                    x: -455.047,
                    y: -452.862,
                    sx: 2.844,
                    sy: 2.844,
                    a: 0.12
                },
                "73": {
                    x: -472.801,
                    y: -470.619,
                    sx: 2.953,
                    sy: 2.953,
                    a: 0.08
                },
                "74": {
                    x: -490.499,
                    y: -488.32,
                    sx: 3.062,
                    sy: 3.062,
                    a: 0.04
                },
                "75": {
                    x: -508.25,
                    y: -506.15,
                    sx: 3.172,
                    sy: 3.172,
                    a: 0
                }
            });
    });

    var Graphic71 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic72 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic73 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic74 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic75 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic76 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic77 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic78 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic79 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic80 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic81 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic82 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic83 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic84 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic85 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic86 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic87 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 189, loop: false });
        var instance2 = new lib.fireballInside();
        var instance3 = new lib.fireballInside();
        var instance4 = new lib.fireballInside();
        var instance5 = new lib.fireballInside();
        var instance6 = new lib.fireballInside();
        var instance7 = new lib.fireballInside();
        var instance8 = new lib.fireballInside();
        var instance9 = new lib.fireballInside();
        var instance10 = new lib.fireballInside();
        var instance27 = new lib.fireballInside();
        var instance26 = new lib.fireballInside();
        var instance25 = new lib.fireballInside();
        var instance24 = new lib.fireballInside();
        var instance23 = new lib.fireballInside();
        var instance22 = new lib.fireballInside();
        var instance21 = new lib.fireballInside();
        var instance42 = new Graphic86(MovieClip.SYNCHED);
        var instance41 = new Graphic85(MovieClip.SYNCHED);
        var instance40 = new Graphic84(MovieClip.SYNCHED);
        var instance39 = new Graphic83(MovieClip.SYNCHED);
        var instance38 = new Graphic82(MovieClip.SYNCHED);
        var instance37 = new Graphic81(MovieClip.SYNCHED);
        var instance35 = new Graphic80(MovieClip.SYNCHED);
        var instance20 = new lib.fireballInside();
        var instance18 = new lib.fireballInside();
        var instance17 = new lib.fireballInside();
        var instance16 = new lib.fireballInside();
        var instance15 = new lib.fireballInside();
        var instance14 = new lib.fireballInside();
        var instance13 = new lib.fireballInside();
        var instance12 = new lib.fireballInside();
        var instance36 = new Graphic79(MovieClip.SYNCHED);
        var instance34 = new Graphic78(MovieClip.SYNCHED);
        var instance33 = new Graphic77(MovieClip.SYNCHED);
        var instance32 = new Graphic76(MovieClip.SYNCHED);
        var instance31 = new Graphic75(MovieClip.SYNCHED);
        var instance30 = new Graphic74(MovieClip.SYNCHED);
        var instance29 = new Graphic73(MovieClip.SYNCHED);
        var instance19 = new Graphic72(MovieClip.SYNCHED);
        var instance1 = new lib.fireballInside();
        var instance28 = new Graphic71(MovieClip.SYNCHED);
        var instance50 = new lib.fireballInside();
        var instance49 = new lib.fireballInside();
        var instance48 = new lib.fireballInside();
        var instance47 = new lib.fireballInside();
        var instance46 = new lib.fireballInside();
        var instance45 = new lib.fireballInside();
        var instance44 = new lib.fireballInside();
        var instance43 = new lib.fireballInside();
        var instance58 = new lib.fireballInside();
        var instance57 = new lib.fireballInside();
        var instance56 = new lib.fireballInside();
        var instance55 = new lib.fireballInside();
        var instance54 = new lib.fireballInside();
        var instance53 = new lib.fireballInside();
        var instance52 = new lib.fireballInside();
        var instance51 = new lib.fireballInside();
        var instance11 = new lib.gradient();
        this.addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "1": {
                    y: 2.4,
                    a: 0.95
                },
                "2": {
                    y: 4.85,
                    a: 0.9
                },
                "3": {
                    y: 7.25,
                    a: 0.85
                },
                "4": {
                    y: 9.7,
                    a: 0.8
                },
                "5": {
                    y: 11.65,
                    a: 0.74
                },
                "6": {
                    y: 13.6,
                    a: 0.68
                },
                "7": {
                    y: 15.55,
                    a: 0.62
                },
                "8": {
                    y: 17.5,
                    a: 0.56
                },
                "9": {
                    y: 19.45,
                    a: 0.5
                },
                "10": {
                    y: 22.05,
                    a: 0.46
                },
                "11": {
                    y: 24.65,
                    a: 0.42
                },
                "12": {
                    y: 27.25,
                    a: 0.38
                },
                "13": {
                    y: 29.85,
                    a: 0.34
                },
                "14": {
                    y: 32.45,
                    a: 0.3
                },
                "15": {
                    y: 35.7,
                    a: 0.24
                },
                "16": {
                    y: 38.95,
                    a: 0.18
                },
                "17": {
                    y: 42.2,
                    a: 0.12
                },
                "18": {
                    y: 45.45,
                    a: 0.06
                },
                "19": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance3, 4, 20, {
                "4": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "5": {
                    y: 2.4,
                    a: 0.95
                },
                "6": {
                    y: 4.85,
                    a: 0.9
                },
                "7": {
                    y: 7.25,
                    a: 0.85
                },
                "8": {
                    y: 9.7,
                    a: 0.8
                },
                "9": {
                    y: 11.65,
                    a: 0.74
                },
                "10": {
                    y: 13.6,
                    a: 0.68
                },
                "11": {
                    y: 15.55,
                    a: 0.62
                },
                "12": {
                    y: 17.5,
                    a: 0.56
                },
                "13": {
                    y: 19.45,
                    a: 0.5
                },
                "14": {
                    y: 22.05,
                    a: 0.46
                },
                "15": {
                    y: 24.65,
                    a: 0.42
                },
                "16": {
                    y: 27.25,
                    a: 0.38
                },
                "17": {
                    y: 29.85,
                    a: 0.34
                },
                "18": {
                    y: 32.45,
                    a: 0.3
                },
                "19": {
                    y: 35.7,
                    a: 0.24
                },
                "20": {
                    y: 38.95,
                    a: 0.18
                },
                "21": {
                    y: 42.2,
                    a: 0.12
                },
                "22": {
                    y: 45.45,
                    a: 0.06
                },
                "23": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance4, 8, 20, {
                "8": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "9": {
                    y: 2.4,
                    a: 0.95
                },
                "10": {
                    y: 4.85,
                    a: 0.9
                },
                "11": {
                    y: 7.25,
                    a: 0.85
                },
                "12": {
                    y: 9.7,
                    a: 0.8
                },
                "13": {
                    y: 11.65,
                    a: 0.74
                },
                "14": {
                    y: 13.6,
                    a: 0.68
                },
                "15": {
                    y: 15.55,
                    a: 0.62
                },
                "16": {
                    y: 17.5,
                    a: 0.56
                },
                "17": {
                    y: 19.45,
                    a: 0.5
                },
                "18": {
                    y: 22.05,
                    a: 0.46
                },
                "19": {
                    y: 24.65,
                    a: 0.42
                },
                "20": {
                    y: 27.25,
                    a: 0.38
                },
                "21": {
                    y: 29.85,
                    a: 0.34
                },
                "22": {
                    y: 32.45,
                    a: 0.3
                },
                "23": {
                    y: 35.7,
                    a: 0.24
                },
                "24": {
                    y: 38.95,
                    a: 0.18
                },
                "25": {
                    y: 42.2,
                    a: 0.12
                },
                "26": {
                    y: 45.45,
                    a: 0.06
                },
                "27": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance5, 12, 20, {
                "12": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "13": {
                    y: 2.4,
                    a: 0.95
                },
                "14": {
                    y: 4.85,
                    a: 0.9
                },
                "15": {
                    y: 7.25,
                    a: 0.85
                },
                "16": {
                    y: 9.7,
                    a: 0.8
                },
                "17": {
                    y: 11.65,
                    a: 0.74
                },
                "18": {
                    y: 13.6,
                    a: 0.68
                },
                "19": {
                    y: 15.55,
                    a: 0.62
                },
                "20": {
                    y: 17.5,
                    a: 0.56
                },
                "21": {
                    y: 19.45,
                    a: 0.5
                },
                "22": {
                    y: 22.05,
                    a: 0.46
                },
                "23": {
                    y: 24.65,
                    a: 0.42
                },
                "24": {
                    y: 27.25,
                    a: 0.38
                },
                "25": {
                    y: 29.85,
                    a: 0.34
                },
                "26": {
                    y: 32.45,
                    a: 0.3
                },
                "27": {
                    y: 35.7,
                    a: 0.24
                },
                "28": {
                    y: 38.95,
                    a: 0.18
                },
                "29": {
                    y: 42.2,
                    a: 0.12
                },
                "30": {
                    y: 45.45,
                    a: 0.06
                },
                "31": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance6, 16, 20, {
                "16": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "17": {
                    y: 2.4,
                    a: 0.95
                },
                "18": {
                    y: 4.85,
                    a: 0.9
                },
                "19": {
                    y: 7.25,
                    a: 0.85
                },
                "20": {
                    y: 9.7,
                    a: 0.8
                },
                "21": {
                    y: 11.65,
                    a: 0.74
                },
                "22": {
                    y: 13.6,
                    a: 0.68
                },
                "23": {
                    y: 15.55,
                    a: 0.62
                },
                "24": {
                    y: 17.5,
                    a: 0.56
                },
                "25": {
                    y: 19.45,
                    a: 0.5
                },
                "26": {
                    y: 22.05,
                    a: 0.46
                },
                "27": {
                    y: 24.65,
                    a: 0.42
                },
                "28": {
                    y: 27.25,
                    a: 0.38
                },
                "29": {
                    y: 29.85,
                    a: 0.34
                },
                "30": {
                    y: 32.45,
                    a: 0.3
                },
                "31": {
                    y: 35.7,
                    a: 0.24
                },
                "32": {
                    y: 38.95,
                    a: 0.18
                },
                "33": {
                    y: 42.2,
                    a: 0.12
                },
                "34": {
                    y: 45.45,
                    a: 0.06
                },
                "35": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance7, 20, 20, {
                "20": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "21": {
                    y: 2.4,
                    a: 0.95
                },
                "22": {
                    y: 4.85,
                    a: 0.9
                },
                "23": {
                    y: 7.25,
                    a: 0.85
                },
                "24": {
                    y: 9.7,
                    a: 0.8
                },
                "25": {
                    y: 11.65,
                    a: 0.74
                },
                "26": {
                    y: 13.6,
                    a: 0.68
                },
                "27": {
                    y: 15.55,
                    a: 0.62
                },
                "28": {
                    y: 17.5,
                    a: 0.56
                },
                "29": {
                    y: 19.45,
                    a: 0.5
                },
                "30": {
                    y: 22.05,
                    a: 0.46
                },
                "31": {
                    y: 24.65,
                    a: 0.42
                },
                "32": {
                    y: 27.25,
                    a: 0.38
                },
                "33": {
                    y: 29.85,
                    a: 0.34
                },
                "34": {
                    y: 32.45,
                    a: 0.3
                },
                "35": {
                    y: 35.7,
                    a: 0.24
                },
                "36": {
                    y: 38.95,
                    a: 0.18
                },
                "37": {
                    y: 42.2,
                    a: 0.12
                },
                "38": {
                    y: 45.45,
                    a: 0.06
                },
                "39": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance8, 24, 20, {
                "24": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "25": {
                    y: 2.4,
                    a: 0.95
                },
                "26": {
                    y: 4.85,
                    a: 0.9
                },
                "27": {
                    y: 7.25,
                    a: 0.85
                },
                "28": {
                    y: 9.7,
                    a: 0.8
                },
                "29": {
                    y: 11.65,
                    a: 0.74
                },
                "30": {
                    y: 13.6,
                    a: 0.68
                },
                "31": {
                    y: 15.55,
                    a: 0.62
                },
                "32": {
                    y: 17.5,
                    a: 0.56
                },
                "33": {
                    y: 19.45,
                    a: 0.5
                },
                "34": {
                    y: 22.05,
                    a: 0.46
                },
                "35": {
                    y: 24.65,
                    a: 0.42
                },
                "36": {
                    y: 27.25,
                    a: 0.38
                },
                "37": {
                    y: 29.85,
                    a: 0.34
                },
                "38": {
                    y: 32.45,
                    a: 0.3
                },
                "39": {
                    y: 35.7,
                    a: 0.24
                },
                "40": {
                    y: 38.95,
                    a: 0.18
                },
                "41": {
                    y: 42.2,
                    a: 0.12
                },
                "42": {
                    y: 45.45,
                    a: 0.06
                },
                "43": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance9, 28, 22, {
                "28": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "29": {
                    y: 2.4,
                    a: 0.95
                },
                "30": {
                    y: 4.85,
                    a: 0.9
                },
                "31": {
                    y: 7.25,
                    a: 0.85
                },
                "32": {
                    y: 9.7,
                    a: 0.8
                },
                "33": {
                    y: 11.65,
                    a: 0.74
                },
                "34": {
                    y: 13.6,
                    a: 0.68
                },
                "35": {
                    y: 15.55,
                    a: 0.62
                },
                "36": {
                    y: 17.5,
                    a: 0.56
                },
                "37": {
                    y: 19.45,
                    a: 0.5
                },
                "38": {
                    y: 22.05,
                    a: 0.46
                },
                "39": {
                    y: 24.65,
                    a: 0.42
                },
                "40": {
                    y: 27.25,
                    a: 0.38
                },
                "41": {
                    y: 29.85,
                    a: 0.34
                },
                "42": {
                    y: 32.45,
                    a: 0.3
                },
                "43": {
                    y: 35.7,
                    a: 0.24
                },
                "44": {
                    y: 38.95,
                    a: 0.18
                },
                "45": {
                    y: 42.2,
                    a: 0.12
                },
                "46": {
                    y: 45.45,
                    a: 0.06
                },
                "47": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance10, 32, 18, {
                "32": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "33": {
                    y: 2.4,
                    a: 0.95
                },
                "34": {
                    y: 4.85,
                    a: 0.9
                },
                "35": {
                    y: 7.25,
                    a: 0.85
                },
                "36": {
                    y: 9.7,
                    a: 0.8
                },
                "37": {
                    y: 11.65,
                    a: 0.74
                },
                "38": {
                    y: 13.6,
                    a: 0.68
                },
                "39": {
                    y: 15.55,
                    a: 0.62
                },
                "40": {
                    y: 17.5,
                    a: 0.56
                },
                "41": {
                    y: 19.45,
                    a: 0.5
                },
                "42": {
                    y: 22.05,
                    a: 0.46
                },
                "43": {
                    y: 24.65,
                    a: 0.42
                },
                "44": {
                    y: 27.25,
                    a: 0.38
                },
                "45": {
                    y: 29.85,
                    a: 0.34
                },
                "46": {
                    y: 32.45,
                    a: 0.3
                },
                "47": {
                    y: 37.85,
                    a: 0.2
                },
                "48": {
                    y: 43.3,
                    a: 0.1
                },
                "49": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance27, 61, 10, {
                "61": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: -2.3
                },
                "63": {
                    x: -8.95
                },
                "64": {
                    x: -15.65
                },
                "65": {
                    x: -22.35
                },
                "66": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance26, 61, 10, {
                "61": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: 6.8,
                    y: -1.8
                },
                "63": {
                    x: 12.45,
                    y: -1.55
                },
                "64": {
                    x: 18.1,
                    y: -1.35
                },
                "65": {
                    x: 23.7,
                    y: -1.15
                },
                "66": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance25, 61, 10, {
                "61": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: 1.05,
                    y: 8.2
                },
                "63": {
                    x: 1.35,
                    y: 13
                },
                "64": {
                    x: 1.6,
                    y: 17.75
                },
                "65": {
                    x: 1.8,
                    y: 22.5
                },
                "66": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance24, 61, 10, {
                "61": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: 2.8,
                    y: -6
                },
                "63": {
                    x: 2.35,
                    y: -12.2
                },
                "64": {
                    x: 1.95,
                    y: -18.45
                },
                "65": {
                    x: 1.45,
                    y: -24.65
                },
                "66": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance23, 61, 10, {
                "61": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "62": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "63": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "64": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "65": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "66": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance22, 61, 10, {
                "61": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "62": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "63": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "64": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "65": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "66": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance21, 61, 4, {
                "61": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "62": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "63": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "64": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance42, 71, 9, {
                "71": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance41, 71, 9, {
                "71": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance40, 71, 9, {
                "71": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance39, 71, 9, {
                "71": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance38, 71, 9, {
                "71": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance37, 71, 9, {
                "71": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance35, 65, 15, {
                "65": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "66": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "71": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "72": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance20, 61, 10, {
                "61": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "62": {
                    x: -3.9,
                    y: -4.15
                },
                "63": {
                    x: -7.6,
                    y: -8.7
                },
                "64": {
                    x: -11.3,
                    y: -13.3
                },
                "65": {
                    x: -15.05,
                    y: -17.9
                },
                "66": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "67": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "68": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "69": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "70": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance18, 55, 10, {
                "55": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -2.3
                },
                "57": {
                    x: -8.95
                },
                "58": {
                    x: -15.65
                },
                "59": {
                    x: -22.35
                },
                "60": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance17, 55, 10, {
                "55": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 6.8,
                    y: -1.8
                },
                "57": {
                    x: 12.45,
                    y: -1.55
                },
                "58": {
                    x: 18.1,
                    y: -1.35
                },
                "59": {
                    x: 23.7,
                    y: -1.15
                },
                "60": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance16, 55, 10, {
                "55": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 1.05,
                    y: 8.2
                },
                "57": {
                    x: 1.35,
                    y: 13
                },
                "58": {
                    x: 1.6,
                    y: 17.75
                },
                "59": {
                    x: 1.8,
                    y: 22.5
                },
                "60": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance15, 55, 10, {
                "55": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: 2.8,
                    y: -6
                },
                "57": {
                    x: 2.35,
                    y: -12.2
                },
                "58": {
                    x: 1.95,
                    y: -18.45
                },
                "59": {
                    x: 1.45,
                    y: -24.65
                },
                "60": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance14, 55, 10, {
                "55": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance13, 55, 10, {
                "55": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "59": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "60": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance12, 55, 4, {
                "55": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "56": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "57": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "58": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance36, 71, 9, {
                "71": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "72": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "73": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "74": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "75": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "76": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "77": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "78": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "79": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance34, 65, 9, {
                "65": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance33, 65, 9, {
                "65": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance32, 65, 9, {
                "65": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 65, 9, {
                "65": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance30, 65, 9, {
                "65": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance29, 65, 9, {
                "65": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance19, 59, 15, {
                "59": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "60": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "65": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "66": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance1, 0, 65, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "50": {
                    x: -4.45,
                    y: -4.45,
                    sx: 1.687,
                    sy: 1.687
                },
                "51": {
                    x: -5.95,
                    y: -5.95,
                    sx: 1.916,
                    sy: 1.916
                },
                "52": {
                    x: -7.4,
                    y: -7.4,
                    sx: 2.145,
                    sy: 2.145
                },
                "53": {
                    x: -8.9,
                    y: -8.9,
                    sx: 2.374,
                    sy: 2.374
                },
                "54": {
                    x: -10.4,
                    y: -10.4,
                    sx: 2.603,
                    sy: 2.603
                },
                "55": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "56": {
                    x: -3.9,
                    y: -4.15
                },
                "57": {
                    x: -7.6,
                    y: -8.7
                },
                "58": {
                    x: -11.3,
                    y: -13.3
                },
                "59": {
                    x: -15.05,
                    y: -17.9
                },
                "60": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "61": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "62": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "63": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "64": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance28, 65, 9, {
                "65": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "66": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "67": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "68": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "69": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "70": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "71": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "72": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "73": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance50, 74, 1, {
                "74": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance49, 74, 1, {
                "74": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance48, 74, 1, {
                "74": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance47, 74, 1, {
                "74": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance46, 74, 1, {
                "74": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance45, 74, 1, {
                "74": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance44, 74, 1, {
                "74": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance43, 74, 1, {
                "74": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance58, 80, 1, {
                "80": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance57, 80, 1, {
                "80": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance56, 80, 1, {
                "80": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance55, 80, 1, {
                "80": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance54, 80, 1, {
                "80": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance53, 80, 1, {
                "80": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance52, 80, 1, {
                "80": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance51, 80, 1, {
                "80": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance11, 55, 27, {
                "55": {
                    x: -47.75,
                    y: -45.65,
                    sx: 0.329,
                    sy: 0.329,
                    a: 1
                },
                "56": {
                    x: -65.454,
                    y: -63.357,
                    sx: 0.439,
                    sy: 0.439,
                    a: 0.96
                },
                "57": {
                    x: -83.152,
                    y: -81.058,
                    sx: 0.548,
                    sy: 0.548,
                    a: 0.92
                },
                "58": {
                    x: -100.857,
                    y: -98.765,
                    sx: 0.657,
                    sy: 0.657,
                    a: 0.88
                },
                "59": {
                    x: -118.555,
                    y: -116.466,
                    sx: 0.767,
                    sy: 0.767,
                    a: 0.85
                },
                "60": {
                    x: -136.259,
                    y: -134.124,
                    sx: 0.876,
                    sy: 0.876,
                    a: 0.81
                },
                "61": {
                    x: -153.964,
                    y: -151.881,
                    sx: 0.985,
                    sy: 0.985,
                    a: 0.77
                },
                "62": {
                    x: -171.712,
                    y: -169.582,
                    sx: 1.095,
                    sy: 1.095,
                    a: 0.73
                },
                "63": {
                    x: -189.417,
                    y: -187.29,
                    sx: 1.204,
                    sy: 1.204,
                    a: 0.69
                },
                "64": {
                    x: -207.121,
                    y: -204.997,
                    sx: 1.313,
                    sy: 1.313,
                    a: 0.65
                },
                "65": {
                    x: -224.819,
                    y: -222.698,
                    sx: 1.423,
                    sy: 1.423,
                    a: 0.62
                },
                "66": {
                    x: -242.524,
                    y: -240.405,
                    sx: 1.532,
                    sy: 1.532,
                    a: 0.58
                },
                "67": {
                    x: -260.272,
                    y: -258.156,
                    sx: 1.641,
                    sy: 1.641,
                    a: 0.54
                },
                "68": {
                    x: -277.976,
                    y: -275.813,
                    sx: 1.751,
                    sy: 1.751,
                    a: 0.5
                },
                "69": {
                    x: -295.682,
                    y: -293.521,
                    sx: 1.86,
                    sy: 1.86,
                    a: 0.46
                },
                "70": {
                    x: -313.379,
                    y: -311.222,
                    sx: 1.969,
                    sy: 1.969,
                    a: 0.42
                },
                "71": {
                    x: -331.084,
                    y: -328.929,
                    sx: 2.079,
                    sy: 2.079,
                    a: 0.38
                },
                "72": {
                    x: -348.782,
                    y: -346.63,
                    sx: 2.188,
                    sy: 2.188,
                    a: 0.35
                },
                "73": {
                    x: -366.536,
                    y: -364.388,
                    sx: 2.297,
                    sy: 2.297,
                    a: 0.31
                },
                "74": {
                    x: -384.241,
                    y: -382.095,
                    sx: 2.407,
                    sy: 2.407,
                    a: 0.27
                },
                "75": {
                    x: -401.939,
                    y: -399.796,
                    sx: 2.516,
                    sy: 2.516,
                    a: 0.23
                },
                "76": {
                    x: -419.644,
                    y: -417.504,
                    sx: 2.625,
                    sy: 2.625,
                    a: 0.19
                },
                "77": {
                    x: -437.349,
                    y: -435.161,
                    sx: 2.735,
                    sy: 2.735,
                    a: 0.15
                },
                "78": {
                    x: -455.047,
                    y: -452.862,
                    sx: 2.844,
                    sy: 2.844,
                    a: 0.12
                },
                "79": {
                    x: -472.801,
                    y: -470.619,
                    sx: 2.953,
                    sy: 2.953,
                    a: 0.08
                },
                "80": {
                    x: -490.499,
                    y: -488.32,
                    sx: 3.062,
                    sy: 3.062,
                    a: 0.04
                },
                "81": {
                    x: -508.25,
                    y: -506.15,
                    sx: 3.172,
                    sy: 3.172,
                    a: 0
                }
            });
    });

    var Graphic88 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic89 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic90 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic91 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic92 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic93 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic94 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic95 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic96 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic97 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic98 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic99 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic100 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic101 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic102 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic103 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new lib.fireworkDot();
        this.addTimedChild(instance1);
    });

    var Graphic104 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 158, loop: false });
        var instance2 = new lib.fireballInside();
        var instance3 = new lib.fireballInside();
        var instance4 = new lib.fireballInside();
        var instance5 = new lib.fireballInside();
        var instance6 = new lib.fireballInside();
        var instance7 = new lib.fireballInside();
        var instance8 = new lib.fireballInside();
        var instance9 = new lib.fireballInside();
        var instance10 = new lib.fireballInside();
        var instance27 = new lib.fireballInside();
        var instance26 = new lib.fireballInside();
        var instance25 = new lib.fireballInside();
        var instance24 = new lib.fireballInside();
        var instance23 = new lib.fireballInside();
        var instance22 = new lib.fireballInside();
        var instance21 = new lib.fireballInside();
        var instance42 = new Graphic103(MovieClip.SYNCHED);
        var instance41 = new Graphic102(MovieClip.SYNCHED);
        var instance40 = new Graphic101(MovieClip.SYNCHED);
        var instance39 = new Graphic100(MovieClip.SYNCHED);
        var instance38 = new Graphic99(MovieClip.SYNCHED);
        var instance37 = new Graphic98(MovieClip.SYNCHED);
        var instance35 = new Graphic97(MovieClip.SYNCHED);
        var instance20 = new lib.fireballInside();
        var instance18 = new lib.fireballInside();
        var instance17 = new lib.fireballInside();
        var instance16 = new lib.fireballInside();
        var instance15 = new lib.fireballInside();
        var instance14 = new lib.fireballInside();
        var instance13 = new lib.fireballInside();
        var instance12 = new lib.fireballInside();
        var instance36 = new Graphic96(MovieClip.SYNCHED);
        var instance34 = new Graphic95(MovieClip.SYNCHED);
        var instance33 = new Graphic94(MovieClip.SYNCHED);
        var instance32 = new Graphic93(MovieClip.SYNCHED);
        var instance31 = new Graphic92(MovieClip.SYNCHED);
        var instance30 = new Graphic91(MovieClip.SYNCHED);
        var instance29 = new Graphic90(MovieClip.SYNCHED);
        var instance19 = new Graphic89(MovieClip.SYNCHED);
        var instance1 = new lib.fireballInside();
        var instance28 = new Graphic88(MovieClip.SYNCHED);
        var instance50 = new lib.fireballInside();
        var instance49 = new lib.fireballInside();
        var instance48 = new lib.fireballInside();
        var instance47 = new lib.fireballInside();
        var instance46 = new lib.fireballInside();
        var instance45 = new lib.fireballInside();
        var instance44 = new lib.fireballInside();
        var instance43 = new lib.fireballInside();
        var instance58 = new lib.fireballInside();
        var instance57 = new lib.fireballInside();
        var instance56 = new lib.fireballInside();
        var instance55 = new lib.fireballInside();
        var instance54 = new lib.fireballInside();
        var instance53 = new lib.fireballInside();
        var instance52 = new lib.fireballInside();
        var instance51 = new lib.fireballInside();
        var instance11 = new lib.gradient();
        this.addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "1": {
                    y: 2.4,
                    a: 0.95
                },
                "2": {
                    y: 4.85,
                    a: 0.9
                },
                "3": {
                    y: 7.25,
                    a: 0.85
                },
                "4": {
                    y: 9.7,
                    a: 0.8
                },
                "5": {
                    y: 11.65,
                    a: 0.74
                },
                "6": {
                    y: 13.6,
                    a: 0.68
                },
                "7": {
                    y: 15.55,
                    a: 0.62
                },
                "8": {
                    y: 17.5,
                    a: 0.56
                },
                "9": {
                    y: 19.45,
                    a: 0.5
                },
                "10": {
                    y: 22.05,
                    a: 0.46
                },
                "11": {
                    y: 24.65,
                    a: 0.42
                },
                "12": {
                    y: 27.25,
                    a: 0.38
                },
                "13": {
                    y: 29.85,
                    a: 0.34
                },
                "14": {
                    y: 32.45,
                    a: 0.3
                },
                "15": {
                    y: 35.7,
                    a: 0.24
                },
                "16": {
                    y: 38.95,
                    a: 0.18
                },
                "17": {
                    y: 42.2,
                    a: 0.12
                },
                "18": {
                    y: 45.45,
                    a: 0.06
                },
                "19": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance3, 4, 20, {
                "4": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "5": {
                    y: 2.4,
                    a: 0.95
                },
                "6": {
                    y: 4.85,
                    a: 0.9
                },
                "7": {
                    y: 7.25,
                    a: 0.85
                },
                "8": {
                    y: 9.7,
                    a: 0.8
                },
                "9": {
                    y: 11.65,
                    a: 0.74
                },
                "10": {
                    y: 13.6,
                    a: 0.68
                },
                "11": {
                    y: 15.55,
                    a: 0.62
                },
                "12": {
                    y: 17.5,
                    a: 0.56
                },
                "13": {
                    y: 19.45,
                    a: 0.5
                },
                "14": {
                    y: 22.05,
                    a: 0.46
                },
                "15": {
                    y: 24.65,
                    a: 0.42
                },
                "16": {
                    y: 27.25,
                    a: 0.38
                },
                "17": {
                    y: 29.85,
                    a: 0.34
                },
                "18": {
                    y: 32.45,
                    a: 0.3
                },
                "19": {
                    y: 35.7,
                    a: 0.24
                },
                "20": {
                    y: 38.95,
                    a: 0.18
                },
                "21": {
                    y: 42.2,
                    a: 0.12
                },
                "22": {
                    y: 45.45,
                    a: 0.06
                },
                "23": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance4, 8, 20, {
                "8": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "9": {
                    y: 2.4,
                    a: 0.95
                },
                "10": {
                    y: 4.85,
                    a: 0.9
                },
                "11": {
                    y: 7.25,
                    a: 0.85
                },
                "12": {
                    y: 9.7,
                    a: 0.8
                },
                "13": {
                    y: 11.65,
                    a: 0.74
                },
                "14": {
                    y: 13.6,
                    a: 0.68
                },
                "15": {
                    y: 15.55,
                    a: 0.62
                },
                "16": {
                    y: 17.5,
                    a: 0.56
                },
                "17": {
                    y: 19.45,
                    a: 0.5
                },
                "18": {
                    y: 22.05,
                    a: 0.46
                },
                "19": {
                    y: 24.65,
                    a: 0.42
                },
                "20": {
                    y: 27.25,
                    a: 0.38
                },
                "21": {
                    y: 29.85,
                    a: 0.34
                },
                "22": {
                    y: 32.45,
                    a: 0.3
                },
                "23": {
                    y: 35.7,
                    a: 0.24
                },
                "24": {
                    y: 38.95,
                    a: 0.18
                },
                "25": {
                    y: 42.2,
                    a: 0.12
                },
                "26": {
                    y: 45.45,
                    a: 0.06
                },
                "27": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance5, 12, 20, {
                "12": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "13": {
                    y: 2.4,
                    a: 0.95
                },
                "14": {
                    y: 4.85,
                    a: 0.9
                },
                "15": {
                    y: 7.25,
                    a: 0.85
                },
                "16": {
                    y: 9.7,
                    a: 0.8
                },
                "17": {
                    y: 11.65,
                    a: 0.74
                },
                "18": {
                    y: 13.6,
                    a: 0.68
                },
                "19": {
                    y: 15.55,
                    a: 0.62
                },
                "20": {
                    y: 17.5,
                    a: 0.56
                },
                "21": {
                    y: 19.45,
                    a: 0.5
                },
                "22": {
                    y: 22.05,
                    a: 0.46
                },
                "23": {
                    y: 24.65,
                    a: 0.42
                },
                "24": {
                    y: 27.25,
                    a: 0.38
                },
                "25": {
                    y: 29.85,
                    a: 0.34
                },
                "26": {
                    y: 32.45,
                    a: 0.3
                },
                "27": {
                    y: 35.7,
                    a: 0.24
                },
                "28": {
                    y: 38.95,
                    a: 0.18
                },
                "29": {
                    y: 42.2,
                    a: 0.12
                },
                "30": {
                    y: 45.45,
                    a: 0.06
                },
                "31": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance6, 16, 20, {
                "16": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "17": {
                    y: 2.4,
                    a: 0.95
                },
                "18": {
                    y: 4.85,
                    a: 0.9
                },
                "19": {
                    y: 7.25,
                    a: 0.85
                },
                "20": {
                    y: 9.7,
                    a: 0.8
                },
                "21": {
                    y: 11.65,
                    a: 0.74
                },
                "22": {
                    y: 13.6,
                    a: 0.68
                },
                "23": {
                    y: 15.55,
                    a: 0.62
                },
                "24": {
                    y: 17.5,
                    a: 0.56
                },
                "25": {
                    y: 19.45,
                    a: 0.5
                },
                "26": {
                    y: 22.05,
                    a: 0.46
                },
                "27": {
                    y: 24.65,
                    a: 0.42
                },
                "28": {
                    y: 27.25,
                    a: 0.38
                },
                "29": {
                    y: 29.85,
                    a: 0.34
                },
                "30": {
                    y: 32.45,
                    a: 0.3
                },
                "31": {
                    y: 35.7,
                    a: 0.24
                },
                "32": {
                    y: 38.95,
                    a: 0.18
                },
                "33": {
                    y: 42.2,
                    a: 0.12
                },
                "34": {
                    y: 45.45,
                    a: 0.06
                },
                "35": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance7, 20, 20, {
                "20": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "21": {
                    y: 2.4,
                    a: 0.95
                },
                "22": {
                    y: 4.85,
                    a: 0.9
                },
                "23": {
                    y: 7.25,
                    a: 0.85
                },
                "24": {
                    y: 9.7,
                    a: 0.8
                },
                "25": {
                    y: 11.65,
                    a: 0.74
                },
                "26": {
                    y: 13.6,
                    a: 0.68
                },
                "27": {
                    y: 15.55,
                    a: 0.62
                },
                "28": {
                    y: 17.5,
                    a: 0.56
                },
                "29": {
                    y: 19.45,
                    a: 0.5
                },
                "30": {
                    y: 22.05,
                    a: 0.46
                },
                "31": {
                    y: 24.65,
                    a: 0.42
                },
                "32": {
                    y: 27.25,
                    a: 0.38
                },
                "33": {
                    y: 29.85,
                    a: 0.34
                },
                "34": {
                    y: 32.45,
                    a: 0.3
                },
                "35": {
                    y: 35.7,
                    a: 0.24
                },
                "36": {
                    y: 38.95,
                    a: 0.18
                },
                "37": {
                    y: 42.2,
                    a: 0.12
                },
                "38": {
                    y: 45.45,
                    a: 0.06
                },
                "39": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance8, 24, 20, {
                "24": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "25": {
                    y: 2.4,
                    a: 0.95
                },
                "26": {
                    y: 4.85,
                    a: 0.9
                },
                "27": {
                    y: 7.25,
                    a: 0.85
                },
                "28": {
                    y: 9.7,
                    a: 0.8
                },
                "29": {
                    y: 11.65,
                    a: 0.74
                },
                "30": {
                    y: 13.6,
                    a: 0.68
                },
                "31": {
                    y: 15.55,
                    a: 0.62
                },
                "32": {
                    y: 17.5,
                    a: 0.56
                },
                "33": {
                    y: 19.45,
                    a: 0.5
                },
                "34": {
                    y: 22.05,
                    a: 0.46
                },
                "35": {
                    y: 24.65,
                    a: 0.42
                },
                "36": {
                    y: 27.25,
                    a: 0.38
                },
                "37": {
                    y: 29.85,
                    a: 0.34
                },
                "38": {
                    y: 32.45,
                    a: 0.3
                },
                "39": {
                    y: 35.7,
                    a: 0.24
                },
                "40": {
                    y: 38.95,
                    a: 0.18
                },
                "41": {
                    y: 42.2,
                    a: 0.12
                },
                "42": {
                    y: 45.45,
                    a: 0.06
                },
                "43": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance9, 28, 22, {
                "28": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "29": {
                    y: 2.4,
                    a: 0.95
                },
                "30": {
                    y: 4.85,
                    a: 0.9
                },
                "31": {
                    y: 7.25,
                    a: 0.85
                },
                "32": {
                    y: 9.7,
                    a: 0.8
                },
                "33": {
                    y: 11.65,
                    a: 0.74
                },
                "34": {
                    y: 13.6,
                    a: 0.68
                },
                "35": {
                    y: 15.55,
                    a: 0.62
                },
                "36": {
                    y: 17.5,
                    a: 0.56
                },
                "37": {
                    y: 19.45,
                    a: 0.5
                },
                "38": {
                    y: 22.05,
                    a: 0.46
                },
                "39": {
                    y: 24.65,
                    a: 0.42
                },
                "40": {
                    y: 27.25,
                    a: 0.38
                },
                "41": {
                    y: 29.85,
                    a: 0.34
                },
                "42": {
                    y: 32.45,
                    a: 0.3
                },
                "43": {
                    y: 35.7,
                    a: 0.24
                },
                "44": {
                    y: 38.95,
                    a: 0.18
                },
                "45": {
                    y: 42.2,
                    a: 0.12
                },
                "46": {
                    y: 45.45,
                    a: 0.06
                },
                "47": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance10, 32, 18, {
                "32": {
                    x: 0.2,
                    y: -0.05,
                    a: 1
                },
                "33": {
                    y: 2.4,
                    a: 0.95
                },
                "34": {
                    y: 4.85,
                    a: 0.9
                },
                "35": {
                    y: 7.25,
                    a: 0.85
                },
                "36": {
                    y: 9.7,
                    a: 0.8
                },
                "37": {
                    y: 11.65,
                    a: 0.74
                },
                "38": {
                    y: 13.6,
                    a: 0.68
                },
                "39": {
                    y: 15.55,
                    a: 0.62
                },
                "40": {
                    y: 17.5,
                    a: 0.56
                },
                "41": {
                    y: 19.45,
                    a: 0.5
                },
                "42": {
                    y: 22.05,
                    a: 0.46
                },
                "43": {
                    y: 24.65,
                    a: 0.42
                },
                "44": {
                    y: 27.25,
                    a: 0.38
                },
                "45": {
                    y: 29.85,
                    a: 0.34
                },
                "46": {
                    y: 32.45,
                    a: 0.3
                },
                "47": {
                    y: 37.85,
                    a: 0.2
                },
                "48": {
                    y: 43.3,
                    a: 0.1
                },
                "49": {
                    y: 48.7,
                    a: 0
                }
            })
            .addTimedChild(instance27, 64, 10, {
                "64": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: -2.3
                },
                "66": {
                    x: -8.95
                },
                "67": {
                    x: -15.65
                },
                "68": {
                    x: -22.35
                },
                "69": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance26, 64, 10, {
                "64": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: 6.8,
                    y: -1.8
                },
                "66": {
                    x: 12.45,
                    y: -1.55
                },
                "67": {
                    x: 18.1,
                    y: -1.35
                },
                "68": {
                    x: 23.7,
                    y: -1.15
                },
                "69": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance25, 64, 10, {
                "64": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: 1.05,
                    y: 8.2
                },
                "66": {
                    x: 1.35,
                    y: 13
                },
                "67": {
                    x: 1.6,
                    y: 17.75
                },
                "68": {
                    x: 1.8,
                    y: 22.5
                },
                "69": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance24, 64, 10, {
                "64": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: 2.8,
                    y: -6
                },
                "66": {
                    x: 2.35,
                    y: -12.2
                },
                "67": {
                    x: 1.95,
                    y: -18.45
                },
                "68": {
                    x: 1.45,
                    y: -24.65
                },
                "69": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance23, 64, 10, {
                "64": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "65": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "66": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "67": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "68": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "69": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance22, 64, 10, {
                "64": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "65": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "66": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "67": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "68": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "69": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance21, 64, 4, {
                "64": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "65": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "66": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "67": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance42, 74, 9, {
                "74": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance41, 74, 9, {
                "74": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance40, 74, 9, {
                "74": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance39, 74, 9, {
                "74": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance38, 74, 9, {
                "74": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance37, 74, 9, {
                "74": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance35, 68, 15, {
                "68": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "69": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "74": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "75": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance20, 64, 10, {
                "64": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "65": {
                    x: -3.9,
                    y: -4.15
                },
                "66": {
                    x: -7.6,
                    y: -8.7
                },
                "67": {
                    x: -11.3,
                    y: -13.3
                },
                "68": {
                    x: -15.05,
                    y: -17.9
                },
                "69": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "70": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "71": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "72": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "73": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance18, 58, 10, {
                "58": {
                    x: 4.3,
                    y: -1.3,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: -2.3
                },
                "60": {
                    x: -8.95
                },
                "61": {
                    x: -15.65
                },
                "62": {
                    x: -22.35
                },
                "63": {
                    x: -24.525,
                    y: -1.548,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: -30.951,
                    y: -2.392,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -41.726,
                    y: -3.732,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -56.752,
                    y: -5.618,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -76.128,
                    y: -8.1,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance17, 58, 10, {
                "58": {
                    x: 1.1,
                    y: -2,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: 6.8,
                    y: -1.8
                },
                "60": {
                    x: 12.45,
                    y: -1.55
                },
                "61": {
                    x: 18.1,
                    y: -1.35
                },
                "62": {
                    x: 23.7,
                    y: -1.15
                },
                "63": {
                    x: 25.475,
                    y: -1.392,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 30.65,
                    y: -2.22,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: 39.375,
                    y: -3.632,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: 51.55,
                    y: -5.579,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: 67.124,
                    y: -8.061,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance16, 58, 10, {
                "58": {
                    x: 0.75,
                    y: 3.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: 1.05,
                    y: 8.2
                },
                "60": {
                    x: 1.35,
                    y: 13
                },
                "61": {
                    x: 1.6,
                    y: 17.75
                },
                "62": {
                    x: 1.8,
                    y: 22.5
                },
                "63": {
                    x: 1.566,
                    y: 24.28,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 0.866,
                    y: 29.623,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -0.302,
                    y: 38.526,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -1.937,
                    y: 51.041,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -3.989,
                    y: 67.066,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance15, 58, 10, {
                "58": {
                    x: 3.15,
                    y: 0.2,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: 2.8,
                    y: -6
                },
                "60": {
                    x: 2.35,
                    y: -12.2
                },
                "61": {
                    x: 1.95,
                    y: -18.45
                },
                "62": {
                    x: 1.45,
                    y: -24.65
                },
                "63": {
                    x: 1.254,
                    y: -26.86,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 0.614,
                    y: -33.39,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -0.468,
                    y: -44.24,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -1.993,
                    y: -59.561,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -4.012,
                    y: -79.151,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance14, 58, 10, {
                "58": {
                    x: -9.6,
                    y: -1.5,
                    sx: 1.725,
                    sy: 1.725
                },
                "59": {
                    x: -11.052,
                    y: 2.964,
                    sx: 1.537,
                    sy: 1.537
                },
                "60": {
                    x: -12.454,
                    y: 7.428,
                    sx: 1.349,
                    sy: 1.349
                },
                "61": {
                    x: -13.956,
                    y: 11.891,
                    sx: 1.16,
                    sy: 1.16
                },
                "62": {
                    x: -15.35,
                    y: 16.25,
                    sx: 0.972,
                    sy: 0.972
                },
                "63": {
                    x: -16.917,
                    y: 17.4,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: -21.517,
                    y: 20.8,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -29.15,
                    y: 26.499,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -39.817,
                    y: 34.449,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -53.567,
                    y: 44.648,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance13, 58, 10, {
                "58": {
                    x: 0.6,
                    y: -2.4,
                    sx: 1.725,
                    sy: 1.725
                },
                "59": {
                    x: 4.934,
                    y: 1.912,
                    sx: 1.537,
                    sy: 1.537
                },
                "60": {
                    x: 9.269,
                    y: 6.124,
                    sx: 1.349,
                    sy: 1.349
                },
                "61": {
                    x: 13.553,
                    y: 10.386,
                    sx: 1.16,
                    sy: 1.16
                },
                "62": {
                    x: 17.85,
                    y: 14.6,
                    sx: 0.972,
                    sy: 0.972
                },
                "63": {
                    x: 19.159,
                    y: 15.789,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 22.886,
                    y: 19.356,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: 29.181,
                    y: 25.301,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: 37.944,
                    y: 33.524,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: 49.275,
                    y: 44.175,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance12, 58, 4, {
                "58": {
                    x: -4.7,
                    y: -10.7,
                    sx: 1.725,
                    sy: 1.725
                },
                "59": {
                    x: 1.113,
                    y: -12.132,
                    sx: 1.537,
                    sy: 1.537
                },
                "60": {
                    x: 6.926,
                    y: -13.513,
                    sx: 1.349,
                    sy: 1.349
                },
                "61": {
                    x: 12.689,
                    y: -14.895,
                    sx: 1.16,
                    sy: 1.16
                }
            })
            .addTimedChild(instance36, 74, 9, {
                "74": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "75": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "76": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "77": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "78": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "79": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "80": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "81": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "82": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance34, 68, 9, {
                "68": {
                    x: -99.75,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -122.348,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -142.242,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -159.432,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -173.972,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -185.911,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -195.193,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -201.824,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -205.755,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance33, 68, 9, {
                "68": {
                    x: 86.25,
                    y: -11.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: 102.676,
                    y: -14.841,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: 117.081,
                    y: -18.056,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: 129.614,
                    y: -20.896,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: 140.228,
                    y: -23.261,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: 148.873,
                    y: -25.2,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: 155.594,
                    y: -26.714,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: 160.445,
                    y: -27.802,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: 163.327,
                    y: -28.415,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance32, 68, 9, {
                "68": {
                    x: -6.45,
                    y: 86.65,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -9.448,
                    y: 103.46,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -12.087,
                    y: 118.188,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -14.368,
                    y: 131.035,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -16.34,
                    y: 141.854,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -17.904,
                    y: 150.742,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -19.159,
                    y: 157.698,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -20.006,
                    y: 162.574,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -20.544,
                    y: 165.571,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 68, 9, {
                "68": {
                    x: -6.45,
                    y: -103.3,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -9.448,
                    y: -126.24,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -12.087,
                    y: -146.488,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -14.368,
                    y: -164.096,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -16.34,
                    y: -178.866,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -17.904,
                    y: -191.047,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -19.159,
                    y: -200.536,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -20.006,
                    y: -207.285,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -20.544,
                    y: -211.346,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance30, 68, 9, {
                "68": {
                    x: -70.25,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -86.582,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -100.986,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -113.463,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -124.013,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -132.687,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -139.382,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -144.149,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -147.041,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance29, 68, 9, {
                "68": {
                    x: 63.05,
                    y: 57.2,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: 74.577,
                    y: 67.855,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: 84.804,
                    y: 77.303,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: 93.58,
                    y: 85.393,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: 101.057,
                    y: 92.279,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: 107.133,
                    y: 97.909,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: 111.859,
                    y: 102.28,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: 115.234,
                    y: 105.446,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: 117.31,
                    y: 107.307,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance19, 62, 15, {
                "62": {
                    x: 18.5,
                    y: -16.35,
                    sx: 0.972,
                    sy: 0.972,
                    a: 1
                },
                "63": {
                    x: 19.933,
                    y: -17.853,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: 24.082,
                    y: -22.364,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: 30.947,
                    y: -29.782,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: 40.628,
                    y: -40.258,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: 52.974,
                    y: -53.74,
                    sx: 1.869,
                    sy: 1.869
                },
                "68": {
                    x: 67.95,
                    y: -70.2,
                    sx: 2.264,
                    sy: 2.264
                },
                "69": {
                    x: 80.552,
                    y: -86.272,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: 91.632,
                    y: -100.417,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: 101.24,
                    y: -112.635,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: 109.33,
                    y: -123.029,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: 115.949,
                    y: -131.497,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: 121.146,
                    y: -138.037,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: 124.872,
                    y: -142.752,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: 127.079,
                    y: -145.592,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance1, 0, 68, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "51": {
                    x: -1.45,
                    y: -1.45,
                    sx: 1.229,
                    sy: 1.229
                },
                "52": {
                    x: -2.95,
                    y: -2.95,
                    sx: 1.458,
                    sy: 1.458
                },
                "53": {
                    x: -4.45,
                    y: -4.45,
                    sx: 1.687,
                    sy: 1.687
                },
                "54": {
                    x: -5.95,
                    y: -5.95,
                    sx: 1.916,
                    sy: 1.916
                },
                "55": {
                    x: -7.4,
                    y: -7.4,
                    sx: 2.145,
                    sy: 2.145
                },
                "56": {
                    x: -8.9,
                    y: -8.9,
                    sx: 2.374,
                    sy: 2.374
                },
                "57": {
                    x: -10.4,
                    y: -10.4,
                    sx: 2.603,
                    sy: 2.603
                },
                "58": {
                    x: -0.25,
                    y: 0.45,
                    sx: 0.972,
                    sy: 0.972
                },
                "59": {
                    x: -3.9,
                    y: -4.15
                },
                "60": {
                    x: -7.6,
                    y: -8.7
                },
                "61": {
                    x: -11.3,
                    y: -13.3
                },
                "62": {
                    x: -15.05,
                    y: -17.9
                },
                "63": {
                    x: -16.606,
                    y: -19.611,
                    sx: 1.008,
                    sy: 1.008
                },
                "64": {
                    x: -21.223,
                    y: -24.643,
                    sx: 1.115,
                    sy: 1.115
                },
                "65": {
                    x: -28.901,
                    y: -32.997,
                    sx: 1.295,
                    sy: 1.295
                },
                "66": {
                    x: -39.64,
                    y: -44.773,
                    sx: 1.546,
                    sy: 1.546
                },
                "67": {
                    x: -53.44,
                    y: -59.871,
                    sx: 1.869,
                    sy: 1.869
                }
            })
            .addTimedChild(instance28, 68, 9, {
                "68": {
                    x: -70.25,
                    y: -78.5,
                    sx: 2.264,
                    sy: 2.264,
                    a: 1
                },
                "69": {
                    x: -86.582,
                    y: -96.356,
                    sx: 2.737,
                    sy: 2.737,
                    a: 0.79
                },
                "70": {
                    x: -100.986,
                    y: -112.082,
                    sx: 3.154,
                    sy: 3.154,
                    a: 0.61
                },
                "71": {
                    x: -113.463,
                    y: -125.677,
                    sx: 3.516,
                    sy: 3.516,
                    a: 0.45
                },
                "72": {
                    x: -124.013,
                    y: -137.193,
                    sx: 3.822,
                    sy: 3.822,
                    a: 0.31
                },
                "73": {
                    x: -132.687,
                    y: -146.63,
                    sx: 4.073,
                    sy: 4.073,
                    a: 0.2
                },
                "74": {
                    x: -139.382,
                    y: -153.934,
                    sx: 4.267,
                    sy: 4.267,
                    a: 0.11
                },
                "75": {
                    x: -144.149,
                    y: -159.159,
                    sx: 4.406,
                    sy: 4.406,
                    a: 0.05
                },
                "76": {
                    x: -147.041,
                    y: -162.355,
                    sx: 4.49,
                    sy: 4.49,
                    a: 0.01
                }
            })
            .addTimedChild(instance50, 77, 1, {
                "77": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance49, 77, 1, {
                "77": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance48, 77, 1, {
                "77": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance47, 77, 1, {
                "77": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance46, 77, 1, {
                "77": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance45, 77, 1, {
                "77": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance44, 77, 1, {
                "77": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance43, 77, 1, {
                "77": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance58, 83, 1, {
                "83": {
                    x: -207,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance57, 83, 1, {
                "83": {
                    x: 164.25,
                    y: -28.7,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance56, 83, 1, {
                "83": {
                    x: -20.75,
                    y: 166.6,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance55, 83, 1, {
                "83": {
                    x: -20.75,
                    y: -212.5,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance54, 83, 1, {
                "83": {
                    x: -148.1,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance53, 83, 1, {
                "83": {
                    x: 117.95,
                    y: 107.8,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance52, 83, 1, {
                "83": {
                    x: 127.7,
                    y: -146.45,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance51, 83, 1, {
                "83": {
                    x: -148.1,
                    y: -163,
                    sx: 4.518,
                    sy: 4.518,
                    a: 0
                }
            })
            .addTimedChild(instance11, 58, 27, {
                "58": {
                    x: -47.75,
                    y: -45.65,
                    sx: 0.329,
                    sy: 0.329,
                    a: 1
                },
                "59": {
                    x: -65.454,
                    y: -63.357,
                    sx: 0.439,
                    sy: 0.439,
                    a: 0.96
                },
                "60": {
                    x: -83.152,
                    y: -81.058,
                    sx: 0.548,
                    sy: 0.548,
                    a: 0.92
                },
                "61": {
                    x: -100.857,
                    y: -98.765,
                    sx: 0.657,
                    sy: 0.657,
                    a: 0.88
                },
                "62": {
                    x: -118.555,
                    y: -116.466,
                    sx: 0.767,
                    sy: 0.767,
                    a: 0.85
                },
                "63": {
                    x: -136.259,
                    y: -134.124,
                    sx: 0.876,
                    sy: 0.876,
                    a: 0.81
                },
                "64": {
                    x: -153.964,
                    y: -151.881,
                    sx: 0.985,
                    sy: 0.985,
                    a: 0.77
                },
                "65": {
                    x: -171.712,
                    y: -169.582,
                    sx: 1.095,
                    sy: 1.095,
                    a: 0.73
                },
                "66": {
                    x: -189.417,
                    y: -187.29,
                    sx: 1.204,
                    sy: 1.204,
                    a: 0.69
                },
                "67": {
                    x: -207.121,
                    y: -204.997,
                    sx: 1.313,
                    sy: 1.313,
                    a: 0.65
                },
                "68": {
                    x: -224.819,
                    y: -222.698,
                    sx: 1.423,
                    sy: 1.423,
                    a: 0.62
                },
                "69": {
                    x: -242.524,
                    y: -240.405,
                    sx: 1.532,
                    sy: 1.532,
                    a: 0.58
                },
                "70": {
                    x: -260.272,
                    y: -258.156,
                    sx: 1.641,
                    sy: 1.641,
                    a: 0.54
                },
                "71": {
                    x: -277.976,
                    y: -275.813,
                    sx: 1.751,
                    sy: 1.751,
                    a: 0.5
                },
                "72": {
                    x: -295.682,
                    y: -293.521,
                    sx: 1.86,
                    sy: 1.86,
                    a: 0.46
                },
                "73": {
                    x: -313.379,
                    y: -311.222,
                    sx: 1.969,
                    sy: 1.969,
                    a: 0.42
                },
                "74": {
                    x: -331.084,
                    y: -328.929,
                    sx: 2.079,
                    sy: 2.079,
                    a: 0.38
                },
                "75": {
                    x: -348.782,
                    y: -346.63,
                    sx: 2.188,
                    sy: 2.188,
                    a: 0.35
                },
                "76": {
                    x: -366.536,
                    y: -364.388,
                    sx: 2.297,
                    sy: 2.297,
                    a: 0.31
                },
                "77": {
                    x: -384.241,
                    y: -382.095,
                    sx: 2.407,
                    sy: 2.407,
                    a: 0.27
                },
                "78": {
                    x: -401.939,
                    y: -399.796,
                    sx: 2.516,
                    sy: 2.516,
                    a: 0.23
                },
                "79": {
                    x: -419.644,
                    y: -417.504,
                    sx: 2.625,
                    sy: 2.625,
                    a: 0.19
                },
                "80": {
                    x: -437.349,
                    y: -435.161,
                    sx: 2.735,
                    sy: 2.735,
                    a: 0.15
                },
                "81": {
                    x: -455.047,
                    y: -452.862,
                    sx: 2.844,
                    sy: 2.844,
                    a: 0.12
                },
                "82": {
                    x: -472.801,
                    y: -470.619,
                    sx: 2.953,
                    sy: 2.953,
                    a: 0.08
                },
                "83": {
                    x: -490.499,
                    y: -488.32,
                    sx: 3.062,
                    sy: 3.062,
                    a: 0.04
                },
                "84": {
                    x: -508.25,
                    y: -506.15,
                    sx: 3.172,
                    sy: 3.172,
                    a: 0
                }
            });
    });

    lib.landing_rocket = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 351,
            labels: {
                end: 349
            }
        });
        var instance7 = new Graphic104(MovieClip.SYNCHED);
        var instance6 = new Graphic87(MovieClip.SYNCHED);
        var instance5 = new Graphic70(MovieClip.SYNCHED);
        var instance2 = new Graphic53(MovieClip.SYNCHED);
        var instance3 = new Graphic36(MovieClip.SYNCHED);
        var instance4 = new Graphic19(MovieClip.SYNCHED);
        var instance1 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(0.45, 1.1, 1.835, 1.835);
        this.addTimedChild(instance7, 192, 158, {
                "192": {
                    x: 57.95,
                    y: 110.05,
                    sx: 0.615,
                    sy: 0.615
                },
                "193": {
                    x: 57.999,
                    y: 89.148
                },
                "194": {
                    y: 68.648
                },
                "195": {
                    y: 48.498
                },
                "196": {
                    y: 28.748
                },
                "197": {
                    y: 9.398
                },
                "198": {
                    y: -9.602
                },
                "199": {
                    y: -28.202
                },
                "200": {
                    y: -46.402
                },
                "201": {
                    y: -64.252
                },
                "202": {
                    y: -81.702
                },
                "203": {
                    y: -98.752
                },
                "204": {
                    y: -115.452
                },
                "205": {
                    y: -131.702
                },
                "206": {
                    y: -147.652
                },
                "207": {
                    y: -163.152
                },
                "208": {
                    y: -178.302
                },
                "209": {
                    y: -193.102
                },
                "210": {
                    y: -207.452
                },
                "211": {
                    y: -221.452
                },
                "212": {
                    y: -235.052
                },
                "213": {
                    y: -248.302
                },
                "214": {
                    y: -261.152
                },
                "215": {
                    y: -273.602
                },
                "216": {
                    y: -285.702
                },
                "217": {
                    y: -297.402
                },
                "218": {
                    y: -308.702
                },
                "219": {
                    y: -319.652
                },
                "220": {
                    y: -330.202
                },
                "221": {
                    y: -340.352
                },
                "222": {
                    y: -350.102
                },
                "223": {
                    y: -359.502
                },
                "224": {
                    y: -368.502
                },
                "225": {
                    y: -377.152
                },
                "226": {
                    y: -385.402
                },
                "227": {
                    y: -393.252
                },
                "228": {
                    y: -400.752
                },
                "229": {
                    y: -407.852
                },
                "230": {
                    y: -414.552
                },
                "231": {
                    y: -420.852
                },
                "232": {
                    y: -426.802
                },
                "233": {
                    y: -432.352
                },
                "234": {
                    y: -437.552
                },
                "235": {
                    y: -442.352
                },
                "236": {
                    y: -446.752
                },
                "237": {
                    y: -450.752
                },
                "238": {
                    y: -454.402
                },
                "239": {
                    y: -457.652
                },
                "240": {
                    y: -460.552
                },
                "241": {
                    y: -463.052
                },
                "242": {
                    y: -465.152
                },
                "243": {
                    y: -466.902
                },
                "244": {
                    y: -468.202
                },
                "245": {
                    y: -469.202
                },
                "246": {
                    y: -469.752
                },
                "247": {
                    x: 57.95,
                    y: -469.95
                }
            })
            .addTimedChild(instance6, 161, 189, {
                "161": {
                    x: 36.7,
                    y: 52.05,
                    sx: 0.615,
                    sy: 0.615,
                    r: -0.418
                },
                "162": {
                    x: 27.574,
                    y: 37.601,
                    r: -0.442
                },
                "163": {
                    x: 18.577,
                    y: 23.355,
                    r: -0.468
                },
                "164": {
                    x: 9.838,
                    y: 9.463,
                    r: -0.49
                },
                "165": {
                    x: 1.222,
                    y: -4.248,
                    r: -0.512
                },
                "166": {
                    x: -7.164,
                    y: -17.568,
                    r: -0.538
                },
                "167": {
                    x: -15.386,
                    y: -30.568,
                    sx: 0.614,
                    sy: 0.614,
                    r: -0.56
                },
                "168": {
                    x: -23.436,
                    y: -43.337,
                    r: -0.582
                },
                "169": {
                    x: -31.261,
                    y: -55.822,
                    r: -0.604
                },
                "170": {
                    x: -38.914,
                    y: -67.969,
                    r: -0.625
                },
                "171": {
                    x: -46.382,
                    y: -79.877,
                    r: -0.643
                },
                "172": {
                    x: -53.634,
                    y: -91.449,
                    r: -0.665
                },
                "173": {
                    x: -60.748,
                    y: -102.774,
                    r: -0.683
                },
                "174": {
                    x: -67.65,
                    y: -113.718,
                    r: -0.704
                },
                "175": {
                    x: -74.358,
                    y: -124.408,
                    r: -0.722
                },
                "176": {
                    x: -80.936,
                    y: -134.853,
                    r: -0.739
                },
                "177": {
                    x: -87.284,
                    y: -144.955,
                    r: -0.757
                },
                "178": {
                    x: -93.452,
                    y: -154.76,
                    r: -0.774
                },
                "179": {
                    x: -99.406,
                    y: -164.295,
                    r: -0.788
                },
                "180": {
                    x: -105.21,
                    y: -173.506,
                    r: -0.805
                },
                "181": {
                    x: -110.836,
                    y: -182.47,
                    r: -0.822
                },
                "182": {
                    x: -116.288,
                    y: -191.157,
                    r: -0.836
                },
                "183": {
                    x: -121.453,
                    y: -199.443,
                    r: -0.849
                },
                "184": {
                    x: -126.534,
                    y: -207.529,
                    r: -0.863
                },
                "185": {
                    x: -131.376,
                    y: -215.296,
                    r: -0.879
                },
                "186": {
                    x: -136.083,
                    y: -222.794,
                    r: -0.889
                },
                "187": {
                    x: -140.554,
                    y: -230.024,
                    r: -0.902
                },
                "188": {
                    x: -144.886,
                    y: -236.9,
                    r: -0.915
                },
                "189": {
                    x: -148.982,
                    y: -243.476,
                    r: -0.927
                },
                "190": {
                    x: -152.979,
                    y: -249.809,
                    r: -0.936
                },
                "191": {
                    x: -156.733,
                    y: -255.837,
                    r: -0.946
                },
                "192": {
                    x: -160.311,
                    y: -261.5,
                    r: -0.958
                },
                "193": {
                    x: -163.684,
                    y: -266.967,
                    r: -0.967
                },
                "194": {
                    x: -166.914,
                    y: -272.131,
                    r: -0.976
                },
                "195": {
                    x: -169.952,
                    y: -276.888,
                    r: -0.984
                },
                "196": {
                    x: -172.796,
                    y: -281.44,
                    r: -0.993
                },
                "197": {
                    x: -175.426,
                    y: -285.741,
                    r: -0.998
                },
                "198": {
                    x: -177.884,
                    y: -289.681,
                    r: -1.006
                },
                "199": {
                    x: -180.223,
                    y: -293.368,
                    r: -1.011
                },
                "200": {
                    x: -182.293,
                    y: -296.745,
                    r: -1.019
                },
                "201": {
                    x: -184.241,
                    y: -299.82,
                    r: -1.024
                },
                "202": {
                    x: -185.994,
                    y: -302.588,
                    r: -1.028
                },
                "203": {
                    x: -187.5,
                    y: -305.099,
                    r: -1.032
                },
                "204": {
                    x: -188.91,
                    y: -307.252,
                    r: -1.037
                },
                "205": {
                    x: -190.093,
                    y: -309.151,
                    r: -1.038
                },
                "206": {
                    x: -191.108,
                    y: -310.789,
                    r: -1.042
                },
                "207": {
                    x: -191.978,
                    y: -312.12,
                    r: -1.045
                },
                "208": {
                    x: -192.569,
                    y: -313.147,
                    r: -1.046
                },
                "209": {
                    x: -193.062,
                    y: -313.866
                },
                "210": {
                    x: -193.309,
                    y: -314.328
                },
                "211": {
                    x: -193.6,
                    y: -314.45,
                    sx: 0.615,
                    sy: 0.615,
                    r: -1.047
                }
            })
            .addTimedChild(instance5, 145, 205, {
                "145": {
                    x: 57.95,
                    y: 110.05,
                    sx: 0.615,
                    sy: 0.615,
                    r: 0
                },
                "146": {
                    x: 64.227,
                    y: 93.281,
                    r: 0.018
                },
                "147": {
                    x: 70.331,
                    y: 76.894,
                    r: 0.04
                },
                "148": {
                    x: 76.295,
                    y: 60.835,
                    r: 0.058
                },
                "149": {
                    x: 82.13,
                    y: 45.244,
                    r: 0.079
                },
                "150": {
                    x: 87.835,
                    y: 29.944,
                    r: 0.097
                },
                "151": {
                    x: 93.34,
                    y: 15.051,
                    r: 0.114
                },
                "152": {
                    x: 98.744,
                    y: 0.567,
                    r: 0.132
                },
                "153": {
                    x: 103.996,
                    y: -13.556,
                    r: 0.149
                },
                "154": {
                    x: 109.15,
                    y: -27.321,
                    r: 0.167
                },
                "155": {
                    x: 114.108,
                    y: -40.675,
                    r: 0.184
                },
                "156": {
                    x: 119.018,
                    y: -53.668,
                    r: 0.201
                },
                "157": {
                    x: 123.675,
                    y: -66.308,
                    r: 0.215
                },
                "158": {
                    x: 128.245,
                    y: -78.572,
                    r: 0.232
                },
                "159": {
                    x: 132.666,
                    y: -90.416,
                    r: 0.245
                },
                "160": {
                    x: 136.997,
                    y: -101.888,
                    r: 0.259
                },
                "161": {
                    x: 141.138,
                    y: -113.05,
                    r: 0.275
                },
                "162": {
                    x: 145.135,
                    y: -123.775,
                    r: 0.288
                },
                "163": {
                    x: 148.994,
                    y: -134.123,
                    r: 0.301
                },
                "164": {
                    x: 152.713,
                    y: -144.113,
                    r: 0.311
                },
                "165": {
                    x: 156.295,
                    y: -153.654,
                    r: 0.324
                },
                "166": {
                    x: 159.785,
                    y: -162.915,
                    r: 0.337
                },
                "167": {
                    x: 163.091,
                    y: -171.753,
                    r: 0.346
                },
                "168": {
                    x: 166.256,
                    y: -180.202,
                    r: 0.358
                },
                "169": {
                    x: 169.238,
                    y: -188.318,
                    r: 0.367
                },
                "170": {
                    x: 172.134,
                    y: -196.045,
                    r: 0.376
                },
                "171": {
                    x: 174.893,
                    y: -203.384,
                    r: 0.385
                },
                "172": {
                    x: 177.464,
                    y: -210.333,
                    r: 0.394
                },
                "173": {
                    x: 179.899,
                    y: -216.895,
                    r: 0.402
                },
                "174": {
                    x: 182.248,
                    y: -223.113,
                    r: 0.411
                },
                "175": {
                    x: 184.418,
                    y: -228.971,
                    r: 0.416
                },
                "176": {
                    x: 186.495,
                    y: -234.406,
                    r: 0.424
                },
                "177": {
                    x: 188.343,
                    y: -239.522,
                    r: 0.429
                },
                "178": {
                    x: 190.147,
                    y: -244.224,
                    r: 0.437
                },
                "179": {
                    x: 191.775,
                    y: -248.549,
                    r: 0.442
                },
                "180": {
                    x: 193.266,
                    y: -252.477,
                    r: 0.446
                },
                "181": {
                    x: 194.571,
                    y: -256.058,
                    r: 0.451
                },
                "182": {
                    x: 195.79,
                    y: -259.243,
                    r: 0.455
                },
                "183": {
                    x: 196.824,
                    y: -262.08,
                    r: 0.459
                },
                "184": {
                    x: 197.723,
                    y: -264.52,
                    r: 0.463
                },
                "185": {
                    x: 198.492,
                    y: -266.568,
                    r: 0.464
                },
                "186": {
                    x: 199.171,
                    y: -268.26,
                    r: 0.468
                },
                "187": {
                    x: 199.67,
                    y: -269.559
                },
                "188": {
                    x: 199.983,
                    y: -270.509
                },
                "189": {
                    x: 200.212,
                    y: -271.058
                },
                "190": {
                    x: 200.2,
                    y: -271.3,
                    r: 0.471
                }
            })
            .addTimedChild(instance2, 99, 251, {
                "99": {
                    x: 57.95,
                    y: 110.05,
                    sx: 0.615,
                    sy: 0.615,
                    r: 0
                },
                "100": {
                    x: 64.227,
                    y: 93.281,
                    r: 0.018
                },
                "101": {
                    x: 70.331,
                    y: 76.894,
                    r: 0.04
                },
                "102": {
                    x: 76.295,
                    y: 60.835,
                    r: 0.058
                },
                "103": {
                    x: 82.13,
                    y: 45.244,
                    r: 0.079
                },
                "104": {
                    x: 87.835,
                    y: 29.944,
                    r: 0.097
                },
                "105": {
                    x: 93.34,
                    y: 15.051,
                    r: 0.114
                },
                "106": {
                    x: 98.744,
                    y: 0.567,
                    r: 0.132
                },
                "107": {
                    x: 103.996,
                    y: -13.556,
                    r: 0.149
                },
                "108": {
                    x: 109.15,
                    y: -27.321,
                    r: 0.167
                },
                "109": {
                    x: 114.108,
                    y: -40.675,
                    r: 0.184
                },
                "110": {
                    x: 119.018,
                    y: -53.668,
                    r: 0.201
                },
                "111": {
                    x: 123.675,
                    y: -66.308,
                    r: 0.215
                },
                "112": {
                    x: 128.245,
                    y: -78.572,
                    r: 0.232
                },
                "113": {
                    x: 132.666,
                    y: -90.416,
                    r: 0.245
                },
                "114": {
                    x: 136.997,
                    y: -101.888,
                    r: 0.259
                },
                "115": {
                    x: 141.138,
                    y: -113.05,
                    r: 0.275
                },
                "116": {
                    x: 145.135,
                    y: -123.775,
                    r: 0.288
                },
                "117": {
                    x: 148.994,
                    y: -134.123,
                    r: 0.301
                },
                "118": {
                    x: 152.713,
                    y: -144.113,
                    r: 0.311
                },
                "119": {
                    x: 156.295,
                    y: -153.654,
                    r: 0.324
                },
                "120": {
                    x: 159.785,
                    y: -162.915,
                    r: 0.337
                },
                "121": {
                    x: 163.091,
                    y: -171.753,
                    r: 0.346
                },
                "122": {
                    x: 166.256,
                    y: -180.202,
                    r: 0.358
                },
                "123": {
                    x: 169.238,
                    y: -188.318,
                    r: 0.367
                },
                "124": {
                    x: 172.134,
                    y: -196.045,
                    r: 0.376
                },
                "125": {
                    x: 174.893,
                    y: -203.384,
                    r: 0.385
                },
                "126": {
                    x: 177.464,
                    y: -210.333,
                    r: 0.394
                },
                "127": {
                    x: 179.899,
                    y: -216.895,
                    r: 0.402
                },
                "128": {
                    x: 182.248,
                    y: -223.113,
                    r: 0.411
                },
                "129": {
                    x: 184.418,
                    y: -228.971,
                    r: 0.416
                },
                "130": {
                    x: 186.495,
                    y: -234.406,
                    r: 0.424
                },
                "131": {
                    x: 188.343,
                    y: -239.522,
                    r: 0.429
                },
                "132": {
                    x: 190.147,
                    y: -244.224,
                    r: 0.437
                },
                "133": {
                    x: 191.775,
                    y: -248.549,
                    r: 0.442
                },
                "134": {
                    x: 193.266,
                    y: -252.477,
                    r: 0.446
                },
                "135": {
                    x: 194.571,
                    y: -256.058,
                    r: 0.451
                },
                "136": {
                    x: 195.79,
                    y: -259.243,
                    r: 0.455
                },
                "137": {
                    x: 196.824,
                    y: -262.08,
                    r: 0.459
                },
                "138": {
                    x: 197.723,
                    y: -264.52,
                    r: 0.463
                },
                "139": {
                    x: 198.492,
                    y: -266.568,
                    r: 0.464
                },
                "140": {
                    x: 199.171,
                    y: -268.26,
                    r: 0.468
                },
                "141": {
                    x: 199.67,
                    y: -269.559
                },
                "142": {
                    x: 199.983,
                    y: -270.509
                },
                "143": {
                    x: 200.212,
                    y: -271.058
                },
                "144": {
                    x: 200.2,
                    y: -271.3,
                    r: 0.471
                }
            })
            .addTimedChild(instance3, 109, 241, {
                "109": {
                    x: 36.7,
                    y: 52.05,
                    sx: 0.615,
                    sy: 0.615,
                    r: -0.418
                },
                "110": {
                    x: 27.574,
                    y: 37.601,
                    r: -0.442
                },
                "111": {
                    x: 18.577,
                    y: 23.355,
                    r: -0.468
                },
                "112": {
                    x: 9.838,
                    y: 9.463,
                    r: -0.49
                },
                "113": {
                    x: 1.222,
                    y: -4.248,
                    r: -0.512
                },
                "114": {
                    x: -7.164,
                    y: -17.568,
                    r: -0.538
                },
                "115": {
                    x: -15.386,
                    y: -30.568,
                    sx: 0.614,
                    sy: 0.614,
                    r: -0.56
                },
                "116": {
                    x: -23.436,
                    y: -43.337,
                    r: -0.582
                },
                "117": {
                    x: -31.261,
                    y: -55.822,
                    r: -0.604
                },
                "118": {
                    x: -38.914,
                    y: -67.969,
                    r: -0.625
                },
                "119": {
                    x: -46.382,
                    y: -79.877,
                    r: -0.643
                },
                "120": {
                    x: -53.634,
                    y: -91.449,
                    r: -0.665
                },
                "121": {
                    x: -60.748,
                    y: -102.774,
                    r: -0.683
                },
                "122": {
                    x: -67.65,
                    y: -113.718,
                    r: -0.704
                },
                "123": {
                    x: -74.358,
                    y: -124.408,
                    r: -0.722
                },
                "124": {
                    x: -80.936,
                    y: -134.853,
                    r: -0.739
                },
                "125": {
                    x: -87.284,
                    y: -144.955,
                    r: -0.757
                },
                "126": {
                    x: -93.452,
                    y: -154.76,
                    r: -0.774
                },
                "127": {
                    x: -99.406,
                    y: -164.295,
                    r: -0.788
                },
                "128": {
                    x: -105.21,
                    y: -173.506,
                    r: -0.805
                },
                "129": {
                    x: -110.836,
                    y: -182.47,
                    r: -0.822
                },
                "130": {
                    x: -116.288,
                    y: -191.157,
                    r: -0.836
                },
                "131": {
                    x: -121.453,
                    y: -199.443,
                    r: -0.849
                },
                "132": {
                    x: -126.534,
                    y: -207.529,
                    r: -0.863
                },
                "133": {
                    x: -131.376,
                    y: -215.296,
                    r: -0.879
                },
                "134": {
                    x: -136.083,
                    y: -222.794,
                    r: -0.889
                },
                "135": {
                    x: -140.554,
                    y: -230.024,
                    r: -0.902
                },
                "136": {
                    x: -144.886,
                    y: -236.9,
                    r: -0.915
                },
                "137": {
                    x: -148.982,
                    y: -243.476,
                    r: -0.927
                },
                "138": {
                    x: -152.979,
                    y: -249.809,
                    r: -0.936
                },
                "139": {
                    x: -156.733,
                    y: -255.837,
                    r: -0.946
                },
                "140": {
                    x: -160.311,
                    y: -261.5,
                    r: -0.958
                },
                "141": {
                    x: -163.684,
                    y: -266.967,
                    r: -0.967
                },
                "142": {
                    x: -166.914,
                    y: -272.131,
                    r: -0.976
                },
                "143": {
                    x: -169.952,
                    y: -276.888,
                    r: -0.984
                },
                "144": {
                    x: -172.796,
                    y: -281.44,
                    r: -0.993
                },
                "145": {
                    x: -175.426,
                    y: -285.741,
                    r: -0.998
                },
                "146": {
                    x: -177.884,
                    y: -289.681,
                    r: -1.006
                },
                "147": {
                    x: -180.223,
                    y: -293.368,
                    r: -1.011
                },
                "148": {
                    x: -182.293,
                    y: -296.745,
                    r: -1.019
                },
                "149": {
                    x: -184.241,
                    y: -299.82,
                    r: -1.024
                },
                "150": {
                    x: -185.994,
                    y: -302.588,
                    r: -1.028
                },
                "151": {
                    x: -187.5,
                    y: -305.099,
                    r: -1.032
                },
                "152": {
                    x: -188.91,
                    y: -307.252,
                    r: -1.037
                },
                "153": {
                    x: -190.093,
                    y: -309.151,
                    r: -1.038
                },
                "154": {
                    x: -191.108,
                    y: -310.789,
                    r: -1.042
                },
                "155": {
                    x: -191.978,
                    y: -312.12,
                    r: -1.045
                },
                "156": {
                    x: -192.569,
                    y: -313.147,
                    r: -1.046
                },
                "157": {
                    x: -193.062,
                    y: -313.866
                },
                "158": {
                    x: -193.309,
                    y: -314.328
                },
                "159": {
                    x: -193.6,
                    y: -314.45,
                    sx: 0.615,
                    sy: 0.615,
                    r: -1.047
                }
            })
            .addTimedChild(instance4, 119, 231, {
                "119": {
                    x: 57.95,
                    y: 110.05,
                    sx: 0.615,
                    sy: 0.615
                },
                "120": {
                    x: 57.999,
                    y: 89.148
                },
                "121": {
                    y: 68.648
                },
                "122": {
                    y: 48.498
                },
                "123": {
                    y: 28.748
                },
                "124": {
                    y: 9.398
                },
                "125": {
                    y: -9.602
                },
                "126": {
                    y: -28.202
                },
                "127": {
                    y: -46.402
                },
                "128": {
                    y: -64.252
                },
                "129": {
                    y: -81.702
                },
                "130": {
                    y: -98.752
                },
                "131": {
                    y: -115.452
                },
                "132": {
                    y: -131.702
                },
                "133": {
                    y: -147.652
                },
                "134": {
                    y: -163.152
                },
                "135": {
                    y: -178.302
                },
                "136": {
                    y: -193.102
                },
                "137": {
                    y: -207.452
                },
                "138": {
                    y: -221.452
                },
                "139": {
                    y: -235.052
                },
                "140": {
                    y: -248.302
                },
                "141": {
                    y: -261.152
                },
                "142": {
                    y: -273.602
                },
                "143": {
                    y: -285.702
                },
                "144": {
                    y: -297.402
                },
                "145": {
                    y: -308.702
                },
                "146": {
                    y: -319.652
                },
                "147": {
                    y: -330.202
                },
                "148": {
                    y: -340.352
                },
                "149": {
                    y: -350.102
                },
                "150": {
                    y: -359.502
                },
                "151": {
                    y: -368.502
                },
                "152": {
                    y: -377.152
                },
                "153": {
                    y: -385.402
                },
                "154": {
                    y: -393.252
                },
                "155": {
                    y: -400.752
                },
                "156": {
                    y: -407.852
                },
                "157": {
                    y: -414.552
                },
                "158": {
                    y: -420.852
                },
                "159": {
                    y: -426.802
                },
                "160": {
                    y: -432.352
                },
                "161": {
                    y: -437.552
                },
                "162": {
                    y: -442.352
                },
                "163": {
                    y: -446.752
                },
                "164": {
                    y: -450.752
                },
                "165": {
                    y: -454.402
                },
                "166": {
                    y: -457.652
                },
                "167": {
                    y: -460.552
                },
                "168": {
                    y: -463.052
                },
                "169": {
                    y: -465.152
                },
                "170": {
                    y: -466.902
                },
                "171": {
                    y: -468.202
                },
                "172": {
                    y: -469.202
                },
                "173": {
                    y: -469.752
                },
                "174": {
                    x: 57.95,
                    y: -469.95
                }
            })
            .addTimedChild(instance1)
            .addAction(function () {
                this.gotoAndStop('end');
            }, 350);
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
            .drawCommands(shapes.stage[49]);
        this.addChild(instance1);
    });

    var Graphic105 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance2 = new lib.ring();
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[37]);
        var instance3 = new Graphics()
            .drawCommands(shapes.stage[38]);
        var instance4 = new Graphics()
            .drawCommands(shapes.stage[39]);
        var instance5 = new Graphics()
            .drawCommands(shapes.stage[40]);
        var instance6 = new Graphics()
            .drawCommands(shapes.stage[41]);
        var instance7 = new Graphics()
            .drawCommands(shapes.stage[42]);
        var instance8 = new Graphics()
            .drawCommands(shapes.stage[43]);
        var instance9 = new Graphics()
            .drawCommands(shapes.stage[44]);
        var instance10 = new Graphics()
            .drawCommands(shapes.stage[45]);
        var instance11 = new Graphics()
            .drawCommands(shapes.stage[46]);
        var instance12 = new Graphics()
            .drawCommands(shapes.stage[47]);
        var instance13 = new Graphics()
            .drawCommands(shapes.stage[48]);
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

    var Graphic106 = MovieClip.extend(function (mode) {
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
        var instance1 = new Graphic106(MovieClip.SYNCHED);
        var instance2 = new Graphic105(MovieClip.SYNCHED);
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
        var instance7 = new lib.background()
            .setTransform(960, 570.5);
        this[instance7.name = "background"] = instance7;
        var instance6 = new lib.Sun2();
        this[instance6.name = "sun"] = instance6;
        var instance5 = new lib.target()
            .setTransform(101.55, 111.15, 0.612, 0.612);
        this[instance5.name = "target"] = instance5;
        var instance4 = new lib.earth()
            .setTransform(1601, 767);
        this[instance4.name = "start"] = instance4;
        var instance3 = new lib.rocket()
            .setTransform(1709.45, 609.7);
        this[instance3.name = "rocket"] = instance3;
        var instance2 = new lib.thrust()
            .setTransform(1741.05, 749.7)
            .setAlpha(0);
        this[instance2.name = "thrust"] = instance2;
        var instance1 = new lib.landing_rocket()
            .setTransform(1067.6, 367.75)
            .setAlpha(0);
        this[instance1.name = "landingRocketDummy"] = instance1;
        this.addTimedChild(instance7, 5, 30)
            .addTimedChild(instance6, 5, 30, {
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
            .addTimedChild(instance5, 5, 30)
            .addTimedChild(instance4, 5, 30)
            .addTimedChild(instance3, 5, 30)
            .addTimedChild(instance2, 5, 30)
            .addTimedChild(instance1, 5, 30);
    });

    lib.stage.assets = {
        "rocketTop": "images/rocketTop.png",
        "rightFang": "images/rightFang.png",
        "leftFang": "images/leftFang.png",
        "rocketBody": "images/rocketBody.png",
        "fire": "images/fire.png",
        "gradient": "images/gradient.png",
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