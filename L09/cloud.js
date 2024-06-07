"use strict";
var Duckpond;
(function (Duckpond) {
    class Cloud extends Duckpond.Moveable {
        width;
        height;
        constructor(_x, _y, _width, _height, _speed) {
            super(_x, _y, _speed);
            this.x = _x;
            this.y = _y;
            this.width = _width;
            this.height = _height;
            this.speed = _speed;
        }
        draw() {
            Duckpond.ctx.fillStyle = 'white';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
            Duckpond.ctx.ellipse(this.x + 20, this.y - 10, this.width, this.height, 0, 0, 2 * Math.PI);
            Duckpond.ctx.ellipse(this.x + 40, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
            Duckpond.ctx.closePath();
            Duckpond.ctx.fill();
        }
        update() {
            this.x += this.speed;
            if (this.x - this.width > 800) {
                this.x = -this.width;
            }
        }
    }
    Duckpond.Cloud = Cloud;
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=cloud.js.map