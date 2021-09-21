import Toggle from '../views/ToggleView.js';

const toggleController = () => {
    const toggleIconBars = document.querySelector('.toggle__icon--barsTargeted');
    const toggleIconCross = document.querySelector('.toggle__icon--crossTargeted');
    const toggleElement = document.querySelector('.toggle--clicked');
    const toggleClose = 'toggle__icon--close';
    const toggleOpen = 'toggle__icon--open';

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
