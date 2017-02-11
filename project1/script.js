var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    square, circle;

square = new Path2D();
square.moveTo(50, 50);
square.lineTo(250, 50);
square.lineTo(250, 250);
square.lineTo(50, 250);
square.lineTo(50, 50);

context.lineWidth = 3;
context.stroke(square);


circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI);
context.fill(circle);

context.fillStyle = "rgba(255, 0, 0, 0.5)";
context.fillRect(50, 50, 200, 200);




var date = new Date(),
    hours, minutes, seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
console.log(hours, minutes, seconds);