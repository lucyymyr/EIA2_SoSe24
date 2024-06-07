"use strict";
var Duckpond;
(function (Duckpond) {
    class Duck extends Duckpond.Moveable {
        direction; // 1 for right, -1 for left
        pondBounds;
        constructor(_x, _y, _speed, _direction, pondBounds) {
            super(_x, _y, _speed);
            this.direction = _direction;
            this.pondBounds = pondBounds;
        }
        draw() {
            // Body
            Duckpond.ctx.fillStyle = 'yellow';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.ellipse(this.x, this.y, 20, 10, 0, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            // Head
            Duckpond.ctx.beginPath();
            Duckpond.ctx.arc(this.x + 15 * this.direction, this.y - 10, 7, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            // Beak
            Duckpond.ctx.fillStyle = 'orange';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.moveTo(this.x + 22 * this.direction, this.y - 10);
            Duckpond.ctx.lineTo(this.x + 30 * this.direction, this.y - 12);
            Duckpond.ctx.lineTo(this.x + 30 * this.direction, this.y - 8);
            Duckpond.ctx.closePath();
            Duckpond.ctx.fill();
            // Eye
            Duckpond.ctx.fillStyle = 'black';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.arc(this.x + 18 * this.direction, this.y - 12, 2, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            // Wing
            Duckpond.ctx.fillStyle = 'yellow';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.ellipse(this.x - 5 * this.direction, this.y, 8, 4, -0.5, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
        }
        update() {
            this.x += this.speed * this.direction;
            if (this.x > this.pondBounds.right || this.x < this.pondBounds.left) {
                this.direction *= -1;
            }
        }
    }
    Duckpond.Duck = Duck;
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=Duck.js.map