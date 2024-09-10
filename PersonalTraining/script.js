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


const stories = document.querySelectorAll('.member-stories .story-tag');
let maxHeight = 0;

stories.forEach(story => {
    if (story.offsetHeight > maxHeight) {
        maxHeight = story.offsetHeight;
    }
});

stories.forEach(story => {
    story.style.height = maxHeight + 'px';
});

const openAnswer = document.querySelectorAll('.questions .question-tag');
const icon = document.querySelectorAll('.questions .question-tag .icon img');
const answerTag = document.querySelectorAll('.questions .answer-tag');

openAnswer.forEach((answer, index) => {
    answer.addEventListener('click', () => {
        answer.classList.toggle('active');
        answerTag[index].classList.toggle('active');

        if (answer.classList.contains('active')) {
            icon[index].src = '../image/svg/minus-white.svg';
        } else {
            icon[index].src = '../image/svg/plus-white.svg';
        }
    });
});

const theAnswer = document.querySelectorAll('.questions .answer-tag .the-answer');
const ATag = document.querySelectorAll('.questions .answer-tag .A');
let AHeight = 0;
theAnswer.forEach((answer, index) => {
    if (answerTag[index].classList.contains('active')) {
        const answerHeight = answer.offsetHeight;
        AHeight = answerHeight > AHeight ? answerHeight : AHeight;
    }
});

ATag.forEach((aTag) => {
    aTag.style.top = '-' + AHeight + 'px';
});


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



document.querySelectorAll('.btn-Q&A').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});