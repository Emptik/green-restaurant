export default class Header {
    constructor(
        toggleElement,
        headerElement,
        headerNavBarElement,
        headerClose,
        headerOpen,
        headerNavBarVisibility,
    ) {
        this.toggleElement = toggleElement;
        this.headerElement = headerElement;
        this.headerNavBarElement = headerNavBarElement;
        this.headerClose = headerClose;
        this.headerOpen = headerOpen;
        this.headerNavBarVisibility = headerNavBarVisibility;
    }

    initializeEventHandler() {
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
