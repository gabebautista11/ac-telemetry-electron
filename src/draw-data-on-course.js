let canvas = document.getElementById("course-canvas");
ctx = canvas.getContext("2d");
img = new Image();
img.src = "../tracks/red_bull_ring.png";

img.onload = function () {
    var factor  = Math.min ( canvas.width / img.width, canvas.height / img.height );
    ctx.scale(factor, factor);
    ctx.drawImage(img, 0, 0);
    ctx.scale(1 / factor, 1 / factor);
};
