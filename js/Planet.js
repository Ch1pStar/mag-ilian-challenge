class Planet extends p2.Body {

    constructor(sprite, options) {
        super(options);

		const pMask = sprite.pMask;
        const scale = sprite.scale.x; // expect squares
        const pos = pMask.toGlobal(new PIXI.Point(0,0));
        const radius = pMask.width/2*scale;
        const width = pMask.width*scale;
        const height = pMask.height*scale;

        const x = pos.x;
        const y = pos.y;
        const shape = new p2.Circle({radius});

        this.addShape(shape);
        this.position.set([x + width/2, y + height/2]);

        this.sprite = sprite;
        this.name = sprite.name;

        const gMask = sprite.gMask;

        gMask.scale.set(1);

    	gMask.visible = false;
    	this.gravityRadius = gMask.width/2;

        this.position = new Proxy(this.position, {
            set: function(target, property, value, receiver) {
                target[property] = value;
                sprite.x = target[0] - (pMask.x+width/2);
                sprite.y = target[1] - (pMask.y+height/2);

                return true;
            }
        });

        pMask.visible = false;

        const g = new PIXI.Graphics();

        g.beginFill(0xcc00dd)
        g.drawCircle(this.gravityRadius, this.gravityRadius, this.gravityRadius);
        g.endFill();
        g.x = sprite.x - this.gravityRadius/2;
        g.y = sprite.y - this.gravityRadius/2;
        g.alpha = .5;

        const ov = this.overlay  = new PIXI.Container();
        // ov.addChild(g);
    }

    getPullForce(object) {
        const diff = [];
        const f = [];
        const rad = this.gravityRadius;

        p2.vec2.sub(diff, this.position, object.position);

        const len = p2.vec2.len(diff);
        const res = len < rad ? p2.vec2.normalize(f, diff) : [0,0];

        p2.vec2.mul(res, res, [30, 30]); // gravitational force multiplier

        // if(len < rad){
        // 	console.log(this.sprite.name, res);
        // }

        return res;
    }

}