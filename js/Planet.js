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
        this.position.set([x, y]);

        this.sprite = sprite;

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

        p2.vec2.sub(diff, this.position, object.position);
        return p2.vec2.normalize(f, diff);

        // rocket.applyForce(f);

        // return rocket.velocity;
    }

}