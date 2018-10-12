module.exports = (ball) => {
    function isOutOfBounds(aBall) {
        return false
    }

    function collidedWithPad() {
        return false
    }

    function hej() {
        return false
    }

    for (let i = 0;i < this.maxID;i++) {
        if(this.objects[i] === undefined) {
            continue;
        }

        let obj = this.objects[i];

        obj.y += Math.cos(obj.angle) * obj.v * dt;
        obj.x += Math.sin(obj.angle) * obj.v * dt;

        if (isOutOfBounds(ball)) {
            delete this.objects[i];
        }
    }
}
