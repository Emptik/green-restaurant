import ContactForm from '../views/ContactFormView.js';

const contactFormController = () => {
    const fields = document.querySelectorAll('.form__field--targeted');
    const form = document.querySelector('.form');

    const contactForm = new ContactForm(fields, form);
    contactForm.initialize();
};

contactFormController();
