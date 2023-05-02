import validator from './validator.js';



const custormerName = document.getElementById('customerName');
const cardNumber = document.getElementById('cardNumber');
const button = document.getElementById('button');

document.getElementById("leyendaNombre").innerHTML = "Bienvenidx " + custormerName.value;

    
button.addEventListener("click", (e) => {
  e.preventDefault();
 
  validator.isValid(cardNumber.value);
  validator.maskify(cardNumber.value);
  alert(" tus datos son  " + custormerName.value + "  Tu numero de tarjeta es  " + cardNumber.value);

});

 

/*customerName.addEventListener("customerName", function(){
  const value= customerName.value;
  const p= document.createElement("p");
  p.innerText =value;
  leyendanombre.appendChild(p);

});*/
