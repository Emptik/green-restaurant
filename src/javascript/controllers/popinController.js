import Popin from '../views/PopinView.js';

const popinController = () => {
    const popinElement = document.querySelector('.popin--targeted');
    const popinCross = document.querySelector('.popin__icon--clicked');
    const popinVisibility = 'popin--hidden';

    const popin = new Popin(popinElement, popinCross, popinVisibility);
    popin.initializeEventHandler();
};

popinController();
