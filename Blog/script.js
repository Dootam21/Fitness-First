const blogs = document.querySelectorAll('.list-blog .blog-item');
blogs.forEach((blog) => {
    blog.addEventListener('click', () => {
        blogs.forEach((e) => { e.classList.remove('active'); });
        blog.classList.add('active');
    })
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

const numbers = document.querySelectorAll('.page-number .list-numbers .number');
const prevBtn = document.querySelector('.page-number .prevBtn');
const nextBtn = document.querySelector('.page-number .nextBtn');
let numberIndex = 0; 

numbers.forEach((number, index) => {
    if (numberIndex === index) {
        number.classList.add('active');
    } else {
        number.classList.remove('active');
    }

    number.addEventListener('click', () => {
        numberIndex = index;
        updateActiveNumber();
    });
});

prevBtn.addEventListener('click', () => {
    numberIndex = Math.max(0, numberIndex - 1);
    updateActiveNumber();
});

nextBtn.addEventListener('click', () => {
    numberIndex = Math.min(numberIndex + 1, numbers.length - 1);
    updateActiveNumber();
});

function updateActiveNumber() {
    numbers.forEach((number, index) => {
        if (numberIndex === index) {
            number.classList.add('active');
        } else {
            number.classList.remove('active');
        }
    });
}

