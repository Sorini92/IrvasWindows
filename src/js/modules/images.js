import calcScroll from './calcScroll';

const images = () => {
    const imgPopup = document.createElement('div'),         
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          scroll = calcScroll();
    
    imgPopup.classList.add('popup', 'animate__animated', 'animate__fadeIn');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.appendChild(bigImg);
    workSection.appendChild(imgPopup);  

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target && e.target.classList.contains('preview')) {
            document.body.style.marginRight = `${scroll}px`;
            imgPopup.style.display = 'flex';
            bigImg.style.cssText = `
                        height: auto;
                        max-height: 80%;
                        width: auto;
                        max-width: 90%;
                        overflow: hidden;
                        justify-content: center;
                        align-items: center;
                    `;
            document.body.style.overflow = 'hidden';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        } 

        if (e.target && e.target.matches('div.popup')) {
            document.body.style.marginRight = `0px`;
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;