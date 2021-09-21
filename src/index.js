import Toggle from './components/toggle/ToggleView.js';
import Header from './components/header/HeaderView.js';
import Popin from './components/popin/PopinView.js';
import ContactForm from './components/form/ContactFormView.js';

const initContactForm = () => {
    const contactForm = new ContactForm();
    contactForm.initialize();
};

const initPopin = () => {
    const popin = new Popin();
    popin.addEventHandler();
};

const initToggle = () => {
    const toggle = new Toggle();
    toggle.addEventHandler();
};

const initHeader = () => {
    const header = new Header();
    header.addEventHandler();
};

initToggle();
initHeader();
initPopin();
initContactForm();
