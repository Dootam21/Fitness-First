const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
});

const btnOpen = document.querySelector('.header1 .secondary-header .search-box');
const searchBox = document.querySelector('.search-hidden');
const btnClose = document.querySelector('.search-hidden .search-form .btn');
btnOpen.addEventListener('click', () => {
    searchBox.classList.add('active');
});
btnClose.addEventListener('click', () => {
    searchBox.classList.remove('active');
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
        }
    })
});
