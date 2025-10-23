window.addEventListener("load", inicio);

function inicio(){
    document.querySelector('#btnEj1').addEventListener('click',ej1);
     document.getElementById("btnEj2").addEventListener("click", ej2);
    document.getElementById("btnEj3").addEventListener("click", ej3);
    document.getElementById("btnEj4").addEventListener("click", ej4);
    document.getElementById("btnEj5").addEventListener("click", ej5);
    document.getElementById("btnEj6").addEventListener("click", ej6);
    document.getElementById("btnEj7").addEventListener("click", ej7);
    document.getElementById("btnEj8").addEventListener("click", ej8);
    document.getElementById("btnEj9").addEventListener("click", ej9);
    document.getElementById("btnEj10").addEventListener("click", ej10);
    document.getElementById("btnEj11").addEventListener("click", ej11);
    document.getElementById("btnEj12").addEventListener("click", ej12);
    document.getElementById("btnEj13").addEventListener("click", ej13);
    document.getElementById("btnEj14").addEventListener("click", ej14);
}

function ej1(){
    let texto = document.querySelector('#valorEj1').value;
    let cantidad = texto.length -1;
    if(texto[0]==texto[cantidad]){
        document.querySelector('#rEj1').innerHTML = `La Primer letra es igual a la última:<br>
        Primer letra:${texto[0]} <br>
        Segunda letra: ${texto[cantidad]}`  
    }else{
        document.querySelector('#rEj1').innerHTML = 'No son iguales'
        
    }

}
// EJ2
function ej2() {
    let texto = document.getElementById("valorEj2").value.toLowerCase();
    let vocales = 0;
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i);
        if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
            vocales++;
        }
    }
    document.getElementById("rEj2").innerHTML = "El texto tiene " + vocales + " vocales.";
}

// EJ3
function ej3() {
    let texto = document.getElementById("valorEj3").value;
    document.getElementById("rEj3").innerHTML = texto.toUpperCase();
}

// EJ4
function ej4() {
    let texto1 = document.getElementById("texto1").value.toLowerCase();
    let texto2 = document.getElementById("texto2").value.toLowerCase();
    let encontrado = false;

    for (let i = 0; i <= texto1.length - texto2.length; i++) {
        let sub = "";
        for (let j = 0; j < texto2.length; j++) {
            sub += texto1.charAt(i + j);
        }
        if (sub == texto2) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        document.getElementById("rEj4").innerHTML = '"' + texto2 + '" es subcadena de "' + texto1 + '".';
    } else {
        document.getElementById("rEj4").innerHTML = '"' + texto2 + '" no está contenido en "' + texto1 + '".';
    }
}

// EJ5
function ej5() {
    let m = document.getElementById("matricula").value.toUpperCase().trim();
    let letra = m.charAt(0);
    let dpto = "";

    if (letra == "A") dpto = "Canelones";
    else if (letra == "B") dpto = "Maldonado";
    else if (letra == "C") dpto = "Rocha";
    else if (letra == "D") dpto = "Treinta y Tres";
    else if (letra == "E") dpto = "Cerro Largo";
    else if (letra == "F") dpto = "Rivera";
    else if (letra == "G") dpto = "Artigas";
    else if (letra == "H") dpto = "Salto";
    else if (letra == "I") dpto = "Paysandú";
    else if (letra == "J") dpto = "Río Negro";
    else if (letra == "K") dpto = "Soriano";
    else if (letra == "L") dpto = "Colonia";
    else if (letra == "M") dpto = "San José";
    else if (letra == "N") dpto = "Flores";
    else if (letra == "O") dpto = "Florida";
    else if (letra == "P") dpto = "Lavalleja";
    else if (letra == "Q") dpto = "Durazno";
    else if (letra == "R") dpto = "Tacuarembó";
    else if (letra == "S") dpto = "Montevideo";
    else dpto = "Letra inválida";
    document.getElementById("rEj5").innerHTML = "Departamento: " + dpto;
}

// EJ6
function ej6() {
    let texto = document.getElementById("valorEj6").value.toLowerCase();
    let vocales = 0;
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i);
        if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") vocales++;
    }
    let resultado = "";
    if (texto.length > 10) {
        resultado = "El texto tiene " + vocales + " vocales.";
    } else {
        let consonantes = texto.length - vocales;
        resultado = "El texto tiene " + consonantes + " consonantes.";
    }
    document.getElementById("rEj6").innerHTML = resultado;
}

// EJ7
function ej7() {
    let texto = document.getElementById("valorEj7").value.toLowerCase().trim();
    if (texto.length > 0) {
        let nuevo = texto.charAt(0).toUpperCase() + texto.substring(1);
        document.getElementById("rEj7").innerHTML = nuevo;
    }
}

// EJ8
function ej8() {
    let texto = document.getElementById("valorEj8").value.trim();
    let mayus = 0;
    let minus = 0;

    for (let i = 0; i < texto.length; i++) {
        let code = texto.charCodeAt(i);
        if (code >= 65 && code <= 90) mayus++;
        else if (code >= 97 && code <= 122) minus++;
    }
    document.getElementById("rEj8").innerHTML = "Mayúsculas: " + mayus + " - Minúsculas: " + minus;
}

// EJ9
function ej9() {
    let pass = document.getElementById("valorEj9").value;
    let valido = true;
    let errores = "";

    let tieneMayus = false, tieneMinus = false, tieneNum = false, tieneEsp = false, tieneChar = false;

    for (let i = 0; i < pass.length; i++) {
        let c = pass.charAt(i);
        let code = pass.charCodeAt(i);
        if (code >= 65 && code <= 90) tieneMayus = true;
        else if (code >= 97 && code <= 122) tieneMinus = true;
        else if (code >= 48 && code <= 57) tieneNum = true;
        else if (c == " ") tieneEsp = true;
        else if (c == "." || c == "@" || c == "#" || c == "!") tieneChar = true;
    }

    if (pass.length < 5) errores += "- Debe tener al menos 5 caracteres<br>";
    if (!tieneMayus) errores += "- Debe tener una mayúscula<br>";
    if (!tieneMinus) errores += "- Debe tener una minúscula<br>";
    if (tieneEsp) errores += "- No debe tener espacios<br>";
    if (!tieneNum) errores += "- Debe tener al menos un número<br>";
    if (!tieneChar) errores += "- Debe tener uno de estos caracteres . @ # !<br>";
    if (pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) errores += "- No debe comenzar con número<br>";

    if (errores == "") document.getElementById("rEj9").innerHTML = "Contraseña válida: " + pass;
    else document.getElementById("rEj9").innerHTML = "Contraseña inválida:<br>" + errores;
}

// EJ10
function ej10() {
    let texto = document.getElementById("valorEj10").value;
    let suma = 0;

    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i);
        if (c >= "0" && c <= "9") {
            suma += parseInt(c);
        }
    }
    document.getElementById("rEj10").innerHTML = "Suma total: " + suma;
}

// EJ11
function ej11() {
    let texto = document.getElementById("valorEj11").value.toLowerCase();
    let res = "";

    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i);
        if (c == "a") res += "4";
        else if (c == "e") res += "3";
        else if (c == "i") res += "1";
        else if (c == "o") res += "0";
        else if (c == "u") res += "8";
        else res += c;
    }
    document.getElementById("rEj11").innerHTML = res;
}

// EJ12
function ej12() {
    let texto = document.getElementById("valorEj12").value;
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto.charAt(i);
    }
    document.getElementById("rEj12").innerHTML = invertido;
}

// EJ13
function ej13() {
    let texto = document.getElementById("valorEj13").value.toLowerCase();
    let primera = texto.charAt(0);
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == primera) contador++;
    }
    document.getElementById("rEj13").innerHTML = "La letra '" + primera + "' aparece " + contador + " veces.";
}

// EJ14
function ej14() {
    let mat = document.getElementById("valorEj14").value.toUpperCase().trim();
    let limpio = "";
    let letras = 0;
    let numeros = 0;

    for (let i = 0; i < mat.length; i++) {
        let c = mat.charAt(i);
        if (c >= "A" && c <= "Z") {
            limpio += c;
            letras++;
        } else if (c >= "0" && c <= "9") {
            limpio += c;
            numeros++;
        }
    }

    let valido = false;
    if (limpio.length === 7) {
        if ((letras === 3 && numeros === 4) || (letras === 1 && numeros === 6)) {
            valido = true;
        }
    }

    document.getElementById("rEj14").innerHTML =
        "Matrícula limpia: " + limpio +
        "<br>Letras: " + letras + " | Números: " + numeros +
        "<br>" + (valido ? "Válida" : "Inválida");
}