let {navMenu} = document.getElementById('js-menu');
let {navIcon} = document.getElementById('js-navbarIcon');

navIcon.addEventListener('click', function () {;

    navMenu.classList.toggle('navMenuActive');
});
