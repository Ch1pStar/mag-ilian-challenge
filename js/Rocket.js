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
        const thrustTxt = PIXI.Texture.fromImage('images/thrust.png');
        const thrust = this.thrust = new PIXI.Sprite(thrustTxt);
        const thrustRight = this.thrustRight = new PIXI.Sprite(thrustTxt);
        const thrustLeft = this.thrustLeft = new PIXI.Sprite(thrustTxt);
        const thrustNose = this.thrustNose = new PIXI.Sprite(thrustTxt);

        thrust.name = 'thrust';
        thrust.anchor.set(.5);
        thrust.alpha = 0;
        thrust.setTransform(rocketImage.width/2, rocketImage.height*1.5, 1, 1, 0);
        this.sprite.addChild(thrust);

        thrustNose.name = 'thrustNose';
        thrustNose.anchor.set(.5);
        thrustNose.alpha = 0;
        thrustNose.setTransform(rocketImage.width/2, -rocketImage.height*.5, 1, 1, Math.PI);
        this.sprite.addChild(thrustNose);

        thrustLeft.name = 'thrustLeft';
        thrustLeft.anchor.set(.5);
        thrustLeft.alpha = 0;
        thrustLeft.setTransform(rocketImage.width*1.5, rocketImage.height*.5, 1, 1, Math.PI/2 + Math.PI);
        this.sprite.addChild(thrustLeft);

        thrustRight.name = 'thrustRight';
        thrustRight.anchor.set(.5);
        thrustRight.alpha = 0;
        thrustRight.setTransform(-rocketImage.width*.5, rocketImage.height*.5, 1, 1, Math.PI/2);
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

    _thrust(mul = 10000) {
        const f = p2.vec2.mul([], forwardVector(this), [mul, -mul]);

        // return p2.vec2.mul(r.force, this._forwardVector(r), [mul, -mul]);
        return this.applyForce(f);
    }

}