// 1 POPOS 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


var slideIndex2 = 1;
showDivs(slideIndex2);

function plusDivs(n) {
  showDivs(slideIndex2 += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

// Scratchy catchy ending
var bridge = document.getElementById("bridge"),
bridgeCanvas = bridge.getContext('2d'),
brushRadius = (bridge.width / 100) * 5,
img = new Image();

if (brushRadius < 50) { brushRadius = 50 }

img.onload = function(){  
bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
}
img.loc = './images/';
img.filename = 'redwoodpark.JPG';
if (window.devicePixelRatio >= 2) {
var nameParts = img.filename.split('.');
img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
} else {
img.src = img.loc + img.filename;
}

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef) {
var bridgeRect = bridge.getBoundingClientRect();
    return {
  x: Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*bridge.width),
  y: Math.floor((yRef-bridgeRect.top)/(bridgeRect.bottom-bridgeRect.top)*bridge.height)
    };
}
      
function drawDot(mouseX,mouseY){
bridgeCanvas.beginPath();
    bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    bridgeCanvas.fillStyle = '#000';
    bridgeCanvas.globalCompositeOperation = "destination-out";
    bridgeCanvas.fill();
}

bridge.addEventListener("mousemove", function(e) {
var brushPos = getBrushPos(e.clientX, e.clientY);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
drawDot(brushPos.x, brushPos.y);
  }
}, false);

bridge.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
    }
}, false);