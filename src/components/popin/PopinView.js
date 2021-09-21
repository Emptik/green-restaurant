export default class Popin {
    constructor() {
        this.popinElement = document.querySelector('.popin--targeted');
        this.popinCross = document.querySelector('.popin__icon--clicked');
        this.popinVisibility = 'popin--hidden';
    }

    addEventHandler() {
        this.popinCross.addEventListener('click', () => {
            this.closePopin();
        });
    }

    closePopin() {
        this.popinElement.classList.toggle(this.popinVisibility);
    }
}
