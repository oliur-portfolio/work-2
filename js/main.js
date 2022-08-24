// GSAP Animation

// Main Banner Animation

var banner = gsap.timeline();

banner.from(".header-logo", {
    duration: 3.9,
    scale: 0.5,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1, 0.3),
    delay: 0.5,
}),
    banner.from(
        ".header-icon li a",
        {
            duration: 1,
            autoAlpha: 0,
            y: -10,
            stagger: 0.3,
        },
        "-=2.3"
    ),
    banner.from(
        ".banner-wrapper",
        {
            duration: 0.8,
            y: 50,
            autoAlpha: 0,
        },
        "-=3.6"
    ),
    banner.from(
        ".banner-text-contain",
        {
            duration: 0.9,
            x: 50,
            autoAlpha: 0,
        },
        "-=3.2"
    ),
    banner.from(
        ".banner-hero-text h1",
        {
            duration: 0.7,
            y: -50,
            autoAlpha: 0,
        },
        "-=3"
    ),
    banner.from(
        ".banner-description h4",
        {
            duration: 0.7,
            y: 30,
            autoAlpha: 0,
        },
        "-=2.6"
    ),
    banner.from(
        ".banner-btn a",
        {
            duration: 0.7,
            y: 30,
            autoAlpha: 0,
        },
        "-=2.4"
    );

// Join Section Animation

gsap.registerPlugin(ScrollTrigger);

var join = gsap.timeline({
    scrollTrigger: {
        trigger: ".join-form",
        start: "200 100%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

join.from(".join-header-text h3", {
    duration: 0.7,
    autoAlpha: 0,
    y: 30,
}),
    join.from(
        ".join-header-text p",
        {
            y: 30,
            duration: 0.8,
            autoAlpha: 0,
        },
        "-=0.4"
    ),
    join.from(
        ".join-form-structure button",
        {
            duration: 3.9,
            scale: 0.5,
            autoAlpha: 0,
            ease: Elastic.easeOut.config(1, 0.3),
        },
        "-=0.4"
    );

// Pink Section Animation

gsap.registerPlugin(ScrollTrigger);

var pink = gsap.timeline({
    scrollTrigger: {
        trigger: "#engaged",
        start: "100 90%",
        end: "top top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

pink.from(".engaged-box", {
    duration: 1,
    x: -40,
    autoAlpha: 0,
}),
    pink.from(
        ".pink-area",
        {
            duration: 0.7,
            autoAlpha: 0,
            backgroundColor: "#fff",
        },
        "-=2.2"
    ),
    pink.from(
        ".engaged-header-text h2",
        {
            duration: 0.7,
            y: -20,
            autoAlpha: 0,
        },
        "-=0.6"
    ),
    pink.from(
        ".engaged-description h4",
        {
            duration: 0.7,
            y: 30,
            autoAlpha: 0,
        },
        "-=0.5"
    ),
    pink.from(
        ".engaged-paragraph-text p",
        {
            duration: 0.7,
            y: 30,
            autoAlpha: 0,
        },
        "-=0.4"
    ),
    pink.from(
        ".engaged-btn a",
        {
            duration: 0.7,
            y: 30,
            autoAlpha: 0,
        },
        "-=0.3"
    );

// Paralax Texture Animation

gsap.registerPlugin(ScrollTrigger);

var paralax = gsap.timeline({
    scrollTrigger: {
        trigger: ".engaged-area",
        start: "200 90%",
        end: "1200 30%",
        toggleActions: "play none none reverse",
        markers: false,
        scrub: 3,
    },
});

paralax.to(".texture-parallax", {
    y: -350,
});

// About White Animation

gsap.registerPlugin(ScrollTrigger);

var about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-us-white",
        start: "100 70%",
        end: "center top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

about.from(
    ".about-box-contain",
    {
        duration: 0.7,
        autoAlpha: 0,
        y: 40,
    },
    "-=3.8"
),
    about.from(
        ".about-header-text h2",
        {
            duration: 0.7,
            y: -30,
            autoAlpha: 0,
        },
        "-=3"
    ),
    about.from(
        ".about-header-intro h5",
        {
            duration: 0.7,
            y: 30,
            autoAlpha: 0,
        },
        "-=0.6"
    ),
    about.from(
        ".about-header-description p",
        {
            duration: 2.8,
            y: 50,
            stagger: 0.5,
            autoAlpha: 0,
        },
        "-=0.4"
    ),
    about.from(
        ".about-bottom-header h3",
        {
            duration: 4.9,
            scale: 0.3,
            autoAlpha: 0,
            ease: Elastic.easeOut.config(1, 0.3),
        },
        "-=2.4"
    ),
    about.from(
        ".about-btn a",
        {
            duration: 0.7,
            y: 20,
            autoAlpha: 0,
        },
        "-=4.2"
    );

// Bottom Paralax Texture Animation

gsap.registerPlugin(ScrollTrigger);

var bottomParalax = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-bottom-header",
        start: "0 90%",
        end: "100 30%",
        toggleActions: "play none none reverse",
        markers: false,
        scrub: 6,
    },
});

bottomParalax.from(".bottom-texture", {
    y: 150,
});
