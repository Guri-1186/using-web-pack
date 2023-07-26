

import { JoinUsSection } from './join-us.js';
import { SectionCreatorFactory } from './join-us.js';
import { validate } from './email-validator.js';
import './styles/style.css';


document.addEventListener('DOMContentLoaded', function () {
const sectionCreator = new SectionCreatorFactory();

JoinUsSection.render(); 

  
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  // Validate the email address using the validate function
  const isValidEmail = validate(email);

  // Display an alert message with the result of the validation
  if (isValidEmail) {
    alert('Email address is valid.');
  } else {
    alert('Please enter a valid email address.');
  }
});


