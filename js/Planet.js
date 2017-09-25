class Planet extends p2.Body {

    constructor(sprite, options) {
        super(options);

		const pMask = sprite.pMask;
        const pos = pMask.toGlobal(new PIXI.Point(0,0));
        const radius = pMask.width/2;

        const x = pos.x;
        const y = pos.y;
        const shape = new p2.Circle({radius});

        this.addShape(shape);
        this.position.set([x + pMask.width/2, y + pMask.height/2]);

        this.sprite = sprite;
        this.name = sprite.name;

        this.gravityRadius = 500;
        const gravityMask = new PIXI.Graphics();

        this.position = new Proxy(this.position, {
            set: function(target, property, value, receiver) {
                target[property] = value;
                sprite.x = target[0] - (pMask.x+pMask.width/2);
                sprite.y = target[1] - (pMask.y+pMask.height/2);

                return true;
            }
        });

        pMask.visible = false;
    }

    getPullForce(object) {
        const diff = [];
        const f = [];
        const rad = this.gravityRadius;

        p2.vec2.sub(diff, this.position, object.position);

        const len = p2.vec2.len(diff);
        const res = len < rad ? p2.vec2.normalize(f, diff) : [0,0];

        p2.vec2.mul(res, res, [30, 30]); // gravitational force multiplier

        // console.log(this.sprite.name, res);

        return res;
    }

}