"use strict";
var Duckpond;
(function (Duckpond) {
    class Bee extends Duckpond.Moveable {
        position;
        directionX;
        directionY;
        constructor(_x, _y, _speed) {
            super(_x, _y, _speed);
            this.position = new Duckpond.Vector(_x, _y);
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
            this.directionX = (Math.random() * 2 - 1) * _speed;
            this.directionY = (Math.random() * 2 - 1) * _speed;
        }
        draw() {
            Duckpond.ctx.fillStyle = 'yellow';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
            Duckpond.ctx.fillStyle = 'black';
            Duckpond.ctx.beginPath();
            Duckpond.ctx.arc(this.position.x - 3, this.position.y - 2, 2, 0, 2 * Math.PI);
            Duckpond.ctx.arc(this.position.x + 3, this.position.y - 2, 2, 0, 2 * Math.PI);
            Duckpond.ctx.fill();
        }
        update() {
            this.position.x += this.directionX;
            this.position.y += this.directionY;
            if (this.position.x < 0 || this.position.x > 800)
                this.directionX *= -1;
            if (this.position.y < 0 || this.position.y > 600)
                this.directionY *= -1;
            if (Math.random() < 0.05) {
                this.directionX = (Math.random() * 2 - 1) * this.speed;
                this.directionY = (Math.random() * 2 - 1) * this.speed;
            }
        }
    }
    Duckpond.Bee = Bee;
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=bee.js.map