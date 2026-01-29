import $ from '../core';


const swiper = (windowWidth) => {
    // const width = window.getComputedStyle(this[i]).width;
    let width = windowWidth + 'px';
    const parent = document.querySelector('.swiper-first.carousel')
    const slides = parent.querySelectorAll('.carousel__item');
    const slidesField = parent.querySelector('.carousel__swiper');
    const dots = parent.querySelectorAll('.carousel__indicators span');
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;
    slidesField.style.transform = `translateX(0px)`;

    dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
    dots[slideIndex].classList.add('swiper-pagination-bullet-active');

    $('[data-swiper="next"]').click((e) => {
        e.preventDefault();
        if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');

        document.querySelector('[data-swiper="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-swiper="prev"]').classList.remove('swiper-button-disabled');
        if (offset == 0) {
            document.querySelector('[data-swiper="prev"]').classList.add('swiper-button-disabled');
        } 
        
        if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            document.querySelector('[data-swiper="next"]').classList.add('swiper-button-disabled');
        }

    });

    $('[data-swiper="prev"]').click((e) => {
        e.preventDefault();
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex--;
        }
        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');

        document.querySelector('[data-swiper="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-swiper="prev"]').classList.remove('swiper-button-disabled');
        if (offset == 0) {
            document.querySelector('[data-swiper="prev"]').classList.add('swiper-button-disabled');
        } 
        
        if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            document.querySelector('[data-swiper="next"]').classList.add('swiper-button-disabled');
        }
    });

    $('.swiper-first .carousel__indicators span').click(e => {
        const slideTo = e.target.getAttribute('data-swiper-to');
        slideIndex = slideTo;
        offset = +width.replace(/\D/g, '') * slideTo;

        slidesField.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');

        document.querySelector('[data-swiper="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-swiper="prev"]').classList.remove('swiper-button-disabled');
        if (offset == 0) {
            document.querySelector('[data-swiper="prev"]').classList.add('swiper-button-disabled');
        } 
        
        if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            document.querySelector('[data-swiper="next"]').classList.add('swiper-button-disabled');
        }
    }); 


    function intFunc () {
        if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');


        document.querySelector('[data-swiper="next"]').classList.remove('swiper-button-disabled');
        document.querySelector('[data-swiper="prev"]').classList.remove('swiper-button-disabled');
        if (offset == 0) {
            document.querySelector('[data-swiper="prev"]').classList.add('swiper-button-disabled');
        } 
        
        if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
            document.querySelector('[data-swiper="next"]').classList.add('swiper-button-disabled');
        }
    }
    let intervalId, time;
    intervalId = setInterval(intFunc, 3000);

    window.addEventListener('resize', () => {
        // width = window.screen.availWidth + 'px';
        width = window.innerWidth + 'px';
        offset = 0;
        slidesField.style.transform = `translateX(0px)`;
        
        slides.forEach(slide => {
            slide.style.width = width;
        });        
        clearInterval(intervalId);  
        if (time) clearTimeout(time);
            time = setTimeout(function() {
                intervalId = setInterval(intFunc, 3000);
            },1000);
    });
}


export default swiper;