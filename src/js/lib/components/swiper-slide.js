import $ from '../core';
import store from "../components/store"


const swiperSlide = () => {
    const parent = document.querySelector('.second__slider-cards.carousel')
    const slides = parent.querySelectorAll('.carousel__item');
    const slidesField = parent.querySelector('.carousel__slides');
    const dots = parent.querySelectorAll('.carousel__indicators span');

    const storeValue = Object.values(store);//делаем массив из объекта    
    let slideIndex = 0;
    let width = 480;

    function initial () {
        slideIndex = 0;
        width = window.getComputedStyle(slidesField).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');
    }

    initial();

    function initFunc (numClick) {
        let i = 0;
        slides.forEach(slide => {
            // slide.style.width = width;
            slide.style.zIndex = storeValue[numClick][i].zIndex;
            // debugger
            slide.style.width = width + 'px';
            slide.style.transform = `rotateZ(${storeValue[numClick][i].rotateZ})`;
            slide.style.transform += `scale(${storeValue[numClick][i].scale})`;
            if (slide.style.zIndex != 4) {
                slide.style.filter = 'brightness(60%)';
            } else {
                let per = 60;
                let timer = setInterval(function() {
                    slide.style.filter = `brightness(${per}%)`;
                    per++;
                    if (per > 100) clearInterval(timer);
                }, 20);
            }
            if (Number.isFinite(storeValue[numClick][i].tx)) {
                let widthSlide = +width * i;
                let tx = storeValue[numClick][i].tx; 
                let tz = storeValue[numClick][i].tz; 
                // debugger
                slide.style.transform  += `translate3d(${-widthSlide}px, 0px, ${tz})`;
            } else {
                let widthSlide = +width * i;
                let tx = storeValue[numClick][i].tx; 
                let tz = storeValue[numClick][i].tz; 
                slide.style.transform  += `translate3d(calc(${tx} - ${widthSlide}px), 0px, ${tz})`;                
            }
            i++;
        });
    }

    initFunc(0);

    $('[data-slide="next"]').click((e) => {
        e.preventDefault();
        document.querySelector('[data-slide="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-slide="prev"]').classList.remove('swiper-button-disabled');
        
        if (slideIndex == storeValue.length - 1) {
            slideIndex = 0;
        }else {
            slideIndex++;
        }
        initFunc(slideIndex);
        if (slideIndex == storeValue.length - 1) {
            document.querySelector('[data-slide="next"]').classList.add('swiper-button-disabled');
        }
        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');
    });

    $('[data-slide="prev"]').click((e) => {
        e.preventDefault();
        document.querySelector('[data-slide="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-slide="prev"]').classList.remove('swiper-button-disabled');
        if (slideIndex == 0) {
            slideIndex = storeValue.length - 1;
        } else {
            slideIndex--;
        }
        if (slideIndex == 0) {
            document.querySelector('[data-slide="prev"]').classList.add('swiper-button-disabled');
        }
        initFunc(slideIndex);
        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');
    });

    $('.second__slider-cards .carousel__indicators span').click(e => {

        const slideTo = +e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;

        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');
        initFunc(slideIndex);
        document.querySelector('[data-slide="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-slide="prev"]').classList.remove('swiper-button-disabled');
        if (slideIndex == 0) {
            document.querySelector('[data-slide="prev"]').classList.add('swiper-button-disabled');
        } 
        
        if(slideIndex == storeValue.length - 1) {
            document.querySelector('[data-slide="next"]').classList.add('swiper-button-disabled');
        }

    }); 


    window.addEventListener('resize', () => {
        width = window.getComputedStyle(slidesField).width.split('.')[0].replace(/\D/g, ''); 
        initial();
        initFunc(0);
    });

}


export default swiperSlide;