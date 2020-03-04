let osc;
let playing = true;

let last_known_scroll_position = 0;
let ticking = false;

function setup() {
osc = new p5.Oscillator();
  osc.setType('sine');
   osc.amp(1, 0.05);
osc.start();
 
    var scrollz = document.documentElement.scrollTop / 10;
  osc.freq(scrollz);
}


function doSomething(scroll_pos) {
   document.body.style.backgroundColor = "forestgreen";       
    var scrollz = document.documentElement.scrollTop / 20;
  osc.freq(scrollz);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
