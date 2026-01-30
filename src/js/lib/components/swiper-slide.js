import $ from '../core';
import store from "../components/store"


const swiperSlide = () => {
    const sliderCards = document.querySelector('.second__slider-cards');
    const parent = document.querySelector('.second__slider-cards.carousel');
    const slides = parent.querySelectorAll('.carousel__item');
    const dots = parent.querySelectorAll('.carousel__indicators span');

    const storeValue = Object.values(store);//делаем массив из объекта    
    let slideIndex = 0;
    let width = 480, height = 610;

	let shiftX;
	let X0=0;
	let X1=0;
	let onmouseup = false;

    let scaleTrigger = 0.65;
    let isTrigger = true;
    let tyTriger = 0;
    let isNext = false, isPrev = false;
    let isTouchstart = false;
    let coeff = 1;

    function initial () {
        slideIndex = 0;
        width = window.getComputedStyle(sliderCards).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        width = width - 20;
        height = window.getComputedStyle(sliderCards).height.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;

        dots.forEach(dot => dot.classList.remove('swiper-pagination-bullet-active'));
        dots[slideIndex].classList.add('swiper-pagination-bullet-active');
        coeff = width / 480 ;
    }

    initial();

    function initFunc (numClick) {
        let i = 0;
        slides.forEach(slide => {
            let trans;  
            let widthSlide;

            let rotateZ = storeValue[numClick][i].rotateZ;
            let scale = storeValue[numClick][i].scale;
            let tx = storeValue[numClick][i].tx;
            let tz = storeValue[numClick][i].tz;
            let zIndex = +storeValue[numClick][i].zIndex;
            let ty = '0%';
            if (zIndex != 4) {
                widthSlide = width * i + 'px';
                trans = ` translate3d(calc(${tx} - ${widthSlide}), ${ty}, ${tz})` + `rotateZ(${rotateZ})` + ` scale(${scale})`; 
            } else {
                ty = '0px';
                tx = width * i;
                trans = ` translate3d(-${tx}px, ${ty}, ${tz})` + `rotateZ(${rotateZ})` + ` scale(${scale})`; 
            }
            slide.style.zIndex = zIndex; 
            slide.style.width = width + 'px'; 
            slide.style.transform  = trans;

            if (+slide.style.zIndex != 4) {
                slide.style.filter = 'brightness(60%)';
            } else {
                let per = 60;
                let timer = setInterval(function() {
                    slide.style.filter = `brightness(${per}%)`;
                    per++;
                    if (per > 100) clearInterval(timer);
                }, 20);
            }
            i++;
        });
    }

    function initZindexFunc (numClick) {
        let i = 0;
        slides.forEach(slide => {
            slide.style.zIndex = storeValue[numClick][i].zIndex;
            i++;
        });
    }
    function initSelectSlideFunc (i, numClick) {
        let trans;  
        let widthSlide;
        let rotateZ = storeValue[numClick][i].rotateZ;
        let scale = storeValue[numClick][i].scale;
        let tx = storeValue[numClick][i].tx;
        let tz = storeValue[numClick][i].tz;
        let ty = '0%';
        let zIndex = +storeValue[numClick][i].zIndex;
        if (zIndex != 4) {
            widthSlide = width * i + 'px';
            trans = ` translate3d(calc(${tx} - ${widthSlide}), ${ty}, ${tz})` + `rotateZ(${rotateZ})` + ` scale(${scale})`; 
        } else {
            ty = '0px';
            tx = width * i;
            trans = ` translate3d(-${tx}px, ${ty}, ${tz})` + `rotateZ(${rotateZ})` + ` scale(${scale})`; 
        }
        slides[i].style.zIndex = zIndex;
        slides[i].style.width = width + 'px'; ;      
        slides[i].style.transform  = trans;
    }

    initFunc(0);

    function dataSlideNext() {
        onmouseup = false;
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
    }

    function dataSlidePrev() {
        onmouseup = false;
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
    }

    $('[data-slide="next"]').click((e) => {
        e.preventDefault();
        dataSlideNext();
    });
    $('[data-slide="prev"]').click((e) => {
        e.preventDefault();
        dataSlidePrev();
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

    $('.swiper-slide-visible.carousel__item').on('mousedown', (e) => {
        e.preventDefault();
        isTouchstart = true;
        onmouseup = true;
        shiftX = e.pageX;
        X0 = 0;
    });
    $('.second__container').on('mousemove', (e) => {
        e.preventDefault();
        if (onmouseup) {
            let X =  e.pageX - shiftX + X0;
            if (X < 0) { //влево -1, вправо +1
                moveAtNext(X);
            } else {
                moveAtPrev(X);
            }
        }
    });
    $('.second.bg').on('mouseup', (e) => {
        X0 = 0;
        shiftX = 0;
        if (isTrigger && onmouseup) {
            if (isNext) {
                onmouseup = false;
                dataSlideNext();
            }
            if (isPrev) {
                onmouseup = false;
                dataSlidePrev();
            }
        }
        if (!isTrigger) {
            initFunc(slideIndex);
        }
        onmouseup = false;   
    });

    $('.swiper-slide-visible.carousel__item').on('touchstart', (e) => {
        e.preventDefault();
        isTouchstart = true;
        onmouseup = true;
        shiftX = e.touches[0].clientX;
    });
    $('.swiper-slide-visible.carousel__item').on('touchmove', (e) => {
        e.preventDefault();
        if (onmouseup) {
            let X =  e.touches[0].clientX - shiftX + X0;
            if (X < 0) { //влево -1, вправо +1
                moveAtNext(X);
            } else {
                moveAtPrev(X);
            }
        }
    });
    $('.swiper-slide-visible.carousel__item').on('touchend', (e) => {
        X0 = 0;
        shiftX = 0;
        if (isTrigger && onmouseup) {
            if (isNext) {
                onmouseup = false;
                dataSlideNext();
            }
            if (isPrev) {
                onmouseup = false;
                dataSlidePrev();
            }
        }
        if (!isTrigger) {
            initFunc(slideIndex);
        }
        onmouseup = false;   
    });

    function moveAtNext(X) {
        let scale = 1 - Math.abs(X * 0.001 );
        // scale = scale * coeff;
        let denominator0 = 1920 * coeff;
        let X0 = 0, delta=0, widthSlide=0;
             
        let trans;
        isNext = true;
        isPrev = false;

        if (X < -(+width / 3 )) { // тригер срабывания смены слайда
            isTrigger = true;
        } else {
            isTrigger = false;
        }

        if (X > - (width / 2 / coeff )) {
            let tz1, ty, tz;
            switch(slideIndex) {
                case 0: { //клик 0 slideIndex=0
                    //картинка 1 двидгаем slideIndex=0
                    let numClick = 0;
                    X1 = X;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator0;

                    let tzStore = +storeValue[numClick + 1][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;
                    
                    trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tz}px)` + 'rotateZ(0deg)' + `scale(${scale})`;   
                    slides[slideIndex].style.zIndex = '4';
                    slides[slideIndex].style.width = width + 'px';
                    slides[slideIndex].style.transform = trans;
                    // СМЕЩЕНИЕ
                    //картинка 2 смещение click1 slideIndex=0
                    widthSlide = +width * 1;
                    ty = 0;
                    tzStore = +storeValue[numClick][slideIndex + 1].tz.split('px')[0]; //текущий storeValue[slideIndex]
                    let txStore = +storeValue[numClick][slideIndex + 1].tx.split('%')[0];//текущий
                    tz1 = tzStore - tz;

                    trans = ` translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + ` scale(1)`;
                    slides[slideIndex + 1].style.zIndex = '3';
                    slides[slideIndex + 1].style.width = width + 'px';
                    slides[slideIndex + 1].style.transform = trans;

                    //картинка 3 смещение
                    widthSlide = +width * 2;
                    txStore = +storeValue[numClick][slideIndex + 2].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex + 2].tz.split('px')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = ` translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + ` scale(1)`;
                    slides[slideIndex + 2].style.zIndex = '2';
                    slides[slideIndex + 2].style.width = width + 'px';
                    slides[slideIndex + 2].style.transform = trans;

                    //картинка 4 смещение
                    txStore = +storeValue[numClick][slideIndex + 3].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex + 3].tz.split('px')[0];//текущий
                    widthSlide = +width * 3;
                    tz1 = tzStore - tz;   
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex+3].style.zIndex = '1';
                    slides[slideIndex+3].style.width = width + 'px';
                    slides[slideIndex+3].style.transform = trans;
                    break;
                }
                case 1: { //клик 1 slideIndex = 1
                    //картинка 2 - двидгаем slideIndex=1
                    let numClick = 1;
                    X1 = X;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator0 ; // экстрополяция в % 

                    let tzStore = +storeValue[numClick + 1][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;
                    trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tz}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                    slides[slideIndex].style.zIndex = '4';
                    slides[slideIndex].style.width = width + 'px';
                    slides[slideIndex].style.transform = trans;
                    // СМЕЩЕНИЕ click2 slideIndex=1 берем из click1 из предыдущего
                    //картинка 1 - смещение предыдущая
                    widthSlide = +width * 0;
                    let txStore = +storeValue[numClick][slideIndex-1].tx.split('%')[0];//текущий 
                    tzStore = +storeValue[numClick + 1][slideIndex-1].tz.split('px')[0];//новый
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tzStore}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 1].style.zIndex = '3';
                    slides[slideIndex - 1].style.width = width + 'px';
                    slides[slideIndex - 1].style.transform = trans;

                    //картинка 3 смещение следующая
                    widthSlide = +width * 2;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex + 1].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex + 1].tz.split('px')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex + 1].style.zIndex = '2';
                    slides[slideIndex + 1].style.width = width + 'px';
                    slides[slideIndex + 1].style.transform = trans;

                    //картинка 4 смещение  
                    //slideIndex=1 click1
                    widthSlide = +width * 3;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex + 2].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex + 2].tz.split('px')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex + 2].style.zIndex = '1';
                    slides[slideIndex + 2].style.width = width + 'px';
                    slides[slideIndex + 2].style.transform = trans;
                    let coor1 = "Coordinates1: (X_next = " + X + ")";
                    // $('.d111').html(coor1);
                    break;
                }
                case 2: { //click2 slideIndex = 2
                    //картинка 3 - двигаем slideIndex = 2
                    X1 = X;
                    let numClick = 2;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator0;
                    let tzStore = +storeValue[numClick + 1][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;

                    trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tz}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                    slides[slideIndex].style.zIndex = '4';
                    slides[slideIndex].style.width = width + 'px';
                    slides[slideIndex].style.transform = trans;

                    // СМЕЩЕНИЕ click3 - [2] slideIndex=2 storeValue берем из click2 из предыдущего
                    // картинка 1 - смещение
                    ty = 0;
                    widthSlide = +width * 0;
                    let txStore = +storeValue[numClick][slideIndex - 2].tx.split('%')[0]; //текущий 
                    tzStore = +storeValue[numClick][slideIndex - 2].tz.split('px')[0]; //текущий 
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;

                    slides[slideIndex - 2].style.zIndex = '3';
                    slides[slideIndex - 2].style.width = width + 'px';
                    slides[slideIndex - 2].style.transform = trans;
                    
                    // картинка 2 смещение slideIndex = 2 предыдущая
                    widthSlide = +width * 1;
                    txStore = +storeValue[numClick][slideIndex - 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick + 1][slideIndex - 1].tz.split('px')[0]; //новый
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tzStore}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 1].style.zIndex = +storeValue[numClick][slideIndex - 1].zIndex;
                    slides[slideIndex - 1].style.width = width + 'px';
                    slides[slideIndex - 1].style.transform = trans;

                    // картинка 4 смещение следующая
                    widthSlide = +width * 3;
                    txStore = +storeValue[numClick][slideIndex + 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick][slideIndex + 1].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex + 1].style.zIndex = +storeValue[numClick][slideIndex + 1].zIndex;
                    slides[slideIndex + 1].style.width = width + 'px';
                    slides[slideIndex + 1].style.transform = trans;
                    break;
                }
                case 3: { //click3 slideIndex = 3
                    //картинка 4 - двигаем slideIndex = 3 - на месте остается
                    let numClick = 3;
                    isTrigger = false;
                    X1 = X;

                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator0;
                    let tzStore = +storeValue[numClick][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);                    
                    tz = -1 * tz;
                    tzStore = +storeValue[numClick][slideIndex].tz.split('px')[0]; //текущий
                    if(X > -180*coeff) {                        
                        trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tzStore}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                        slides[slideIndex].style.zIndex = +storeValue[3][slideIndex].zIndex;
                        slides[slideIndex].style.width = width + 'px';
                        slides[slideIndex].style.transform = trans;
                    }
                    // СМЕЩЕНИЕ click4 - [3] slideIndex=3 storeValue берем из click3 из предыдущего
                    // картинка-1
                    widthSlide = +width * 0;
                    let txStore = +storeValue[numClick][slideIndex - 3].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick][slideIndex - 3].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz;
                    // trans = 'rotateZ(0)' + `scale(1)` + `translate3d(calc(${txStore}% - ${widthSlide}px), 0, ${tzStore}px)`;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), 0, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 3].style.zIndex = +storeValue[3][slideIndex - 1].zIndex;
                    slides[slideIndex - 3].style.width = width + 'px';
                    slides[slideIndex - 3].style.transform = trans;
                    
                    // картинка 2 смещение slideIndex=2 storeValue берем из click2 из предыдущего 
                    // translate3d: 'translate3d(calc(-9.25% - 480px), 0px, -100px)',
                    widthSlide = +width * 1;
                    txStore = +storeValue[numClick][slideIndex - 2].tx.split('%')[0]; //текущий
                    tzStore  = +storeValue[numClick][slideIndex - 2].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}%  - ${widthSlide}px), 0, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 2].style.zIndex = +storeValue[3][slideIndex - 2].zIndex;
                    slides[slideIndex - 2].style.width = width + 'px';
                    slides[slideIndex - 2].style.transform = trans;

                    // картинка 3 смещение slideIndex=2 storeValue берем из click2 из предыдущего 
                    // translate3d: 'translate3d(calc(-9.25% - 480px), 0px, -100px)',
                    widthSlide = +width * 2
                    txStore = +storeValue[numClick][slideIndex - 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick][slideIndex - 1].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}%  - ${widthSlide}px), 0, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 1].style.zIndex = +storeValue[numClick][slideIndex - 1].zIndex;
                    slides[slideIndex - 1].style.width = width + 'px';
                    slides[slideIndex - 1].style.transform = trans;
                    break;
                }
                default: {}
            }
        } else {
            if (isTouchstart) {
                isTrigger = true;
                let scale2 = 2 * scaleTrigger - scale;
                scale2 = scale2 > 1 ? 1 : scale2;   
                let numClick = slideIndex;   
                widthSlide = +width * slideIndex;                          
                switch (slideIndex) {
                    case 0: { //slideIndex = 0
                        //картинка 1 slideIndex = 0
                        if (slideIndex < storeValue.length - 1) {
                            // 1
                            let ty = -(Math.abs(2 * tyTriger) -  Math.abs((+height - scale * +height) / 2 * 100 / height));
                            ty = ty > 0 ? 0 : ty;
                            let tz = storeValue[numClick + 1][slideIndex].tz;

                            delta = (X * width / denominator0) - (X1 * width / denominator0);
                            X0 = X1 * width / denominator0 - delta;
                            let txStore = +storeValue[numClick + 1][slideIndex].tx.split('%')[0];
                            X0 = X0 < txStore ? X0 : txStore;
                            
                            let rotateZ = storeValue[numClick+1][slideIndex].rotateZ;
                            trans = `translate3d(calc(${X0}% - ${widthSlide}px), ${ty}%, ${tz})` + `rotateZ(${rotateZ})` + ` scale(${scale2})`;   
                            slides[slideIndex].style.transform  = trans;   

                            initSelectSlideFunc(slideIndex + 1, numClick + 1);
                            initZindexFunc(numClick + 1);   
                        }            
                        slides[slideIndex].style.width = width + 'px'; 
                        break;
                    }
                    case 1: { //slideIndex = 1
                        //картинка 2 slideIndex = 1
                        if (slideIndex < storeValue.length - 1) {
                            // 2
                            let ty = -(Math.abs(2 * tyTriger) - Math.abs((+height - scale * +height) / 2 * 100 / height));
                            ty = ty > 0 ? 0 : ty;
                            let tz = storeValue[numClick + 1][slideIndex].tz;
 
                            delta = (X * width / denominator0) - (X1 * width / denominator0);
                            X0 = X1 * width / denominator0 - delta;
                            let txStore = +storeValue[numClick + 1][slideIndex].tx.split('%')[0];
                            X0 = X0 < txStore ? X0 : txStore;
                            let rotateZ = storeValue[numClick+1][slideIndex].rotateZ;

                            trans =  `translate3d(calc(${X0}% - ${widthSlide}px), ${ty}%, ${tz})` + `rotateZ(${rotateZ})` + `scale(${scale2})`; 
                            slides[slideIndex].style.transform  = trans;   

                            initSelectSlideFunc(slideIndex + 1, numClick + 1);
                            initZindexFunc(numClick + 1);                            
                        }            
                        slides[slideIndex].style.width = width + 'px'; 
                        break;
                    }
                    case 2: { //slideIndex = 3
                        //картинка 3
                        if (slideIndex < storeValue.length - 1) {
                            // 3
                            let ty = -(Math.abs(2 * tyTriger) - Math.abs((+height - scale * +height) / 2 * 100 / height));
                            ty = ty > 0 ? 0 : ty;

                            let rotateZ = storeValue[numClick+1][slideIndex].rotateZ;
                            let tz = storeValue[numClick + 1][slideIndex].tz;                            

                            delta = (X * width / denominator0) - (X1 * width / denominator0);
                            X0 = X1 * width / denominator0 - delta;
                            let txStore = +storeValue[numClick + 1][slideIndex].tx.split('%')[0];
                            X0 = X0 < txStore ? X0 : txStore;
                            trans = `translate3d(calc(${X0}% - ${widthSlide}px), ${ty}%, ${tz})` + `rotateZ(${rotateZ})` + `scale(${scale2})`; 
                            slides[slideIndex].style.transform  = trans;

                            initSelectSlideFunc(slideIndex + 1, numClick + 1); 
                            initZindexFunc(numClick + 1);                            
                        }            
                        slides[slideIndex].style.width = width + 'px'; 
                        break;
                    }
                    case 3: {
                        isTrigger = false;
                    }
                    default:
                }
            }            
        }
    }

    function moveAtPrev(X) {
        let scale = 1 - Math.abs(X * 0.001);
        let widthSlide=0, delta=0;

        let denominator3 = 1920 * coeff;

        let trans;
        isNext = false;
        isPrev = true;

        if (X > (+width / 3) ) { // тригер срабывания смены слайда
            isTrigger = true;
        } else {
            isTrigger = false;
        }        
        
        if (X < (+width / 2 / coeff )) {
            let tz1, ty, tz;
            switch(slideIndex) {
                case 3: { //клик 3 slideIndex = 3
                    //картинка 4 двидгаем двигаем slideIndex = 3
                    let numClick = 3;
                    X1 = X;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator3;

                    let tzStore = +storeValue[numClick - 1][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;

                    trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tz}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                    slides[slideIndex].style.zIndex = '4';
                    slides[slideIndex].style.width = width + 'px';
                    slides[slideIndex].style.transform = trans;
                    // СМЕЩЕНИЕ
                    //картинка 3 смещение click3 slideIndex = 3 
                    widthSlide = +width * 2;
                    ty = 0;
                    let txStore = +storeValue[numClick][slideIndex - 1].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex - 1].tz.split('px')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}%  - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 1].style.zIndex = +storeValue[numClick][slideIndex - 1].zIndex;
                    slides[slideIndex - 1].style.width = width + 'px';
                    slides[slideIndex - 1].style.transform = trans;

                    //картинка 2 смещение
                    widthSlide = +width;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex - 2].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick][slideIndex - 2].tz.split('px')[0];//текущий
                    
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 2].style.zIndex = +storeValue[numClick][slideIndex - 2].zIndex;
                    slides[slideIndex - 2].style.width = width + 'px';
                    slides[slideIndex - 2].style.transform = trans;

                    // //картинка 1 смещение
                    widthSlide = 0;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex - 3].tx.split('%')[0];  //текущий
                    tzStore = +storeValue[numClick][slideIndex - 3].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 3].style.zIndex = +storeValue[numClick][slideIndex - 3].zIndex;
                    slides[slideIndex - 3].style.width = width + 'px';
                    slides[slideIndex - 3].style.transform = trans;
                    break;
                }
                case 2: { //клик 2 slideIndex = 2
                    //картинка 3 - двидгаем slideIndex=2
                    let numClick = 2;
                    X1 = X;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator3;

                    let tzStore = +storeValue[numClick - 1][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;

                    trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tz}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                    slides[slideIndex].style.zIndex = '4';
                    slides[slideIndex].style.width = width + 'px';
                    slides[slideIndex].style.transform = trans;

                    // СМЕЩЕНИЕ click2 - [1] slideIndex=1 берем из click1 из предыдущего
                    // СМЕЩЕНИЕ картинка 4 предыдущая
                    widthSlide = +width * 3;
                    ty = 0;
                    let txStore = +storeValue[numClick][slideIndex + 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick - 1][slideIndex + 1].tz.split('px')[0];//новый
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex + 1].style.zIndex = +storeValue[numClick][slideIndex + 1].zIndex;
                    slides[slideIndex + 1].style.width = width + 'px';
                    slides[slideIndex + 1].style.transform = trans;

                    //картинка 2 смещение следующая
                    widthSlide = +width;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex - 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick][slideIndex - 1].tz.split('px')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(-9.25% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 1].style.zIndex = +storeValue[numClick][slideIndex - 1].zIndex;
                    slides[slideIndex - 1].style.width = width + 'px';
                    slides[slideIndex - 1].style.transform = trans;

                    //картинка 1 смещение
                    widthSlide = 0;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex - 2].tx.split('%')[0];  //текущий
                    tzStore = +storeValue[numClick][slideIndex - 2].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 2].style.zIndex = +storeValue[numClick][slideIndex - 2].zIndex;
                    slides[slideIndex - 2].style.width = width + 'px';
                    slides[slideIndex - 2].style.transform = trans;
                    break;
                }
                case 1: { //click1 slideIndex = 1
                    //картинка 2 - двигаем 
                    let numClick = 1;
                    X1 = X;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator3;

                    let tzStore = +storeValue[numClick - 1][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;

                    trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tz}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                    // slides[slideIndex].style.zIndex = '4';
                    slides[slideIndex].style.width = width + 'px';
                    slides[slideIndex].style.transform = trans;

                    // СМЕЩЕНИЕ click2 - [1] slideIndex=1 берем из click1 из предыдущего
                    // СМЕЩЕНИЕ картинка 4
                    widthSlide = +width * 3;
                    ty = 0;
                    let txStore = +storeValue[numClick][slideIndex + 2].tx.split('%')[0];  //текущий
                    tzStore = +storeValue[numClick][slideIndex + 2].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz; 
                    trans =  `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tzStore}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex + 2].style.zIndex = +storeValue[numClick][slideIndex + 2].zIndex;
                    slides[slideIndex + 2].style.width = width + 'px';
                    slides[slideIndex + 2].style.transform = trans;

                    // СМЕЩЕНИЕ картинка 3 предыдущая
                    widthSlide = +width * 2;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex + 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick-1][slideIndex + 1].tz.split('px')[0];//новый
                    trans =  `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tzStore}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex + 1].style.zIndex = +storeValue[numClick][slideIndex + 1].zIndex;
                    slides[slideIndex + 1].style.width = width + 'px';
                    slides[slideIndex + 1].style.transform = trans;

                    // СМЕЩЕНИЕ картинка 1 следующая
                    widthSlide = 0;
                    ty = 0;
                    txStore = +storeValue[numClick][slideIndex - 1].tx.split('%')[0]; //текущий
                    tzStore = +storeValue[numClick][slideIndex - 1].tz.split('px')[0]; //текущий
                    tz1 = tzStore - tz; 
                    trans =  `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}px, ${tzStore}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex - 1].style.zIndex = +storeValue[numClick][slideIndex - 1].zIndex;
                    slides[slideIndex - 1].style.width = width + 'px';
                    slides[slideIndex - 1].style.transform = trans;
                    break;
                }
                case 0: { //click0 slideIndex = 0
                    //картинка 1 - стоит  
                    let numClick = 0;
                    X1 = X;
                    isTrigger = false;
                    scaleTrigger = scale;
                    ty = -(+height - scale * +height) / 2 * 100 / height;
                    tyTriger = ty;
                    widthSlide = +width * slideIndex;
                    let X_0 = X * width / denominator3;

                    let tzStore = +storeValue[numClick][slideIndex].tz.split('px')[0];
                    tz = Math.abs(X / 5) > Math.abs(tzStore) ? Math.abs(tzStore) : Math.abs(X / 5);
                    tz = -1 * tz;
                    if (X < 120) {                        
                        trans = `translate3d(calc(${X_0}% - ${widthSlide}px), ${ty}%, ${tzStore}px)` + 'rotateZ(0)' + `scale(${scale})`;   
                        slides[slideIndex].style.zIndex = '4';
                        slides[slideIndex].style.width = width + 'px';
                        slides[slideIndex].style.transform = trans;
                    }
                    // СМЕЩЕНИЕ
                    //картинка 2 смещение click1 slideIndex=0
                    widthSlide = +width * 1;
                    ty = 0;
                    tzStore = +storeValue[numClick][slideIndex + 1].tz.split('px')[0]; //текущий 
                    let txStore = +storeValue[numClick][slideIndex + 1].tx.split('%')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + ` scale(1)`;
                    slides[slideIndex + 1].style.zIndex = '3';
                    slides[slideIndex + 1].style.width = width + 'px';
                    slides[slideIndex + 1].style.transform = trans;

                    //картинка 3 смещение
                    widthSlide = +width * 2;
                    txStore = +storeValue[numClick][slideIndex + 2].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex + 2].tz.split('px')[0];//текущий
                    tz1 = tzStore - tz;
                    trans = `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + ` scale(1)`;
                    slides[slideIndex + 2].style.zIndex = '2';
                    slides[slideIndex + 2].style.width = width + 'px';
                    slides[slideIndex + 2].style.transform = trans;

                    //картинка 4 смещение
                    txStore = +storeValue[numClick][slideIndex + 3].tx.split('%')[0];//текущий
                    tzStore = +storeValue[numClick][slideIndex + 3].tz.split('px')[0];//текущий
                    widthSlide = +width * 3;
                    tz1 = tzStore - tz;   

                    trans =  `translate3d(calc(${txStore}% - ${widthSlide}px), ${ty}%, ${tz1}px)` + 'rotateZ(0)' + `scale(1)`;
                    slides[slideIndex+3].style.zIndex = '1';
                    slides[slideIndex+3].style.width = width + 'px';
                    slides[slideIndex+3].style.transform = trans;
                    break;
                }
                default: {}
            }
        } else {
            if (isTouchstart) {
                switch (slideIndex) {
                    case 3: { //slideIndex=3
                        //картинка 4
                        isTrigger = true;
                        let scale2 = 2 * scaleTrigger - scale;
                        scale2 = scale2 > 1 ? 1 : scale2;
                        let numClick = slideIndex;
                        widthSlide = +width * 3;
                        if (slideIndex <= storeValue.length - 1) {
                            // 4
                            let ty = -(Math.abs(2 * tyTriger) -  Math.abs((+height - scale * +height) / 2 * 100 / height));
                            // let ty = -(+height - scale2 * +height) / 2 * 100 / height;

                            let rotateZ = storeValue[numClick - 1][slideIndex].rotateZ;
                            let tz = storeValue[numClick - 1][slideIndex].tz;
                            
                            delta = (X * width / denominator3) - (X1 * width / denominator3);
                            X0 = X1 * width / denominator3 - delta;

                            trans = `translate3d(calc(${X0}% - ${widthSlide}px), ${ty}%, ${tz})` + `rotateZ(${rotateZ})` + `scale(${scale2})`;                         
                            slides[slideIndex].style.transform  = trans;
                            
                            initSelectSlideFunc(slideIndex - 1, numClick - 1);
                            initZindexFunc(numClick - 1);                             
                        }   
                        slides[slideIndex].style.width = width + 'px'; 
                        break;
                    }
                    case 2: { //slideIndex=2
                        //картинка 3
                        isTrigger = true;
                        let scale2 = 2 * scaleTrigger - scale * 1.15;
                        scale2 = scale2 > 1 ? 1 : scale2;
                        let numClick = slideIndex;
                        widthSlide = +width * 2;
                        if (slideIndex <= storeValue.length - 1) {
                            // 3
                            // let ty = -(Math.abs(2 * tyTriger) -  Math.abs((+height - scale * +height) / 2 * 100 / height));
                            let ty = -(+height - scale2 * +height) / 2 * 100 / height;

                            let rotateZ = storeValue[numClick - 1][slideIndex].rotateZ;
                            let tz = storeValue[numClick - 1][slideIndex].tz;
        
                            delta = (X * width / denominator3) - (X1 * width / denominator3);
                            X0 = X1 * width / denominator3 - delta;
                            trans = `translate3d(calc(${X0}% - ${widthSlide}px), ${ty}%, ${tz})` + `rotateZ(${rotateZ})` + `scale(${scale2})`;                         
                            slides[slideIndex].style.transform  = trans;

                            initSelectSlideFunc(slideIndex - 1, numClick - 1);
                            initZindexFunc(numClick - 1);
                        }   
                        slides[slideIndex].style.width = width + 'px'; 
                        break;
                    }
                    case 1: { //slideIndex=1
                        //картинка 2
                        isTrigger = true;
                        let scale2 = 2 * scaleTrigger - scale;
                        scale2 = scale2 > 1 ? 1 : scale2;
                        let numClick = slideIndex;
                        widthSlide = +width;
                        
                        if (slideIndex <= storeValue.length - 1) {
                            // 3
                            let ty = -(Math.abs(2 * tyTriger) - Math.abs((+height - scale * +height) / 2 * 100 / height));

                            let rotateZ = storeValue[numClick - 1][slideIndex].rotateZ;
                            let tz = storeValue[numClick - 1][slideIndex].tz;

                            delta = (X * width / denominator3) - (X1 * width / denominator3);
                            X0 = X1 * width / denominator3 - delta;                            
                            trans = `translate3d(calc(${X0}% - ${widthSlide}px), ${ty}%, ${tz})` + `rotateZ(${rotateZ})` + `scale(${scale2})`;                         
                            slides[slideIndex].style.transform  = trans;

                            initSelectSlideFunc(slideIndex - 1, numClick - 1);
                            initZindexFunc(numClick - 1);    
                        }   
                        slides[slideIndex].style.width = width + 'px'; 
                        break;
                    }
                    case 0: { //slideIndex=0
                        isTrigger = false;
                    }
                    default:
                }
            }
        }
    }

    window.addEventListener('resize', () => {
        initial();
        initFunc(0);
    });
}


export default swiperSlide;