
document.addEventListener("DOMContentLoaded", () => {
    let opacity = 0;
    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            document.body.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100); 
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
