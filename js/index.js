
window.addEventListener('load', () => {
    AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
    })
})

// window.onscroll = function () {
//     let value = scrollY;
//     if(scrollY > 150){
//         backtotop.style.display = "inline-block";
//     }
//     else{
//         backtotop.style.display = "none";
//     }
// }

// up.addEventListener("click",function(){
//     window.scroll({
//         top:0,
//         left:0,
//         behavior: 'smooth',
//     })
// })

$("document").ready(function () {

    AOS.init();

    $('.on_loading img').fadeOut(5000, () => {
        $('.on_loading img').parent().fadeOut(1000 , () => {
            $('.on_loading').css("display", "none")
        })
    });

    window.onscroll = function () {
        if(scrollY > 150)
        {
            $(".return").css("display" , "block")
        }
        else{
            $(".return").css("display" , "none")
        }
    }

    $(".return").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });


    jQuery(function ($) {
		'use strict';
		var counterUp = window.counterUp['default']; // import counterUp from "counterup2"
		var $counters = $('.counter');
		/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint({
				element: $(this),
				handler: function () {
					counterUp(counter, {
						duration: 500,
						delay: 10,
					});
					this.destroy();
				},
				offset: 'bottom-in-view',
			});
		});
	});

    var typed= new TypeIt("#element", {
        strings: ["<p>Front End Developer</p>", "<p>Back End Developer</p>"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        waitUntilVisible: true,
        loop: true,
    }).go();

    $("body").niceScroll({
        cursorcolor: "#9e6c2c",
        cursorwidth: "8px",
        cursorborder: "1px solid #9e6c2c"
    });
    
    $(window).on("scroll", function () {

        // scroll to home

        if ($(window).scrollTop() < 565.5) {

            $(".home_link").addClass("active");
            $(".about_link").removeClass("active");
            $(".skills_link").removeClass("active");
            $(".services_link").removeClass("active");
            $(".portfolio_link").removeClass("active");
            $(".testimonials_link").removeClass("active");
            $(".contact_link").removeClass("active");
        }

        // scroll to about

        if ($(window).scrollTop() >= 565.5 && $(window).scrollTop() < 1115) {

            $(".about_link").addClass("active");
            $(".home_link").removeClass("active");
            $(".skills_link").removeClass("active");
            $(".services_link").removeClass("active");
            $(".portfolio_link").removeClass("active");
            $(".testimonials_link").removeClass("active");
            $(".contact_link").removeClass("active");

        }

        // scroll to Skills

        if ($(window).scrollTop() >= 1115 && $(window).scrollTop() < 1630) {

            $(".skills_link").addClass("active");
            $(".home_link").removeClass("active");
            $(".about_link").removeClass("active");
            $(".services_link").removeClass("active");
            $(".portfolio_link").removeClass("active");
            $(".testimonials_link").removeClass("active");
            $(".contact_link").removeClass("active");
        }

        if ($(window).scrollTop() >= 1630 && $(window).scrollTop() < 2480) {

            $(".services_link").addClass("active");
            $(".home_link").removeClass("active");
            $(".about_link").removeClass("active");
            $(".skills_link").removeClass("active");
            $(".portfolio_link").removeClass("active");
            $(".testimonials_link").removeClass("active");
            $(".contact_link").removeClass("active");
        }

        // scroll to protofolio

        if ($(window).scrollTop() >= 2480 && $(window).scrollTop() < 3150) {

            $(".portfolio_link").addClass("active");
            $(".home_link").removeClass("active");
            $(".about_link").removeClass("active");
            $(".skills_link").removeClass("active");
            $(".services_link").removeClass("active");
            $(".testimonials_link").removeClass("active");
            $(".contact_link").removeClass("active");
        }
        
        // scroll to testimonial
        if ($(window).scrollTop() >= 3150 && $(window).scrollTop() < 3465) {

            $(".testimonials_link").addClass("active");
            $(".home_link").removeClass("active");
            $(".about_link").removeClass("active");
            $(".skills_link").removeClass("active");
            $(".services_link").removeClass("active");
            $(".portfolio_link").removeClass("active");
            $(".contact_link").removeClass("active");
        }
        // scroll to contact

        if ($(window).scrollTop() >= 3465) {

            $(".contact_link").addClass("active");
            $(".home_link").removeClass("active");
            $(".about_link").removeClass("active");
            $(".skills_link").removeClass("active");
            $(".services_link").removeClass("active");
            $(".portfolio_link").removeClass("active");
            $(".testimonials_link").removeClass("active");
        }
    });


    $(".home_link").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth'});
        $(".home_link").addClass("active");
        $(".about_link").removeClass("active");
        $(".skills_link").removeClass("active");
        $(".services_link").removeClass("active");
        $(".portfolio_link").removeClass("active");
        $(".testimonials_link").removeClass("active");
        $(".contact_link").removeClass("active");
    });
    
    $(".about_link").click(function() {
        window.scrollTo({ top: 565.5, behavior: 'smooth'});
        $(".about_link").addClass("active");
        $(".home_link").removeClass("active");
        $(".skills_link").removeClass("active");
        $(".services_link").removeClass("active");
        $(".portfolio_link").removeClass("active");
        $(".testimonials_link").removeClass("active");
        $(".contact_link").removeClass("active");
    });

    $(".skills_link").click(function() {
        window.scrollTo({ top: 1131, behavior: 'smooth'});
        $(".skills_link").addClass("active");
        $(".home_link").removeClass("active");
        $(".about_link").removeClass("active");
        $(".services_link").removeClass("active");
        $(".portfolio_link").removeClass("active");
        $(".testimonials_link").removeClass("active");
        $(".contact_link").removeClass("active");
    });

    $(".services_link").click(function() {
        window.scrollTo({ top: 1697, behavior: 'smooth'});
        $(".services_link").addClass("active");
        $(".home_link").removeClass("active");
        $(".about_link").removeClass("active");
        $(".skills_link").removeClass("active");
        $(".portfolio_link").removeClass("active");
        $(".testimonials_link").removeClass("active");
        $(".contact_link").removeClass("active");
    });

    $(".portfolio_link").click(function() {
        window.scrollTo({ top: 2582, behavior: 'smooth'});
        $(".portfolio_link").addClass("active");
        $(".home_link").removeClass("active");
        $(".about_link").removeClass("active");
        $(".skills_link").removeClass("active");
        $(".services_link").removeClass("active");
        $(".testimonials_link").removeClass("active");
        $(".contact_link").removeClass("active");
    });

    $(".testimonials_link").click(function() {
        window.scrollTo({ top: 3230, behavior: 'smooth'});
        $(".testimonials_link").addClass("active");
        $(".home_link").removeClass("active");
        $(".about_link").removeClass("active");
        $(".skills_link").removeClass("active");
        $(".services_link").removeClass("active");
        $(".portfolio_link").removeClass("active");
        $(".contact_link").removeClass("active");
    });

    $(".contact_link").click(function() {
        window.scrollTo({ top: 3584, behavior: 'smooth'});
        $(".contact_link").addClass("active");
        $(".home_link").removeClass("active");
        $(".about_link").removeClass("active");
        $(".skills_link").removeClass("active");
        $(".services_link").removeClass("active");
        $(".portfolio_link").removeClass("active");
        $(".testimonials_link").removeClass("active");
    });

    $(".hire_me").click(function() {
        window.scrollTo({ top: 3584, behavior: 'smooth'});
    });



    $(".all_work_link").click(function() {
        $(".all_work_link").addClass("active_link");
        $(".personal_link").removeClass("active_link");
        $(".professional_link").removeClass("active_link");

        // $(".bakery").show(1000);
        // $(".vesper").show(1000);
        // $(".nexus").show(1000);
        // $(".tele").show(1000);
        // $(".blogr").show(1000);
        // $(".elevation").show(1000);

        $(".per").show(1000);
        $(".pro").show(1000);
    });


    $(".personal_link").click(function() {
        $(".personal_link").addClass("active_link");
        $(".all_work_link").removeClass("active_link");
        $(".professional_link").removeClass("active_link");

        // $(".bakery").hide(1000);
        // $(".vesper").hide(1000);
        // $(".nexus").hide(1000);
        // $(".tele").show(1000);
        // $(".blogr").show(1000);
        // $(".elevation").show(1000);

        $(".per").show(1000);
        $(".pro").hide(1000);
    });


    $(".professional_link").click(function() {
        $(".professional_link").addClass("active_link");
        $(".personal_link").removeClass("active_link");
        $(".all_work_link").removeClass("active_link");

        // $(".bakery").show(1000);
        // $(".vesper").show(1000);
        // $(".nexus").show(1000);
        // $(".tele").hide(1000);
        // $(".blogr").hide(1000);
        // $(".elevation").hide(1000);

        $(".pro").show(1000);
        $(".per").hide(1000);
    });


    // $(document).ready(function() {
    //     $("#lightSlider").lightSlider({
    //         auto:true,
    //         loop:true,
    //         pauseOnHover: true,
    //     }); 
    // });


    window.addEventListener('load', () => {
        AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
        })
    });

})