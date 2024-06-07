namespace Duckpond {

    export class Moveable {
        x: number;
        y: number;
        position: Vector;
        speed: number;
       

        constructor(_x: number, _y: number, _speed: number) {
            this.position = new Vector(_x, _y);
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
}