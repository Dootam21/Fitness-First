const ul = document.getElementById('ul-navbar');
const ulFooter = document.getElementById('ul-footer');
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


var images = document.querySelectorAll('.personal-training-img img');
let currentIndex = images.length - 1;

images[0].classList.add('active');

function slideShow() {
    images.forEach(image => {
        image.classList.remove('active');
    })

    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(slideShow, 3000);

const imageSmall = document.querySelectorAll('.personal-training-slider .personal-svg .img');
const imageSmall2 = document.querySelectorAll('.personal-training-slider-2 .personal-svg .img');
imageSmall.forEach((imageClick, index) => {
    imageClick.addEventListener('click', () => {
        images.forEach(image => {
            image.classList.remove('active');
        })
        currentIndex = index;
        images[index].classList.add('active');
    });
});

imageSmall2.forEach((imageClick, index) => {
    imageClick.addEventListener('click', () => {
        images.forEach(image => {
            image.classList.remove('active');
        })
        currentIndex = index;
        images[index].classList.add('active');
    });
});



const allTabs = document.querySelectorAll('.tab-nav-item');

allTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        allTabs.forEach((t) => t.classList.remove('active'));

        tab.classList.add('active');

        const allUserLists = document.querySelectorAll('.user-list');
        allUserLists.forEach((userList) => {
            userList.style.display = 'none';
        });

        const index = Array.from(allTabs).indexOf(tab);
        const userLists = document.querySelectorAll('.user-list');
        userLists[index].style.display = 'block';
    });
});




const firstCol = document.querySelector('.tab-nav-item');
firstCol.classList.add('active');
const AllUserList = document.querySelectorAll('.user-list');
AllUserList.forEach((element) => {
    element.style.display = 'none';
})
const firstUserList = document.querySelector('.user-list');
firstUserList.style.display = 'block';


const appImg = document.querySelectorAll('.app-features .app-img');
const tabList = document.querySelectorAll('.app-features .tab-link-item');

tabList.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabList.forEach((item) => item.classList.remove('active'));
        appImg.forEach((item) => item.classList.remove('active'));
        tab.classList.add('active');
        appImg[index].classList.add('active');
    })
})


const navTab = document.querySelector('#primary-nav-trigger');
const header2 = document.querySelector('.header2');
const navbarHidden = document.querySelector('.nav-hidden');
const closeTab = document.querySelector('.nav-hidden .navbar-hidden #close-tab');
navTab.addEventListener('click', () => {
    navbarHidden.classList.add('active');
    header2.classList.add('active-none');
})

closeTab.addEventListener('click', () => {
    navbarHidden.classList.remove('active');
    header2.classList.remove('active-none');
});



const openFooter = document.querySelectorAll('.footer .tag-list .title-item');
const listFooter = document.querySelectorAll('.footer .tag-list ul');
openFooter.forEach((e, index) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
        listFooter[index].classList.toggle('active');
    })
})

const containerJoin = document.querySelector('.container-join');
const redirect = document.querySelector('.redirect');
containerJoin.addEventListener('mouseenter', () => {
    redirect.classList.add('overlay');

});
containerJoin.addEventListener('mouseleave', () => {
    redirect.classList.remove('overlay');
});

const containerBook = document.querySelector('.container-book');
containerBook.addEventListener('mouseenter', () => {
    containerBook.classList.add('overlay');

});
containerBook.addEventListener('mouseleave', () => {
    containerBook.classList.remove('overlay');
});


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

function addAnimation() {
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



// const navList = [
//     {
//         name: 'Find a Gym',
//         path: '../FindAGym/index.html'
//     },
//     {
//         name: 'Classes',
//         path: ''
//     },
//     {
//         name: 'Personal Training',
//         path: ''
//     },
//     {
//         name: 'FFX On Demand',
//         path: ''
//     },
//     {
//         name: 'Blog',
//         path: ''
//     }
// ];


// function createNav(navList) {
//     navList.forEach(nav => {
//         const li = document.createElement('li');
//         const a = document.createElement('a');
//         a.appendChild(document.createTextNode(nav.name));
//         a.href = nav.path;
//         li.appendChild(a);
//         li.className = 'nav-item';
//         ul.appendChild(li);
//     });
// }
// createNav(navList);


// const listRankBoard = [
//     {
//         name: 'Distance',
//         user: [
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/nsglf4ar/ff_challange_distance-1.jpg?width=106&height=106&quality=80&rnd=132876680516070000',
//                 name: 'Beth',
//                 location: 'Fitness First Cottons',
//                 result: '256km'
//             },
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/wlff2q5e/ff_challange_distance-2.jpg?width=106&height=106&quality=80&rnd=132876680519900000',
//                 name: 'Charles',
//                 location: 'Fitness First Tottenham Court Road',
//                 result: '190km'
//             },
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/zv5hoxku/ff_challange_distance-3.jpg?width=106&height=106&quality=80&rnd=132876680526630000',
//                 name: 'Victor',
//                 location: 'Fitness First Baker Street',
//                 result: '108km'
//             }
//         ]
//     },
//     {
//         name: 'Workouts',
//         user: [
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/mltpihfb/ff_challange_workouts-1.jpg?width=106&height=106&quality=80&rnd=132876680565570000',
//                 name: 'Alex',
//                 location: 'Fitness First Tottenham Court Road',
//                 result: '29'
//             },
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/ewajswia/ff_challange_workouts-2.jpg?width=106&height=106&quality=80&rnd=132876680571900000',
//                 name: 'Anya',
//                 location: 'Fitness First London Bridge',
//                 result: '23'
//             },
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/nbilavbi/ff_challange_workouts-3.jpg?width=106&height=106&quality=80&rnd=132876680575670000',
//                 name: 'Dwayne',
//                 location: 'Fitness First Romforđ',
//                 result: '19'
//             }
//         ]
//     },
//     {
//         name: 'CaLories',
//         user: [
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/ttjfslny/ff_challange_calories-2.jpg?width=106&height=106&quality=80&rnd=132876680478970000',
//                 name: 'Amelia',
//                 location: 'Fitness First Solihull',
//                 result: '15,124'
//             },
//             {
//                 avatar: '/image/imgAvatar/fitness-first.svg',
//                 name: 'Sofia',
//                 location: 'Fitness First Basingstoke',
//                 result: '12,277'
//             },
//             {
//                 avatar: 'https://www.fitnessfirst.co.uk/media/qvtbsqe2/ff_challange_calories-1.jpg?width=106&height=106&quality=80&rnd=132876680472030000',
//                 name: 'Isabella',
//                 location: 'Fitness First Highbury',
//                 result: '9,730'
//             }
//         ]
//     }
// ]

// const containBoard = document.querySelector('.leaderBoardList');
// const tabNav = document.querySelector('.tab-nav .row');

// listRankBoard.forEach((board) => {
//     const col = document.createElement('div');
//     col.className = 'col-sm-4 tab-nav-item';
//     col.appendChild(document.createTextNode(board.name));
//     tabNav.appendChild(col);

//     const userList = document.createElement('div');
//     userList.className = 'user-list';
//     board.user.forEach((user, index) => {
//         const ranked = document.createElement('div');
//         const clearFix = document.createElement('div');
//         const position = document.createElement('div');
//         const avatar = document.createElement('div');
//         const imgAvatar = document.createElement('img');
//         const member = document.createElement('div');
//         const result = document.createElement('div');
//         const pName = document.createElement('p');
//         const pLocation = document.createElement('p');

//         position.className = 'position';
//         position.appendChild(document.createTextNode(index + 1));

//         avatar.className = 'avatar';
//         imgAvatar.src = user.avatar
//         avatar.appendChild(imgAvatar);

//         member.className = 'member';
//         pName.appendChild(document.createTextNode(user.name));
//         pName.className = 'name';
//         pLocation.appendChild(document.createTextNode(user.location));
//         pLocation.className = 'location';
//         member.appendChild(pName);
//         member.appendChild(pLocation);

//         result.className = 'result';
//         result.appendChild(document.createTextNode(user.result));

//         clearFix.className = 'clearfix';

//         ranked.appendChild(position);
//         ranked.appendChild(avatar);
//         ranked.appendChild(member);
//         ranked.appendChild(result);
//         ranked.className = 'ranked';
//         ranked.appendChild(clearFix);

//         userList.appendChild(ranked);
//     });
//     col.addEventListener('click', () => {
//         const nameElement = document.querySelectorAll('.tab-nav-item');
//         nameElement.forEach((e) => {
//             e.classList.remove('active');
//         })
//         col.classList.add('active');

//         const userLists = document.querySelectorAll('.user-list');
//         userLists.forEach((element) => {
//             element.style.display = 'none';
//         });
//         userList.style.display = 'block';
//     })
//     containBoard.appendChild(userList);

// });

// const footerList = [
//     {
//         name: 'About us',
//         children: [
//             {
//                 name: 'About us'
//             },
//             {
//                 name: 'Campaigns'
//             },
//             {
//                 name: 'Student Discount'
//             }
//         ]
//     },
//     {
//         name: 'Press and Careers',
//         children: [
//             {
//                 name: 'Press Room'
//             },
//             {
//                 name: 'Careers'
//             },
//             {
//                 name: 'Become A PT'
//             }
//         ]
//     },
//     {
//         name: 'Our Gyms',
//         children: [
//             {
//                 name: 'Find a Gym'
//             },
//             {
//                 name: 'Gyms in London'
//             },
//             {
//                 name: 'Multi Club Access'
//             },
//             {
//                 name: 'Our Facilities'
//             }
//         ]
//     },
//     {
//         name: 'Customer Service',
//         children: [
//             {
//                 name: 'FAQ'
//             },
//             {
//                 name: 'Contact us'
//             }
//         ]
//     },
//     {
//         name: 'Membership',
//         children: [
//             {
//                 name: 'Join now'
//             },
//             {
//                 name: 'Corporate Solutions and Membership'
//             },
//             {
//                 name: 'Blue Light Card Discount'
//             }
//         ]
//     },
//     {
//         name: 'Polices and Legal',
//         children: [
//             {
//                 name: 'Membership Terms and Conditions'
//             },
//             {
//                 name: 'Health Pledge'
//             },
//             {
//                 name: 'Gym Etiquette'
//             },
//             {
//                 name: 'Policies'
//             },
//             {
//                 name: 'Modern Slavery Act'
//             },
//             {
//                 name: 'Gender Pay Gap 2023'
//             }
//         ]
//     }
// ];
// const PaymentMethodList = [
//     {
//         name: 'visa',
//         path: "https://www.fitnessfirst.co.uk/media/tzmoh2fg/visa.svg?height=64&rnd=133018791700330000"
//     },
//     {
//         name: 'mastercard',
//         path: "https://www.fitnessfirst.co.uk/media/brhjasca/mastercard.svg?height=64&rnd=133018793873100000"
//     },
//     {
//         name: 'american-express',
//         path: "https://www.fitnessfirst.co.uk/media/0vuppgvd/american-express.svg?height=64&rnd=133018794629800000"
//     },
//     {
//         name: 'klarna-badge',
//         path: "https://www.fitnessfirst.co.uk/media/pnjbyxmo/klarna-badge.svg?height=64&rnd=132956354488930000"
//     }
// ]

// const footerContainer = document.querySelector('.footer-list');
// function createFooter() {
//     footerList.forEach(footerItem => {
//         const col = document.createElement('div');
//         col.className = 'col-sm-4 tag-list';
//         const title = document.createElement('p');
//         title.className = 'title-item';
//         title.appendChild(document.createTextNode(footerItem.name));
//         col.appendChild(title);

//         footerItem.children.forEach(child => {
//             const item = document.createElement('p');
//             item.className = 'child-item';
//             item.appendChild(document.createTextNode(child.name));
//             col.appendChild(item);
//         })
//         footerContainer.appendChild(col);
//     })
//     const paymentMethod = document.querySelector('.payment-method');
//     PaymentMethodList.forEach(payment => {
//         const img = document.createElement('img');
//         img.src = payment.path;
//         img.alt = payment.name;
//         paymentMethod.appendChild(img);
//     })
// }
// createFooter();
