function criptografarTexto(texto) {
  return texto.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
  return texto.replace(/ufat/g, 'u')
              .replace(/ober/g, 'o')
              .replace(/ai/g, 'a')
              .replace(/imes/g, 'i')
              .replace(/enter/g, 'e');
}
function letraMaiuscula() {
  var texto = document.getElementById("text").value;
  var regex = /[A-Z]/; 
  if (regex.test(texto)) {
      document.querySelector(".dalek").style.display = "block";
  } else {
      document.querySelector(".dalek").style.display = "none";
  }
}
function verificarAcentos(texto) {
  var regex = /[áàãâéèêíïóôõöúç]/i;
  return regex.test(texto);
}    

function criptografar() {
  var texto = document.getElementById("text").value;
  var regex = /[A-Z]/; 
  if (!regex.test(texto) && !verificarAcentos(texto)) {
      var textoCriptografado = criptografarTexto(texto);
      document.getElementById("res").innerHTML = textoCriptografado;
      document.querySelector(".dalek").style.display = "none";
  } else {
      document.querySelector(".dalek").style.display = "block";
  }
  document.getElementById("text").value = "";
}

function descriptografar() {
  var texto = document.getElementById("text").value;
  var textoDescriptografado = descriptografarTexto(texto);
  document.getElementById("res").innerHTML = textoDescriptografado;
  document.getElementById("text").value = "";
  
}
function copiar() {
  var textoResposta = document.getElementById("res").innerText;
  navigator.clipboard.writeText(textoResposta)
      .then(() => {
          alert("Texto copiado com sucesso!");
      })
    }
  


