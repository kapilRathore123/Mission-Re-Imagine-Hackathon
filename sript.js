'use strict';
/* PRELOAD loading will be end after document is loaded */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
 
/* add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/* HEADER & BACK TOP BTN */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/* HERO SLIDER */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }
  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/* auto slide */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);
window.addEventListener("load", autoSlide);

         /*  ONLINE BOKING TABLE */

function data()
{
var a = document.getElementById("n1").value;
var b = document.getElementById("n2").value;
var c = document.getElementById("n3").value;
var d = document.getElementById("n4").value;
var e = document.getElementById("n5").value;

if(a==""|| b==""|| c==""|| d==""|| e=="")
  {
    alert("All Fields are mendatory !");
    return false;
  }
  else if(b.length<10||b.length>10)
    {
      alert("Plase Enter Correct Numbers !");
      return false;
    }
  else
  { true; }
}

function datain(){
  var f = document.getElementById("n6").value;
  if(f=="")
    {
      alert("Please write your email first !");
      return false;
    }
    else
  { true; }
}

    /*-- Gsap Add For Animation --- */

gsap.from("#anim",{
  y:-200,
  opacity:0.2,
  duration:2,
  stagger:.5,
  ease: "bounce.out",
  
})
gsap.from(".header img",{
    y:130,
    duration:2,
    Delay:1,
    opacity:0
})

gsap.from(".section menu .grid-list",{
  y:-200,
  opacity:0.2,
  duration:2,
  ease: "bounce.out",
  scrollTrigger:{
    trigger:".section menu .grid-list",
    scroller:"body"
  }
})

gsap.from(".section .section-subtitle",{
  x:-1000,
  opacity:0.2,
  duration:2,
  ease: "bounce.out",
  scrollTrigger:{
    trigger:".section .section-subtitle",
    scroller:"body"
  }
})

var tl = gsap.timeline({scrollTrigger:{
  trigger:"#video-id",
  start:"40% 45%",
  end:"80% 50%",
  scrub:-1,
  duration:1,
  pin:true,
}});

tl
.to("#video",{
  width:"80vw",
  height:"80vh",
},'baba')

gsap.from(".service-card",{
  y:50,
  opacity:0,
   stagger:.5,
  duration:2,
  scrollTrigger:{
    trigger:".section .section-subtitle",
    scroller:"body",
  }
})
  gsap.from(".container .feature-card",{
    y:40,
    opacity:0,
     stagger:.5,
    duration:2,
    scrollTrigger:{
      trigger:".container .feature-card",
      scroller:"body",
    }
})

gsap.from(".container #para",{
  y:50,
  opacity:0,
  stagger:.5,
  duration:1,
  scrollTrigger:{
    trigger:".container #para",
    scroller:"body",
    scrub:true,
  }
})

gsap.from("#section-event .card-title",{
  y:130,
  duration:2,
  Delay:1,
  opacity:0,
  stagger:.3,
   scrollTrigger:"#section-event .card-title",
   scrub:true,
})
 
    /*-- SheryJs Add For advanced text Animation --- */

Shery.textAnimate(".container .headline-1", {
  style:1,
  y: 10,
});

Shery.imageEffect(".special-dish-banner img", {
  style: 4,
  
  config: 
  {"uColor":{"value":false},
  "uSpeed":{"value":0.57,"range":[0.1,1],"rangep":[1,10]},
  "uAmplitude":{"value":1.37,"range":[0,5]},
  "uFrequency":{"value":4.66,"range":[0,10]},
  "geoVertex":{"range":[1,64],"value":20.72},
  "zindex":{"value":-9996999,"range":[-9999999,9999999]},
  "aspect":{"value":0.7616657954347448},
  "ignoreShapeAspect":{"value":true},
  "shapePosition":{"value":{"x":0,"y":0}},
  "shapeScale":{"value":{"x":1,"y":1}},
  "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
  "shapeRadius":{"value":0,"range":[0,2]},
  "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
  "gooey":{"value":false},"infiniteGooey":{"value":false},
  "growSize":{"value":4,"range":[1,15]},
  "durationOut":{"value":1,"range":[0.1,5]},
  "durationIn":{"value":1.5,"range":[0.1,5]},
  "displaceAmount":{"value":0.5},"masker":{"value":false},
  "maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},
  "noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},
  "metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},
  "antialias_threshold":{"value":0.002,"range":[0,0.1]},
  "noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});



