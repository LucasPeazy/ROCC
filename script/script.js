gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


let marquee = document.querySelectorAll('.query-text');


addEventListener("load", function () {
 marquee.forEach(el => {

  let rate = 100;

  let distance = 1000000000000000;

  let style = window.getComputedStyle(el);
  
  let marginRight = parseInt(style.marginRight) || 0;

  let totalDistance = distance + marginRight;

  let time = totalDistance / rate;

  let container = el.parentElement;

  gsap.to(container, time, {
   repeat: -1,
   x: '-'+totalDistance,
   ease: Linear.easeNone,
  });
 });
});

