
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

gsap.to(".pc .main", {
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

Shery.makeMagnet(".exploration_img_bt , #imo_1 , #imo_2" , {

	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1,
});

gsap.to(".pc .main" , {
    scrollTrigger: {
        trigger: ".pc .footers",
        scroller: "body" ,
        scrub: 2,
        start: "top 75%",
        end: "top 80%"
    } ,
    backgroundColor: "#ECECEC",
});

gsap.from(".pc .footers" , {
    scrollTrigger: {
        trigger: ".pc .footers",
        scroller: "body" ,
        scrub: 2,
        start: "top 75%",
        end: "top 80%"
    } ,
    opacity: 0
})

gsap.to(".page1" , {
    scrollTrigger: {
        trigger: ".pc .footers",
        scroller: "body" ,
        scrub: 2,
        start: "top 75%",
        end: "top 80%"
    } ,
    opacity: 0,
    duration: .7
})


// Mobile part

// gsap.to(".mobile .main", {
//     backgroundColor: "#000",
//     duration: .7,
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".main",
//         start: "top -35%",
//         end: "top -36%",
//         scrub: 2,
//     }
// });

// gsap.to(".mobile .hero_main_top", {
//     scrollTrigger: {
//         scroller: "body",
//         trigger: ".mobile .hero_main_top",
//         scrub: true,
//         start: "top -20%",
//         end: "top -21%"
//     },
//     opacity: 0 ,
//     // delay: 1
// });

var menu = document.querySelector(".mobile nav .menu .ri-menu-2-fill");
var sliding = document.querySelector(".mobile nav .menu .silding_menu");
var close = document.querySelector(".mobile nav .menu #close");
function menuclick(){
    menu.addEventListener("click" , function() {
        sliding.style.display = "block";
        close.style.display = "block";
        menu.style.display = "none";
    })
    close.addEventListener("click" , function() {
        sliding.style.display = "none";
        menu.style.display = "block";
        close.style.display = "none";
    })
    sliding.style.transitionDuration = "1s";
    sliding.style.transitionProperty = "all ";

};

gsap.to(".hero_m .hero_main_top" , {
    scrollTrigger: {
        trigger: ".hero_m .hero_main_top" ,
        scroller: "body" ,
        scrub: 2,
        start: "top 10%"
    } ,
    opacity: 0
})







