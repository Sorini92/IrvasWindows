import calcScroll from './calcScroll';

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector),
          scroll = calcScroll();

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    //document.body.classList.add('modal-open');
    document.body.style.marginRight = `${scroll}px`;
    modal.classList.add('animate__animated', 'animate__fadeIn');
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector),
    windows = document.querySelectorAll('[data-modal]');

    modal.style.display = 'none';
    document.body.style.overflow = '';
    //document.body.classList.remove('modal-open');
    document.body.style.marginRight = `0px`;
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
                openModal('.pop');
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
    
        window.addEventListener('scroll', showModalByScroll);
    }
    
    function showModalByTime (selector, time) {
        setTimeout(() => openModal(selector), time);
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer');
    bindModal('.phone_link', '.pop');
    bindModal('.popup_calc_btn', '.popup_calc');
    bindModal('.popup_calc_button', '.popup_calc_profile', false);    
    bindModal('.popup_calc_profile_button', '.popup_calc_end', false);
    showModalByTime('.pop', 60000);
};

export {closeModal};
export default modals;