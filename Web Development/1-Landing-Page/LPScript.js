const html = document.querySelector('html');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar-container');
const upiLogo = document.querySelector('img.upi');
const upilogcir = document.querySelector('.content-image img');
const kampusLogo = document.querySelector('img.kampus');
const navbarList = document.querySelectorAll('.navbar-list li a');

function redirect(id){
    switch(id){
        case 1: window.location.href = "https://upi.edu"; break;
        case 2: window.location.href = "https://kampusmerdeka.kemdikbud.go.id"; break;
        case 3: window.location.href = "https://www.youtube.com/@TVUPIDIGITAL"; break;
        case 4: window.location.href = "https://www.linkedin.com/school/universitaspendidikanindonesia-upi/"; break;
        case 5: window.location.href = "https://www.twitter.com/UPIfess"; break;
        case 6: window.location.href = "https://web.facebook.com/upiofficial"; break;
    }
}

window.addEventListener('scroll', function() {
    if (!body.classList.contains('dark-mode')) {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            upiLogo.src = './images/logo-text-white.png';
            kampusLogo.src = './images/logo-kampus-white.png';
        } else {
            navbar.classList.remove('scrolled');
            upiLogo.src = './images/logo-text.png';
            kampusLogo.src = './images/logo-kampus.png';
        }
    }
});

function darkmode(){
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    upilogcir.src = body.classList.contains('dark-mode') ? './images/logo-circle-white.png' : './images/logo-circle.png';
    if (!window.scrollY) {
        upiLogo.src = body.classList.contains('dark-mode') ? './images/logo-text-white.png' : './images/logo-text.png';
        kampusLogo.src = body.classList.contains('dark-mode') ? './images/logo-kampus-white.png' : './images/logo-kampus.png';
    }
    navbarList.forEach(item => {
        item.style.color = body.classList.contains('dark-mode') ? 'white' : 'black';
    });
}