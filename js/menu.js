export function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navAuth = document.querySelector('.nav-auth');

    if (!menuToggle) return;

    menuToggle.addEventListener('click', function() {
        if (navMenu.style.display === 'flex' && navMenu.style.position === 'absolute') {
            navMenu.style.display = 'none';
            navAuth.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = '#ffffff';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            
            navAuth.style.display = 'flex';
            navAuth.style.flexDirection = 'column';
            navAuth.style.position = 'absolute';
            navAuth.style.top = '300px';
            navAuth.style.left = '0';
            navAuth.style.width = '100%';
            navAuth.style.backgroundColor = '#ffffff';
            navAuth.style.padding = '20px';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.removeAttribute('style');
            navAuth.removeAttribute('style');
        }
    });
}