const bars = document.querySelectorAll('.bar');
let delayTime = 5;

for (let i = 0; i < bars.length; i++) {
  const bar = bars[i];
  bar.style.animationDelay = `${delayTime}s`
  delayTime += .3; 
}