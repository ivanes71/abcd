var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d");

var R = 300 / 2, d, angle, pX, pY, qX, qY;
var d, angle, pX, pY, qX, qY;

var date = new Date(),
	hours, minutes, seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
console.log(hours, minutes, seconds);
secondsAngle = (seconds / 60) * (2 * Math.PI);
minutesAngle = (minutes / 60) * (2 * Math.PI);
hoursAngle = ((hours % 12) / 12)* (2 * Math.PI);
secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;

function drawWatch() {
	context.clearRect(0, 0, 500, 500);
	for (d = 0; d < 60; ++d) {
	angle = (d / 60) * (2 * Math.PI);
	pX = Math.cos(angle) * R;
	pY = -Math.sin(angle) * R;
	qX = 0.9 * pX;
	qY = 0.9 * pY;
	pX += R; pY += R;
	qX += R; qY += R;
	circle = new Path2D();
	circle.arc(200, 200, 175, 0, 2 * Math.PI);
	context.stroke(circle);
	}
	setTimeout(drawWatch, 1000);
}

drawWatch();
