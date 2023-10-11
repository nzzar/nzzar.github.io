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