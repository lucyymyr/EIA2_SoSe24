"use strict";
// Funktion zum Zeichnen einer zufälligen geometrischen Form
function drawRandomShape(ctx, canvas) {
    const choice = Math.floor(Math.random() * 3); // Zufällige Auswahl zwischen 0, 1 und 2
    ctx.fillStyle = getRandomColor();
    switch (choice) {
        case 0: // Rechteck
            const x1 = Math.random() * canvas.width;
            const y1 = Math.random() * canvas.height;
            const width = Math.random() * 200; // Zufällige Breite
            const height = Math.random() * 200; // Zufällige Höhe
            ctx.fillRect(x1, y1, width, height);
            break;
        case 1: // Kreis
            const x2 = Math.random() * canvas.width;
            const y2 = Math.random() * canvas.height;
            const radius = Math.random() * 100; // Zufälliger Radius
            ctx.beginPath();
            ctx.arc(x2, y2, radius, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 2: // Dreieck
            const x3 = Math.random() * canvas.width;
            const y3 = Math.random() * canvas.height;
            const size = Math.random() * 200; // Zufällige Seitenlänge
            ctx.beginPath();
            ctx.moveTo(x3, y3);
            ctx.lineTo(x3 + size, y3);
            ctx.lineTo(x3 + size / 2, y3 + size);
            ctx.closePath();
            ctx.fill();
            break;
        default:
            break;
    }
}
// Funktion zum Erstellen eines zufälligen Farbwerts
function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}
// Funktion, die das Canvas-Element erstellt und die zufälligen Formen zeichnet
function generateArt() {
    // Canvas-Element aus dem DOM abrufen
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // Canvas-Größe festlegen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Anzahl der zu zeichnenden Formen
    const numShapes = Math.floor(Math.random() * 50) + 20; // Zufällige Anzahl zwischen 20 und 69
    // Zeichne eine zufällige Anzahl von Formen
    for (let i = 0; i < numShapes; i++) {
        drawRandomShape(ctx, canvas);
    }
}
// Generiere die Kunst
generateArt();
//# sourceMappingURL=script.js.map