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
        const shape = this.shape = new p2.Circle({radius});

        this.addShape(shape);
        this.position.set([x + width/2, y + height/2]);

        this.sprite = sprite;
        this.name = sprite.name;

        const gMask = sprite.gMask;

        if(gMask){  	
	        gMask.scale.set(1);
	    	gMask.visible = false;
        }

    	const gr = this.gravityRadius = options.gravityRadius;

        this.position = new Proxy(this.position, {
            set: function(target, property, value, receiver) {
                target[property] = value;
                sprite.x = target[0] - sprite.width/2;
                sprite.y = target[1] - sprite.height/2;

                return true;
            }
        });

        // pMask.alpha = 1;
        pMask.visible = false;

        const g = PIXI.Sprite.fromImage('images/sunPulse.png');

        g.anchor.set(.5);
        g.width = gr*2;
        g.height = gr*2;
        g.x = sprite.x +sprite.width/2;
        g.y = sprite.y +sprite.height/2;


        // phys mask
        // const ps = PIXI.Sprite.fromImage('images/sunPulse.png');

        // // ps.anchor.set(.5);
        // ps.width = pMask.width*scale;
        // ps.height = pMask.height*scale;
        // // ps.x = sprite.x +sprite.width/2;
        // // ps.y = sprite.y +sprite.height/2;
        // ps.x = x;
        // ps.y = y;


        const ov = this.overlay  = new PIXI.Container();
        ov.addChild(g);
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