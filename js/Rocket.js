
class Rocket extends p2.Body {

    constructor(sprite, thrustMc, options) {
        sprite.scale.set(.4);

        Object.assign(options, {
            position: [sprite.x-sprite.width, sprite.y-sprite.height],
        });
        super(options);

        const shape = this.shape = new p2.Box({
            width: sprite.width,
            height: sprite.height,
        });

        this.thrusts = {
            left: 0,
            right: 0,
            tail: 0,
            nose: 0,
        }

        this.addShape(shape);
        this.sprite = sprite;
        sprite.pivot.x = sprite.width/2;
        sprite.pivot.y = sprite.height/2;

        this.overlay = new PIXI.Container();

        const rocketImage = sprite.children[0];
        const thrustTxt = PIXI.Texture.fromImage('images/thrust.png');
        const sideThrustTxt = PIXI.Texture.fromImage('images/smoke.png');
        const thrust = this.thrust = new PIXI.Sprite(thrustTxt);
        const thrustRight = this.thrustRight = new PIXI.Sprite(sideThrustTxt);
        const thrustLeft = this.thrustLeft = new PIXI.Sprite(sideThrustTxt);
        const thrustNose = this.thrustNose = new PIXI.Sprite(sideThrustTxt);

        thrust.name = 'thrust';
        thrust.alpha = 0;
        thrust.setTransform(rocketImage.width/2-35, rocketImage.height-10, 1, 1, 0);
        this.sprite.addChild(thrust);

        thrustNose.name = 'thrustNose';
        thrustNose.alpha = 0;
        thrustNose.setTransform(rocketImage.width/2+10, 0, 1, 1, Math.PI);
        this.sprite.addChild(thrustNose);

        thrustLeft.name = 'thrustLeft';
        thrustLeft.alpha = 0;
        thrustLeft.setTransform(15, rocketImage.height/2-15, 1, 1, Math.PI/2);
        this.sprite.addChild(thrustLeft);

        thrustRight.name = 'thrustRight';
        thrustRight.alpha = 0;
        thrustRight.setTransform(rocketImage.width-15, rocketImage.height/2+5, 1, 1, Math.PI/2 + Math.PI);
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

    update(command) {
        if (command.stop) {
            // this.velocity = [this.velocity, 0];
            p2.vec2.mul(this.velocity, this.velocity, [0.95, 0.95]);
            return ;
        }
        if (command.forward) {
            if (this.thrusts.tail < 10) this.thrusts.tail++;
            this._thrust(THRUST_SPEED);
        } else if (this.thrusts.tail > 0) this.thrusts.tail--;

        if (command.backward) {
            if (this.thrusts.nose < 10) this.thrusts.nose++;
            this._thrust(-(THRUST_SPEED));
        } else if (this.thrusts.nose > 0) this.thrusts.nose--;

        if (command.left) {
            if (this.thrusts.left < 10) this.thrusts.left++;
            this.rotation = this.rotation - .03;
            // this._thrustRight(-(THRUST_SPEED));
        } else if (this.thrusts.left > 0) this.thrusts.left--;

        if (command.right) {
            if (this.thrusts.right < 10) this.thrusts.right++;
            this.rotation = this.rotation + .03;
            // this._thrustLeft(-(THRUST_SPEED));
        } else if (this.thrusts.right > 0) this.thrusts.right--;

        this.rotation = this.rotation % (2 * Math.PI);

        this.thrustLeft.alpha = this.thrusts.left / 10;
        this.thrustRight.alpha = this.thrusts.right / 10;
        this.thrustNose.alpha = this.thrusts.nose / 10;
        this.thrust.alpha = this.thrusts.tail / 10;
    }

    _thrust(mul = 10000) {
        const f = p2.vec2.mul([], forwardVector(this), [mul, -mul]);

        // return p2.vec2.mul(r.force, this._forwardVector(r), [mul, -mul]);
        return this.applyForce(f);
    }

    _thrustLeft(mul = 10000) {
        const f = p2.vec2.mul([], leftVector(this), [mul, -mul]);

        // return p2.vec2.mul(r.force, this._forwardVector(r), [mul, -mul]);
        return this.applyForce(f);
    }

    _thrustRight(mul = 10000) {
        const f = p2.vec2.mul([], rightVector(this), [mul, -mul]);

        // return p2.vec2.mul(r.force, this._forwardVector(r), [mul, -mul]);
        return this.applyForce(f);
    }

}