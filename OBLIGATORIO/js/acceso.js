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

    

    if(verificarTextoNoVacio(nUser)&&verificarTextoNoVacio(nNombre)&&verificarTextoNoVacio(nApellido)&&validacionEmail(nMail)&&validarCel(nTel)&&validacionPass(nPass,nPassComp))
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

function validarRegistro(usr,nombre,apellido,email,celular,contraseña,repetircontraseña)
{

}

function verificarTextoNoVacio(texto)
{
    let validacion = true;
    if (texto.trim().length<=0)
    {validacion = false;}
    return validacion;
}


function verificarEsNum(num)
{
    let validacion = false;
    if (verificarTextoNoVacio(num))
    {
    if(!isNaN(num)){validacion = false;}
    }
    return validacion;
}

function validarCel(cel)
{
    let validacion = false;
    if(verificarEsNum(cel)&&cel.length===8)
    {validacion=true;}
    return validacion;
}

function validacionEmail(mail)
{   let noExiste = true;
    let validacion = false;
    let encontroArroba = false;
    let encontroPunto = false;
    for (let i = 0; i < mail.length; i++) {
        let element = mail.charAt(i);
        if (element === "@") {
            encontroArroba = true;
        }
        if (encontroArroba&&element===".")
        {
        encontroPunto = true;
        }
        listaUsuarios.forEach(element => {
        if(element.email === mail)
        {noExiste = false;}            
        });
        }
        if (encontroPunto&&encontroArroba&&noExiste){validacion = true;}
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

    if(clave === confirmacion)
    {
        validacionConfirmacion = true;
        
        if (clave.length>5) {
            validacionLongitud = true;
            let i = 0;
            while((!validacionLetrasMay&&!validacionNumeros)||(i < clave.length))
            {
                /*if(isNaN(clave.charAt(i))){validacionLetrasMin}*/
                if(!isNaN(clave.charAt(i))){validacionNumeros = true;}
                if(clave.charCodeAt(i)>64&&clave.charCodeAt(i)<91){validacionMay = true;}
                i++;
               
            }
                        
        }

        if(validacionLetrasMay&&validacionLongitud&&validacionNumeros&&validacionConfirmacion)
        {
            validacionPass = true;
        }
        return validacionPass;
        

    }
    



}





console.log("Acceso cargado")

