"use strict";
var Duckpond;
(function (Duckpond) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        // scale(_factor: number): void {
        //     this.x *= _factor;
        //     this.y *= _factor;
        // }
        // add(_addend: Vector): void {
        //     this.x += _addend.x;
        //     this.y += _addend.y;
        // }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    Duckpond.Vector = Vector;
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=vector.js.map