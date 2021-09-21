export default class Popin {
    constructor() {
        this.popinElement = document.querySelector('.popin');
        this.popinCross = document.querySelector('.popin__icon--cross');
        this.popinVisibility = 'popin--hidden';
    }

    addEventHandler() {
        this.popinCross.addEventListener('click', () => {
            this.closePopin();
        });
    }

    displayPopin() {
        this.popinElement.classList.toggle('popin--hidden');
    }

    closePopin() {
        this.popinElement.classList.toggle(this.popinVisibility);
    }
}
