// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.09,
  duration: 3,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate("#envi_head", {
  style: 2,
  y: 10,
  delay: 0.2,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageMasker("#wcon3", {
  mouseFollower: true,
  text: "Save Water",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});
Shery.imageMasker("#wcenter", {
  //Parameters are optional.
  mouseFollower: true,
  text: "Save Water",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});
Shery.imageMasker("#our_wcn", {
  //Parameters are optional.
  mouseFollower: true,
  text: "Save Water",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});

//   Environment

Shery.imageMasker("#center", {
  //Parameters are optional.
  mouseFollower: true,
  text: "Save Environment",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});
Shery.imageMasker("#en_left_img", {
  mouseFollower: true,
  text: "Save Environment",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});
Shery.imageMasker("#our_env", {
  mouseFollower: true,
  text: "Save Environment",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});

Shery.makeMagnet("img", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".gb_warming img", {
  mouseFollower: true,
  text: "Save Earth",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});

var menu = document.querySelector(".mobile nav .menu .ri-menu-2-fill");
var sliding = document.querySelector(".mobile nav .menu .silding_menu");
var close = document.querySelector(".mobile nav .menu #close");
function menuclick() {
  menu.addEventListener("click", function () {
    sliding.style.display = "block";
    close.style.display = "block";
    menu.style.display = "none";
  });
  close.addEventListener("click", function () {
    sliding.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none";
  });
  sliding.style.transitionDuration = "1s";
  sliding.style.transitionProperty = "all ";
}
