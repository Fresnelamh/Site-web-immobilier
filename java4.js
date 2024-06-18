


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('change');
        nav.classList.toggle('active');
    });
});
