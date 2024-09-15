// Basic Vector
class Vector {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }
    get x() {
        if (isNaN(this.X)) this.X = 0;
        return this.X;
    }
    get y() {
        if (isNaN(this.Y)) this.Y = 0;
        return this.Y;
    }
    set x(value) {
        this.X = value;
    }
    set y(value) {
        this.Y = value;
    }
    null() {
        this.X = 0;
        this.Y = 0;
    }
    isShorterThan(d) {
        return this.x * this.x + this.y * this.y <= d * d;
    }
    get lengthSquared() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    get direction() {
        return Math.atan2(this.y, this.x);
    }
};
// Gets the nearest
function nearest(array, location, test = () => true) {
    let lowest = Infinity, closest;
    for (let instance of array) {
        let distance = (instance.x - location.x) ** 2 + (instance.y - location.y) ** 2;
        if (distance < lowest && test(instance, distance)) {
            lowest = distance;
            closest = instance;
        }
    }
    return closest;
}

function timeOfImpact(p, v, s) {
    // Requires relative position and velocity to aiming point
    let a = s ** 2 - (v.x ** 2 + v.y ** 2),
        b = p.x * v.x + p.y * v.y,
        c = p.x ** 2 + p.y ** 2,
        d = b ** 2 + a * c
    if (d < 0) return 0;
    return Math.max(0, (b + Math.sqrt(d)) / a) * 0.9;
}

module.exports = { Vector, nearest, timeOfImpact };