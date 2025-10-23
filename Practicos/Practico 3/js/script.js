window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnEj1").addEventListener("click", ej1);
  document.querySelector("#btnEj2").addEventListener("click", ej2);
  document.querySelector("#btnEj3").addEventListener("click", ej3);
  document.querySelector("#btnEj4").addEventListener("click", ej4);
  document.querySelector("#btnEj5").addEventListener("click", ej5);
  document.querySelector("#btnEj6").addEventListener("click", ej6);
  document.querySelector("#btnEj7").addEventListener("click", ej7);
  document.querySelector("#btnEj8").addEventListener("click", ej8);
  document.querySelector("#btnEj9").addEventListener("click", ej9);
  document.querySelector("#btnEj10").addEventListener("click", ej10);
  document.querySelector("#btnEj11").addEventListener("click", ej11);
  document.querySelector("#btnEj11").addEventListener("click", ej11);
  document.querySelector("#btnEj12").addEventListener("click", ej12);
  document.querySelector("#btnEj13").addEventListener("click", ej13);
  document.querySelector("#btnEj14").addEventListener("click", ej14);
  document.querySelector("#btnEj15").addEventListener("click", ej15);
  document.querySelector("#btnEj16").addEventListener("click", ej16);
}

function ej1() {
  for (let i = 1; i <= 1000; i++) {
    document.querySelector("#resultadoEj1").innerHTML += `${i} <br>`;
  }
}

function limpiar(nombreParrafo) {
  document.querySelector(`#${nombreParrafo}`).innerHTML = "";
}

function ej2() {
  for (let i = -100; i <= 10; i++) {
    document.querySelector("#resultadoEj2").innerHTML += `${i} <br>`;
  }
}

function ej3() {
  for (let i = 40; i >= 10; i--) {
    document.querySelector("#resultadoEj3").innerHTML += `${i} <br>`;
  }
}

function ej4() {
  for (let i = 20; i >= -30; i--) {
    document.querySelector("#resultadoEj4").innerHTML += `${i} <br>`;
  }
}

function ej5() {
  for (let i = 1; i <= 450; i++) {
    if (i % 5 == 0) {
      document.querySelector("#resultadoEj5").innerHTML += `${i} <br>`;
    }
  }
}

function ej6() {
  for (let i = -33; i <= 230; i++) {
    if (i % 4 == 0) {
      document.querySelector("#resultadoEj6").innerHTML += `${i} <br>`;
    }
  }
}

function ej7() {
  let numero = document.querySelector("#numeroEj7").value;
  document.querySelector("#resultadoEj7").innerHTML = "";
  if (numero < 2 || numero > 50) {
    return (document.querySelector("#resultadoEj7").innerHTML =
      "Ingrese número entre 2 y 50");
  }
  for (let i = 1; i <= numero; i++) {
    document.querySelector("#resultadoEj7").innerHTML += "-";
    document.querySelector("#formEj7").reset();
  }
}

function ej8() {
  limpiar("resultadoEj8");
  let numero1 = Number(document.querySelector("#numero1Ej8").value);
  let numero2 = Number(document.querySelector("#numero2Ej8").value);

  let mayor;
  let menor;
  if (numero1 > numero2) {
    mayor = numero1;
    menor = numero2;
  } else if (numero1 < numero2) {
    mayor = numero2;
    menor = numero1;
  } else {
    document.querySelector("#resultadoEj8").innerHTML =
      "Los números son iguales, ingrese un rango válido";
    return;
  }
  console.log(mayor);
  console.log(menor);

  for (let i = menor; i <= mayor; i++) {
    document.querySelector("#resultadoEj8").innerHTML += `${i} <br>`;
    document.querySelector("#formEj8").reset();
  }
}

function ej9() {
  limpiar("resultadoEj9");
  let numero1 = Number(document.querySelector("#numero1Ej9").value);
  let numero2 = Number(document.querySelector("#numero2Ej9").value);
  let suma = 0;

  if (numero1 > numero2) {
    mayor = numero1;
    menor = numero2;
  } else if (numero1 < numero2) {
    mayor = numero2;
    menor = numero1;
  } else {
    mayor = numero1;
    menor = numero2;
  }
  // console.log(mayor);

  for (let i = 1; i <= Math.abs(menor); i++) {
    suma += mayor;
  }
  if (mayor < 0 || menor < 0) {
    suma = suma * -1;
  }
  if (mayor < 0 && menor < 0) {
    suma = Math.abs(suma);
  }
  document.querySelector("#resultadoEj9").innerHTML = suma;
}

function ej10() {
  limpiar("resultadoEj10");
  let numero1 = Number(document.querySelector("#numero1Ej10").value);
  let numero2 = Number(document.querySelector("#numero2Ej10").value);
  // console.log(numero1);
  // console.log(numero2);

  for (let i = numero1; i <= numero2; i++) {
    document.querySelector("#resultadoEj10").innerHTML += `${i}X ${numero2} = ${
      i * numero2
    } <br> `;
  }
}

function ej11() {
  limpiar("resultadoEj11");
  let numero1 = Number(document.querySelector("#numero1Ej11").value);
  let numero2 = Number(document.querySelector("#numero2Ej11").value);
  let numero3 = Number(document.querySelector("#numero3Ej11").value);
  let mayor;
  let menor;
  let textoAMostrar = "";
  if (numero1 > numero2) {
    mayor = numero1;
    menor = numero2;
  } else if (numero2 > numero1) {
    mayor = numero2;
    menor = numero1;
  } else if (numero1 == numero2) {
    if (numero1 % numero3 == 0) {
      document.querySelector(
        "#resultadoEj11"
      ).innerHTML = `${numero1} es Mútliplo de ${numero3}<br> `;
      document.querySelector("#formEj11").reset();
    }
    return;
  }

  for (let i = menor; i <= mayor; i++) {
    if (i % numero3 == 0) {
      textoAMostrar += `${i} es Mútliplo de ${numero3}<br> `;
    }
  }

  document.querySelector("#resultadoEj11").innerHTML += textoAMostrar;
  document.querySelector("#formEj11").reset();
}

function ej12() {
  limpiar("resultadoEj12");
  let numero = Number(document.querySelector("#numeroEj12").value);
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  document.querySelector("#resultadoEj12").innerHTML = factorial;
  document.querySelector("#formEj12").reset();
}

function ej13() {
  limpiar("resultadoEj13");
  let ancho = Number(document.querySelector("#anchoEj13").value);
  let alto = Number(document.querySelector("#altoEj13").value);
  let caracter = document.querySelector("#caracterEj13").value;
  let rectangulo = "";

  if(caracter.length<=0){
      document.querySelector("#resultadoEj13").innerHTML = "Debe ingresar un caracter";
    return;
  }
  for (let i = 1; i <= alto; i++) {
    for (let j = 1; j <= ancho; j++) {
      rectangulo += caracter;
    }
    rectangulo += "<br>";
  }
  document.querySelector("#resultadoEj13").innerHTML = rectangulo;
  document.querySelector("#formEj13").reset();
}

function ej14() {
  limpiar("resultadoEj14");
  let numero = Number(document.querySelector("#numeroEj14").value);
  let cantidad = 0;

  while (numero >= 1) {
    numero = numero / 10;
    cantidad++;
  }

  document.querySelector(
    "#resultadoEj14"
  ).innerHTML = `La cantidad de digitos es ${cantidad}`;
  document.querySelector("#formEj14").reset();
}

function ej15() {
  limpiar("resultadoEj15");
  let numero = Number(document.querySelector("#numeroEj15").value);
  if (numero <= 2000) {
    document.querySelector("#resultadoEj15").innerHTML =
      "El número debe ser mayor a 2000";
    return;
  }
  while (numero >= 100) {
    numero = numero / 20;
  }
  document.querySelector("#resultadoEj15").innerHTML = numero;
  document.querySelector("#formEj15").reset();
}

function ej16() {
  limpiar("resultadoEj16");
  let numero1 = Number(document.querySelector("#numero1Ej16").value);
  let numero2 = Number(document.querySelector("#numero2Ej16").value);
  let mayor, menor;
  if (numero1 > numero2) {
    mayor = numero1;
    menor = numero2;
  } else {
    mayor = numero2;
    menor = numero1;
  }
  for (let i = menor; i <= mayor; i++) {
    if (i % 4 == 0 && i % 6 == 0) {
      document.querySelector("#resultadoEj16").innerHTML = i;
      document.querySelector("#formEj16").reset();
      return;
    }
  }
}
