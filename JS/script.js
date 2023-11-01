
var crsr = document.querySelector(".pc .crsr");
document.addEventListener("mousemove", function (dets) {
	crsr.style.left = dets.x + 25 + "px";
	crsr.style.top = dets.y + 25 + "px";
});


gsap.to(".pc nav", {
	backgroundColor: "#a6a2a2",
	height: "12vh",
	duration: 1,
	color: "#000",
	scrollTrigger: {
		scroller: "body",
		trigger: "nav",
		// markers : true , 
		start: "top -15%",
		end: "top -16%",
		scrub: 1,
		opacity: 0
	}
});

gsap.to(".main", {
	backgroundColor: "#000",
	duration: .7,
	scrollTrigger: {
		scroller: "body",
		trigger: ".main",
		start: "top -40%",
		end: "top -80%",
		scrub: 2
	}
});

Shery.makeMagnet(".exploration_img_bt , #imo_1 , #imo_2" /* Element to target.*/, {
	//Parameters are optional.
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1,
});

// Mobile part

gsap.to(".mobile .main", {
    backgroundColor: "#000",
    duration: .7,
    scrollTrigger: {
        scroller: "body",
        trigger: ".main",
        start: "top -20%",
        end: "top -40%",
        scrub: 2
    }
});

gsap.to(".mobile .hero_main_top", {
    scrollTrigger: {
        scroller: "body",
        trigger: ".mobile .hero_main_top",
        scrub: true,
        start: "top 5%",
        end: "top -10%"
    },
    opacity: 0
});

gsap.to(".mobile .hero_m .content", {
    scrollTrigger: {
        scroller: "body",
        trigger: ".mobile .hero_m .content",
        scrub: 1,
        start: "top 40%",
        end: "top 45%"
    },
    opacity: 1
})

gsap.from(".mobile .content .imgs #img-1", {
    scrollTrigger: {
        scroller: "body",
        trigger: ".mobile .content .imgs #img-1",
        start: "top 60%",
        end: "top 65%",
        scrub: 2
    },
    opacity: 0,
    x: -200
});

gsap.from(".mobile .content .imgs #img-2", {
    scrollTrigger: {
        scroller: "body",
        trigger: ".mobile .content .imgs #img-1",
        start: "top 60%",
        end: "top 65%",
        scrub: 2
    },
    opacity: 0,
    x: 200
});




