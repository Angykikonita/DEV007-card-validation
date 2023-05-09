import validator from './validator.js';



//const custormerName = document.getElementById('customerName');
const cardNumber = document.getElementById('cardNumber');
const button = document.getElementById('button');
//const numeroMasc = validator.maskify(cardNumber);
/*const leyendaNombre = document.getElementById();
const personas = [];
  personas.forEach()
leyendaNombre.innerHTML = "Bienvenidx " + <div class="usuario">$(custormerName.value)</div>;*/

button.addEventListener("click", (e) => {
  e.preventDefault();
 
  validator.isValid(cardNumber.value);
  validator.maskify(cardNumber.value);
    
  //alert(" tus datos son  " + custormerName.value + "  Tu numero de tarjeta es  " + digitosmascara);
  //alert("numero de tarjeta es  " + valitador.value);
  

});
console.log(validator.isValid)
console.log(validator.maskify) 

 

