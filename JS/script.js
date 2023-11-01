// Loco Start

function loco() {
	gsap.registerPlugin(ScrollTrigger);

	// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector(".mobile .main"),
		smooth: true
	});
	// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
	locoScroll.on("scroll", ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the ".mobile .mobile .main" element since Locomotive Scroll is hijacking things
	ScrollTrigger.scrollerProxy(".mobile .main", {
		scrollTop(value) {
			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: document.querySelector(".mobile .main").style.transform ? "transform" : "fixed"
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();

}

loco()

// Loco End
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

gsap.to(".mobile .hero_main_top" , {
	scrollTrigger: {
		scroller: "body" ,
		trigger: ".mobile .hero_main_top" ,
		scrub: true ,
		start: "top 5%" ,
		end: "top -10%"
	} , 
	opacity: 0
});

gsap.to(".mobile .hero_m .content" , {
	scrollTrigger: {
		scroller: "body",
		trigger: ".mobile .hero_m .content" ,
		scrub: 1,
		start: "top 40%" ,
		end: "top 45%"
	} ,
	opacity: 1
})

gsap.from(".mobile .content .imgs #img-1" , {
	scrollTrigger: {
		scroller: "body" , 
		trigger: ".mobile .content .imgs #img-1" ,
		start: "top 60%",
		end: "top 65%", 
		scrub: 2
	}, 
	opacity: 0,
	x: -200
});

gsap.from(".mobile .content .imgs #img-2" , {
	scrollTrigger: {
		scroller: "body" , 
		trigger: ".mobile .content .imgs #img-1" ,
		start: "top 60%",
		end: "top 65%", 
		scrub: 2
	}, 
	opacity: 0,
	x: 200
});


Shery.makeMagnet(".exploration_img_bt , #imo_1 , #imo_2" /* Element to target.*/, {
	//Parameters are optional.
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1,
});





