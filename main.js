// POPOS 1
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

// POPOS 2
var slideIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides-2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1} 
  x[slideIndex2-1].style.display = "block"; 
  setTimeout(carousel2, 3000); // Change image every 2 seconds
}

// POPOS 3
var slideIndex3 = 0;
carousel3();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("mySlides-3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {slideIndex3 = 1} 
  x[slideIndex3-1].style.display = "block"; 
  setTimeout(carousel3, 3000); // Change image every 2 seconds
}

// POPOS 4
var slideIndex4 = 0;
carousel4();

function carousel4() {
  var i;
  var x = document.getElementsByClassName("mySlides-4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex4++;
  if (slideIndex4 > x.length) {slideIndex4 = 1} 
  x[slideIndex4-1].style.display = "block"; 
  setTimeout(carousel4, 3000); // Change image every 2 seconds
}

// POPOS 5
var slideIndex5 = 0;
carousel5();

function carousel5() {
  var i;
  var x = document.getElementsByClassName("mySlides-5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex5++;
  if (slideIndex5 > x.length) {slideIndex5 = 1} 
  x[slideIndex5-1].style.display = "block"; 
  setTimeout(carousel5, 3000); // Change image every 2 seconds
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