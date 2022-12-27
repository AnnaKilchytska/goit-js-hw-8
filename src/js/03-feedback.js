const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const button = document.querySelector("button");

const FEEDBACK_FORM = "feedback-form-state";

const formData = {};


form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {
    console.log(formData)
    console.log(e.target.name)
    console.log(e.target.value)
 
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
    
    
};

function onPageLoad() {
    const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    if (savedFormData?.email) {
        console.log(savedFormData.email)
        formData.email = savedFormData.email;
        email.value = savedFormData.email;
    } else {
        email.value = "";
        console.log("this is working!")
    }

    if (savedFormData?.message) {
        message.value = savedFormData.message;
        formData.message = savedFormData.message;
        console.log(savedFormData.message)
    } else {
        message.value = "";
        console.log("this is working!")
    }
};
onPageLoad();

function onFormSubmit(e) {
    const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

    if (savedFormData.email && savedFormData.message) {
        e.preventDefault();
        console.log(savedFormData);
        form.reset();
        localStorage.removeItem(FEEDBACK_FORM);
    } else {
        alert("Please, fill in all the spaces!")
    }
    
};
