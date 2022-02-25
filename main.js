const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset;
  parallax.style.backgroundPositionY = scroll * 0.7 + 'px';
});