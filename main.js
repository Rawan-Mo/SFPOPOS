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
