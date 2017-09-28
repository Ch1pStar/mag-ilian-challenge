let forward = false, backward = false, left = false, right = false, stop = false;

let distance = getDistance(data.rocket, data.target);
const vel = data.rocket.velocity;
const speed = getSpeed(vel);
const gravityDirection = data.gravityDirection;
const targetDirection = data.targetDirection;
const drift = data.rocket.drift;
const shouldLand = distance < 400;

const badDirection = Math.abs(targetDirection) > 0.05;

const rotateToTarget = () => {
    if (targetDirection > 0.001) right = true;
    else if (targetDirection < -0.001) left = true;
};

if (gravityDirection && !shouldLand) { // run away from gravity
    if (gravityDirection >= 0 && gravityDirection < 3.1) left = true;
    else if (gravityDirection <= 0 && gravityDirection > -3.1) right = true;
    else forward = true;
} else {
    if (!shouldLand) {
        if (speed > 1 && badDirection) stop = true;
        else if (badDirection) rotateToTarget();
        else forward = true; // TODO too fast?
    } else {
        if (targetDirection >= 0 && targetDirection < 3.1) left = true;
        else if (targetDirection <= 0 && targetDirection > -3.1) right = true;
        if (!left && !right) {
            if (speed > MAX_LANDING_VELOCITY) forward = true;
            else if (speed < MAX_LANDING_VELOCITY - 30) backward = true;
        }
    }
}

return {forward, backward, left, right, stop};