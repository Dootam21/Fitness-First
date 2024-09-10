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

const openFooter = document.querySelectorAll('.footer .tag-list .title-item');
const listFooter = document.querySelectorAll('.footer .tag-list ul');
openFooter.forEach((e, index) => {
    e.addEventListener('click', () =>{
        e.classList.toggle('active');
        listFooter[index].classList.toggle('active');
    })
})