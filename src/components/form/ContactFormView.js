export default class ContactForm {
    constructor() {
        this.fields = document.querySelectorAll('.form__field--targeted');
        this.form = document.querySelector('.form');
    }

    initialize() {
        this.displayFieldsValue();

        for (let i = 0; i < this.fields.length; i += 1) {
            this.fields[i].addEventListener('focus', (event) => {
                this.displayFieldsValue(event.target);
                this.displayFieldsError(event);
                event.stopPropagation();
            });

            this.fields[i].addEventListener('blur', (event) => {
                this.displayFieldsValue(event.target);
                event.stopPropagation();
            });
        }

        this.form.addEventListener('submit', (event) => {
            this.checkFormData();
            event.preventDefault();
        });
    }

    displayFieldsValue(field) {
        const fieldName = this.form.elements.name;
        const fieldNameAttr = this.form.elements.name.name;
        const fieldNameValue = 'Nom:';

        const fieldFirstName = this.form.elements.firstName;
        const fieldFirstNameAttr = this.form.elements.firstName.name;
        const fieldFirstNameValue = 'Prénom:';

        const fieldMail = this.form.elements.mail;
        const fieldMailAttr = this.form.elements.mail.name;
        const fieldMailValue = 'Adresse Mail:';

        const fieldMessage = this.form.elements.message;
        const fieldMessageAttr = this.form.elements.message.name;
        const fieldMessageValue = 'Message:';

        if (field !== undefined) {
            if (field.name === fieldNameAttr) {
                if (fieldName.value === fieldNameValue) {
                    fieldName.value = '';
                } else if (fieldName.value === '') {
                    fieldName.value = fieldNameValue;
                }
            } else if (field.name === fieldFirstNameAttr) {
                if (fieldFirstName.value === fieldFirstNameValue) {
                    fieldFirstName.value = '';
                } else if (fieldFirstName.value === '') {
                    fieldFirstName.value = fieldFirstNameValue;
                }
            } else if (field.name === fieldMailAttr) {
                if (fieldMail.value === fieldMailValue) {
                    fieldMail.value = '';
                } else if (fieldMail.value === '') {
                    fieldMail.value = fieldMailValue;
                }
            } else if (field.name === fieldMessageAttr) {
                if (fieldMessage.value === fieldMessageValue) {
                    fieldMessage.value = '';
                } else if (fieldMessage.value === '') {
                    fieldMessage.value = fieldMessageValue;
                }
            }
        } else {
            fieldName.value = fieldNameValue;
            fieldFirstName.value = fieldFirstNameValue;
            fieldMail.value = fieldMailValue;
            fieldMessage.value = fieldMessageValue;
        }
    }

    checkFormData() {
        const nameField = this.form.elements.name;
        const firstNameField = this.form.elements.firstName;
        const mailField = this.form.elements.mail;
        const messageField = this.form.elements.message;
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const dataFields = {};

        if (nameField.value.length < 2 || nameField.value.length > 25) {
            dataFields.name = false;
        } else {
            dataFields.name = true;
        }

        if (firstNameField.value.length < 2 || firstNameField.value.length > 25) {
            dataFields.firstName = false;
        } else {
            dataFields.firstName = true;
        }

        if (!mailField.value.match(mailformat)) {
            dataFields.mail = false;
        } else {
            dataFields.mail = true;
        }

        if (messageField.value.length < 2 || messageField.value.length > 500) {
            dataFields.message = false;
        } else {
            dataFields.message = true;
        }

        if (!dataFields.name || !dataFields.firstName || !dataFields.mail || !dataFields.message) {
            this.displayFieldsError(dataFields);
        } else {
            this.displayPopin();
        }
    }

    displayFieldsError(dataFields) {
        const nameField = this.form.elements.name;
        const nameFieldValue = nameField.value;
        const firstNameField = this.form.elements.firstName;
        const firstNameFieldValue = firstNameField.value;
        const mailField = this.form.elements.mail;
        const mailFieldValue = mailField.value;
        const messageField = this.form.elements.message;
        const markupNameField = `<span class="form__error form__error--nameTargeted">"${nameFieldValue}" n'est pas un nom valide</span>`;
        const markupFirstNameField = `<span class="form__error form__error--firstNameTargeted">"${firstNameFieldValue}" n'est pas un prénom valide</span>`;
        const markupMailField = `<span class="form__error form__error--mailTargeted">"${mailFieldValue}" n'est pas une adresse mail valide</span>`;
        const markupMessageField = '<span class="form__error form__error--messageTargeted">Votre message n\'est pas valide</span>';
        const nameFieldError = document.querySelector('.form__error--nameTargeted');
        const firstNameFieldError = document.querySelector('.form__error--firstNameTargeted');
        const mailFieldError = document.querySelector('.form__error--mailTargeted');
        const messageFieldError = document.querySelector('.form__error--messageTargeted');

        if (dataFields.type === 'focus') {
            if (dataFields.target === nameField) {
                if (nameFieldError !== null) {
                    nameFieldError.remove();
                }
            } else if (dataFields.target === firstNameField) {
                if (firstNameFieldError !== null) {
                    firstNameFieldError.remove();
                }
            } else if (dataFields.target === mailField) {
                if (mailFieldError !== null) {
                    mailFieldError.remove();
                }
            } else if (dataFields.target === messageField) {
                if (messageFieldError !== null) {
                    messageFieldError.remove();
                }
            }
        } else if (dataFields.type !== 'focus') {
            if (dataFields.name === false) {
                nameField.insertAdjacentHTML('afterend', markupNameField);
            }
            if (dataFields.firstName === false) {
                firstNameField.insertAdjacentHTML('afterend', markupFirstNameField);
            }
            if (dataFields.mail === false) {
                mailField.insertAdjacentHTML('afterend', markupMailField);
            }
            if (dataFields.message === false) {
                messageField.insertAdjacentHTML('afterend', markupMessageField);
            }
        }
    }

    displayPopin() {
        const popinElement = document.querySelector('.popin--targeted');
        this.popinClose = popinElement.classList.toggle('popin--hidden');
    }
}
