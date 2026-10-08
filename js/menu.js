function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navAuth = document.querySelector('.nav-auth');

    if (!menuToggle || !navMenu || !navAuth) return;

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-open');
        navAuth.classList.toggle('is-open');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('is-open');
            navAuth.classList.remove('is-open');
        }
    });
}