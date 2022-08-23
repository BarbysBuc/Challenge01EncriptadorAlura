var encriptarBtn = document.querySelector(".encriptar-boton");
var desencriptarBtn = document.querySelector(".desencriptar-boton");
var visualSalida1 = document.querySelector(".primer-salida");
var visualSalida2 = document.querySelector(".segunda-salida");
var textoResultado = document.querySelector("#resultado");
var copiarBtn = document.querySelector(".copiar-boton");

encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
copiarBtn.onclick = copiar;

function visualAdecuada() {
  if (visualSalida1.style.display != "none") {
    visualSalida1.style.display = "none";
    visualSalida2.style.display = "block";
  }
}

function encriptar() {
  var texto = document.querySelector("#texto").value;
  var textoFinal = "";
  const minusculas = /(?:[a-z])/.test(texto);
  console.log("minusculas", minusculas);
  const mayusculas = !/(?:[A-Z])/.test(texto);
  console.log("mayusculas", mayusculas);
  const numeros = !/(?:\d)/.test(texto);
  console.log("numeros", numeros);
  const especiales = !/[^A-Za-z\d]/.test(texto);
  console.log("especiales", especiales);
  if (minusculas && mayusculas && numeros && especiales) {
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
        textoFinal = textoFinal + "ai";
      } else if (texto[i] == "e") {
        textoFinal = textoFinal + "enter";
      } else if (texto[i] == "i") {
        textoFinal = textoFinal + "imes";
      } else if (texto[i] == "o") {
        textoFinal = textoFinal + "ober";
      } else if (texto[i] == "u") {
        textoFinal = textoFinal + "ufat";
      } else {
        textoFinal = textoFinal + texto[i];
      }
    }
    visualAdecuada();
    return (textoResultado.innerHTML = textoFinal);
  } else {
    alert("Solo letras minúsculas sin acentos");
  }
}

function desencriptar() {
  var texto = document.querySelector("#texto").value;
  var textoFinal = "";
  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return (textoResultado.innerHTML = textoFinal);
}

function copiar() {
  let textoCopiado = textoResultado;
  textoCopiado.select();
  document.execCommand("copy");
  textoResultado.innerHTML = "";
}
