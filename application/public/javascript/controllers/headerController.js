import Header from '../views/HeaderView.js';

const headerController = () => {
    const toggleElement = document.querySelector('.c-toggle--clicked');
    const headerElement = document.querySelector('.header--targeted');
    const headerNavBarElement = document.querySelector('.header__navbar--targeted');
    const headerClose = 'header--close';
    const headerOpen = 'header--open';
    const headerNavBarVisibility = 'header__navbar--visible';

    const header = new Header(
        toggleElement,
        headerElement,
        headerNavBarElement,
        headerClose,
        headerOpen,
        headerNavBarVisibility,
    );
    header.initializeEventHandler();
};

headerController();
