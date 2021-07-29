function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'none';
    document.body.style.overflow = '';
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
    
}

export default bindModal;
export {openModal};
export {closeModal};