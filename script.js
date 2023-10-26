Shery.mouseFollower({
	//Parameters are optional.
	skew: true,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: .7,
});


gsap.to("nav", {
	backgroundColor: "#000",
	height: "12vh",
	duration: 1,
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

// gsap.to(".mobile .main" , {
// 	scrollTrigger : {
// 		scroller : "body" , 
// 		trigger : ".mobile .main" , 
// 		markers : true ,
// 		start : "top 60%" ,
// 		end : "top 61%" ,
// 		scrub : 5
// 	} , 
// 	backgroundColor : "#000" , 

// })



