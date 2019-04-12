var mobile_nav = document.querySelector('.nav-links');
var burger_menu = document.querySelector('.burger-menu');
var navLinks = document.querySelectorAll('.nav-links li');

console.log(burger_menu);

var count = 0;

burger_menu.addEventListener('click', () => {
    
    mobile_nav.classList.toggle('nav-active');
    burger_menu.classList.toggle('toggle-menu'); 

    // document.body.style.backgroundColor = 'black';
    navLinks.forEach( ( link, index ) => {
        if( link.style.animation ){
            link.style.animation = ' ';
        } else {
            link.style.animation = `navLinkFade .75s ease forwards ${index / 7 + 0.3}s`
        }
    });
});