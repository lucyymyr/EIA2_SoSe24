"use strict";
var Duckpond;
(function (Duckpond) {
    class Bird extends Duckpond.Moveable {
        constructor(_x, _y, _speed) {
            super(_x, _y, _speed);
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }
        draw() {
            // Body
            Duckpond.ctx.fillStyle = 'darkgray';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.ellipse(this.x, this.y, 10, 5, 0, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            // Head
            Duckpond.ctx.beginPath();
            Duckpond.ctx.arc(this.x + 10, this.y - 5, 4, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            // Beak
            Duckpond.ctx.fillStyle = 'orange';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.moveTo(this.x + 14, this.y - 5);
            Duckpond.ctx.lineTo(this.x + 20, this.y - 7);
            Duckpond.ctx.lineTo(this.x + 20, this.y - 3);
            Duckpond.ctx.closePath();
            Duckpond.ctx.fill();
            // Eye
            Duckpond.ctx.fillStyle = 'black';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.arc(this.x + 12, this.y - 7, 1, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            // Wing
            Duckpond.ctx.fillStyle = 'darkgray';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.moveTo(this.x - 5, this.y);
            Duckpond.ctx.lineTo(this.x - 15, this.y - 5);
            Duckpond.ctx.lineTo(this.x - 15, this.y + 5);
            Duckpond.ctx.closePath();
            Duckpond.ctx.fill();
        }
        update() {
            this.x += this.speed;
            if (this.x > 800 + 10) {
                this.x = -10;
            }
        }
    }
    Duckpond.Bird = Bird;
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=bird.js.map