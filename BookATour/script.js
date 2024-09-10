const btnOpen = document.querySelector('.header1 .secondary-header .search-box');
const searchBox = document.querySelector('.search-hidden');
const btnClose = document.querySelector('.search-hidden .search-form .btn');
btnOpen.addEventListener('click', () => {
    searchBox.classList.add('active');
});
btnClose.addEventListener('click', () => {
    searchBox.classList.remove('active');
});


const mainContent = document.querySelector('.main-content');
const form = document.querySelector('.main-content .form');

const img = new Image();
img.src = '../image/bookvisit/fitnessfirst_interiors-tcr_064.jpg';

img.onload = function () {
    var padding = (img.naturalHeight - form.offsetHeight)/2;
    mainContent.style.height = `${img.naturalHeight}px`;
    mainContent.style.padding = `${padding}px 0`
};
