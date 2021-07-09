import ContactForm from '../views/ContactFormView.js';

const contactFormController = () => {
    const fields = document.querySelectorAll('.c-form__field--targeted');
    const form = document.querySelector('.c-form');

    const contactForm = new ContactForm(fields, form);
    contactForm.initialize();
};

contactFormController();
