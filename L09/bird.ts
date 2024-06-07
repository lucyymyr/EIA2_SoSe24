namespace Duckpond {

   export class Bird extends Moveable {

        constructor(_x: number, _y: number, _speed: number) {
            super(_x, _y, _speed);
            this.x = _x;
            this.y = _y;
            this.speed = _speed;
        }

        draw() {
            // Body
            ctx.fillStyle = 'darkgray';
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, 10, 5, 0, 0, 2 * Math.PI);
            ctx.fill();

            // Head
            ctx.beginPath();
            ctx.arc(this.x + 10, this.y - 5, 4, 0, 2 * Math.PI);
            ctx.fill();

            // Beak
            ctx.fillStyle = 'orange';
            ctx.beginPath();
            ctx.moveTo(this.x + 14, this.y - 5);
            ctx.lineTo(this.x + 20, this.y - 7);
            ctx.lineTo(this.x + 20, this.y - 3);
            ctx.closePath();
            ctx.fill();

            // Eye
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(this.x + 12, this.y - 7, 1, 0, 2 * Math.PI);
            ctx.fill();

            // Wing
            ctx.fillStyle = 'darkgray';
            ctx.beginPath();
            ctx.moveTo(this.x - 5, this.y);
            ctx.lineTo(this.x - 15, this.y - 5);
            ctx.lineTo(this.x - 15, this.y + 5);
            ctx.closePath();
            ctx.fill();
        }

        update() {
            this.x += this.speed;
            if (this.x > 800 + 10) {
                this.x = -10;
            }
        }
    }
}