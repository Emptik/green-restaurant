export default class Header {
    constructor() {
        this.headerElement = document.querySelector('.header');
        this.headerNavBarElement = document.querySelector('.header__navbar');
        this.headerClose = 'header--close';
        this.headerOpen = 'header--open';
        this.headerNavBarVisibility = 'header__navbar--visible';
    }

    displayHeader() {
        this.headerElement.classList.toggle(this.headerClose);
        this.headerElement.classList.toggle(this.headerOpen);
        this.headerNavBarElement.classList.toggle(this.headerNavBarVisibility);
    }
}
