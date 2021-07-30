const modals = () => {
    function openModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
    
        modal.style.display = 'flex';
        //document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
        modal.classList.add('animate__animated', 'animate__fadeIn');
    }
    
    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
    
        modal.style.display = 'none';
        //document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
        modal.classList.remove('animate__animated', 'animate__fadeIn');
    }
    
    function bindModal(triggerSelector, modalSelector) {
        const modalTrigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector);
    
        modalTrigger.forEach((btn, e) => {
            if (e.target) {
                e.preventDefault();
            }
            btn.addEventListener('click', () => openModal(modalSelector));
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '' || e.target.tagName == "STRONG") {
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
    
    bindModal('.popup_engineer_btn', '.popup_engineer');
    bindModal('.phone_link', '.popup');
    showModalByTime('.popup', 60000);
};

export default modals;