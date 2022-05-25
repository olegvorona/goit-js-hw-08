import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_KEY = "feedback-form-state";

feedbackForm.addEventListener('input', inputForm);
feedbackForm.addEventListener('submit', throttle(submitForm,500));


function inputForm() {
    const FormData = {
        email: feedbackForm.email.value,
        message: feedbackForm.message.value,
    };

    localStorage.setItem(LOCAL_KEY, JSON.stringify(FormData));
};


function submitForm(event) {
    event.preventDefault();
    const FormData = {
        email: feedbackForm.email.value,
        message: feedbackForm.message.value,
    };
    console.log(FormData);
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
};

function feedbackStorage() {
    const saveData = localStorage.getItem(LOCAL_KEY);
    const parseData = JSON.parse(saveData);

    if (saveData) {
        feedbackForm.email.value = parseData.email;
        feedbackForm.message.value = parseData.message
    }
};
feedbackStorage() 