const forwardVector = (body) => [Math.sin(body.rotation), Math.cos(body.rotation)];

const leftVector = (body) => [Math.sin(body.rotation - Math.PI / 2), Math.cos(body.rotation - Math.PI / 2)];

const rightVector = (body) => [Math.sin(body.rotation + Math.PI / 2), Math.cos(body.rotation + Math.PI / 2)];

const orientationBetweenAngles = (a, b) => {
    if (a > 0) {
        if (b < 0 && b < a - Math.PI) return a - b - 2 * Math.PI;
        else if (b < 0 && b >= a - Math.PI) return a - b;
        else return a - b;
    } else if (a < 0) {
        if (b > 0 && b <= Math.PI + a) return a - b;
        else if (b > 0 && b > Math.PI + a) return 2 * Math.PI + a - b;
        else return a - b;
    } else return -b;
}