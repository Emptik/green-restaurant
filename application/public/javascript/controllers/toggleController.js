import Toggle from '../views/ToggleView.js';

const toggleController = () => {
    const toggleIconBars = document.querySelector('.c-toggle__icon--barsTargeted');
    const toggleIconCross = document.querySelector('.c-toggle__icon--crossTargeted');
    const toggleElement = document.querySelector('.c-toggle--clicked');
    const toggleClose = 'c-toggle__icon--close';
    const toggleOpen = 'c-toggle__icon--open';

    const toggle = new Toggle(
        toggleIconBars,
        toggleIconCross,
        toggleElement,
        toggleClose,
        toggleOpen,
    );
    toggle.initializeEventHandler();
};

toggleController();
