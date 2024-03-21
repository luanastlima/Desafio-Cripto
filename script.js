const CRIPTOGRAFIA = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const DESCRITOGRAFIA = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

function criptografar() {
  const texto = document.getElementById("texto-entrada").value.toLowerCase();
  let textoCriptografado = "";
  for (let letra of texto) {
    if (letra in CRIPTOGRAFIA) {
      textoCriptografado += CRIPTOGRAFIA[letra];
    } else {
      textoCriptografado += letra;
    }
  }
  document.getElementById("texto-saida").value = textoCriptografado;
}

function descriptografar() {
  const texto = document.getElementById("texto-entrada").value.toLowerCase();
  let textoDescriptografado = "";
  for (let letra of texto) {
    if (letra in DESCRITOGRAFIA) {
      textoDescriptografado += DESCRITOGRAFIA[letra];
    } else {
      textoDescriptografado += letra;
    }
  }
  document.getElementById("texto-saida").value = textoDescriptografado;
}
