const ul = document.getElementById('ul-navbar');
const ulFooter = document.getElementById('ul-footer');
const navbar = document.getElementById('navbar');
const toolBar = document.getElementById('toolbar');
const ggMap = document.getElementById('map');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }

    if (window.scrollY > 168) {
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
const listItems = document.querySelectorAll('.main-content .container-list');

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


    // if (item.classList.contains('active')) {
    //     listItems.forEach((listitem) => {
    //         listitem.style.height = `${listitem.scrollHeight}px`;
    //     })
    // } else {
    //     listItems.forEach((listitem) => {
    //         listitem.style.height = '0';
    //     })
    // }

});

const allItemsList = document.querySelectorAll('.location-item');
allItemsList.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})


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



    // const ListSearch = [
    //     {
    //         name: 'Facilities',
    //         className: 'facilities',
    //         children: [
    //             {
    //                 name: 'Sauna'
    //             },
    //             {
    //                 name: 'Spin Studio'
    //             },
    //             {
    //                 name: 'Squash Courts'
    //             },
    //             {
    //                 name: 'Swimming pool'
    //             },
    //             {
    //                 name: 'Theragun Station'
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Classes',
    //         className: 'classes',
    //         children: [
    //             {
    //                 name: 'Aqua'
    //             },
    //             {
    //                 name: 'Barre Fitness'
    //             },
    //             {
    //                 name: 'BodyAttack'
    //             },
    //             {
    //                 name: 'BodyBalance'
    //             },
    //             {
    //                 name: 'BodyCombat'
    //             },
    //             {
    //                 name: 'BodyPump'
    //             },
    //             {
    //                 name: 'Bolt'
    //             },
    //             {
    //                 name: 'Bootcamp'
    //             },
    //             {
    //                 name: 'Boxercise'
    //             },
    //             {
    //                 name: 'BoxFit'
    //             },
    //             {
    //                 name: 'EXceed'
    //             },
    //             {
    //                 name: 'FF Core'
    //             },
    //             {
    //                 name: 'FF HIIT'
    //             },
    //             {
    //                 name: 'Force'
    //             },
    //             {
    //                 name: 'Freestyle Dance'
    //             },
    //             {
    //                 name: 'Glute Gains'
    //             },
    //             {
    //                 name: 'H2O HIIT'
    //             },
    //             {
    //                 name: 'Hatha Yoga'
    //             },
    //             {
    //                 name: 'HIIT'
    //             },
    //             {
    //                 name: 'Hot Yoga'
    //             },
    //             {
    //                 name: 'LGC'
    //             },
    //             {
    //                 name: 'Meditation'
    //             },
    //             {
    //                 name: 'Metafit'
    //             },
    //             {
    //                 name: 'Mobility'
    //             },
    //             {
    //                 name: 'Pilates'
    //             },
    //             {
    //                 name: 'Power Yoga'
    //             },
    //             {
    //                 name: 'Recharge'
    //             },
    //             {
    //                 name: 'Reps'
    //             },
    //             {
    //                 name: 'Rhyde'
    //             },
    //             {
    //                 name: 'Rise'
    //             },
    //             {
    //                 name: 'RoX'
    //             },
    //             {
    //                 name: 'RPM'
    //             },
    //             {
    //                 name: 'Self Defence'
    //             },
    //             {
    //                 name: 'SHRED'
    //             },
    //             {
    //                 name: 'SPARR'
    //             },
    //             {
    //                 name: 'Spin'
    //             },
    //             {
    //                 name: 'Tai Chi'
    //             },
    //             {
    //                 name: 'Total Stretch'
    //             },
    //             {
    //                 name: 'TraX'
    //             },
    //             {
    //                 name: 'Vibe Cycle'
    //             },
    //             {
    //                 name: 'Vinyasa Yoga'
    //             },
    //             {
    //                 name: 'Xlift'
    //             },
    //             {
    //                 name: 'Yoga'
    //             },
    //             {
    //                 name: 'Zumba'
    //             }
    //         ]
    //     }
    // ]



// ListSearch.forEach(itemSearch => {
//     const container = document.createElement('div');
//     container.className = `${itemSearch.className} ft`;
//     const p = document.createElement('p');
//     p.appendChild(document.createTextNode(itemSearch.name));
//     container.appendChild(p);
//     const img = document.createElement('img');
//     img.src = '../image/svg/icon-chevron-down-black.svg';
//     img.className = 'chevron';
//     container.appendChild(img);
//     filterForm.appendChild(container);


//     const containerList = document.createElement('div');
//     containerList.className = 'container-list';
//     const ul = document.createElement('ul');
//     ul.className = 'ul-location';
//     itemSearch.children.forEach(itemChild => {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(itemChild.name));
//         li.className = 'location-item';
//         ul.appendChild(li);
//         li.addEventListener('click', () => {
//             li.classList.toggle('active');
//         })
//     });

//     containerList.appendChild(ul);
//     toggleActive(container);

//     const bgBtn = document.createElement('button');
//     const closeBtn = document.createElement('img');
//     closeBtn.src = '../image/svg/exit-icon-white.svg';
//     bgBtn.appendChild(closeBtn);
//     bgBtn.className = 'closeBtn';
//     containerList.appendChild(bgBtn);
//     bgBtn.addEventListener('click', () => {
//         container.classList.remove('active');
//     });


//     filterForm.appendChild(containerList);
// });
