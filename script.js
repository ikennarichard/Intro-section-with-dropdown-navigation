
const menuIcon = document.querySelector('.menu_icon');

const cover = document.querySelector('.cover');

const extraLayer = document.querySelector('.extra_layer');

const menuLinks = [...document.querySelectorAll('.menu_links > a')];

const arrow = [...document.querySelectorAll('.arrow')];

const navList = [...document.querySelectorAll('.cover nav > div')];




menuIcon.addEventListener('click', menuSlide);

menuLinks.forEach((item, i) => item.addEventListener('click', () => {

    arrow[i].classList.toggle('show_nav');
    navList[i].classList.toggle('show');


}));


function menuSlide() {
    this.classList.toggle('change');
    cover.classList.toggle('show_cover');
    extraLayer.classList.toggle('show_cover');
}



