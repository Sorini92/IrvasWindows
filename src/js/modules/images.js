const images = () => {
    const imgPopup = document.createElement('div'),         
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');
    
    imgPopup.classList.add('popup', 'animate__animated', 'animate__fadeIn');
    bigImg.classList.add('popup_content');
    imgPopup.appendChild(bigImg);
    workSection.appendChild(imgPopup);  

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            bigImg.style.cssText = `
                        height: auto;
                        max-height: 70%;
                        width: auto;
                        max-width: 50%;
                        overflow: hidden;
                    `;
            document.body.style.overflow = 'hidden';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        } 

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;