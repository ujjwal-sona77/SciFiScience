function loco(){
	gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

Shery.mouseFollower({
	//Parameters are optional.
	skew: true,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: .7,
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




