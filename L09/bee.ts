namespace Duckpond {


    export class Bee extends Moveable { 
        position: Vector;
        directionX: number;
        directionY: number;

        constructor(_x: number, _y: number, _speed: number) {
            super(_x, _y, _speed);
            this.position = new Vector(_x, _y);
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
            this.directionX = (Math.random() * 2 - 1) * _speed;
            this.directionY = (Math.random() * 2 - 1) * _speed;
        }

        draw() {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(this.position.x - 3, this.position.y - 2, 2, 0, 2 * Math.PI);
            ctx.arc(this.position.x + 3, this.position.y - 2, 2, 0, 2 * Math.PI);
            ctx.fill();
        }

        update() {
            this.position.x += this.directionX;
            this.position.y += this.directionY;

            if (this.position.x < 0 || this.position.x > 800) this.directionX *= -1;
            if (this.position.y < 0 || this.position.y > 600) this.directionY *= -1;

            if (Math.random() < 0.05) {
                this.directionX = (Math.random() * 2 - 1) * this.speed;
                this.directionY = (Math.random() * 2 - 1) * this.speed;
            }
        }
    }
}
