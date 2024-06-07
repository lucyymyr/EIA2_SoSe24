"use strict";
var Duckpond;
(function (Duckpond) {
    window.addEventListener("load", handleLoad);
    let moveable = [];
    function handleLoad(_event) {
        const canvas = document.getElementById('myCanvas');
        if (!canvas)
            return;
        Duckpond.ctx = canvas.getContext("2d");
        if (!Duckpond.ctx)
            return;
        for (let i = 0; i = 3; i++) {
            let cloud = new Duckpond.Cloud(20, 20, 50, 15, 5);
            moveable.push(cloud);
            console.log("hilfe");
        }
        if (Duckpond.ctx) {
            const sky = new Sky();
            // const clouds = [
            //     new Cloud(100, 50, 20, 10, 0.5),
            //     new Cloud(300, 80, 25, 12, 0.3),
            //     new Cloud(500, 60, 20, 10, 0.4),
            //     new Cloud(700, 40, 30, 15, 0.6)
            // ];
            const mountains = [
                new Mountain([{ x: 0, y: 300 }, { x: 100, y: 100 }, { x: 200, y: 300 }]),
                new Mountain([{ x: 150, y: 300 }, { x: 300, y: 150 }, { x: 450, y: 300 }]),
                new Mountain([{ x: 300, y: 300 }, { x: 450, y: 100 }, { x: 600, y: 300 }]),
                new Mountain([{ x: 450, y: 300 }, { x: 600, y: 150 }, { x: 750, y: 300 }]),
                new Mountain([{ x: 600, y: 300 }, { x: 750, y: 100 }, { x: 900, y: 300 }])
            ];
            const grass = new Grass();
            const pond = new Pond();
            const pondBounds = pond.getBounds(canvas.width, canvas.height);
            // const ducks = [
            //     new Duck(pondBounds.left + 50, pondBounds.top + 60, 0.2, 1, pondBounds),
            //     new Duck(pondBounds.left + 100, pondBounds.top + 40, 0.15, 1, pondBounds),
            //     new Duck(pondBounds.left + 150, pondBounds.top + 80, 0.25, 1, pondBounds),
            //     new Duck(pondBounds.left + 200, pondBounds.top + 60, 0.2, 1, pondBounds),
            //     new Duck(pondBounds.left + 250, pondBounds.top + 100, 0.3, 1, pondBounds)
            // ];
            // const birds = [
            //     new Bird(100, 70, 1),
            //     new Bird(230, 150, 0.8),
            //     new Bird(340, 120, 1.2),
            //     new Bird(480, 180, 1),
            //     new Bird(600, 130, 1.5)
            // ];
            const flowers = [
                new Flower(100, 400),
                new Flower(200, 540),
                new Flower(300, 375),
                new Flower(600, 375),
                new Flower(700, 500)
            ];
            const tree = new Tree(canvas.width - 50, canvas.height);
            // const bees = [
            //     new Bee(50, 50, 1),
            //     new Bee(150, 150, 1),
            //     new Bee(250, 100, 1),
            //     new Bee(350, 200, 1),
            //     new Bee(450, 50, 1)
            // ];
            // function drawScene() {
            //     ctx.clearRect(0, 0, canvas.width, canvas.height);
            //     sky.draw(ctx);
            //     clouds.forEach(cloud => cloud.draw());
            //     mountains.forEach(mountain => mountain.draw(ctx));
            //     grass.draw(ctx);
            //     pond.draw(ctx);
            //     ducks.forEach(duck => duck.draw());
            //     birds.forEach(bird => bird.draw());
            //     flowers.forEach(flower => flower.draw(ctx));
            //     tree.draw(ctx);
            //     bees.forEach(bee => bee.draw());
            // }
            // function updateScene() {
            //     clouds.forEach(cloud => cloud.update());
            //     ducks.forEach(duck => duck.update());
            //     birds.forEach(bird => bird.update());
            //     bees.forEach(bee => bee.update());
            // }
            function animate() {
                // updateScene();
                // drawScene();
                requestAnimationFrame(animate);
                for (let moveables of moveable) {
                    moveables.draw();
                    moveables.move();
                }
            }
            animate();
        }
    }
    ;
    class Sky {
        draw(ctx) {
            ctx.fillStyle = 'lightblue';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }
    class Mountain {
        peaks;
        constructor(peaks) {
            this.peaks = peaks;
        }
        draw(ctx) {
            ctx.fillStyle = 'gray';
            ctx.beginPath();
            ctx.moveTo(this.peaks[0].x, this.peaks[0].y);
            this.peaks.forEach(peak => ctx.lineTo(peak.x, peak.y));
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
            ctx.lineTo(0, ctx.canvas.height);
            ctx.closePath();
            ctx.fill();
        }
    }
    class Grass {
        draw(ctx) {
            ctx.fillStyle = 'green';
            ctx.fillRect(0, ctx.canvas.height - 250, ctx.canvas.width, 250);
        }
    }
    class Flower {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        draw(ctx) {
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    class Pond {
        draw(ctx) {
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.ellipse(ctx.canvas.width / 2, ctx.canvas.height - 120, 200, 100, 0, 0, 2 * Math.PI); // Größeren Teich
            ctx.fill();
        }
        getBounds(canvasWidth, canvasHeight) {
            return {
                left: canvasWidth / 2 - 200,
                right: canvasWidth / 2 + 200,
                top: canvasHeight - 220,
                bottom: canvasHeight - 20,
            };
        }
    }
    class Tree {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        draw(ctx) {
            ctx.fillStyle = 'brown';
            ctx.fillRect(this.x - 20, this.y - 200, 60, 200); // Stamm
            // Baumkrone
            ctx.fillStyle = 'darkgreen';
            const circleCount = 8; // Anzahl der Kreise in der Baumkrone
            const circleRadius = 80; // Radius der Kreise
            const circleOffset = 10; // Abstand zwischen den Kreisen
            for (let i = 0; i < circleCount; i++) {
                const angle = (Math.PI * 2) / circleCount * i;
                const cx = this.x + Math.cos(angle) * (circleOffset * i);
                const cy = this.y - 200 + Math.sin(angle) * (circleOffset * i);
                ctx.beginPath();
                ctx.arc(cx, cy, circleRadius - i * 5, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
})(Duckpond || (Duckpond = {}));
//# sourceMappingURL=script.js.map