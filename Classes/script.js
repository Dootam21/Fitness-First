const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function (event) {
    event.preventDefault();
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
btnOpen.addEventListener('click', (event) => {
    event.preventDefault();
    searchBox.classList.add('active');
});
btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    searchBox.classList.remove('active');
});


function toggleActive(item) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const allItems = document.querySelectorAll('.shared-style');
        allItems.forEach((e) => {
            if (e !== item) {
                e.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
}

const allItems = document.querySelectorAll('.shared-style');
allItems.forEach((item) => {
    toggleActive(item);
    const closeBtn = document.querySelectorAll('.closeBtn');
    closeBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            item.classList.remove('active');
        });
    })
});

const allItemsList = document.querySelectorAll('.item-list');
allItemsList.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
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
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
        }
    })
});



function load(img) {
    const url = img.getAttribute('data-src');
    img.setAttribute('src', url);
    img.removeAttribute('data-src');
}


function ready() {
    if ('IntersectionObserver' in window) {
        var lazyImg = document.querySelectorAll('[data-src]');

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    load(entry.target);
                    observer.unobserve(entry.target);
                }
                else {
                    return;
                }
            });
        });

        lazyImg.forEach((img) => {
            observer.observe(img);
        })
    }
    else {
        console.log(false);
    }
}

document.addEventListener('DOMContentLoaded', ready);



const overLay = document.querySelector('.nav-bar-hidden .overlay');
const navTab = document.querySelector('#primary-nav-trigger');
const header2 = document.querySelector('.header2');
const navbarHidden = document.querySelector('.nav-hidden');
const closeTab = document.querySelector('.nav-hidden .navbar-hidden #close-tab');
navTab.addEventListener('click', (event) => {
    event.preventDefault();
    navbarHidden.classList.add('active');
    header2.classList.add('active-none');
    overLay.classList.add('active');
})

closeTab.addEventListener('click', (event) => {
    event.preventDefault();
    navbarHidden.classList.remove('active');
    header2.classList.remove('active-none');
    overLay.classList.remove('active');
});

const navBarHidden = document.querySelectorAll('.nav-bar-hidden  .shared-style');
navBarHidden.forEach(navBar => {
    navBar.addEventListener('click', (event) => {
        event.preventDefault();
        header2.classList.add('active-none');
        overLay.classList.add('active');
    })
})

const closeBtnResponse = document.querySelectorAll('.nav-bar-hidden .closeBtn');
closeBtnResponse.forEach(closeBtn => {
    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        header2.classList.remove('active-none');
        overLay.classList.remove('active');
    });
})




const openFooter = document.querySelectorAll('.footer .tag-list .title-item');
const listFooter = document.querySelectorAll('.footer .tag-list ul');
openFooter.forEach((e, index) => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        e.classList.toggle('active');
        listFooter[index].classList.toggle('active');
    })
})



const imgAnimate = document.querySelectorAll('.animate');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left <= window.innerWidth &&
        rect.right >= 0
    );
}

function addAnimation(event) {
    event.preventDefault();
    imgAnimate.forEach(img => {
        if (isElementInViewport(img)) {
            img.classList.add('active');
        }
        // else {
        //     img.classList.remove('active');
        // }
    });
}

window.addEventListener('scroll', addAnimation);

const clearBtn = document.querySelectorAll('.clearBtn');
clearBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        allItemsList.forEach((item) => {
            item.classList.remove('active');
        })
    })
})



// var popularCards = document.querySelectorAll(".popular-classes .popular-card");
// var nextButton = document.querySelector(".popular-classes .header-popular .nextBtn");
// var prevButton = document.querySelector(".popular-classes .header-popular .prevBtn");

// var currentCard = 0;
// var maxCards = popularCards.length;
// var cardsPerPage = 2;

// function showCards() {
//     var start = currentCard;
//     var end = (start + cardsPerPage) % maxCards;

//     popularCards.forEach(function (card, index) {
//         if (index >= start || index < end) {
//             card.classList.add("active");
//         } else {
//             card.classList.remove("active");
//         }
//     });
// }

// function prevCard() {
//     if (currentCard > 0) {
//         currentCard--;
//     } else {
//         currentCard = maxCards - 1;
//     }
//     showCards();
// }
// prevButton.addEventListener("click", prevCard);

// function nextCard() {
//     if (currentCard < maxCards - 1) {
//         currentCard++;
//     } else {
//         currentCard = 0;
//     }
//     showCards();
// }
// nextButton.addEventListener("click", nextCard);


// showCards();
