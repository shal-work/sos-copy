/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// $.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
//     for (let i = 0; i < this.length; i++) {
//         $(this[i]).click(() => {
//             $(this[i]).toggleClass(headActive);
//             $(this[i].nextElementSibling).toggleClass(contentActive);

//             if (this[i].classList.contains(headActive)) {
//                 this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
//             } else {
//                 this[i].nextElementSibling.style.maxHeight = "0px";
//             }
//         });
//     }
// };

// $('.accordion-head').accordion();


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function(headActive = 'accordion-box_active', contentActive = 'accordion-btn_active' ) {

    for (let i = 0; i < this.length; i++) {


        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
            let clickThis = this[i].classList.contains(headActive);
            //очищаем все 
            for (let j = 0; j <this.length; j++) {
                Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[j]).removeClass(headActive);
                Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[j].firstElementChild).removeClass(contentActive);
                this[j].lastElementChild.style.maxHeight = "0px";
            }
            //  если клик по отррытому проверить есть ли headActive
            if (!clickThis) {
                Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
                Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].firstElementChild).toggleClass(contentActive);

                if (this[i].classList.contains(headActive)) {
                    this[i].lastElementChild.style.maxHeight = '100vh';
                } else {
                    this[i].lastElementChild.style.maxHeight = "0";
                }
            }


        });
    }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-box').accordion();


/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const trigger = this[i].getAttribute('data-toggle-trigger'); //вариант урока
        // const id = this[i].getAttribute('id').replace(/(-?(\D+\.\D+)|(\D+))/, ''); //("drop:26.2_d5").replace выдает 26.2_d5

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
            Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle="${trigger}"]`).fadeToggle(800);
        });
    }
};


/***/ }),

/***/ "./src/js/lib/components/observer.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/observer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const options = {
	rootMargin: '-10px'
};
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
		// console.log(entry.target.classList);
		let containerInner = entry.target.querySelectorAll('[data-animated]');
		if (entry.isIntersecting ) {
			containerInner.forEach(function(item) {
				// console.log(item);
				let setaDataAimated = item.dataset.animated;
				// console.log(setaDataAimated);
				item.classList.add('animated');
				item.classList.add(setaDataAimated);
			})
			return; // если класс добавлен, продолжать уже не надо
		}
		containerInner.forEach(function(item) {
			let setaDataAimated = item.dataset.animated;
			item.classList.remove('animated');
			item.classList.remove(setaDataAimated);
		});
	});
}, options);

// Сообщить наблюдателю, какие элементы следует отслеживать
try {
	observer.observe(document.querySelector('.container-our-bread-collection'));
	observer.observe(document.querySelector('.container-wholesale__container'));
} catch (error) {}
try {
	observer.observe(document.querySelector('#baking'));
	observer.observe(document.querySelector('#baking-img'));

} catch (error) {}
try {
	observer.observe(document.querySelector('#contact-page'));
} catch (error) {}


// Пример записи:
// в html: 
// <div class="container-wholesale__container" id="craft">
// 		<div class="container-inner" data-animated = "fadeInUp">
//</div>
// в js:
//observer.observe(document.querySelector('.container-wholesale__container'));
// или
//observer.observe(document.getElementById('craft'));
//observer.observe(document.querySelector('#craft'));

/***/ }),

/***/ "./src/js/lib/components/store.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/store.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const element = {
	click0: [
		{ 
			zIndex: 4,
            translate3d: 'translate3d(0px, 0px, 0px)',
            tx: 0,
            tz: '0px',
            rotateZ: '0deg',
            scale:'1',
            name: '0-0',
		},
        { 
            zIndex: 3,
            translate3d: 'translate3d(calc(9.25% - 480px), 0px, -100px)',
            tx: '9.25%',
            tz: '-100px',
            rotateZ: '0deg',
            scale:'1',
            name: '0-1'
        },
        { 
            zIndex: 2,
            translate3d: 'translate3d(calc(17% - 960px), 0px, -200px)',
            tx: '17%',
            tz: '-200px',
            rotateZ: '0deg',
            scale:'1',
            name: '0-2'           
        },
        { 
            zIndex: 1,
            translate3d: 'translate3d(calc(23.25% - 1440px), 0px, -300px)',
            tx: '23.25%',
            tz: '-300px',
            rotateZ: '0deg',
            scale:'1',
            name: '0-3'            
        }
    ],
	click1: [
            { 
                zIndex: 3,
                translate3d: 'translate3d(calc(-9.25% + 0px), 0px, -100px)',
                tx: '-9.25%',
                tz: '-100px',
                rotateZ: '0deg',
                scale:'1',
                name: '1-0'                
            },
            { 
                zIndex: 4,
                translate3d: 'translate3d(-480px, 0px, 0px)',
                tx: -480,
                tz: '0px',
                rotateZ: '0deg',
                scale:'1',
                name: '1-1'                                
            },
            { 
                zIndex: 3,
                translate3d: 'translate3d(calc(9.25% - 960px), 0px, -100px)',
                tx: '9.25%',
                tz: '-100px',
                rotateZ: '0deg',
                scale:'1',
                name: '1-2'                                  
            },
            { 
                zIndex: 2,
                translate3d: 'translate3d(calc(17% - 1440px), 0px, -200px)',
                tx: '17%',
                tz: '-200px',
                rotateZ: '0deg',
                scale:'1',
                name: '1-3'                                 
            },
    ],
	click2: [
            { 
                zIndex: 2,
                translate3d: 'translate3d(calc(-17% + 0px), 0px, -200px)',
                tx: '-17%',
                tz: '-200px',
                rotateZ: '0deg',
                scale:'1'                                    
            },
            { 
                zIndex: 3,
                translate3d: 'translate3d(calc(-9.25% - 480px), 0px, -100px)',
                tx: '-9.25%',
                tz: '-100px',
                rotateZ: '0deg',
                scale:'1',
                name: '2-1'                          
            },
            { 
                zIndex: 4,
                translate3d: 'translate3d(-960px, 0px, 0px)',
                tx: -960,
                tz: '0px',
                rotateZ: '0deg',
                scale:'1',
                name: '2-2'                                   
            },
            { 
                zIndex: 1,
                translate3d: 'translate3d(calc(9.25% - 1440px), 0px, -100px)',
                tx: '9.25%',
                tz: '-100px',
                rotateZ: '0deg',
                scale:'1',
                name: '2-3'                                  
            },
    ],
    click3: [
            { 
                zIndex: 1,
                translate3d: 'translate3d(calc(-23.25% + 0px), 0px, -300px)',
                tx: '-23.25%',
                tz: '-300px',
                rotateZ: '0deg',
                scale:'1',
                name: '3-0'                                  
            },
            { 
                zIndex: 2,
                translate3d: 'translate3d(calc(-17% - 480px), 0px, -200px)',
                tx: '-17%',
                tz: '-200px',
                rotateZ: '0deg',
                scale:'1',
                name: '3-1'                                   
            },
            { 
                zIndex: 3,
                translate3d: 'translate3d(calc(-9.25% - 960px), 0px, -100px)',
                tx: '-9.25%',
                tz: '-100px',
                rotateZ: '0deg',
                scale:'1',
                name: '3-2'                 
            },
            { 
                zIndex: 4,
                translate3d: 'translate3d(-1440px, 0px, 0px)',
                tx: -1440,
                tz: '0px',
                rotateZ: '0deg',
                scale:'1',
                name: '3-3' 
            },
    ]

}

/* harmony default export */ __webpack_exports__["default"] = (element);

/***/ }),

/***/ "./src/js/lib/components/swiper-slide.js":
/*!***********************************************!*\
  !*** ./src/js/lib/components/swiper-slide.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/store */ "./src/js/lib/components/store.js");




const swiperSlide = () => {
    const parent = document.querySelector('.second__slider-cards.carousel')
    const slides = parent.querySelectorAll('.carousel__item');
    const slidesField = parent.querySelector('.carousel__slides');
    const dots = parent.querySelectorAll('.carousel__indicators span');

    const storeValue = Object.values(_components_store__WEBPACK_IMPORTED_MODULE_1__["default"]);//делаем массив из объекта    
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
        width = window.getComputedStyle(slides[0]).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
        height = window.getComputedStyle(slides[0]).height.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000;
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

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-slide="next"]').click((e) => {
        e.preventDefault();
        dataSlideNext();
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-slide="prev"]').click((e) => {
        e.preventDefault();
        dataSlidePrev();
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.second__slider-cards .carousel__indicators span').click(e => {
        
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

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.swiper-slide-visible.carousel__item').on('mousedown', (e) => {
        e.preventDefault();
        isTouchstart = true;
        onmouseup = true;
        shiftX = e.pageX;
        X0 = 0;
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.second__container').on('mousemove', (e) => {
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
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.second.bg').on('mouseup', (e) => {
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

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.swiper-slide-visible.carousel__item').on('touchstart', (e) => {
        e.preventDefault();
        isTouchstart = true;
        onmouseup = true;
        shiftX = e.touches[0].clientX;
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.swiper-slide-visible.carousel__item').on('touchmove', (e) => {
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
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.swiper-slide-visible.carousel__item').on('touchend', (e) => {
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
}


/* harmony default export */ __webpack_exports__["default"] = (swiperSlide);

/***/ }),

/***/ "./src/js/lib/components/swiper.js":
/*!*****************************************!*\
  !*** ./src/js/lib/components/swiper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");



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

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-swiper="next"]').click((e) => {
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

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-swiper="prev"]').click((e) => {
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

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.swiper-first .carousel__indicators span').click(e => {
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


/* harmony default export */ __webpack_exports__["default"] = (swiper);

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_hendlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hendlers */ "./src/js/lib/modules/hendlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/observer */ "./src/js/lib/components/observer.js");
/* harmony import */ var _components_observer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_observer__WEBPACK_IMPORTED_MODULE_9__);

 //show, hide, toggle
//addClass, removeClass, toggleClass
// on, off, click
//setAttribute, removeAttribute, toggleAttribute
//html, eq, index, find, siblings
//






/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

/*
    $.prototype.html-
    Метод для замены, полученной HTML
    структуры внутри элемента.
    Если контента передан, то заменяем контент,
    если аргументов нет, то получаем контент
    $('button').html('Привет');
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

/*
    $.prototype.eq -
    Получаем объект по номеру,
    т.е. получаем один элемент как самостоятельный объект,
    а не  элемент часть объекта
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

/*
    $.prototype.index-
    Получение номера элемента по порядку среди элементов
    у одного родителя
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    // function findMyIndex (item) {
    //     return item == this[0];
    // };

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

/*
    Найти элементы по селектору внутри уже найденных.
*/
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// X.closest(Y) возвращает элементы X с ближайшим общим родительским элементом (Y) (или сам элемент)
// console.log($('.some').closest('.findme')); - найти все .some с родителем .findme, если не найдено вернуть сам элемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        let this1 = this[i].closest(selector);
        if(!this1) { //мое условие
            // this[i] = 'classNull';
            return this;
        }
        this[i] = this1;
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};


/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        // debugger
        if (!this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].removeAttribute(attributeName);
        }
    }
    return this;
};


// $.prototype.toggleAttribute = function (attributeName, value) {
//     for (let i = 0; i < this.length; i++) {

//         if (this[i].hasAttribute(attributeName)) {
//             this[i].removeAttribute(attributeName);
//         } else {
//             this[i].setAttribute(attributeName, value);
//         }
//     }

//     return this;
// };

//новые 15.10.2025, так как работает выше, после удаления артибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleBooleanAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            if (this[i].getAttribute(attributeName) == 'false') {
                this[i].setAttribute(attributeName, true);
            } else {
                this[i].setAttribute(attributeName, false);
            }          
        }
    }
    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleChangeAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) { //можно не проверять, работает
            this[i].setAttribute(attributeName, value);        
        }
    }
    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function(classNames){

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function(display) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = display || '';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function(display) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = display || '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};

// toggle style overflow 
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleOverflow = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.overflow === 'hidden') {
            this[i].style.overflow = '';
        } else {
            this[i].style.overflow = 'hidden';
        }
    }

    return this;
};   

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addOverflow = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.overflow = 'hidden';
    }
    return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.offOverflow = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.overflow = '';
    }
    return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function(dur, display, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        this.fadeInBody(dur, display, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function(dur, fin) { //Д.З.4-8
    
    for (let i = 0; i < this.length; i++) {
        this.fadeOutBody(dur, fin, i);
    }

    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function(dur, display, fin) { //Д.З.4-8
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this.fadeInBody(dur, display, fin, i);
        } else {
            this.fadeOutBody(dur, fin, i);
        }
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeInBody = function(dur, display, fin, i) { //Д.З.4-8
    
    this[i].style.display = display || 'block';
    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };
    
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
    
    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOutBody = function(dur, fin, i) { //Д.З.4-8
    
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
            this[i].style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);

    return this[i];
}


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};








/***/ }),

/***/ "./src/js/lib/modules/hendlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/hendlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


// Реазизация
// $('.food-2 a').on('click',() => {
//     $('.modal-dialog').fadeIn(180);
// });
// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');  
// });

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};






/***/ }),

/***/ "./src/js/lib/site/main.js":
/*!*********************************!*\
  !*** ./src/js/lib/site/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/swiper */ "./src/js/lib/components/swiper.js");
/* harmony import */ var _components_swiper_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/swiper-slide */ "./src/js/lib/components/swiper-slide.js");



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

    Object(_components_swiper__WEBPACK_IMPORTED_MODULE_0__["default"])(window.innerWidth);
    Object(_components_swiper_slide__WEBPACK_IMPORTED_MODULE_1__["default"])();

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



window.addEventListener('resize', () => {
    window.location.reload(); 
    if (window.screen.availWidth < 1199.98) {
        changeHeader_1199();
    }
    else {
        try {
            changeHeader();
        } catch (error) {}
    }  
});


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
/* harmony import */ var _lib_site_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/site/main.js */ "./src/js/lib/site/main.js");





console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map