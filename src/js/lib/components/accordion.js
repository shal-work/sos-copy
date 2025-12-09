import $ from '../core';

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


$.prototype.accordion = function(headActive = 'accordion-box_active', contentActive = 'accordion-btn_active' ) {

    for (let i = 0; i < this.length; i++) {


        $(this[i]).click(() => {
            let clickThis = this[i].classList.contains(headActive);
            //очищаем все 
            for (let j = 0; j <this.length; j++) {
                $(this[j]).removeClass(headActive);
                $(this[j].firstElementChild).removeClass(contentActive);
                this[j].lastElementChild.style.maxHeight = "0px";
            }
            //  если клик по отррытому проверить есть ли headActive
            if (!clickThis) {
                $(this[i]).toggleClass(headActive);
                $(this[i].firstElementChild).toggleClass(contentActive);

                if (this[i].classList.contains(headActive)) {
                    this[i].lastElementChild.style.maxHeight = '100vh';
                } else {
                    this[i].lastElementChild.style.maxHeight = "0";
                }
            }


        });
    }
};

$('.accordion-box').accordion();
