const images = () => {
    const imgPopup = document.createElement('div'),         
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          images = workSection.querySelectorAll('img');
    
    imgPopup.classList.add('popup', 'animate__animated', 'animate__fadeIn');
    bigImg.classList.add('popup_content');
    imgPopup.append(bigImg);
    document.body.append(imgPopup);  

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target.tagName == "IMG") {
            images.forEach((item, i) => {
                if (e.target === item) {
                    imgPopup.style.display = 'block';
                    bigImg.style.cssText = `
                        min-height: 720px;
                        min-width: 720px;
                        background: url(assets/img/our_works/big_img/${i+1}.png) center center / cover no-repeat;
                    `;
                }
                
            });
        } 
    });

    imgPopup.addEventListener('click', (e) => {
        if (e.target === imgPopup) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;