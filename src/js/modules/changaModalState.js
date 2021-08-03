import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function validation(item) {
        const form = document.querySelector('.popup_calc_content'),
              nextBtn = document.querySelector('.popup_calc_button'),
              inputValue = form.querySelectorAll('input');

        nextBtn.addEventListener('click', (e) => {
            console.log(item.length);
            if (item.length == 0) {

                let error = document.createElement('div');
            
                error.classList.add('status');
                error.innerHTML = 'Заполните все поля!';
                inputValue.forEach((input) => {
                    input.style.border = "1px solid red";
                });
                form.append(error);
            } 
        });
        return item;
     }
    validation();

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox') {
                            //i === 0 ? state[prop] = 'Холодное' : state[prop] = "Теплое";
                            if (i === 0) {
                                state[prop] = 'Холодное';
                            } else {
                                state[prop] = "Теплое";
                            }
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            
                            state[prop] = item.value;
                            validation(state.height);                            
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('click', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;