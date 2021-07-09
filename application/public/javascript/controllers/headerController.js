import Header from '../views/HeaderView.js';

const headerController = () => {
    const toggleElement = document.querySelector('.c-toggle--clicked');
    const headerElement = document.querySelector('.c-header--targeted');
    const headerNavBarElement = document.querySelector('.c-header__navbar--targeted');
    const headerClose = 'c-header--close';
    const headerOpen = 'c-header--open';
    const headerNavBarVisibility = 'c-header__navbar--visible';

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
