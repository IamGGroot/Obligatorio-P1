let listaUsuarios = new Array;
let listaPrecarga = [{ nombre: "agu22", clave: "bsadfklj123", tipo: "Huesped" },
{ nombre: "Almicar", clave: "Almicar99", tipo: "Huesped" },
{ nombre: "Camila", clave: "Camilita123", tipo: "Anfitrion" },
{ nombre: "Esteban", clave: "Quitoroto", tipo: "Huesped" },
{ nombre: "Dardo", clave: "YMariaElena", tipo: "Huesped" },
{ nombre: "admin", clave: "1234", tipo: "Administrador" },
{ nombre: "Pepe", clave: "EncimaDeRacing", tipo: "Anfitrion" },
{ nombre: "Homero", clave: "Marge", tipo: "Anfitrion" },
{ nombre: "Roberto", clave: "unmillondeamigos", tipo: "Anfitrion" },
{ nombre: "Arturo", clave: "unaclavede8digitos", tipo: "Anfitrion" },
{ nombre: "Debora", clave: "mwbk5255", tipo: "Huesped" },
{ nombre: "Pablo", clave: "randompasword99", tipo: "Huesped" },
{ nombre: "Marge", clave: "sinfonica269", tipo: "Huesped" },
{ nombre: "Lisa", clave: "Millhouse123", tipo: "Huesped" },
{ nombre: "Gabriel", clave: "cacahuate44", tipo: "Huesped" },
{ nombre: "Nacho", clave: "bolsoamuerte123", tipo: "Huesped" },{ nombre: "Ricardo", clave: "unaclaverandom", tipo: "Huesped" }]

function precargaUsuarios() {
    for (let i = 0; i < listaPrecarga.length; i++) {
        let element = listaPrecarga[i];
        let user = element.nombre;
        let clave = element.clave;
        let tipo = element.tipo;
        let agregarActual = new Usuarios();
        agregarActual.nombre = user;
        agregarActual.clave = clave;
        agregarActual.tipo = tipo;
        listaUsuarios.push(agregarActual);
    }
}
////////////// REGISTRO //////////////
////////////// AUTENTICACION /////////
function validarLogin() {
    let user = document.querySelector("#txtLoginUser").value;
    let pasword = document.querySelector("#txtLoginPassword").value;
    /////////////// VALIDACIONES ////////////////
    /////////////// VALIDACION DEL ACCESO ///////
    let validacionAcceso = false;
    let tipoUser = "";
    for (let i = 0; i < listaUsuarios.length; i++) {
        let element = listaUsuarios[i];
        if (element.nombre === user && element.clave === pasword) {
            validacionAcceso = true;
            tipoUser = element.tipo;
            i = listaUsuarios.length + 1;
        }
    }
    if (validacionAcceso) {
        ingreso(`${tipoUser}`)

    }
}
document.querySelector("#btnAcceso").addEventListener("click", validarLogin);
console.log("javascript 3/3 cargado")