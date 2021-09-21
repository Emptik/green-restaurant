import store from '../../store/main.js';

export default class Btn {
    constructor() {
        this.btnElements = document.querySelectorAll('.btn--article');
    }

    addEventHandler(btnPropagator) {
        this.btnElements.forEach((btnElement) => {
            btnElement.addEventListener('click', (event) => {
                store.modules.button.setButtonTarget(event.target);
                btnPropagator();
            });
        });
    }
}
