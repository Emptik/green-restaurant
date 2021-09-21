export default class Toggle {
    constructor() {
        this.toggleIconBars = document.querySelector('.toggle__icon--barsTargeted');
        this.toggleIconCross = document.querySelector('.toggle__icon--crossTargeted');
        this.toggleElement = document.querySelector('.toggle--clicked');
        this.toggleClose = 'toggle__icon--close';
        this.toggleOpen = 'toggle__icon--open';
    }

    addEventHandler() {
        this.toggleElement.addEventListener('click', () => {
            this.displayToggleIcons();
        });
    }

    displayToggleIcons() {
        this.toggleIconCross.classList.toggle(this.toggleClose);
        this.toggleIconBars.classList.toggle(this.toggleOpen);
    }
}
