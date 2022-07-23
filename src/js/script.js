const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideBar = document.getElementById('sideBar');
const overlay = document.getElementById('overlay');
const sideBarLinks = document.querySelectorAll('.sidebar__link');

const openingMenu = () => {
    sideBar.classList.remove('close');
    document.body.classList.add('noscroll');
    sideBar.classList.add('open');
    overlay.classList.remove('invisible');
    overlay.classList.add('visible');
}

const closingMenu = () => {
    sideBar.classList.remove('open');
    document.body.classList.remove('noscroll');
    sideBar.classList.add('close');
    overlay.classList.remove('visible');
    overlay.classList.add('invisible');
}

openMenu.addEventListener('click', openingMenu);
closeMenu.addEventListener('click', closingMenu);
overlay.addEventListener('click', closingMenu);
sideBarLinks.forEach(sideBarLink => {
    sideBarLink.addEventListener('click', closingMenu);
});