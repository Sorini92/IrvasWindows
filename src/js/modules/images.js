const images = () => {
    const imgPopup = document.createElement('div'),         
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');
    
    imgPopup.classList.add('popup', 'animate__animated', 'animate__fadeIn');
    bigImg.classList.add('popup_content');
    //imgPopup.style.display = 'flex';
    /* bigImg.style.cssText = `
    min-height: 540px;
    min-width: 720px;
    top: 20%;
    background: url(assets/img/our_works/big_img/1.png) center center no-repeat;
    `; */
    imgPopup.append(bigImg);
    document.body.append(imgPopup);  

    console.log(workSection);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);

        const images = workSection.querySelectorAll('img');
        
        if (e.target.tagName == "IMG") {
            images.forEach((item, i) => {
                i = e.target;

                console.log(i);
                imgPopup.style.display = 'flex';
                bigImg.style.cssText = `
                    min-height: 540px;
                    min-width: 720px;
                    top: 20%;
                    background: url(assets/img/our_works/big_img/${i}.png) center center no-repeat;
                `;
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