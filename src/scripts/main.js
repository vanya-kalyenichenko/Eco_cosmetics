'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');

// Show input error messages

function showError(input) {
  input.className = 'content__contact_us--style error';
}

// show success colour

function showSucces(input) {
  input.className = 'content__contact_us--style success';
}

// check email is valid

function checkEmail(input) {
  // eslint-disable-next-line no-useless-escape, max-len
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input);
  }
}

// checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}

// check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input,
      `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input,
      `${getFieldName(input)} must be les than ${max} characters`);
  } else {
    showSucces(input);
  }
}

// get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, number]);
  checkLength(username, 3, 15);
  checkLength(number, 6, 25);
  checkEmail(email);
});
