namespace Duckpond {

   export class Cloud extends Moveable {
        width: number;
        height: number;

        constructor(_x: number, _y: number, _width: number, _height: number, _speed: number) {
            super(_x, _y, _speed);
            this.x = _x;
            this.y = _y;
            this.width = _width;
            this.height = _height;
            this.speed = _speed;
        }

        draw() {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
            ctx.ellipse(this.x + 20, this.y - 10, this.width, this.height, 0, 0, 2 * Math.PI);
            ctx.ellipse(this.x + 40, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        update() {
            this.x += this.speed;
            if (this.x - this.width > 800) {
                this.x = -this.width;
            }
        }
    }
}