const informationsizess = document.querySelector(".information .about");
const menuBtn = document.querySelector(".fa-bars");
const hidemenuBtn = informationsizess.querySelector(".fa-xmark");
const showPopupBtn = document.querySelector(".signin-btn");
const showVideoo = document.querySelector(".watchvideo");
const formPopun = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .fa-xmark");
const loginSignupLink = document.querySelectorAll(".from-box .bottom-link a");


var copy = document.querySelector(".company_img").cloneNode(true);
    document.querySelector(".company-logo").appendChild(copy);

function watchvideoo(){
    var videoo = document.querySelector(".videoo");
    videoo.classList.toggle("entervideo")
}

menuBtn.addEventListener("click", () => {
    informationsizess.classList.toggle("show-menu");
});

hidemenuBtn.addEventListener("click", () => menuBtn.click());

showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

showVideoo.addEventListener("click", () =>{
    document.body.classList.toggle("show-video");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link =>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        formPopun.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});


src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });