var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    canvasWidth = 0,
    canvasHeight = 0,
    clickX = new Array(),
    clickY = new Array(),
    clickColor = new Array(),
    clickTool = new Array(),
    clickSize = new Array(),
    clickDrag = new Array(),
    curTool = "pencil",
    mediumStartX = 0,
    mediumStartY = 0,
    drawingAreaX = 0,
    drawingAreaY = 0,
    dot_flag = false,
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

    clearCanvas();

    var locX;
    var locY;

    if (curTool == "pencil") {

        locX = 18;
        locY = 19;

        context.beginPath();
        context.moveTo(locX + 10, locY + 24);
        context.lineTo(locX + 10, locY + 24);
        context.lineTo(locX + 22, locY + 16);
        context.lineTo(locX + 22, locY + 31);
        context.closePath();
        context.fillStyle = color;
        context.fill();

        //context.drawImage(null, locX, locY, mediumImageWidth, mediumImageHeight);
    }
    /*else if (curTool == "eraser") {
        context.drawImage(eraserBackgroundImage, 0, 0, canvas.width, canvas.height);
        context.drawImage(eraserImage, 18, 19, mediumImageWidth, mediumImageHeight);
    } else {
        alert("Error: Current Tool is undefined");
    }*/

    locX = 475; //- 5 * radius;
    /*if (curSize == "small") {
        locX = 467;
    } else if (curSize == "normal") {
        locX = 450;
    } else if (curSize == "large") {
        locX = 428;
    } else if (curSize == "huge") {
        locX = 399;
    }*/

    locY = 189;
    context.beginPath();
    context.rect(locX, locY, 2, 12);
    context.closePath();
    context.fillStyle = '#333333';
    context.fill();

    // Keep the drawing in the drawing area
    context.save();
    context.beginPath();
    context.rect(drawingAreaX, drawingAreaY, canvasWidth, canvasHeight);
    context.clip();

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
            //context.globalCompositeOperation = "destination-out"; // To erase instead of draw over with white
            context.strokeStyle = 'white';
        } else {
            //context.globalCompositeOperation = "source-over";	// To erase instead of draw over with white
            context.strokeStyle = clickColor[i];
        }
        context.lineJoin = "round";
        context.lineWidth = radius;
        context.stroke();

    }
    //context.globalCompositeOperation = "source-over";// To erase instead of draw over with white
    context.restore();

    // Overlay a crayon texture (if the current tool is crayon)
    /*if (curTool == "crayon") {
        context.globalAlpha = 0.4; // No IE support
        context.drawImage(crayonTextureImage, 0, 0, canvasWidth, canvasHeight);
    }
    context.globalAlpha = 1; // No IE support*/

    // Draw the outline image
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

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        document.getElementById("canvasimg").style.display = "none";
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