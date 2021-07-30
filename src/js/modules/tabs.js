const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animate__animated', 'animate__zoomIn');
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 2) {
        content[i].style.display = 'block';
        content[i].classList.add('animate__animated', 'animate__zoomIn');
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();    

    header.addEventListener('click', (e) => {
        let target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        }
    });
};

export default tabs;