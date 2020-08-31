// window.alert("hellow")

function init() {



    const hero = document.querySelector(".hero");
    const landing = document.querySelector('.landing-bg');
    const logo = document.querySelector('#logo');
    const hamburger = document.querySelector('.hamburger');
    const headline = document.querySelector('.headline');


    const tl = new TimelineMax();

    tl.fromTo(hero, 1, {
            height: "0%"
        }, {
            height: "80%",
            ease: Power2.easeInOut
        })
        .fromTo(hero, 1, {
            width: "100%"
        }, {
            width: "90%"
        })
        .fromTo(landing, 1, {
            x: "-100%"
        }, {
            x: "0%",
            ease: Power2.easeInOut
        }, "-=1.85")
        .fromTo(logo, 1, {
            opacity: 0,
            x: -30
        }, {
            opacity: 1,
            x: 0
        }, "-=0.5")
        .fromTo(hamburger, 1, {
            opacity: 0,
            x: -30
        }, {
            opacity: 1,
            x: 0
        }, "-=0.5")

    /* Determines the element (hero) that needs to be animated, input a duration (1.25s)
    indicate starting position (height: 0%)
    indicated end position (height: 80%)
    */

}

function navAnimation() {

    const hamburger = document.querySelector(".menu");
    const hamburgerLines = document.querySelectorAll(".menu line");
    const navOpen = document.querySelector(".nav-open");
    const contact = document.querySelector(".contact");
    const social = document.querySelector(".social");
    const logo = document.querySelector(".logo");

    const tl = new TimelineMax({
        paused: true,
        reversed: true
    });

    tl.to(navOpen, 0.5, {
            y: 0
        })
        .fromTo(contact, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, "-=0.1")
        .fromTo(social, 0.5, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        }, "-=0.5")
        .fromTo(logo, 0.2, {
            color: "white"
        }, {
            color: "black"
        }, "-=1")
        .fromTo(
            hamburgerLines,
            0.2, {
                stroke: "white"
            }, {
                stroke: "black"
            },
            "-=1"
        );

    hamburger.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });

}

const app = () => {
    navAnimation();
    init();
}

app();