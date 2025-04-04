'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.getAttribute('id');
  label.textContent = input.getAttribute('name');

  input.before(label);

  input.setAttribute('placeholder', input.getAttribute('name'));

});
