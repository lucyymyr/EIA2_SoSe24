"use strict";
var Duckpond;
(function (Duckpond) {
    class Moveable {
        x;
        y;
        position;
        speed;
        constructor(_x, _y, _speed) {
            this.position = new Duckpond.Vector(_x, _y);
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }
        draw() {
        }
        move() {
        }
        update() {
        }
    }
    Duckpond.Moveable = Moveable;
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=moveable.js.map