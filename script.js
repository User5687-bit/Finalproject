var swiper = new Swiper(".mySwiper", {});
let menu = document.querySelector(".fixed-menu");
menu.addEventListener('click', function(event){ 
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link')) {
    clickTarget.classList.add('active');
    activeBtn.classList.remove('active');
    }
}) 
window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*4) {
        classLink = '.comment-link';
    }
    else if (window.scrollY >= h*3) {
        classLink = '.work-link';
    }
    else if (window.scrollY >= h*2) {
        classLink = '.skills-link';
    }
        else if (window.scrollY >= h) {
        classLink = '.about-link';
    }
    else {
        classLink = '.main-link';
    }
    let activeBtn = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classLink);
    if (!newActiveBtn.classList.contains('active')) {
        newActiveBtn.classList.add('active')
        activeBtn.classList.remove('active')
    }
}

let classLink = '.main-link';
document.querySelector(".mobile-button") .addEventListener("click", function(event){
    document.querySelector(".mobile-menu") .classList.toggle("hide")
})
menu .addEventListener('click', function(event){
    let clickTarget=event.target;
    let activeBtn=document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link') ){
        clickTarget.classList.add('active')
        activeBtn.classList.remove('active');
        let mobile=document.querySelector('.mobile-menu');
        if (!mobile.classList.contains('hide')) {
            mobile.classList.add('hide');
        }
        let body=document.querySelector("body");
        let mobileMenu=document.querySelector(".mobile-menu"); 
    }
    document.querySelector(".mobile-button").addEventListener("click", function(event){
        document.querySelector(".mobile-menu").classList.toggle("hide");
        document.querySelectorAll(".mobile-btn").forEach(function(item)
        {
            item.classList.toggle('btn-hide');
        })
    })
})