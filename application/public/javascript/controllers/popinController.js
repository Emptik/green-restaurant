import Popin from '../views/PopinView.js';

const popinController = () => {
    const popinElement = document.querySelector('.c-popin--targeted');
    const popinCross = document.querySelector('.c-popin__icon--clicked');
    const popinVisibility = 'c-popin--hidden';

    const popin = new Popin(popinElement, popinCross, popinVisibility);
    popin.initializeEventHandler();
};

popinController();
