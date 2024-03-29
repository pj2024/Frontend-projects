const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

var fixedE = document.getElementById("fixed");
var patties = document.getElementById("patties");

function page3Anim() {
    patties.addEventListener("mouseenter", ()=>{
      fixedE.style.display = "block";
  });
  patties.addEventListener("mouseleave", ()=>{
      fixedE.style.display = "none";
  });

  let elems = document.querySelectorAll(".sub-patties");

  elems.forEach((e)=>{
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      fixedE.style.backgroundImage = `url(${image})`;
    })  
  })

}

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}

function loder() {
  var loder = document.getElementById("loder");
  setTimeout(() => {
    loder.style.top = "-100%";
  }, 4000);
}

function menu() {
  var menuBlackscreen = document.querySelector(".menu-black-screen");
  var menuBtn = document.getElementById("menu-btn");

  menuBtn.addEventListener("click", ()=>{
    menuBlackscreen.classList.toggle("active");
  })

}


swiper();
page3Anim();
loder();
menu();