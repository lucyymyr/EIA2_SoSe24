namespace Duckpond {

    export class Duck extends Moveable {
            direction: number; // 1 for right, -1 for left
            pondBounds: { left: number, right: number, top: number, bottom: number };
    
            constructor(_x: number, _y: number, _speed: number, _direction: number, pondBounds: { left: number, right: number, top: number, bottom: number }) {
                super(_x, _y, _speed,)
        
                this.direction = _direction;
                this.pondBounds = pondBounds;
            }
    
            draw() {
                // Body
                ctx.fillStyle = 'yellow';
                ctx.beginPath();
                ctx.ellipse(this.x, this.y, 20, 10, 0, 0, 2 * Math.PI);
                ctx.fill();
    
                // Head
                ctx.beginPath();
                ctx.arc(this.x + 15 * this.direction, this.y - 10, 7, 0, 2 * Math.PI);
                ctx.fill();
    
                // Beak
                ctx.fillStyle = 'orange';
                ctx.beginPath();
                ctx.moveTo(this.x + 22 * this.direction, this.y - 10);
                ctx.lineTo(this.x + 30 * this.direction, this.y - 12);
                ctx.lineTo(this.x + 30 * this.direction, this.y - 8);
                ctx.closePath();
                ctx.fill();
    
                // Eye
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(this.x + 18 * this.direction, this.y - 12, 2, 0, 2 * Math.PI);
                ctx.fill();
    
                // Wing
                ctx.fillStyle = 'yellow';
                ctx.beginPath();
                ctx.ellipse(this.x - 5 * this.direction, this.y, 8, 4, -0.5, 0, 2 * Math.PI);
                ctx.fill();
            }
    
            update() {
                this.x += this.speed * this.direction;
                if (this.x > this.pondBounds.right || this.x < this.pondBounds.left) {
                    this.direction *= -1;
                }
            }
        }
    

}