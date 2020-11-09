document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#btnAcceso").addEventListener("click",validarLogin);
    document.querySelector("#btnRegistro").addEventListener("click",registro);
    document.querySelector("#btnAltaAnfitrion").addEventListener("click",registro);
    document.querySelector("#btnCotizar").addEventListener("click",cotizar);
    ingreso("Visitante","Visitante");
    cargarListaFotos();
    precargaUsuarios();
    precargaInmuebles();  
    });
   
    
   
   document.querySelector("#selLogin").addEventListener("change", ingresofalso); // Cuando el select de tipo de usuario cambia ejecuta ingreso()
    
    var userActual = document.querySelector("#selLogin").value;
    var cotizacion = Number(document.querySelector("#txtCotizar").value);
    function ingresofalso()
    {  
        userActual = document.querySelector("#selLogin").value; 
        console.log()
        ingreso(userActual);
    }
    

    
    
    
    //////////////<---------------------- PRECARGA DE DATOS INICIO--------------->//////////////////
    //// PRECARGA FOTOS
    let listaFotos = new Array();
function cargarListaFotos(){
for (let i = 0; i < 41; i++) {
    let fotoActual = `img/${i}`;
    listaFotos.push(fotoActual);
}}
    //// PRECARGA USUARIOS
    let listaUsuarios = new Array();
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
    //// PRECARGA INMUEBLES
let listaInmuebles = new Array();
let listaPrecargaInmuebles =  
[{ id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [0,1,2]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [3,4,5]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [6,7,8]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [9,10,11]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [12,13,14]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [15,16,17]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [18,19,20]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [21,22,23]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [26,24,25]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [29,27,28]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [30,31,32]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [33,35,34]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [36,37,38]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [39,40,1]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [2,3,4]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [5,6,7]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [8,9,10]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [11,12,13]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [14,15,16]},
    { id: "inmueble", titulo: "casa grande", descripcion: "", ciudad: "", precioPorNoche: 50, promedioCalif: 50, usuarioAnfitrion: "unanfitrion" , fotos : [17,18,19]},
     ]
function precargaInmuebles() {
        for (let i = 0; i < listaPrecargaInmuebles.length; i++) {
            
            let element = listaPrecargaInmuebles[i];                 //recorre lista listaPrecargaInmuebles
    
            let id = element.id;
            let titu = element.titulo;
            let desc = element.descripcion;
            let ciud = element.ciudad;                            // declara los atributos para preparar la carga
            let precioNoche = element.precioPorNoche;
            let prom = element.promedioCalif;
            let user = element.usuarioAnfitrion;
            let foto = element.fotos;
                
            let agregarInmActual = new Inmuebles();
    
            agregarInmActual.id = `${id}${i}`;
            agregarInmActual.titulo = titu;
            agregarInmActual.descripcion = desc;
            agregarInmActual.ciudad = ciud;                          //agrega atributos
            agregarInmActual.precioPorNoche = precioNoche;
            agregarInmActual.promedioCalif = prom;
            agregarInmActual.usuarioAnfitrion = user;
            let p = 0;
            listaInmuebles.push(agregarInmActual); //los pushea al array de lista de inmuebles
            
            while (p < foto.length) {
            relacionarInmuebleConFoto(i,foto[p])
            p++;               
            }      
                              
            
        }
}

/// RELACIONAR FOTOS CON INMUEBLES
function relacionarInmuebleConFoto(inmueble,photo) {
listaInmuebles[inmueble].fotos.push(listaFotos[photo])    
}
    //////////////<---------------------- PRECARGA DE DATOS FIN--------------->/////////////////////
    
    //////////////<---------------------- ACCESO INICIO-------------------------->/////////////////////
    //// VALIDACION DE ACCESO
    // AUTENTICACION
function validarLogin() {
    let user = document.querySelector("#txtLoginUser").value.trim();
    let pasword = document.querySelector("#txtLoginPassword").value.trim();
    let validacionAcceso = false;
    if(user.length>0&&pasword.length>0)
    {
    // VALIDACIONES   
    let tipoUser = "";
    for (let i = 0; i < listaUsuarios.length; i++) {
            let element = listaUsuarios[i];
            if (element.nombreUsu === user && element.clave === pasword) {
                validacionAcceso = true;
                tipoUser = element.tipo;
                i = listaUsuarios.length + 1;
    }}
    if (validacionAcceso) {
            ingreso(tipoUser, user);
        }else{alert("No se pudo ingresar verifique los datos ingresados.")}
    }
}
    //// INGRESO
function ingreso(tipoUsuario, usuario) {
        userActual = tipoUsuario;                                                /// se cambia la variable global user por la ingresada
        document.getElementById("usuario-actual-tipo").innerHTML = userActual;  // se muestra en pantalla el nombre de usuario y el tipo de usuario actual
        document.getElementById("usuario-actual-nombre").innerHTML = usuario;   
        document.querySelectorAll("div").forEach(element => {           // se ocultan todos los div y se muestran solos que coincidan con la clase que coincida con el tipo de usr actual y se envia un alert de que se logro ingresar
        element.setAttribute("style","display:none");    
        });
        if (userActual==="Visitante") {
            document.querySelectorAll(".Visitante").forEach(element => {
            element.setAttribute("style","display:block");    
            }); 
        }
        if (userActual==="Administrador") {
        document.querySelectorAll(".Administrador").forEach(element => {
        element.setAttribute("style","display:block");    
        });
        alert(`${usuario} Has ingresado con exito! Bienvenido`);    
        }
        if (userActual==="Anfitrion") {
        document.querySelectorAll(".Anfitrion").forEach(element => {
        element.setAttribute("style","display:block");    
        });     
        alert(`${usuario} Has ingresado con exito! Bienvenido`);
        }
        if (userActual==="Huesped") {
                document.querySelectorAll(".Huesped").forEach(element => {
                element.setAttribute("style","display:block");                 
        });        
        alert(`${usuario} Has ingresado con exito! Bienvenido`);
        }
        selectCotizacion(userActual);  /// se ejecuta la funcion de crear el select en $ o dolares, solo pesos o no crearlo varia segun el tipo de usuario logeado.
        
        
    }
    //// SALIDA
function salir()
    {
        //// For each limpia todos lo que sea clase texto (todos inputs). logea mostrando la clase visitante y envia un alert avisando que se salio con exito
        document.querySelectorAll(".texto").forEach(element => {
        element.innerHTML = "";       
        });
        ingreso("Vistante","Visitante");
        alert("Has cerrado sesion con exito!");
    }
    //// REGISTRO
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

if (!validacionEmail(nMail)) {
mensaje += "Email no valido.<br>"
}

if(!validacionPass(nPass, nPassComp))
{mensaje += "Las claves no coinciden o no es es valida. Recuerde incluir una mayuscula, una letra, un numero y la longitud de la clave debe ser mayor a 5 caracteres."}
 
if(!verificarNoExisteUser(nUser))
{mensaje += "Ya existe otro usuario con ese nombre";}

if (verificarNoExisteUser(nUser) && verificarTextoNoVacio(nUser) && verificarTextoNoVacio(nNombre) && verificarTextoNoVacio(nApellido) && validacionEmail(nMail) && validarCel(nTel) && validacionPass(nPass, nPassComp)) {
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
alert(mensaje);
}

function verificarNoExisteUser(nUser){
    let validacion = true;
    listaUsuarios.forEach(element => {  // para cada entrada de listauruarios verifica si existe un nombre usuario igual que queremos registrar si lo encuentra no permite validar. 
     if(element.nombreUsu === nUser)
     {validacion = false;}   
    });
    return validacion;
    
}
    
function verificarTextoNoVacio(texto) {
let validacion = true;
if (texto.trim().length <= 0) { validacion = false; }
return validacion;
}
   
function verificarEsNum(num) {
        let validacion = false;
        if (verificarTextoNoVacio(num)) {
            if (!isNaN(num)) { validacion = true; }
        }
        return validacion;
    }
    
function validarCel(cel) {
        let validacion = false;
    
        if (verificarEsNum(cel) && cel.length === 8) 
        { validacion = true; }
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
    
    function validacionPass(clave, confirmacion) {
        let validacionPass = false;
        let validacionLongitud = false;
        //let validacionLetrasMin = false;
        let validacionLetrasMay = true;
        let validacionNumeros = false;
        let validacionConfirmacion = false;
    
        if (clave === confirmacion) {
            validacionConfirmacion = true;
            
            if (clave.length > 5) {
                
                validacionLongitud = true;
                let i = 0;
                while ((!validacionLetrasMay && !validacionNumeros) || (i < clave.length)) {
                    /*if(isNaN(clave.charAt(i))){validacionLetrasMin}*/
                    if (verificarEsNum(clave.charAt(i))) {
                        validacionNumeros = true;}
                      
                    if ((clave.charCodeAt(i)<65&&clave.charCodeAt(i)>90)) { validacionMay = false; }
                    i++;
                }
            }
    
            if (validacionLetrasMay && validacionLongitud && validacionNumeros && validacionConfirmacion) {
                validacionPass = true;
            }
            return validacionPass;
        }
}
//////////////<---------------------- ACCESO FIN ----------------------------->/////////////////////

//////////////<---------------------- COTIZACION INICIO-------------------------->//////////////////
    //// CAMBIAR COTIZACION
function cotizar()
{
    let nuevoValor = document.querySelector("#txtCotizar").value.trim();
    if(verificarEsNum(nuevoValor))
    {cotizacion = nuevoValor;
    alert("El valor del dolar fue actualizado corretamente.");}else{alert("El valor ingresado no es valido.");}
}

    // CREAR SELECT COTIZACION
function selectCotizacion(usr)
{
    let divCotizacion = document.querySelector("#divCotizacion");
    
    if(usr === "Visitante" || usr === "Huesped"){ divCotizacion.innerHTML = `<select><option value="$">$</option><option value="U$D">U$D</option></select>`;}
    if(usr === "Anfitrion"){ divCotizacion.innerHTML = `<select><option value="$">$</option></select>`;}
    if(usr === "Administrador"){divCotizacion.innerHTML = "";}
    
}
//////////////<--------------------- COTIZACION FIN----------------------------->/////////////////////
//////////////<--------------------- INMUEBLES INICIO -------------------------->/////////////////////
//// MOSTRAR INMUEBLES
function mostrarInmuebles()
{
let divMostrar = document.querySelector("#divInmuebles");
divMostrar.setAttribute("style","display:block");
divMostrar.innerHTML = "";
if (userActual === "Visitante")
{   
    listaInmuebles.forEach(element => {
    divMostrar.innerHTML += 
    `
    <table border=1>
    
    <tr><td><img src="${element.fotos[0]}.jpg"></td></tr>
    <tr><td>Titulo: ${element.titulo}</td></tr>
    <tr><td>Descripcion: ${element.descripcion}</td></tr>
    <tr><td>Ciudad: ${element.ciudad}</td></tr>
    <tr><td>Precio por noche: ${element.precioPorNoche}</td></tr>
    <tr><td>Calificacion: ${element.promedioCalif}</td> </tr>
    
  </table><br><br>`
  ;
});
}
}

//////////////<--------------------- INMUEBLES FIN ----------------------------->/////////////////////

