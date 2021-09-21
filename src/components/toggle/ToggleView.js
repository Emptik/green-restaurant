export default class Toggle {
    constructor() {
        this.toggleIconBars = document.querySelector('.toggle__icon--bars');
        this.toggleIconCross = document.querySelector('.toggle__icon--cross');
        this.toggleElement = document.querySelector('.toggle');
        this.toggleClose = 'toggle__icon--close';
        this.toggleOpen = 'toggle__icon--open';
    }

    addEventHandler(togglePropagator) {
        this.toggleElement.addEventListener('click', () => {
            this.displayToggleIcons();
            togglePropagator();
        });
    }

    displayToggleIcons() {
        this.toggleIconCross.classList.toggle(this.toggleClose);
        this.toggleIconBars.classList.toggle(this.toggleOpen);
    }
}
