eventos();

let listaUsuarios = new Array;
let listaPrecarga =
    [{ nombreUsu: "agu22", nombre: "Agustín", clave: "bsadfklj123", tipo: "Huesped" , email : "agu22@gmail.com" , apellido : "Rodriguez" , celular : "099123456"},
    { nombreUsu: "AlmiSua345", nombre: "Almicar", clave: "Almicar99", tipo: "Huesped" , email : "almicar@gmail.com" , apellido : "Vazques" , celular : "099234654" },
    { nombreUsu: "Camiiii_ok", nombre: "Camila", clave: "Camilita123", tipo: "Anfitrion" , email : "camila@gmail.com" , apellido : "Carrasco" , celular : "1236547" },
    { nombreUsu: "Este_rodriguez", nombre: "Esteban", clave: "Quitoroto", tipo: "Huesped" , email : "estebanquito@gmail.com" , apellido : "Quito" , celular : "099456456" },
    { nombreUsu: "Américo_V", nombre: "Dardo", clave: "YMariaElena", tipo: "Huesped" , email : "dardo2020@gmail.com" , apellido : "Fuseneco" , celular : "099222222"},
    { nombreUsu: "admin", nombre: "Administrador", clave: "1234", tipo: "Administrador" , email : "admin@admin.com" , apellido : "admin" , celular : "111111111" },
    { nombreUsu: "Pepe_1", nombre: "José", clave: "EncimaDeRacing", tipo: "Anfitrion" , email : "josesito@gmail.com" , apellido : "Gomez" , celular : "09444456" },
    { nombreUsu: "Homer.78", nombre: "Homero", clave: "Marge", tipo: "Anfitrion" , email : "homerojsimpson@gmail.com" , apellido : "Simpson" , celular : "099777756" },
    { nombreUsu: "Robert_63", nombre: "Roberto", clave: "unmillondeamigos", tipo: "Anfitrion" , email : "robert@gmail.com" , apellido : "Carlos" , celular : "099888888" },
    { nombreUsu: "R2D2", nombre: "Arturo", clave: "unaclavede8digitos", tipo: "Anfitrion" , email : "arturoduro@gmail.com" , apellido : "Luro" , celular : "099199956"},
    { nombreUsu: "DebyBolso", nombre: "Débora", clave: "mwbk5255", tipo: "Huesped" , email : "debielo@gmail.com" , apellido : "Lopez" , celular : "099557456"},
    { nombreUsu: "Pablosky27", nombre: "Pablo", clave: "randompasword99", tipo: "Huesped" , email : "pablomarmol@gmail.com" , apellido : "Marmol" , celular : "099651456"},
    { nombreUsu: "Marge96", nombre: "Marjorie", clave: "sinfonica269", tipo: "Huesped" , email : "MargeS@gmail.com" , apellido : "Simpson" , celular : "099095430"},
    { nombreUsu: "Liiisa", nombre: "Lucía", clave: "Millhouse123", tipo: "Huesped" , email : "luciaD@gmail.com" , apellido : "Diaz" , celular : "099231576"},
    { nombreUsu: "GabitomanyaCAP", nombre: "Gabriel", clave: "cacahuate44", tipo: "Huesped" , email : "gaby22@gmail.com" , apellido : "Figueredo" , celular : "099194456"},
    { nombreUsu: "Nachocapo1", nombre: "Juan Ignacio", clave: "bolsoamuerte123", tipo: "Huesped" , email : "juancho@gmail.com" , apellido : "Silva" , celular : "099658456"},
    { nombreUsu: "Rickymaravilla", nombre: "Ricardo", clave: "unaclaverandom", tipo: "Huesped" , email : "ricky@gmail.com" , apellido : "Perez" , celular : "099858456"}]
//falta arreglar las constraseñas
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
    if(validarExisteUser(nUser))
    {mensaje += "Usuario ya existente";}
    

    if(validarExisteUser(nUser)&&verificarTextoNoVacio(nUser)&&verificarTextoNoVacio(nNombre)&&verificarTextoNoVacio(nApellido)&&validacionEmail(nMail)&&validarCel(nTel)&&validacionPass(nPass,nPassComp))
{

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
    listaUsuarios.push(agregarActual); /// se agrega al array 
    mensaje = "El usuario fue creado con exito";
}


////////////// AUTENTICACION /////////
function validarLogin() {
    let user = document.querySelector("#txtLoginUser").value.trim();
    let pasword = document.querySelector("#txtLoginPassword").value.trim();
    /////////////// VALIDACIONES ////////////////
    let validacionAcceso = false;
    if(user.length>0&&pasword.length>0)
    {
    /////////////// VALIDACION DEL ACCESO ///////
    
    let tipoUser = "";
    for (let i = 0; i < listaUsuarios.length; i++) {
        let element = listaUsuarios[i];
        if (element.nombre === user && element.clave === pasword) {
            validacionAcceso = true;
            tipoUser = element.tipo;
            i = listaUsuarios.length + 1;
        }
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


function validacionEmail(texto)
{ 
 let validacionTexto = true;
 let validacion = false;
 let contadorPunto = 0;
 let contadorArroba = 0; 
 let encontroArroba = false;
 let tieneUnPuntoValido = false;
 let textoAntesArroba = false;
 let textoDespArroba = false;
 let textoDespPunto = false;
 let comprobacion = "";

    for (let i = 0; i < texto.length; i++) {
        if((texto.charCodeAt(i)>63 && texto.charCodeAt(i)<91)||(texto.charCodeAt(i)>96 && texto.charCodeAt(i)<123)||(texto.charCodeAt(i)===46))
        {validacionTexto = false;
        comprobacion = comprobacion + texto.charAt(i);}
        if (texto.charCodeAt(i)===64) {
            contadorArroba = contadorArroba + 1;
            encontroArroba = true;
            if ((texto.charCodeAt(i+1)!==64)&&(texto.charCodeAt(i+1)!==46)) {
                textoDespArroba = true;
            }

        }
        if (encontroArroba&&texto.charAt(i)===".") {
            tieneUnPuntoValido = true;
            contadorPunto = contadorPunto + 1;
            if((texto.charCodeAt(i+1)!==64)&&(texto.charCodeAt(i+1)!==46))
            {textoDespPunto = true;}
        }
        if((texto.charCodeAt(0)!==64)&&(texto.charCodeAt(0)!==46))
        {textoAntesArroba = true;} 
        
    }
    if (comprobacion.length === texto.length)
    {validacionTexto = true;}else{validacionTexto = false;}
  //  console.log("comprobacion" + "         " + comprobacion)
  //  console.log("tiene punto" + "   " + tieneUnPuntoValido + "   " + contadorPunto)
  //  console.log("tiene @" + "   " + encontroArroba + "   " + contadorArroba)
  //  console.log("validacion texto" + "   " + validacionTexto)
    if(validacionTexto&&contadorArroba===1&&contadorPunto===1&&tieneUnPuntoValido&&textoAntesArroba&&textoDespArroba&&textoDespPunto){
    validacion = true;}
return validacion;
}


function validacionPass(clave,confirmacion)
{
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
    



            
        
        // tablaVisi+= inmuebleX.obtenerFila();


    
    tablaVisi += '</table>';

    document.querySelector("#divInmuebles").innerHTML = "";
    document.querySelector("#divInmuebles").innerHTML = tablaVisi;
    }}

    
    function validarExisteUser(usr)
    {let validacion = true;
        for (let i = 0; i < listaUsuarios.length; i++) {
            let element = listaUsuarios[i].nombreUsu;
            if (element = usr)
            {
                validacion=false;
            }
            
        }
        return validacion;
    }


function validacionEmail(texto)
{ 
 let validacionTexto = true;
 let validacion = false;
 let contadorPunto = 0;
 let contadorArroba = 0; 
 let encontroArroba = false;
 let tieneUnPuntoValido = false;
 let textoAntesArroba = false;
 let textoDespArroba = false;
 let textoDespPunto = false;
 let comprobacion = "";

    for (let i = 0; i < texto.length; i++) {
        if((texto.charCodeAt(i)>63 && texto.charCodeAt(i)<91)||(texto.charCodeAt(i)>96 && texto.charCodeAt(i)<123)||(texto.charCodeAt(i)===46))
        {validacionTexto = false;
        comprobacion = comprobacion + texto.charAt(i);}
        if (texto.charCodeAt(i)===64) {
            contadorArroba = contadorArroba + 1;
            encontroArroba = true;
            if ((texto.charCodeAt(i+1)!==64)&&(texto.charCodeAt(i+1)!==46)) {
                textoDespArroba = true;
            }

        }
        if (encontroArroba&&texto.charAt(i)===".") {
            tieneUnPuntoValido = true;
            contadorPunto = contadorPunto + 1;
            if((texto.charCodeAt(i+1)!==64)&&(texto.charCodeAt(i+1)!==46))
            {textoDespPunto = true;}
        }
        if((texto.charCodeAt(0)!==64)&&(texto.charCodeAt(0)!==46))
        {textoAntesArroba = true;} 
        
    }
    if (comprobacion.length === texto.length)
    {validacionTexto = true;}else{validacionTexto = false;}
  //  console.log("comprobacion" + "         " + comprobacion)
  //  console.log("tiene punto" + "   " + tieneUnPuntoValido + "   " + contadorPunto)
  //  console.log("tiene @" + "   " + encontroArroba + "   " + contadorArroba)
  //  console.log("validacion texto" + "   " + validacionTexto)
    if(validacionTexto&&contadorArroba===1&&contadorPunto===1&&tieneUnPuntoValido&&textoAntesArroba&&textoDespArroba&&textoDespPunto){
    validacion = true;}
return validacion;
}

console.log("Acceso cargado")

