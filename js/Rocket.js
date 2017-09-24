

class Rocket extends p2.Body {

    constructor(sprite, options) {
        Object.assign(options, {
            position: [sprite.x-sprite.width, sprite.y-sprite.height],
        });
        super(options);

        const shape = this.shape = new p2.Box({
            width: sprite.width,
            height: sprite.height,
        });

        this.addShape(shape);
        this.sprite = sprite;

         const g = new PIXI.Graphics();
         g.beginFill(0xff00ff);
         g.drawRect(-sprite.width/2, -sprite.height/2, sprite.width, sprite.height);
         g.endFill();
         g.alpha = 0.6;

        window.a = g;

        const s = PIXI.Sprite.fromImage('images/ar.png');
        s.width = sprite.width;
        s.height = sprite.height;

        s.x = sprite.x;
        s.y = sprite.y;
        s.anchor.set(0.5)
        s.alpha = .5;

        window.s = s;

        this.overlay = new PIXI.Container();
        this.overlay.addChild(g, s);

        this.position = new Proxy(this.position, {
            set: (target, property, value, receiver) => {
                target[property] = value;
                sprite.x = target[0];
                sprite.y = target[1];
                sprite.rotation = this.rotation + 1; // adjust for natural rocket texture rotation

                g.position.x = target[0];
                g.position.y = target[1];
                g.rotation = this.rotation;

                s.x = target[0];
                s.y = target[1];
                s.rotation = this.rotation; // adjust for natural rocket texture rotation

                return true;
            }
        });

    }

    init() {

    }

    _thrust(mul = 10000) {
        const f = p2.vec2.mul([], forwardVector(this), [mul, -mul]);

        // return p2.vec2.mul(r.force, this._forwardVector(r), [mul, -mul]);
        return this.applyForce(f);
    }

}