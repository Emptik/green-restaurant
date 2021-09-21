export default class Header {
    constructor() {
        this.toggleElement = document.querySelector('.toggle--clicked');
        this.headerElement = document.querySelector('.header--targeted');
        this.headerNavBarElement = document.querySelector('.header__navbar--targeted');
        this.headerClose = 'header--close';
        this.headerOpen = 'header--open';
        this.headerNavBarVisibility = 'header__navbar--visible';
    }

    addEventHandler() {
        this.toggleElement.addEventListener('click', () => {
            this.displayHeader();
        });
    }

    displayHeader() {
        this.headerElement.classList.toggle(this.headerClose);
        this.headerElement.classList.toggle(this.headerOpen);
        this.headerNavBarElement.classList.toggle(this.headerNavBarVisibility);
    }
}
