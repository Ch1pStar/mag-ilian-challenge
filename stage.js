(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.rocket_2 = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.stage[1])
            .setTransform(-1557.8, -760.45);
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[0])
            .setTransform(-1608, -783.9);
        this.addChild(instance2, instance1);
    });

    lib.circle_large = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.stage[2]);
        this.addChild(instance1);
    });

    lib.sun = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.stage[3]);
        var instance1 = new lib.circle_large()
            .setTransform(-255, -255);
        this.addChild(instance2, instance1);
    });

    lib.background = Container.extend(function () {
        Container.call(this);
        var instance206 = new Graphics()
            .drawCommands(shapes.stage[8])
            .setTransform(-960, -570.5);
        var instance205 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1010.7, -1091.35, 1.72, 1.72);
        var instance204 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1262.7, -965.35, 1.72, 1.72);
        var instance203 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-914, -694.5);
        var instance202 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-465.7, -873.35, 1.72, 1.72);
        var instance201 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-717.7, -747.35, 1.72, 1.72);
        var instance200 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-369, -476.5);
        var instance199 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-769.7, -1158.35, 1.72, 1.72);
        var instance198 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-709.7, -1054.35, 1.72, 1.72);
        var instance197 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-961.7, -928.35, 1.72, 1.72);
        var instance196 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-613, -657.5);
        var instance195 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-356.7, -1134.35, 1.72, 1.72);
        var instance194 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-608.7, -1008.35, 1.72, 1.72);
        var instance193 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-260, -737.5);
        var instance192 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-149.55, -394.7);
        var instance191 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-296, -321.5);
        var instance190 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-87.4, -162.95, 0.571, 0.578);
        var instance189 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-302.55, -662.7);
        var instance188 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-449, -589.5);
        var instance187 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-240.4, -430.95, 0.571, 0.578);
        var instance186 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-540.55, -676.7);
        var instance185 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-687, -603.5);
        var instance184 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-478.4, -444.95, 0.571, 0.578);
        var instance183 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-113.55, -810.7);
        var instance182 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-260, -737.5);
        var instance181 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-51.4, -578.95, 0.571, 0.578);
        var instance180 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1010.7, -1091.35, 1.72, 1.72);
        var instance179 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1262.7, -965.35, 1.72, 1.72);
        var instance178 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-914, -694.5);
        var instance177 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-465.7, -873.35, 1.72, 1.72);
        var instance176 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-717.7, -747.35, 1.72, 1.72);
        var instance175 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-369, -476.5);
        var instance174 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-769.7, -1158.35, 1.72, 1.72);
        var instance173 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-709.7, -1054.35, 1.72, 1.72);
        var instance172 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-961.7, -928.35, 1.72, 1.72);
        var instance171 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-613, -657.5);
        var instance170 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-356.7, -1134.35, 1.72, 1.72);
        var instance169 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-608.7, -1008.35, 1.72, 1.72);
        var instance168 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-260, -737.5);
        var instance167 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-149.55, -394.7);
        var instance166 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-296, -321.5);
        var instance165 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-87.4, -162.95, 0.571, 0.578);
        var instance164 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-302.55, -662.7);
        var instance163 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-449, -589.5);
        var instance162 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-240.4, -430.95, 0.571, 0.578);
        var instance161 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-540.55, -676.7);
        var instance160 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-687, -603.5);
        var instance159 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-478.4, -444.95, 0.571, 0.578);
        var instance158 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-113.55, -810.7);
        var instance157 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-260, -737.5);
        var instance156 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-51.4, -578.95, 0.571, 0.578);
        var instance155 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1522.35, -989.4, 2.623, 2.639);
        var instance154 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1802, -1023.45, 2.623, 2.639);
        var instance153 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1775.85, -1017.3, 2.581, 2.623);
        var instance152 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1188.25, -501.45, 2.623, 2.623);
        var instance151 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1478.6, -535.5, 2.639, 2.623);
        var instance150 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1441.75, -534.7, 2.581, 2.623);
        var instance149 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1015.4, -872.85, 2.639, 2.623);
        var instance148 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1284.4, -906.9, 2.623, 2.623);
        var instance147 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1258.25, -906.1, 2.581, 2.623);
        var instance146 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1291.8, -787.05, 2.623, 2.623);
        var instance145 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1571.45, -821.1, 2.623, 2.623);
        var instance144 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1545.3, -820.3, 2.581, 2.623);
        var instance143 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-953.3, -658.9, 2.623, 2.623);
        var instance142 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1232.95, -692.95, 2.623, 2.623);
        var instance141 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1206.8, -692.15, 2.581, 2.623);
        var instance140 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-75.4, 263.8, 0.578, 0.584);
        var instance139 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-241.65, 245.9, 0.584, 0.578);
        var instance138 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-879.05, -77.65, 1.516, 1.541);
        var instance137 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-58.75, -42.25, 0.584, 0.578);
        var instance136 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-217.55, -63.9, 0.578, 0.584);
        var instance135 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-848.95, -385.6, 1.5, 1.541);
        var instance134 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-245.75, -185.3, 0.578, 0.578);
        var instance133 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-412, -205.1, 0.584, 0.578);
        var instance132 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1049.4, -528.65, 1.516, 1.541);
        var instance131 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(184.25, -63.2, 0.578, 0.584);
        var instance130 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(21.75, -81.1, 0.578, 0.578);
        var instance129 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-609.65, -404.65, 1.5, 1.541);
        var instance128 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-119.8, -760.2, 0.652, 0.652);
        var instance127 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(100.45, -442, 0.652, 0.652);
        var instance126 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-87.65, -464.45, 0.658, 0.652);
        var instance125 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-806.95, -829.75, 1.71, 1.738);
        var instance124 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(221.45, -688.8, 0.652, 0.658);
        var instance123 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(33.35, -711.25, 0.658, 0.658);
        var instance122 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(32.2, -632.25, 0.652, 0.658);
        var instance121 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-152.2, -654.7, 0.652, 0.658);
        var instance120 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-875.2, -1018.05, 1.71, 1.738);
        var instance119 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(251.65, -547.75, 0.658, 0.658);
        var instance118 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(71, -570.2, 0.652, 0.658);
        var instance117 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-652, -933.55, 1.71, 1.738);
        var instance116 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(100.05, -301.1, 0.379, 0.385);
        var instance115 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-7.1, -312.2, 0.379, 0.379);
        var instance114 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-56.85, -370.3, 0.385, 0.379);
        var instance113 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(113.5, -502.2, 0.379, 0.379);
        var instance112 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(6.35, -515.25, 0.379, 0.379);
        var instance111 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-39.75, -575.25, 0.379, 0.385);
        var instance110 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-12.25, -596.5, 0.379, 0.379);
        var instance109 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-119.4, -609.55, 0.379, 0.379);
        var instance108 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-169.15, -669.55, 0.385, 0.385);
        var instance107 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(271.25, -514.75, 0.379, 0.379);
        var instance106 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(164.1, -527.8, 0.379, 0.379);
        var instance105 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(114.35, -585.9, 0.385, 0.379);
        var instance104 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1710.7, -924.35, 1.72, 1.72);
        var instance103 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1962.7, -798.35, 1.72, 1.72);
        var instance102 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1165.7, -706.35, 1.72, 1.72);
        var instance101 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1417.7, -580.35, 1.72, 1.72);
        var instance100 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1069, -309.5);
        var instance99 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1217.7, -1117.35, 1.72, 1.72);
        var instance98 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1469.7, -991.35, 1.72, 1.72);
        var instance97 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1121, -720.5);
        var instance96 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1409.7, -887.35, 1.72, 1.72);
        var instance95 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1661.7, -761.35, 1.72, 1.72);
        var instance94 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1313, -490.5);
        var instance93 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1056.7, -967.35, 1.72, 1.72);
        var instance92 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1308.7, -841.35, 1.72, 1.72);
        var instance91 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-960, -570.5);
        var instance90 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-849.55, -227.7);
        var instance89 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-996, -154.5);
        var instance88 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-787.4, 4.05, 0.571, 0.578);
        var instance87 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1002.55, -495.7);
        var instance86 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1149, -422.5);
        var instance85 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-940.4, -263.95, 0.571, 0.578);
        var instance84 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1240.55, -509.7);
        var instance83 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1387, -436.5);
        var instance82 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1178.4, -277.95, 0.571, 0.578);
        var instance81 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-813.55, -643.7);
        var instance80 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-960, -570.5);
        var instance79 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-751.4, -411.95, 0.571, 0.578);
        var instance78 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1710.7, -924.35, 1.72, 1.72);
        var instance77 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1962.7, -798.35, 1.72, 1.72);
        var instance76 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1165.7, -706.35, 1.72, 1.72);
        var instance75 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1417.7, -580.35, 1.72, 1.72);
        var instance74 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1069, -309.5);
        var instance73 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1217.7, -1117.35, 1.72, 1.72);
        var instance72 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1469.7, -991.35, 1.72, 1.72);
        var instance71 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1121, -720.5);
        var instance70 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1409.7, -887.35, 1.72, 1.72);
        var instance69 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1661.7, -761.35, 1.72, 1.72);
        var instance68 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-1313, -490.5);
        var instance67 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1056.7, -967.35, 1.72, 1.72);
        var instance66 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1308.7, -841.35, 1.72, 1.72);
        var instance65 = new Graphics()
            .drawCommands(shapes.stage[7])
            .setTransform(-960, -570.5);
        var instance64 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-849.55, -227.7);
        var instance63 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-996, -154.5);
        var instance62 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1427.05, -315.6, 1.508, 1.525);
        var instance61 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1002.55, -495.7);
        var instance60 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1149, -422.5);
        var instance59 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1580.05, -583.6, 1.508, 1.525);
        var instance58 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1240.55, -509.7);
        var instance57 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-1387, -436.5);
        var instance56 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1818.05, -597.6, 1.508, 1.525);
        var instance55 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-813.55, -643.7);
        var instance54 = new Graphics()
            .drawCommands(shapes.stage[6])
            .setTransform(-960, -570.5);
        var instance53 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1391.05, -731.6, 1.508, 1.525);
        var instance52 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-2222.35, -822.4, 2.623, 2.639);
        var instance51 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-2502, -856.45, 2.623, 2.639);
        var instance50 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-2475.85, -850.3, 2.581, 2.623);
        var instance49 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-2178.6, -368.5, 2.639, 2.623);
        var instance48 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-2141.75, -367.7, 2.581, 2.623);
        var instance47 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1715.4, -705.85, 2.639, 2.623);
        var instance46 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1984.4, -739.9, 2.623, 2.623);
        var instance45 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1958.25, -739.1, 2.581, 2.623);
        var instance44 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1991.8, -620.05, 2.623, 2.623);
        var instance43 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-2271.45, -654.1, 2.623, 2.623);
        var instance42 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-2245.3, -653.3, 2.581, 2.623);
        var instance41 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1653.3, -491.9, 2.623, 2.623);
        var instance40 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1932.95, -525.95, 2.623, 2.623);
        var instance39 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1906.8, -525.15, 2.581, 2.623);
        var instance38 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1579.05, 89.35, 1.516, 1.541);
        var instance37 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1412.3, -194.9, 1.541, 1.525);
        var instance36 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1564.15, -220, 1.525, 1.541);
        var instance35 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1548.95, -218.6, 1.5, 1.541);
        var instance34 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1592.35, -337.95, 1.525, 1.525);
        var instance33 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1765.55, -357.75, 1.541, 1.525);
        var instance32 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1749.4, -361.65, 1.516, 1.541);
        var instance31 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1162.35, -219.3, 1.525, 1.541);
        var instance30 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1324.85, -233.75, 1.525, 1.525);
        var instance29 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1309.65, -237.65, 1.5, 1.541);
        var instance28 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1549.85, -954.15, 1.721, 1.721);
        var instance27 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1734.25, -976.6, 1.721, 1.721);
        var instance26 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1727.2, -980.95, 1.71, 1.738);
        var instance25 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1329.6, -635.95, 1.721, 1.721);
        var instance24 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1524.65, -658.4, 1.738, 1.721);
        var instance23 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1506.95, -662.75, 1.71, 1.738);
        var instance22 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1208.6, -886.15, 1.721, 1.738);
        var instance21 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1403.65, -908.6, 1.738, 1.738);
        var instance20 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1385.95, -907.6, 1.71, 1.738);
        var instance19 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1397.85, -829.6, 1.721, 1.738);
        var instance18 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1582.25, -852.05, 1.721, 1.738);
        var instance17 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1575.2, -851.05, 1.71, 1.738);
        var instance16 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1185.35, -745.1, 1.738, 1.738);
        var instance15 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1359.05, -767.55, 1.721, 1.738);
        var instance14 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1352, -766.55, 1.71, 1.738);
        var instance13 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1024.05, -347.2, 1, 1.016);
        var instance12 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1131.2, -354.9);
        var instance11 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1131.2, -354.9);
        var instance10 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1010.6, -544.9);
        var instance9 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1117.75, -557.95);
        var instance8 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1108, -562.3, 0.984, 1.016);
        var instance7 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1136.35, -639.2);
        var instance6 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-1243.5, -652.25);
        var instance5 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-1243.5, -656.6, 1, 1.016);
        var instance4 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-852.85, -557.45);
        var instance3 = new Graphics()
            .drawCommands(shapes.stage[5])
            .setTransform(-960, -570.5);
        var instance2 = new Graphics()
            .drawCommands(shapes.stage[4])
            .setTransform(-960, -570.5);
        var instance1 = new Sprite(fromFrame("sun_img"))
            .setTransform(-656, -489.6);
        this.addChild(instance206, instance205, instance204, instance203, instance202, instance201, instance200, instance199, instance198, instance197, instance196, instance195, instance194, instance193, instance192, instance191, instance190, instance189, instance188, instance187, instance186, instance185, instance184, instance183, instance182, instance181, instance180, instance179, instance178, instance177, instance176, instance175, instance174, instance173, instance172, instance171, instance170, instance169, instance168, instance167, instance166, instance165, instance164, instance163, instance162, instance161, instance160, instance159, instance158, instance157, instance156, instance155, instance154, instance153, instance152, instance151, instance150, instance149, instance148, instance147, instance146, instance145, instance144, instance143, instance142, instance141, instance140, instance139, instance138, instance137, instance136, instance135, instance134, instance133, instance132, instance131, instance130, instance129, instance128, instance127, instance126, instance125, instance124, instance123, instance122, instance121, instance120, instance119, instance118, instance117, instance116, instance115, instance114, instance113, instance112, instance111, instance110, instance109, instance108, instance107, instance106, instance105, instance104, instance103, instance102, instance101, instance100, instance99, instance98, instance97, instance96, instance95, instance94, instance93, instance92, instance91, instance90, instance89, instance88, instance87, instance86, instance85, instance84, instance83, instance82, instance81, instance80, instance79, instance78, instance77, instance76, instance75, instance74, instance73, instance72, instance71, instance70, instance69, instance68, instance67, instance66, instance65, instance64, instance63, instance62, instance61, instance60, instance59, instance58, instance57, instance56, instance55, instance54, instance53, instance52, instance51, instance50, instance49, instance48, instance47, instance46, instance45, instance44, instance43, instance42, instance41, instance40, instance39, instance38, instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.stage = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60,
            loop: false
        });
        var instance4 = new lib.background()
            .setTransform(960, 570.5);
        var instance3 = new lib.sun()
            .setTransform(204, 192);
        this[instance3.name = "sun"] = instance3;
        var instance2 = new Sprite(fromFrame("earth_img"))
            .setTransform(1440.75, 610.8);
        var instance1 = new lib.rocket_2()
            .setTransform(1608, 783.9);
        this[instance1.name = "rocket"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.stage.assets = {
        "earth_img": "images/earth_img.png",
        "sun_img": "images/sun_img.png",
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
        totalFrames: 1,
        library: lib
    };
}