const navSlide = () => {
    const burger = document.querySelector('.toggle-button')
    const nav = document.querySelector('.navbar-links')
    const navLinks = document.querySelectorAll('.navbar-links')
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar-links-active')

    navLinks.forEach(link, index => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
            } 
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

