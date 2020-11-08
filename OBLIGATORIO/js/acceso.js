


eventos();

let listaUsuarios = new Array;
let listaPrecargaUsuarios =
    [
        { nombreUsu: "agu22", nombre: "Agustín", apellido: "Rodriguez", email: "agu22@gmail.com", celular: "099123456", clave: "bSaDfklj123", tipo: "Huesped" },
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
        { nombreUsu: "Rickymaravilla", apellido: "Perez", nombre: "Ricardo", email: "ricky@adinet.com", celular: "099858456", clave: "r1ckYmorty", tipo: "Huesped" }
    ];
// 07/11 - Reeordené los datos acorde al orden de los atributos de class.js
//         Verifiqué todos los atributos sean válidos con las necesitades del obligatorio (ej celular > 8 largo y solo numeros)

let listaInmuebles = new Array;

let listaPrecargaInmuebles =
    [
        {
            id: 1,
            titulo: "Complejo Los Balcones, 3era unidad",
            descripcion: "Living amplio con hogar, comedor con cocina integrada, baño social, cocina con cómodos placares. Planta alta con acceso por cómoda escalera con pasamanos, baño principal completo, parrillero semi cubierto con pergola de madera. Piscina de uso común. Consulte por fines de semana en temporada baja.",
            ciudad: "Punta Colorada",
            precioPorNoche: 5400,
            promedioCalif: 3.9,
            cantidadFotosInm: 12,
            rutaImg: "img\Inmuebles\Inmueble1",
            fotos:""
        }
    ];

let listaFotos = new Array;

function precargaFotos() {

    for (let i = 0; i < listaInmuebles.length; i++) {

        let inmuebleX = listaInmuebles[i];
        let id = 1;
        let idInm = inmuebleX[id];
        let rutaActual = inmuebleX[rutaImg];
        

        let cantidadFotos = inmuebleX[cantidadFotosInm];
        while (ite < cantidadFotos /*&& bandera*/) {

            let agregarFotoActual = new Fotos();
            agregarFotoActual.id = id;
            agregarFotoActual.idInmuebleRel = idInm;

            let fotoAcargar = `<img src='${rutaActual}'${id}/>`;
            agregarFotoActual.codigoFoto = fotoAcargar;
            listaFotos.push(agregarFotoActual);

            ite++;
            id++;
        }
    }
}
//Falta bandera en while y automatizar la cantidad de fotos para que corte cuando salga undefined y despues sacamos el atributo cantidadFotosInm de la clase Inmuebles


function eventos() {
    document.querySelector("#btnAcceso").addEventListener("click", validarLogin);
    document.querySelector("#btnRegistro").addEventListener("click", registro);
    document.querySelector("#selLogin").addEventListener("change", mostrarTabla);

}

function precargaUsuarios() {
    for (let i = 0; i < listaPrecargaUsuarios.length; i++) {  //recorre lista precargaUsuarios
        let element = listaPrecargaUsuarios[i];

        let user = element.nombreUsu;
        let nombre = element.nombre;                        // declara los atributos para preparar la carga
        let apellido = element.apellido;
        let email = element.email;
        let tel = element.celular;
        let clave = element.clave;
        let tipo = element.tipo;

        let agregarUsuActual = new Usuarios();

        agregarUsuActual.nombreUsu = user;
        agregarUsuActual.nombre = nombre;
        agregarUsuActual.apellido = apellido;                  //agrega atributos
        agregarUsuActual.email = email;
        agregarUsuActual.celular = tel;
        agregarUsuActual.clave = clave;
        agregarUsuActual.tipo = tipo;

        listaUsuarios.push(agregarUsuActual);                  //los pushea al array de lista de usuarios
    }
}

function precargaInmuebles() {
    let id = 1;
    for (let i = 0; i < listaPrecargaInmuebles.length; i++) {
        let element = listaPrecargaInmuebles[i];                 //recorre lista listaPrecargaInmuebles

        id = element.id;
        let titu = element.titulo;
        let desc = element.descripcion;
        let ciud = element.ciudad;                            // declara los atributos para preparar la carga
        let precioNoche = element.precioPorNoche;
        let prom = element.promedioCalif;
        let foto = element.fotos;

        let agregarInmActual = new Inmuebles();

        agregarInmActual.id = id;
        agregarInmActual.titulo = titu;
        agregarInmActual.descripcion = desc;
        agregarInmActual.ciudad = ciud;                          //agrega atributos
        agregarInmActual.precioPorNoche = precioNoche;
        agregarInmActual.promedioCalif = prom;
        agregarInmActual.fotos = foto;

        listaInmuebles.push(agregarInmActual);                  //los pushea al array de lista de inmuebles
        id++;
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
            ntipo = "Huesped"                 /// si es visitante su tipo de user va ser huesped
            agregarActual.tipo = ntipo;
        }
        if (userActual === "Administrador") {
            ntipo = "Anfitrion"                 //// si es admi tipo user = anfitrion
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

function validarRegistro(user, nombre, apellido, email, celular, contraseña, repetirContraseña) {

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

function mostrarTabla() {
    let tablaVisi = `<Table border="1">`;
    tablaVisi += `<th>Titulo</th><th>Descripción</th><th>Ciudad</th><th>Precio Por Noche</th><th>Calificación</th><th>Foto</th>`;

    for (let i = 0; i < listaInmuebles.length; i++) {

        let inmuebleX = listaInmuebles[i];
        let titu = inmuebleX.titulo;
        let desc = inmuebleX.descripcion;
        let ciud = inmuebleX.ciudad;
        let precio = inmuebleX.precioPorNoche;
        let prom = inmuebleX.promedioCalif;

        let imagen = listafotos.idInmuebleRel[i];

        tablaVisi += `<tr id="fila-${inmuebleX.Id}">`;
        tablaVisi += `<td> ${titu} </td><td> ${desc} </td><td>  ${ciud}</td><td>  ${precio}</td><td>  ${prom}</td><td>  ${imagen}</td>`;
        tablaVisi += '</tr>';

        if (inmuebleX.listaInmuebles.length > 0) {
            for (let j = 0; j < inmuebleX.listaInmuebles.length; j++) {
                let inmuebleActual = inmuebleX.listaInmuebles[i];

                tablaVisi += `<tr><td> </td><td> ${inmuebleActual.titulo} </td><td>  ${inmuebleActual.descripcion}</td></tr><td>  ${inmuebleActual.ciudad}</td></tr><td>  ${inmuebleActual.precioPorNoche}</td></tr><td>  ${inmuebleActual.promedioCalif}</td></tr><td>  ${inmuebleActual.fotos}</td></tr>`;

            }
        }
        // tablaVisi+= inmuebleX.obtenerFila();


    }
    tablaVisi += '</table>';

    document.querySelector("#divInmuebles").innerHTML = "";
    document.querySelector("#divInmuebles").innerHTML = tablaVisi;

}

console.log("Acceso cargado")

