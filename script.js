const botonEncriptar = document.getElementById("enc");
const botonDesencriptar = document.getElementById("desc");
const textArea = document.getElementById("in");
const botonCopiar = document.getElementById("copy");
const cardConTexto = document.getElementById("conTexto");
const cardSinTexto = document.getElementById("sinTexto");

const salida = document.getElementById("salida");

const clavesEncriptacion = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

const clavesDesencriptacion = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
};
let texto;

function encriptar() {
    texto = textArea.value;
    if (texto !== texto.toLowerCase() || /[áéíóú]/.test(texto)) {
        alert("Solo letras minusculas y sin acentos");
        return;
    }
    if (texto != "") {
        cardConTexto.style.display = "flex";
        cardSinTexto.style.display = "none";
    } else {
        cardConTexto.style.display = "none";
        cardSinTexto.style.display = "flex";
    }

    salida.textContent = texto.replace(
        /[aeiou]/g,
        (vocal) => clavesEncriptacion[vocal]
    );
}

function desencriptar() {
    texto = textArea.value;
    if (texto !== texto.toLowerCase() || /[áéíóú]/i.test(texto)) {
        alert("Solo letras minusculas y sin acentos");
        return;
    }
    if (texto != "") {
        cardConTexto.style.display = "flex";
        cardSinTexto.style.display = "none";
    } else {
        cardConTexto.style.display = "none";
        cardSinTexto.style.display = "flex";
    }

    salida.textContent = texto.replace(
        /(ai|enter|imes|ober|ufat)/g,
        (palabra) => clavesDesencriptacion[palabra]
    );
}

async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
    } catch (error) {
        console.error("Error al copiar al portapapeles: ", error);
    }
    textArea.focus();
}
textArea.focus();
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = () => copiarAlPortapapeles(salida.textContent);
