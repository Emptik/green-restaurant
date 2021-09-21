import Toggle from './components/toggle/ToggleView.js';
import Header from './components/header/HeaderView.js';
import Popin from './components/popin/PopinView.js';
import ContactForm from './components/form/ContactFormView.js';

const initPopin = () => {
    const popin = new Popin();
    popin.displayPopin();
    popin.addEventHandler();
};

const contactFormPropagator = () => {
    initPopin();
};

const initContactForm = () => {
    const contactForm = new ContactForm();
    contactForm.displayFieldsValue();
    contactForm.addEventHandler(contactFormPropagator);
};

const initHeader = () => {
    const header = new Header();
    header.displayHeader();
};

const togglePropagator = () => {
    initHeader();
};

const initToggle = () => {
    const toggle = new Toggle();
    toggle.addEventHandler(togglePropagator);
};

initToggle();
initContactForm();
