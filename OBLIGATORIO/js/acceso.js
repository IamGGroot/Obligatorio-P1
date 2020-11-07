eventos();

let listaUsuarios = new Array;
let listaPrecarga =
    [{ nombreUsu: "agu22", nombre: "Agustín", apellido: "Rodriguez", email: "agu22@gmail.com", celular: "099123456", clave: "bSaDfklj123", tipo: "Huesped" },
    { nombreUsu: "AlmiSua345", nombre: "Almicar", apellido: "Vazques", email: "almicar@hotmail.com", celular: "096234654", clave: "Almicar1995", tipo: "Huesped" },
    { nombreUsu: "Camiiii_ok", nombre: "Camila", apellido: "Carrasco", email: "camila@zoho.com", celular: "095236547", clave: "Camilita123", tipo: "Anfitrion" },
    { nombreUsu: "Este_rodriguez", nombre: "Esteban", apellido: "Quito", email: "estebanquito@gmail.com", celular: "099456456", clave: "Quitoroto456", tipo: "Huesped" },
    { nombreUsu: "Américo_V", nombre: "Dardo", apellido: "Fuseneco", email: "dardo2020@yahoo.com", celular: "099222222", clave: "YMari4Elen4", tipo: "Huesped", },
    { nombreUsu: "admin", nombre: "Administrador", apellido: "admin", email: "admin@hotmail.com", celular: "097111111", clave: "1234", tipo: "Administrador" },
    { nombreUsu: "Pepe_1", nombre: "José", apellido: "Gomez", email: "josesito@gmail.com", celular: "094446456", clave: "EncimadeRacing27", tipo: "Anfitrion" },
    { nombreUsu: "Homer.78", nombre: "Homero", apellido: "Simpson", email: "homerojsimpson@gmail.com", celular: "099777756", clave: "Marge1967", tipo: "Anfitrion" },
    { nombreUsu: "Robert_63", nombre: "Roberto", apellido: "Carlos", email: "robert@gmail.com", celular: "099888888", clave: "1millondeAmigos", tipo: "Anfitrion" },
    { nombreUsu: "R2D2", nombre: "Arturo", apellido: "Luro", email: "arturoduro@hotmail.com", celular: "099199956", clave: "unaClavede8digitos", tipo: "Anfitrion" },
    { nombreUsu: "DebyBolso", nombre: "Débora", apellido: "Lopez", email: "debielo@adinet.com", celular: "099557456", clave: "mwBk5255", tipo: "Huesped" },
    { nombreUsu: "Pablosky27", nombre: "Pablo", apellido: "Marmol", email: "pablomarmol@outlook.com", celular: "099651456", clave: "randoMpasSword99", tipo: "Huesped" },
    { nombreUsu: "Marge96", nombre: "Marjorie", apellido: "Simpson", email: "MargeS@gmail.com", celular: "099095430", clave: "sinFonica269", tipo: "Huesped" },
    { nombreUsu: "Liiisa", nombre: "Lucía", apellido: "Diaz", email: "luciaD@zoho.com", celular: "099231576", clave: "Millhouse789", tipo: "Huesped" },
    { nombreUsu: "GabitomanyaCAP", apellido: "Figueredo", nombre: "Gabriel", email: "gaby22@gmail.com", celular: "099194456", clave: "CacaHuate44", tipo: "Huesped" },
    { nombreUsu: "Nachocapo1", apellido: "Silva", nombre: "Juan Ignacio", email: "juancho@yahoo.com", celular: "099658456", clave: "bolsoAmuerte1899", tipo: "Huesped" },
    { nombreUsu: "Rickymaravilla", apellido: "Perez", nombre: "Ricardo", email: "ricky@adinet.com", celular: "099858456", clave: "r1ckYmorty", tipo: "Huesped" }]
// 07/11 - Reeordené los datos acorde al orden de los atributos de class.js
//         Verifiqué todos los atributos sean válidos con las necesitades del obligatorio (ej celular > 8 largo y solo numeros)

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
        let email = element.email;
        let tel = element.celular;
        let clave = element.clave;
        let tipo = element.tipo;

        let agregarActual = new Usuarios();

        agregarActual.nombreUsu = user;
        agregarActual.nombre = nombre;
        agregarActual.apellido = apellido;
        agregarActual.email = email;
        agregarActual.celular = tel;
        agregarActual.clave = clave;
        agregarActual.tipo = tipo;

        listaUsuarios.push(agregarActual);
    }
}
////////////// REGISTRO //////////////
function registro() {
    let nUser = document.querySelector("#txtRegistroNomUsu").value.trim();                   /// comienza seleccion de valores del html///
    let nNombre = document.querySelector("#txtRegistroNom").value.trim();
    let nApellido = document.querySelector("#txtRegistroApe").value.trim();
    let nMail = document.querySelector("#txtRegistroEmail").value.trim();
    let nTel = document.querySelector("#txtRegistroTel").value.trim();
    let nPass = document.querySelector("#txtRegistroContraseña").value.trim();
    let nPassComp = document.querySelector("#txtRegistroContraseñaComp").value.trim();  // termina seleccion de valores del html
    let mensaje = "";







    if (!verificarTextoNoVacio(nUser)) {
        mensaje += "Ingrese datos validos en el campo de usuario"
    }

    if (!verificarTextoNoVacio(nNombre)) {
        mensaje += "Ingrese datos validos en el campo de nombre<br>"
    }
    if (!verificarTextoNoVacio(nApellido)) {
        mensaje += "Ingrese datos validos en el campo de Apellido<br>"
    }
    if (!validacionEmail) {
        mensaje += "Email no valido.<br>"
    }



    if (verificarTextoNoVacio(nUser) && verificarTextoNoVacio(nNombre) && verificarTextoNoVacio(nApellido) && validacionEmail(nMail) && validarCel(nTel) && validacionPass(nPass, nPassComp)) {

        let agregarActual = new Usuarios();                   // Se crea un objeto de clase usuario

        agregarActual.nombreUsu = nUser;                          //comienza  a ese objeto se le pone el dato que corresponde
        agregarActual.nombre = nNombre;
        agregarActual.apellido = nApellido;
        agregarActual.email = nMail;
        agregarActual.celular = nTel;
        agregarActual.clave = nPass;                              // termina ponerle datos a objeto
        let ntipo = "";
        if (userActual === "Visitante") {      /// si la pagina la esta viendo un visitante (el unico que deberia poder verlo porque no hay upgrade de user)
            ntipo = "Huésped"                 /// si es visitante su tipo de user va ser huesped
            agregarActual.tipo = ntipo;
        }
        if (userActual === "Administrador") {
            ntipo = "Anfitrión"
            agregarActual.tipo = ntipo;
        }
        listaUsuarios.push(agregarActual); /// se agrega al array 
        mensaje = "El usuario fue creado con exito";
    }
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

function validarRegistro(usr, nombre, apellido, email, celular, contraseña, repetircontraseña) {

}

function verificarTextoNoVacio(texto) {
    let validacion = true;
    if (texto.trim().length <= 0) { validacion = false; }
    return validacion;
}


function verificarEsNum(num) {
    let validacion = false;
    if (verificarTextoNoVacio(num)) {
        if (!isNaN(num)) { validacion = false; }
    }
    return validacion;
}

function validarCel(cel) {
    let validacion = false;
    if (verificarEsNum(cel) && cel.length === 8) { validacion = true; }
    return validacion;
}

function validacionEmail(mail) {
    let noExiste = true;
    let validacion = false;
    let encontroArroba = false;
    let encontroPunto = false;
    for (let i = 0; i < mail.length; i++) {
        let element = mail.charAt(i);
        if (element === "@") {
            encontroArroba = true;
        }
        if (encontroArroba && element === ".") {
            encontroPunto = true;
        }
        listaUsuarios.forEach(element => {
            if (element.email === mail) { noExiste = false; }
        });
    }
    if (encontroPunto && encontroArroba && noExiste) { validacion = true; }
    return validacion;

}

function validacionPass(clave, confirmacion) {
    let validacionPass = false;
    let validacionLongitud = false;
    //let validacionLetrasMin = false;
    let validacionLetrasMay = false;
    let validacionNumeros = false;
    let validacionConfirmacion = false;

    if (clave === confirmacion) {
        validacionConfirmacion = true;

        if (clave.length > 5) {
            validacionLongitud = true;
            let i = 0;
            while ((!validacionLetrasMay && !validacionNumeros) || (i < clave.length)) {
                /*if(isNaN(clave.charAt(i))){validacionLetrasMin}*/
                if (!isNaN(clave.charAt(i))) { validacionNumeros = true; }
                if (clave.charCodeAt(i) > 64 && clave.charCodeAt(i) < 91) { validacionMay = true; }
                i++;

            }

        }

        if (validacionLetrasMay && validacionLongitud && validacionNumeros && validacionConfirmacion) {
            validacionPass = true;
        }
        return validacionPass;


    }




}





console.log("Acceso cargado")

