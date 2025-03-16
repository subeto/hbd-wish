$(document).ready(function() {
  $(".candles").click(function() {
      
    $(".flame").animate({"opacity": 0}, "fast");
    $(".flame2").animate({"opacity": 0}, "fast");
    $(".flame3").animate({"opacity": 0}, "fast");
    $(".text").animate({"top": -90, "opacity": 1}, "fast");
  });
});

document.getElementsByClassName("confetti-button1")[0].addEventListener("click", () => {
  setTimeout(function() { confettiAnimation(); }, 2000);
});

document.getElementsByClassName("confetti-button2")[0].addEventListener("click", () => {
  setTimeout(function() { confettiAnimation(); }, 2000);
}); 

document.getElementsByClassName("confetti-button3")[0].addEventListener("click", () => {
  setTimeout(function() { confettiAnimation(); }, 2000);
});


function confettiAnimation() {
  var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
};