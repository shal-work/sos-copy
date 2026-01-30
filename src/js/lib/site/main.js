import swiper from '../components/swiper';
import swiperSlide from '../components/swiper-slide';

$('.header__burger').on('click', () => {
    toggleBurger();
    $('body').toggleOverflow();
});

$('.header__menu').on('click', () => {
    $('body').offOverflow();
    toggleBurger();

});

$('.header__lang-select').on('click', () => {
    $('.header__lang-select').toggleClass('open');
});



function toggleBurger () {
    $('.header').toggleClass('fadeIn--open');

    $('.header__burger').toggleBooleanAttribute('aria-expanded');
    $('.header__burger').toggleClass('active');
    const burger = document.querySelector('.header__burger');
    let expanded = burger.getAttribute('aria-expanded') === 'true';  
    if (Boolean(expanded)) {
        $('.header__burger').toggleChangeAttribute('aria-label', 'close menu');
    } else {
        $('.header__burger').toggleChangeAttribute('aria-label', 'open menu');
    }
}

//смена кнопки языка
$('.header__item-lang').on('click', (e) => {
    const dataBtn = e.target.getAttribute('data-btn');
    $('.select__option').removeClass('select__option_hidden');
    $(e.target).toggleClass('select__option_hidden');
    $('.header__lang-btn_selected').html(dataBtn);
});


let child_1 = '';
let child_2 = '';
let child_3 = '';

function initHeaderDesctop () {
    // получаем child_1, child_2, child_3;
    // получить родителя  parent
    let parent = document.querySelector('.header__menu-right.flex-v-center'); //<div class="header__menu-right flex-v-center parent_0">
    // создаем child-lang_1 
    child_1 = parent.children[0];
    // создаем child-icon_2 
    child_2 = parent.children[1];
    // создаем child-burger_3
    child_3 = parent.children[2];
}


function changeHeader_1199 () {
    // ОБРУЛЯЕМ РОДИТЕЛЯ
    let parent = document.querySelector('.header__menu-right.flex-v-center'); //<div class="header__menu-right flex-v-center parent_0">
    $(parent).html(' ');

    // Формируем новую верстку
    // Добавляем новые данные в parent
    parent.appendChild(child_1);
    parent.appendChild(child_3);

    // получить ногого родителя parent_nav
    let parent_nav = document.querySelector('.header__item.header__item_icons'); //<li class="header__item header__item_icons"> parent_nav
    // копируем child-burger_2
    parent_nav.appendChild(child_2);
}

function changeHeader () {
    // получаем child_1, child_3;
    // получить классы 
    let parent = document.querySelector('.header__menu-right.flex-v-center'); //header__menu-right flex-v-center
    $(parent).html(' ');

    // Формируем новую верстку
    // Добавляем новые данные в parent
    parent.appendChild(child_1);
    parent.appendChild(child_2);
    parent.appendChild(child_3);
}



window.addEventListener('DOMContentLoaded', (e) => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            if(anchor.hash){
                e.preventDefault()
                const blockID = anchor.getAttribute('href').substring(1);
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }

    swiper(window.innerWidth);
    swiperSlide();

    if (window.screen.availWidth < 1199.98) {
        initHeaderDesctop();
        changeHeader_1199();
    }
    else {
        try {
            initHeaderDesctop();
        } catch (error) {
            
        }
    } 

});

let widthWidow = 0;

window.addEventListener('resize', (e) => {
    // debugger
    if (widthWidow !== e.target.outerWidth) {
        widthWidow = e.currentTarget.innerWidth;
        // window.location.reload();
        if (window.location.href.indexOf('reload') == -1) {
            debugger
            window.location.reload();
            window.location.replace(window.location.href+'?reload');
        }
    }

    if (window.screen.availWidth < 1199.98) {
        changeHeader_1199();
    }
    else {
        try {
            changeHeader();
        } catch (error) {}
    }  
});
