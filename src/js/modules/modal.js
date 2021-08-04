function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'flex';
    //document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    modal.classList.add('animate__animated', 'animate__fadeIn');
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector),
    windows = document.querySelectorAll('[data-modal]');

    modal.style.display = 'none';
    //document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    modal.classList.remove('animate__animated', 'animate__fadeIn');

    windows.forEach((item) => {
        item.style.display = 'none';
    });
}

const modals = () => {   
    function bindModal(triggerSelector, modalSelector, closeClickOverlay = true) {
        const modalTrigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              windows = document.querySelectorAll('[data-modal]');
        
        modalTrigger.forEach((btn, e) => {
            btn.addEventListener('click', () => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach((item) => {
                    item.style.display = 'none';
                });

                openModal(modalSelector);
            });
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay || e.target.getAttribute('data-close') == '' || 
            e.target.tagName == "STRONG") {
                closeModal(modalSelector);
            }
        });

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal('.popup');
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
    
        window.addEventListener('scroll', showModalByScroll);
    }
    
    function showModalByTime (selector, time) {
        setTimeout(() => openModal(selector), time);
    }

    

    /* const error = (formSelector) => {
        const form = document.querySelector(formSelector),
              firstInput = form.querySelector('#height'),
              secondInput = form.querySelector('#width'); 
              inputs = form.querySelectorAll('input');
        
        inputs.forEach((item) => {
            console.log(item);
            item.addEventListener('input', () => {
                if (item.value.length == 0) {
                    item.style.border = "1px solid red"; 
                    console.log(item.value.length);                       
                } else {
                    item.style.border = "none";
                    console.log(item.value.length);
                    //bindModal('.popup_calc_button', '.popup_calc_profile', false); 
                }
                if (item.value.length != 0) {
                    bindModal('.popup_calc_button', '.popup_calc_profile', false);
                }
            });
        }); */

        
        
        /* firstInput.addEventListener('input', () => {
            if (firstInput.value.length == 0) {
                firstInput.style.border = "1px solid red"; 
                console.log(firstInput.value.length);                       
            } else {
                firstInput.style.border = "none";
                console.log(firstInput.value.length);
                //bindModal('.popup_calc_button', '.popup_calc_profile', false); 
            }
        });

        secondInput.addEventListener('input', () => {
            if (secondInput.value.length == 0) {
                secondInput.style.border = "1px solid red";   
                console.log(secondInput.value.length);                     
            } else {
                secondInput.style.border = "none";
                console.log(secondInput.value.length);
                //bindModal('.popup_calc_button', '.popup_calc_profile', false); 
            }     
        });

        if ((secondInput.value.length !== 0) && (firstInput.value.length !== 0)) {
            bindModal('.popup_calc_button', '.popup_calc_profile', false);
        }   */
    /* }; */

    
    bindModal('.popup_engineer_btn', '.popup_engineer');
    bindModal('.phone_link', '.popup');
    bindModal('.popup_calc_btn', '.popup_calc');
    bindModal('.popup_calc_button', '.popup_calc_profile', false);    
    bindModal('.popup_calc_profile_button', '.popup_calc_end', false);
    //showModalByTime('.popup', 60000);
};

export {closeModal};
export default modals;