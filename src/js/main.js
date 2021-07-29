import "./slider";
import bindModal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    bindModal('.popup_engineer_btn', '.popup_engineer');
    bindModal('.phone_link', '.popup');
});