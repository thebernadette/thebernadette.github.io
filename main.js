// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  easing: "ease-out",
  reset: true  // set to true if you want animations to replay
});



// Animate different elements on scroll
sr.reveal(".hero .reveal", { origin: "bottom", interval: 200 });
sr.reveal("#about .reveal", { origin: "right", interval: 200 });
sr.reveal("#services .reveal", { origin: "top", interval: 200 });
sr.reveal("#services .reveal2", { origin: "bottom", interval: 200 });
sr.reveal("#contact .reveal", { origin: "left", interval: 200 });
sr.reveal("#contact .gform", {origin: "right", interval: 200})




// Select all SVG text elements
const texts = document.querySelectorAll('svg text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'none'; // reset
      entry.target.offsetHeight; // force reflow so animation can restart
      entry.target.style.animation = 'draw 5s forwards';
    }
  });
}, { threshold: 0.2 }); // trigger when 10% visible

// Observe each SVG text
texts.forEach(text => observer.observe(text));














//  (function() {
//     var canvas = document.querySelector('#main');
//     var ctx = canvas.getContext('2d');

//     var sketch = document.querySelector('#main');
//     var sketch_style = getComputedStyle(sketch);
//     canvas.width = parseInt(sketch_style.getPropertyValue('width'));
//     canvas.height = parseInt(sketch_style.getPropertyValue('height'));

//     var mouse = {x: 0, y: 0};
//     var last_mouse = {x: 0, y: 0};

//     /* Mouse Capturing Work */
//     canvas.addEventListener('mousemove', function(e) {
//         last_mouse.x = mouse.x;
//         last_mouse.y = mouse.y;

//         mouse.x = e.pageX - this.offsetLeft;
//         mouse.y = e.pageY - this.offsetTop;
//     }, false);


//     /* Drawing on Paint App */
//     ctx.lineWidth = 5;
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';
//     ctx.strokeStyle = 'blue';

//     canvas.addEventListener('mousedown', function(e) {
//         canvas.addEventListener('mousemove', onPaint, false);
//     }, false);

//     canvas.addEventListener('mouseup', function() {
//         canvas.removeEventListener('mousemove', onPaint, false);
//     }, false);

//     var onPaint = function() {
//         ctx.beginPath();
//         ctx.moveTo(last_mouse.x, last_mouse.y);
//         ctx.lineTo(mouse.x, mouse.y);
//         ctx.closePath();
//         ctx.stroke();
//     };

// }());
