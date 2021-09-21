export default class Toggle {
    constructor(toggleIconBars, toggleIconCross, toggleElement, toggleClose, toggleOpen) {
        this.toggleIconBars = toggleIconBars;
        this.toggleIconCross = toggleIconCross;
        this.toggleElement = toggleElement;
        this.toggleClose = toggleClose;
        this.toggleOpen = toggleOpen;
    }

    initializeEventHandler() {
        this.toggleElement.addEventListener('click', () => {
            this.displayToggleIcons();
        });
    }

    displayToggleIcons() {
        this.toggleIconCross.classList.toggle(this.toggleClose);
        this.toggleIconBars.classList.toggle(this.toggleOpen);
    }
}
