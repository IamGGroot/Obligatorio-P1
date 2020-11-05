eventos();

let listaUsuarios = new Array;
let listaPrecarga =
    [{ nombreUsu: "agu22", nombre: "Agustín", clave: "bsadfklj123", tipo: "Huesped" },
    { nombreUsu: "AlmiSua345", nombre: "Almicar", clave: "Almicar99", tipo: "Huesped" },
    { nombreUsu: "Camiiii_ok", nombre: "Camila", clave: "Camilita123", tipo: "Anfitrion" },
    { nombreUsu: "Este_rodriguez", nombre: "Esteban", clave: "Quitoroto", tipo: "Huesped" },
    { nombreUsu: "Américo_V", nombre: "Dardo", clave: "YMariaElena", tipo: "Huesped" },
    { nombreUsu: "admin", nombre: "Administrador", clave: "1234", tipo: "Administrador" },
    { nombreUsu: "Pepe_1", nombre: "José", clave: "EncimaDeRacing", tipo: "Anfitrion" },
    { nombreUsu: "Homer.78", nombre: "Homero", clave: "Marge", tipo: "Anfitrion" },
    { nombreUsu: "Robert_63", nombre: "Roberto", clave: "unmillondeamigos", tipo: "Anfitrion" },
    { nombreUsu: "R2D2", nombre: "Arturo", clave: "unaclavede8digitos", tipo: "Anfitrion" },
    { nombreUsu: "DebyBolso", nombre: "Débora", clave: "mwbk5255", tipo: "Huesped" },
    { nombreUsu: "Pablosky27", nombre: "Pablo", clave: "randompasword99", tipo: "Huesped" },
    { nombreUsu: "Marge96", nombre: "Marjorie", clave: "sinfonica269", tipo: "Huesped" },
    { nombreUsu: "Liiisa", nombre: "Lucía", clave: "Millhouse123", tipo: "Huesped" },
    { nombreUsu: "GabitomanyaCAP", nombre: "Gabriel", clave: "cacahuate44", tipo: "Huesped" },
    { nombreUsu: "Nachocapo1", nombre: "Juan Ignacio", clave: "bolsoamuerte123", tipo: "Huesped" },
    { nombreUsu: "Rickymaravilla", nombre: "Ricardo", clave: "unaclaverandom", tipo: "Huesped" }]
//falta mail, apellido, telefono
function eventos() {
    document.querySelector("#btnAcceso").addEventListener("click", validarLogin);
    document.querySelector("#btnRegistro").addEventListener("click", registro);
}

function precargaUsuarios() {
    for (let i = 0; i < listaPrecarga.length; i++) {
        let element = listaPrecarga[i];

        let user = element.nombreUsu;
        let nombre = element.nombre;
        let apellido = element.apellido;
        let mail = element.mail;
        let tel = element.telefono;
        let clave = element.clave;
        let tipo = element.tipo;

        let agregarActual = new Usuarios();

        agregarActual.nombreUsu = user;
        agregarActual.nombre = nombre;
        agregarActual.apellido = apellido;
        agregarActual.mail = mail;
        agregarActual.telefono = tel;
        agregarActual.clave = clave;
        agregarActual.tipo = tipo;

        listaUsuarios.push(agregarActual);
    }
}
////////////// REGISTRO //////////////
function registro() {
    let nUser = document.querySelector("#txtRegistroNomUsu").value;                   /// comienza seleccion de valores del html///
    let nNombre = document.querySelector("#txtRegistroNom").value;
    let nApellido = document.querySelector("#txtRegistroApe").value;
    let nMail = document.querySelector("#txtRegistroEmail").value;
    let nTel = document.querySelector("#txtRegistroTel").value;
    let nPass = document.querySelector("#txtRegistroContraseña").value;         // termina seleccion de valores del html

    let agregarActual = new Usuarios();                   // Se crea un objeto de clase usuario

    agregarActual.nombreUsu = nUser;                          //comienza  a ese objeto se le pone el dato que corresponde
    agregarActual.nombre = nNombre;
    agregarActual.apellido = nApellido;
    agregarActual.mail = nMail;
    agregarActual.telefono = nTel;
    agregarActual.clave = nPass;                              // termina ponerle datos a objeto
    let ntipo = "";
    if (user === "Visitante") {      /// si la pagina la esta viendo un visitante (el unico que deberia poder verlo porque no hay upgrade de user)
        ntipo = "Huésped"                 /// si es visitante su tipo de user va ser huesped
        agregarActual.tipo = ntipo;      
    }
    if (user === "Administrador") {
        ntipo = "Anfitrión"
        agregarActual.tipo = ntipo;     
    }
    listaUsuarios.push(agregarActual); /// se pushea 

}

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
console.log("Acceso cargado")