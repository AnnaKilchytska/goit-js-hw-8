const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const button = document.querySelector("button");

const FEEDBACK_FORM = "feedback-form-state";

const formData = {};
const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

form.addEventListener("input", onFormInput);
window.addEventListener("load", onPageLoad);
form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {
    if (e.target.nodeName === "INPUT") {
        formData.email = e.target.value;
    } else if (e.target.nodeName === "TEXTAREA") {
        formData.message = e.target.value;
    }

    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
};

function onPageLoad() {
    if (savedFormData) {
        email.value = savedFormData.email;
        message.value = savedFormData.message;
    }
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(savedFormData);
    form.reset();
    localStorage.removeItem(FEEDBACK_FORM);
};
