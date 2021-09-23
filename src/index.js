import './index.scss';

// Components
import Toggle from './components/toggle/ToggleView.js';
import Header from './components/header/HeaderView.js';
import Popin from './components/popin/PopinView.js';
import ContactForm from './components/form/ContactFormView.js';
import Article from './components/article/ArticleView.js';
import Btn from './components/btn/BtnView.js';

const initArticle = () => {
    const article = new Article();
    article.displayArticle();
};

const btnPropagator = () => {
    initArticle();
};

const initBtn = () => {
    const btn = new Btn();
    btn.addEventHandler(btnPropagator);
};

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
initBtn();
