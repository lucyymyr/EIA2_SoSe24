"use strict";
class Sky {
    draw(ctx) {
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
class Cloud {
    x;
    y;
    width;
    height;
    speed;
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
        ctx.ellipse(this.x + 20, this.y - 10, this.width, this.height, 0, 0, 2 * Math.PI);
        ctx.ellipse(this.x + 40, this.y, this.width, this.height, 0, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
    update(canvasWidth) {
        this.x += this.speed;
        if (this.x - this.width > canvasWidth) {
            this.x = -this.width;
        }
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
class Duck {
    x;
    y;
    speed;
    direction; // 1 for right, -1 for left
    pondBounds;
    constructor(x, y, speed, direction, pondBounds) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
        this.pondBounds = pondBounds;
    }
    draw(ctx) {
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
class Bird {
    x;
    y;
    speed;
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    draw(ctx) {
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
    update(canvasWidth) {
        this.x += this.speed;
        if (this.x > canvasWidth + 10) {
            this.x = -10;
        }
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
class Bee {
    x;
    y;
    speed;
    directionX;
    directionY;
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.directionX = (Math.random() * 2 - 1) * speed;
        this.directionY = (Math.random() * 2 - 1) * speed;
    }
    draw(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x - 3, this.y - 2, 2, 0, 2 * Math.PI);
        ctx.arc(this.x + 3, this.y - 2, 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    update(canvasWidth, canvasHeight) {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.x < 0 || this.x > canvasWidth)
            this.directionX *= -1;
        if (this.y < 0 || this.y > canvasHeight)
            this.directionY *= -1;
        if (Math.random() < 0.05) {
            this.directionX = (Math.random() * 2 - 1) * this.speed;
            this.directionY = (Math.random() * 2 - 1) * this.speed;
        }
    }
}
window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const sky = new Sky();
        const clouds = [
            new Cloud(100, 50, 20, 10, 0.5),
            new Cloud(300, 80, 25, 12, 0.3),
            new Cloud(500, 60, 20, 10, 0.4),
            new Cloud(700, 40, 30, 15, 0.6)
        ];
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
        const ducks = [
            new Duck(pondBounds.left + 50, pondBounds.top + 60, 0.2, 1, pondBounds),
            new Duck(pondBounds.left + 100, pondBounds.top + 40, 0.15, 1, pondBounds),
            new Duck(pondBounds.left + 150, pondBounds.top + 80, 0.25, 1, pondBounds),
            new Duck(pondBounds.left + 200, pondBounds.top + 60, 0.2, 1, pondBounds),
            new Duck(pondBounds.left + 250, pondBounds.top + 100, 0.3, 1, pondBounds)
        ];
        const birds = [
            new Bird(100, 70, 1),
            new Bird(230, 150, 0.8),
            new Bird(340, 120, 1.2),
            new Bird(480, 180, 1),
            new Bird(600, 130, 1.5)
        ];
        const flowers = [
            new Flower(100, 400),
            new Flower(200, 540),
            new Flower(300, 375),
            new Flower(600, 375),
            new Flower(700, 500)
        ];
        const tree = new Tree(canvas.width - 50, canvas.height);
        const bees = [
            new Bee(50, 50, 1),
            new Bee(150, 150, 1),
            new Bee(250, 100, 1),
            new Bee(350, 200, 1),
            new Bee(450, 50, 1)
        ];
        function drawScene() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            sky.draw(ctx);
            clouds.forEach(cloud => cloud.draw(ctx));
            mountains.forEach(mountain => mountain.draw(ctx));
            grass.draw(ctx);
            pond.draw(ctx);
            ducks.forEach(duck => duck.draw(ctx));
            birds.forEach(bird => bird.draw(ctx));
            flowers.forEach(flower => flower.draw(ctx));
            tree.draw(ctx);
            bees.forEach(bee => bee.draw(ctx));
        }
        function updateScene() {
            clouds.forEach(cloud => cloud.update(canvas.width));
            ducks.forEach(duck => duck.update());
            birds.forEach(bird => bird.update(canvas.width));
            bees.forEach(bee => bee.update(canvas.width, canvas.height));
        }
        function animate() {
            updateScene();
            drawScene();
            requestAnimationFrame(animate);
        }
        animate();
    }
};
//# sourceMappingURL=script.js.map