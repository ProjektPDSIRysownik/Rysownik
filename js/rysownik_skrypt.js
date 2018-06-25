var canvas, context, flag = false,
    canvasWidth = 0,
    canvasHeight = 0,
    clickX = new Array(),
    clickY = new Array(),
    clickColor = new Array(),
    clickTool = new Array(),
    clickSize = new Array(),
    clickDrag = new Array(),
    curTool = "pencil",
    mediumStartX = 200,
    mediumStartY = 200,
    drawingAreaX = 0,
    drawingAreaY = 0,
    paint = false;

var color = "black",
    radius = 2;


function init() {

    canvas = document.getElementById('can');
    document.getElementById("radius").innerHTML = radius;
    context = canvas.getContext("2d");
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        if (paint == true) {
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    }, false);

    canvas.addEventListener("mousedown", function (e) {
        // Mouse down location
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        paint = true;
        addClick(mouseX, mouseY, false);
        redraw();
    }, false);

    canvas.addEventListener("mouseup", function (e) {
        paint = false;
        redraw();
    }, false);

    canvas.addEventListener("mouseleave", function (e) {
        paint = false;
    }, false);
}

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickTool.push(curTool);
    clickColor.push(color);
    clickSize.push(radius);
    clickDrag.push(dragging);
}


function clearCanvas() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}

/**
* Redraws the canvas.
*/
function redraw() {

    clearCanvas()

    var i = 0;
    for (; i < clickX.length; i++) {

        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i], clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();

        if (clickTool[i] == "eraser") {
            context.strokeStyle = 'white';
        } else {
            context.strokeStyle = clickColor[i];
        }

        context.lineJoin = "round";
        context.lineWidth = clickSize[i];
        context.stroke();

    }
}


function colorPick(obj) {
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

function moreRadius() {
    radius = radius + 1;
    document.getElementById("radius").innerHTML = radius;
}

function lessRadius() {
    radius = radius - 1;
    if (radius < 1) radius = 1;
    document.getElementById("radius").innerHTML = radius;
}

function load(imagesrc) {
    var img = new Image();
    
    img.onload = function () {
        context.drawImage(img, 0, 0);
    }
    img.src = imagesrc;
}