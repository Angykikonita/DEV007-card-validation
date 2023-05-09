const validator = {

  isValid: function (cardNumber) {
    const reversa = cardNumber.toString().split("").reverse(); // me cambia el numero a reversa
    const numeros = [];
    const tarjetavalidar =document.getElementById("leyenda validar"); 
    //alert(" numero en reversa " + reversa);

    for (let i = 0; i < reversa.length; i++) {
      numeros[i] = parseInt(reversa[i]); //convierte string a number
    }
    let digitosPares;
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
      digitosPares = numeros[i];
      if (i % 2 === 1) {
        digitosPares = digitosPares * 2;
        if (digitosPares > 9) {
          digitosPares = digitosPares - 9;
        }
      }

      suma = suma + digitosPares;
    }
     
    if (suma % 10 === 0) {
      tarjetavalidar.innerHTML="tarjeta es valida "
      return true;

    }
      else {
      tarjetavalidar.innerHTML="tarjeta es invalida "
      return false;
    
    }
  },
 
  maskify: function (cardNumber) {
    const digitosMascara =cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4);
      const leyendaTarjeta=document.getElementById("leyenda tarjeta");
      leyendaTarjeta.innerHTML="tu numero de tarjeta es" + digitosMascara
    return digitosMascara;
  },
};

export default validator;
