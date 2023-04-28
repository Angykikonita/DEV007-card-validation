import validator from './validator.js';



//const custormerName = document.getElementById('customerName');
const cardNumber = document.getElementById('cardNumber');
const button = document.getElementById('button');

    
button.addEventListener("click", (e) => {
  e.preventDefault();
  alert ("tu numero de tarjeta es  " + cardNumber.value);
  validator.isValid(cardNumber.value);
  validator.maskify(cardNumber.value);
});


