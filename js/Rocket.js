class Rocket extends p2.Body {

    constructor(sprite, thrustMc, options) {
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
        sprite.pivot.x = sprite.width/2;
        sprite.pivot.y = sprite.height/2;

        this.overlay = new PIXI.Container();

         const g = new PIXI.Graphics();
         g.beginFill(0xff00ff);
         g.drawRect(-shape.width/2, -shape.height/2, shape.width, shape.height);
         g.endFill();
         g.alpha = 0.6;
        
        // window.a = g;

        // const s = PIXI.Sprite.fromImage('images/ar.png');
        // s.width = sprite.width;
        // s.height = sprite.height;
        
        // s.x = sprite.x;
        // s.y = sprite.y;
        // s.anchor.set(0.5)
        // s.alpha = .5;
        
        // window.s = s;
        
        // this.overlay.addChild(g);
        // this.overlay.addChild(s);

        const rocketImage = sprite.children[0];
        const thrust = this.thrust = new thrustMc();
        const thrustRight = this.thrustRight = new thrustMc();
        const thrustLeft = this.thrustLeft = new thrustMc();
        const thrustNose = this.thrustNose = new thrustMc();

        thrust.name = 'thrust';
        thrust.alpha = 0;
        thrust.setTransform(rocketImage.width/2-15, rocketImage.height-10, 1, 1, 0);
        this.sprite.addChild(thrust);

        thrustNose.name = 'thrustNose';
        thrustNose.alpha = 0;
        thrustNose.setTransform(rocketImage.width/2+17, 0, 1, 1, Math.PI);
        this.sprite.addChild(thrustNose);

        thrustLeft.name = 'thrustLeft';
        thrustLeft.alpha = 0;
        thrustLeft.setTransform(rocketImage.width-17, rocketImage.height/2+15, 1, 1, Math.PI/2 + Math.PI);
        this.sprite.addChild(thrustLeft);

        thrustRight.name = 'thrustRight';
        thrustRight.alpha = 0;
        thrustRight.setTransform(17, rocketImage.height/2-15, 1, 1, Math.PI/2);
        this.sprite.addChild(thrustRight);

        let l = 0;

        this.position = new Proxy(this.position, {
            set: (target, property, value, receiver) => {
                target[property] = value;
                sprite.x = target[0];
                sprite.y = target[1];
                sprite.rotation = this.rotation;// - .6; // adjust for natural rocket texture rotation
                // sprite.rotation = l%(Math.PI*2); l+=.1;
                // thrust.rotation = l%(Math.PI*2); l+=.05;
                

                g.position.x = target[0];
                g.position.y = target[1];
                g.rotation = this.rotation;

                // s.x = target[0];
                // s.y = target[1];
                // s.rotation = this.rotation; // adjust for natural rocket texture rotation

                return true;
            }
        });

    }

    init() {

    }

    die() {
        this.type = p2.Body.STATIC;
        this.velocity = [0,0];
        this.sprite.gotoAndPlay('explode');

        this.sprite.removeChild(this.thrust);
        this.sprite.removeChild(this.thrustNose);
        this.sprite.removeChild(this.thrustLeft);
        this.sprite.removeChild(this.thrustRight);
    }

    get winAnim() {
        return new lib.landing_rocket();
    }

    _thrust(mul = 10000) {
        const f = p2.vec2.mul([], forwardVector(this), [mul, -mul]);

        // return p2.vec2.mul(r.force, this._forwardVector(r), [mul, -mul]);
        return this.applyForce(f);
    }

}