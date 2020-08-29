// window.alert("hellow")


const hero = document.querySelector(".hero");
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(hero, 1, {
    height: "0%"
}, {
    height: "80%", ease: Power2.easeInOut
})
.fromTo(hero, 1, {width: "100%"}, {width: "90%"})
.fromTo(slider, 1, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.85")
.fromTo(logo, 1, {opacity: 0, x:-30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(hamburger, 1, {opacity: 0, x:-30}, {opacity: 1, x:0}, "-=0.5")

/* Determines the element (hero) that needs to be animated, input a duration (1.25s)
indicate starting position (height: 0%)
indicated end position (height: 80%)
*/