var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;
var mouseX, mouseY, mouseDown = 0

var color = "black",
    radius = 2;

function init() {
    canvas = document.getElementById('can')
    document.getElementById("radius").innerHTML = radius;
    ctx = canvas.getContext('2d')
    canvas.addEventListener('mousedown', onMouseDown, false)
    canvas.addEventListener('mousemove', onMouseMove, false)
    window.addEventListener('mouseup', onMouseUp, false)
}

function draw(ctx, x, y) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = radius;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

/*function draw(ctx, x, y) {
    ctx.fillStyle = color;
    ctx.lineWidth = radius;
    ctx.beginPath();
    //ctx.arc(currX, currY, radius, 0, 2 * Math.PI, true);
    //ctx.fill();
    ctx.moveTo(x, y); 
    ctx.lineTo(x + 0.4, y + 0.4);
    //ctx.strokeStyle = color;    
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}*/

function color(obj) {
    switch (obj.id) {
        case "green":
            color = "green";
            break;
        case "blue":
            color = "blue";
            break;
        case "red":
            color = "red";
            break;
        case "yellow":
            color = "yellow";
            break;
        case "orange":
            color = "orange";
            break;
        case "black":
            color = "black";
            break;
        case "white":
            color = "white";
            break;
    }

}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function onMouseDown() {
    mouseDown = 1
    draw(ctx, mouseX, mouseY)
}

function onMouseUp() {
    mouseDown = 0
}

function onMouseMove(e) {
    getMousePos(e)
    if (mouseDown == 1) {
        draw(ctx, mouseX, mouseY)
    }
}

function getMousePos(e) {
    if (!e)
        var e = event
    if (e.offsetX) {
        mouseX = e.offsetX
        mouseY = e.offsetY
    }
    else if (e.layerX) {
        mouseX = e.layerX
        mouseY = e.layerY
    }
}

function save(id) {

    var fileName = document.getElementById("filename").value;
    var canvasElement = document.getElementById(id);

    var MIME_TYPE = "image/png";

    var imgURL = canvasElement.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}

/*function init() {
    canvas = document.getElementById('can');
    document.getElementById("radius").innerHTML = radius;
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;
 
    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}
 
 
 
function draw() {
    ctx.beginPath();
    //ctx.arc(currX, currY, radius, 0, 2 * Math.PI, true);
    //ctx.fill();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = color;
    ctx.lineWidth = radius;
    ctx.stroke();
    ctx.closePath();
}
 
function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}
 
 
 
function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
 
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}*/

function moreRadius() {
    radius = radius + 1;
    document.getElementById("radius").innerHTML = radius;
}

function lessRadius() {
    radius = radius - 1;
    if (radius < 1) radius = 1;
    document.getElementById("radius").innerHTML = radius;
}