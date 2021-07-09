export default class Popin {
    constructor(popinElement, popinCross, popinVisibility) {
        this.popinElement = popinElement;
        this.popinCross = popinCross;
        this.popinVisibility = popinVisibility;
    }

    initializeEventHandler() {
        this.popinCross.addEventListener('click', () => {
            this.closePopin();
        });
    }

    closePopin() {
        this.popinElement.classList.toggle(this.popinVisibility);
    }
}
