//scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header ul li a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height ){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*='+ id + ']').classList.add('active')
            });
    }
});
}

//Animation
var typeEffect = new Typed(".multiText",{
    strings: ["Nizar Zulmi"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
});

var mixer = mixitup('.portofolio-gallery');

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};