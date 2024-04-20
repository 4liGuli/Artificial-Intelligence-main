const informationsizess = document.querySelector(".information .about");
const menuBtn = document.querySelector(".fa-bars");
const hidemenuBtn = informationsizess.querySelector(".fa-xmark");
const showPopupBtn = document.querySelector(".signin-btn");
const showVideoo = document.querySelector(".watchvideo");
const formPopun = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .fa-xmark");
const loginSignupLink = document.querySelectorAll(".from-box .bottom-link a");

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