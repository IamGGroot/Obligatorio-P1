console.log("Se cargó JS exitosamente");
console.log("");

bloqueEventos();

function bloqueEventos() {
    document.querySelector("#btnInv").addEventListener("click", invertir);
}

function invertir() {
    let mensaje = ``;
    let texto = document.querySelector("#txtTexto").value;
    let textoSE = texto.trim();
    
    console.log(`.${textoSE}.`);

    if (textoSE.length > 0) {
        let invertido = new String();
        let inicio = 0;
        let fin = texto.length - 1;
        for (let i = fin; i >= 0; i--) {
            invertido = invertido + texto.charAt(i);
        }
        mensaje = `El texto invertido es: ${invertido}`;

    } else {
        mensaje = `Debe ingresar texto a invertir`;
    }
    document.querySelector("#divMostrar").innerHTML = `${mensaje}`;
  
}