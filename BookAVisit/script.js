const navbar = document.getElementById('navbar');
const toolBar = document.getElementById('toolbar');
const ggMap = document.getElementById('map');

window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }

    if (window.scrollY > 0) {
        toolBar.classList.add('active');
        ggMap.classList.add('active');
    } else {
        toolBar.classList.remove('active');
        ggMap.classList.remove('active');
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

function toggleActive(item) {
    item.addEventListener('click', () => {
        const allItems = document.querySelectorAll('.ft');
        allItems.forEach((e) => {
            if (e !== item) {
                e.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
}

const allItems = document.querySelectorAll('.ft');
allItems.forEach((item) => {
    toggleActive(item);

    const closeBtn = document.querySelectorAll('.closeBtn');
    closeBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            item.classList.remove('active');
        });
    })
});

const allItemsList = document.querySelectorAll('.location-item');
allItemsList.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})



$('.prevBtn').click(function () {
    $('.owl-prev').click();
})

$('.nextBtn').click(function () {
    $('.owl-next').click();
})

$(document).ready(function () {
    $('.bg-header .owl-carousel').owlCarousel({
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
