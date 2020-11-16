document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btnAcceso").addEventListener("click", validarLogin);
    document.querySelector("#btnRegistro").addEventListener("click", registro);
    document.querySelector("#btnAltaAnfitrion").addEventListener("click", registro);
    document.querySelector("#btnCotizar").addEventListener("click", cotizar);
    document.querySelector("#btnSalir").addEventListener("click", salir);
    document.querySelector("#btnRegistrarInmueble").addEventListener("click", registrarInmueble);
    document.querySelector("#selOrdenar").addEventListener("change", mostrarInmuebles);
    document.querySelector("#btnBuscar").addEventListener("click", buscador);
    cargarListaFotos();
    precargaUsuarios();
    precargaInmuebles();
    cargarPrecargaUserConInmueble();
    ingreso("Visitante", "Visitante");
});

var globalTipoUser = "Visitante";
var globalUser = "Visitante";
document.querySelector("#txtCotizar").value = 40;
var cotizacion = Number(document.querySelector("#txtCotizar").value);
let arrayResultado = new Array();


//////////////<---------------------- PRECARGA DE DATOS INICIO--------------->//////////////////
//// PRECARGA FOTOS
let listaFotos = new Array();
function cargarListaFotos() {
    for (let i = 0; i < 225; i++) {
        let fotoActual = `img/${i}`;
        listaFotos.push(fotoActual);
    }
}
//// PRECARGA USUARIOS
let listaUsuarios = new Array();
let listaPrecargaUsuarios =
    [
        { nombreUsu: "agu22", nombre: "Agustín", apellido: "Rodriguez", email: "agu22@gmail.com", celular: "099123456", clave: "bSaDfklj123", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "AlmiSua345", nombre: "Almicar", apellido: "Vazques", email: "almicar@hotmail.com", celular: "096234654", clave: "Almicar1995", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Camiiii_ok", nombre: "Camila", apellido: "Carrasco", email: "camila@zoho.com", celular: "095236547", clave: "Camilita123", tipo: "Anfitrion", reservas: "", inmuebles: [] },
        { nombreUsu: "Este_rodriguez", nombre: "Esteban", apellido: "Quito", email: "estebanquito@gmail.com", celular: "099456456", clave: "Quitoroto456", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Américo_V", nombre: "Dardo", apellido: "Fuseneco", email: "dardo2020@yahoo.com", celular: "099222222", clave: "YMari4Elen4", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "admin", nombre: "Administrador", apellido: "admin", email: "admin@hotmail.com", celular: "097111111", clave: "1234", tipo: "Administrador", reservas: "", inmuebles: [] },
        { nombreUsu: "Pepe_1", nombre: "José", apellido: "Gomez", email: "josesito@gmail.com", celular: "094446456", clave: "EncimadeRacing27", tipo: "Anfitrion", reservas: "", inmuebles: [] },
        { nombreUsu: "Homer.78", nombre: "Homero", apellido: "Simpson", email: "homerojsimpson@gmail.com", celular: "099777756", clave: "Marge1967", tipo: "Anfitrion", reservas: "", inmuebles: [] },
        { nombreUsu: "Robert_63", nombre: "Roberto", apellido: "Carlos", email: "robert@gmail.com", celular: "099888888", clave: "1millondeAmigos", tipo: "Anfitrion", reservas: "", inmuebles: [] },
        { nombreUsu: "R2D2", nombre: "Arturo", apellido: "Luro", email: "arturoduro@hotmail.com", celular: "099199956", clave: "unaClavede8mildigitos", tipo: "Anfitrion", reservas: "", inmuebles: [] },
        { nombreUsu: "DebyBolso", nombre: "Débora", apellido: "Lopez", email: "debielo@adinet.com", celular: "099557456", clave: "mwBk5255", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Pablosky27", nombre: "Pablo", apellido: "Marmol", email: "pablomarmol@outlook.com", celular: "099651456", clave: "randoMpasSword99", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Marge96", nombre: "Marjorie", apellido: "Simpson", email: "MargeS@gmail.com", celular: "099095430", clave: "sinFonica269", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Liiisa", nombre: "Lucía", apellido: "Diaz", email: "luciaD@zoho.com", celular: "099231576", clave: "Millhouse789", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "GabitomanyaCAP", apellido: "Figueredo", nombre: "Gabriel", email: "gaby22@gmail.com", celular: "099194456", clave: "CacaHuate44", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Nachocapo1", apellido: "Silva", nombre: "Juan Ignacio", email: "juancho@yahoo.com", celular: "099658456", clave: "bolsoAmuerte1899", tipo: "Huesped", reservas: "", inmuebles: [] },
        { nombreUsu: "Rickymaravilla", apellido: "Perez", nombre: "Ricardo", email: "ricky@adinet.com", celular: "099858456", clave: "r1ckYmorty", tipo: "Huesped", reservas: "", inmuebles: [] }
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
    [{
        id: 0, estado: "on", titulo: "Complejo Los Balcones, tercera unidad. ", descripcion: "Living amplio con hogar, comedor con cocina integrada, baño social, cocina con cómodos placares",
        ciudad: "Punta Colorada", precioPorNoche: 1500, usuarioAnfitrion: "Camiiii_ok", calificaciones: [2.7, 4.3, 2.8, 4.2], promedioCalif: 3.5, fotos: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        id: 1, estado: "off", titulo: "Dionisio Lopez Y Av. Italia", descripcion: "Alquiler de casa en zona Buceo Dionisio Lopez y Av. Italia todo en planta baja, sin gtos. comunes.",
        ciudad: "Montevideo", precioPorNoche: 2500, usuarioAnfitrion: "Camiiii_ok", calificaciones: [2.5, 4.1, 3.8, 2.5, 2.1], promedioCalif: 3, fotos: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    },
    {
        id: 2, estado: "on", titulo: "De categoría Impecable", descripcion: "Impecable, lista para ocupar en el corazon de la Ciudad Vieja a pasos de la Plaza Matriz, Plaza Independencia, bancos, redes de cobranza y organismos publicos.",
        ciudad: "Montevideo", precioPorNoche: 3500, usuarioAnfitrion: "Camiiii_ok", calificaciones: [2.6, 3.6, 4.6], promedioCalif: 3.6, fotos: [24, 25, 26, 27, 28, 29]
    },
    {
        id: 3, estado: "on", titulo: "Apartamento a estrenar con estacionamiento y patio privado", descripcion: "Un excelente punto para vivir. Consiste de 1 dormitorio, cocina-comedor, baño, patio. Todos los ambientes tienen ventanales al exterior.",
        ciudad: "Montevideo", precioPorNoche: 1700, usuarioAnfitrion: "Camiiii_ok", calificaciones: [1.8, 2.6, 3.5, 2.1], promedioCalif: 2.5, fotos: [30, 31, 32, 33, 34]
    },
    {
        id: 4, estado: "on", titulo: "Casa en Punta Negra ´EL ESKP´", descripcion: "Casa en Punta Negra. Ambiente principal luminoso comprende living comedor con aire acondicionado y cama marinera y kitchenette; dormitorio matrimonial con placard empotrado y ventilador de techo y baño completo. ",
        ciudad: "Punta Negra", precioPorNoche: 2200, usuarioAnfitrion: "Robert_63", calificaciones: [3.5, 3.7, 3.2, 3.0, 2.7, 4.0], promedioCalif: 3.35, fotos: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
    },
    {
        id: 5, estado: "off", titulo: "Alquiler temporal en Piriápolis", descripcion: "Cómoda construcción ideal para sus vacaciones, con increíbles vistas. Comodidades para 10 personas, distribuidas en dos plantas. ",
        ciudad: "Piriápolis", precioPorNoche: 4800, usuarioAnfitrion: "Robert_63", calificaciones: [4.3, 4.5, 4.7], promedioCalif: 4.5, fotos: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]
    },
    {
        id: 6, estado: "on", titulo: "Casa en Bella Vista ´LA BLANCA´", descripcion: "Ubicada en el Balneario Bella Vista, en un amplio y en ajardinado terreno, en un entorno de buenas construcciones. A tan solo 10 minutos de Piriápolis y a minutos de los servicios en Balneario Las Flores.",
        ciudad: "Bella Vista", precioPorNoche: 5100, usuarioAnfitrion: "Pepe_1", calificaciones: [3.7, 3.9, 2.5, 2.9], promedioCalif: 3.25, fotos: [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
    },
    {
        id: 7, estado: "on", titulo: "Apto en Rambla con Amenities. Bolivia y Gonzalez Moreno", descripcion: "Muy lindo depto en Rambla Costanera con amenities",
        ciudad: "Colonia del Sacramento", precioPorNoche: 4500, usuarioAnfitrion: "Pepe_1", calificaciones: [2.8, 3.0, 3.5, 4.2], promedioCalif: 3.375, fotos: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80]
    },
    {
        id: 8, estado: "off", titulo: "Hermoso apartamento en el corazón de paysandu", descripcion: "Apartamento en excelentes condiciones, en la mejor ubicacion de paysandu, muy amplio. Cuenta con gran balcon con vista al rio uruguay. Tambien se evalua venta, consulte no molesta. Dueño directo!",
        ciudad: "Paysandú", precioPorNoche: 1800, usuarioAnfitrion: "Pepe_1", calificaciones: [2.7, 2.8, 2.2, 2.0, 1.8], promedioCalif: 2.3, fotos: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]
    },
    {
        id: 9, estado: "on", titulo: "Excelente local comercial en alquiler", descripcion: "Excelente local en la ciudad de Salto ubicado en calle Chiazzaro cercano a zona de Restaurantes. Cómodo y luminoso. Amplio y en un excelente estado, cuenta con un baño, kitchinette y amplia oficina con blindex, y patio interior. Muy buena vidriera, ideal para comercio.",
        ciudad: "Salto", precioPorNoche: 1500, usuarioAnfitrion: "Pepe_1", calificaciones: [2.2, 2.4, 2.6, 2.8, 3.0], promedioCalif: 3, fotos: [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
    },
    {
        id: 10, estado: "on", titulo: "CASA 2 DORMITORIOS. Próximo a Rambla y 28", descripcion: "CASA 2 Dormitorios muy buena ubicación, a 1 cuadra del arroyo, 1 del bus y super. Amplio estar comedor con cocina integrada, baño completo. terreno esquina totalmente cercado",
        ciudad: "Parque del Plata", precioPorNoche: 3000, usuarioAnfitrion: "Homer.78", calificaciones: [3.4, 3.1, 3.7, 4.0], promedioCalif: 3.55, fotos: [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]
    },
    {
        id: 11, estado: "on", titulo: "Alquiler de Chacra en Durazno a 5 min del centrocasa 11", descripcion: "Se alquila chacra amueblada, 3 dormitorios más escritorio, 2 baños, cocina con comedor definida. Living con estufa a leña, parque con piscina. Muy buena vista, sobre ruta 14 a 5 minutos de Durazno.",
        ciudad: "Durazno", precioPorNoche: 3200, usuarioAnfitrion: "Homer.78", calificaciones: [2.7, 4.3, 3.0, 4.0], promedioCalif: 3.25, fotos: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127]
    },
    {
        id: 12, estado: "off", titulo: "Chacra - Balneario Buenos Aires, VillaLagos. Barrio Privado,", descripcion: "Espectacular Chacra con vista al mar, 7 dormitorios. Terraza al frente con parrillero y solárium . Piscina y piscina para niños. Sala de Estar. Dependencia de servicio. Estufa a leña y hogar exterior. Villalagos Se trata del plan perfecto: la privacidad de una moderna y lujosa residencia, inmersa en un entorno natural paradisíaco, a pasos de la playa y que no se priva de la cercanía de bares, restaurantes y la energía de La Barra y de José Ignacio. ",
        ciudad: "José Ignacio", precioPorNoche: 7600, usuarioAnfitrion: "Robert_63", calificaciones: [4.1, 4.3, 4.7, 4.9], promedioCalif: 4.5, fotos: [128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139]
    },
    {
        id: 13, estado: "off", titulo: "ALQUILER / VENTA EDIFICIO PARAISO 1 DE LA COSTA CHUY", descripcion: "Consta de 4 mono ambientes con parrilla. 1 departamento para 4 1 departamento matrimonial 1 departamento matrimonial 1 depart. Matrimonio + 1 1 depart. Matrimonio 1 departamento matrimonio 1 departamento 4 solteros 4 depart motrim+ 2 + parrilla Primer piso 1 departamento para 4 1 departamento para 8 Segundo piso 2 departamento para 4 2 depart.",
        ciudad: "Chuy", precioPorNoche: 1750, usuarioAnfitrion: "Homer.78", calificaciones: [2.7, 3.4, 3.7, 3.3, 3.5], promedioCalif: 3.32, fotos: [140, 141, 142, 143, 144]
    },
    {
        id: 14, estado: "off", titulo: "CASA 3 dormitorios, 3 baños, parrillero, hogar, equipada!", descripcion: "LO QUE NO HAY!!! CASA EN LA PEDRERA, ROCHA DIVINA, COMPLEJO CERRADO, POCOS AÑOS DE CONSTRUIDA. 3 CUADRAS DE LA RAMBLA! , A 1 cuadra de la principal TOTALMENTE EQUIPADA hasta con ropa de cama!!! Capacidad para 8 personas!. 1 cama matrimonial y 6 camas simples.",
        ciudad: "La pedrera", precioPorNoche: 6200, usuarioAnfitrion: "Homer.78", calificaciones: [4.1, 3.4, 3.5, 4.5, 3.8, 3.2], promedioCalif: 3.75, fotos: [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156]
    },
    {
        id: 15, estado: "on", titulo: "Casa para 5 personas Punta Rubia rocha", descripcion: "Eco Casa Contêiner a estrenar, esta ubicada en Punta Rubia departamento de Rocha, a menos de 1 Km. del centro de la Pedrera, al cual puedes llegar tanto en vehículo, bicicleta o caminando. Equipada para 5 personas, cuenta con dos dormitorios, uno con cama matrimonial y el otro con tres camas, baño con cabina y calefón que también alimenta la cocina, en el estar cuenta con aire acondicionado y para los dias mas frescos podes disfrutar de la estufa a leña, todo en una misma planta. Todas las aberturas cuentan con mosquitero",
        ciudad: "Punta Rubia", precioPorNoche: 5500, usuarioAnfitrion: "R2D2", calificaciones: [3.0, 3.3, 3.5, 3.7, 4.0], promedioCalif: 3.5, fotos: [157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168]
    },
    {
        id: 16, estado: "on", titulo: "Oportunidad, no paga gastos comunes. Cerca de todo", descripcion: "Santiago Gadea y Maipú a una cuadra de Dr. Luis Alberto de Herrera, excelente ubicación, con una red de servicios muy próxima. Apartamento en planta baja, es el primer apartamento del corredor, tiene patio frontal con parrillero, al mismo da el living comedor, cocina definida con estar diario, baño a nuevo, dormitorio en planta baja. En planta alta tiene un gran dormitorio y la salida a la terraza. No paga gastos comunes, contador de agua independiente. ",
        ciudad: "Montevideo", precioPorNoche: 2550, usuarioAnfitrion: "R2D2", calificaciones: [2.6, 4.4, 3.2, 3.8, 2.0], promedioCalif: 3.2, fotos: [169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180]
    },
    {
        id: 17, estado: "off", titulo: "Alquiler Apartamento 1 Dormitorio A Estrenar Centro", descripcion: "Hermoso Apartamento a Estrenar! Ubicado sobre Soriano, esquina Aquiles Lanza, a pasos de 18 de Julio. Amplio Living comedor con balcón al frente. Cocina integrada con placares. Dormitorio con Gran vista al Río. Planta de 55 m2, amplios ambientes. Único!!",
        ciudad: "Montevideo", precioPorNoche: 3450, usuarioAnfitrion: "R2D2", calificaciones: [2.9, 3.1, 3.0, 2.9, 3.3], promedioCalif: 3.04, fotos: [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192]
    },
    {
        id: 18, estado: "on", titulo: "Departamento - Treinta y Tres, Manuel Lavalleja al 1500", descripcion: "Excelente apartamento a media cuadra de la Plaza 19 de Abril, muy luminoso, dos dormitorios con placares, dos baños, terraza lavadero. Sin Gastos Comunes. Contrato a dos años",
        ciudad: "Treinta y Tres", precioPorNoche: 4750, usuarioAnfitrion: "R2D2", calificaciones: [2.5, 2.7, 2.2, 2.3, 2.8], promedioCalif: 2.5, fotos: [193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203]
    },
    {
        id: 19, estado: "on", titulo: "carrasco alquiler con muebles 2 dormitorios", descripcion: "Divino apartamento en Faros de Carrasco equipado full. Living comedor, 2 dormitorios, 2 baños (1 en suite), cocina definida, terraza lavadero. Calefacción y agua caliente por caldereta a gas. Vigilancia las 24 hs, circuito cerrado de cámaras. Amenities: Piscina abierta y cerrada Gimnasio con sauna. Jacuzzi Spa Hidromasaje Salón de eventos Barbacoa. Un lugar de cochera. El precio ya incluye wifi, electricidad, gastos comunes, uso de amenities.",
        ciudad: "Montevideo", precioPorNoche: 8800, usuarioAnfitrion: "Robert_63", calificaciones: [4.5, 4.7, 4.3, 4.9, 4.1], promedioCalif: 4.5, fotos: [204, 205, 206, 207, 208, 209, 210, 211]
    },
    {
        id: 20, estado: "off", titulo: "Espectacular vista limpia a la rambla, doble frente", descripcion: "Comodísimo apartamento con vista super limpia a la rambla. 3er Piso con ascensor. 4 dormitorios, todos al frente por calle Cabildo, 3 baños completos, cocina integrada al living-comedor, lo que hace que en cualquier lado del living y la cocina, se esté disfrutando la vista. Regatas, cruceros, amaneceres, puestas de sol, etc.",
        ciudad: "Punta del Este", precioPorNoche: 8500, usuarioAnfitrion: "Marge96", calificaciones: [4.6, 4.7, 4.4, 4.3, 4.2], promedioCalif: 4.2, fotos: [212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223]
    },
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
        let estado = element.estado;
        let califi = element.calificaciones;

        let agregarInmActual = new Inmuebles();

        agregarInmActual.id = `${id}${i}`;
        agregarInmActual.titulo = titu;
        agregarInmActual.descripcion = desc;
        agregarInmActual.ciudad = ciud;                          //agrega atributos
        agregarInmActual.precioPorNoche = precioNoche;
        agregarInmActual.promedioCalif = prom;
        agregarInmActual.usuarioAnfitrion = user;
        agregarInmActual.calificaciones = califi;
        agregarInmActual.estado = estado;
        let p = 0;
        listaInmuebles.push(agregarInmActual); //los pushea al array de lista de inmuebles

        while (p < foto.length) {
            relacionarInmuebleConFoto(i, foto[p])
            p++;
        }
    }
}

/// RELACIONAR FOTOS CON INMUEBLES
function relacionarInmuebleConFoto(inmueble, photo) {
    listaInmuebles[inmueble].fotos.push(listaFotos[photo])
}


/// RELACIONAR USUARIOS CON INMUEBLES

function relacionarUsuarioConInmueble(usuario, inmueble) {
    listaUsuarios[usuario].inmuebles.push(listaInmuebles[inmueble])
}
function cargarPrecargaUserConInmueble() {
    let p = 0;
    for (let i = 0; i < listaUsuarios.length; i++) {
        let element = listaUsuarios[i];

        if (p >= listaInmuebles.length) { p = 0; }
        if (element.tipo !== "Administrador") {
            relacionarUsuarioConInmueble(i, p)
            p++
            relacionarUsuarioConInmueble(i, p)
            p++
            relacionarUsuarioConInmueble(i, p)
            p++
        }
    }
}
//////////////<---------------------- PRECARGA DE DATOS FIN--------------->/////////////////////

//////////////<---------------------- ACCESO INICIO-------------------------->/////////////////////
//// VALIDACION DE ACCESO
// AUTENTICACION
function validarLogin() {
    let user = document.querySelector("#txtLoginUser").value.trim();
    let password = document.querySelector("#txtLoginPassword").value.trim();
    let validacionAcceso = false;
    if (user.length > 0 && password.length > 0) {
        // VALIDACIONES   
        let tipoUser = "";
        for (let i = 0; i < listaUsuarios.length; i++) {
            let element = listaUsuarios[i];
            if (element.nombreUsu === user && element.clave === password) {
                validacionAcceso = true;
                tipoUser = element.tipo;
                i = listaUsuarios.length + 1;
            }
        }
        if (validacionAcceso) {
            ingreso(tipoUser, user);
        } else { alert("No se pudo ingresar verifique los datos ingresados.") }
    }
}
//// INGRESO
function ingreso(tipoUsuario, usuario) {
    globalTipoUser = tipoUsuario;                                              /// se cambia la variables globales por la ingresada
    globalUser = usuario;
    document.getElementById("usuario-actual-tipo").innerHTML = tipoUsuario;  // se muestra en pantalla el nombre de usuario y el tipo de usuario actual
    document.getElementById("usuario-actual-nombre").innerHTML = usuario;
    document.querySelectorAll("div").forEach(element => {           // se ocultan todos los div y se muestran solos que coincidan con la clase que coincida con el tipo de usr actual y se envia un alert de que se logro ingresar
        element.setAttribute("style", "display:none");
    });
    if (globalTipoUser === "Visitante") {
        document.querySelectorAll(".Visitante").forEach(element => {
            element.setAttribute("style", "display:block");
        });
    }
    if (globalTipoUser === "Administrador") {
        document.querySelectorAll(".Administrador").forEach(element => {
            element.setAttribute("style", "display:block");
        });
        alert(`${usuario} Has ingresado con éxito! Bienvenido`);
    }
    if (globalTipoUser === "Anfitrion") {
        document.querySelectorAll(".Anfitrion").forEach(element => {
            element.setAttribute("style", "display:block");
        });
        alert(`${usuario} Has ingresado con éxito! Bienvenido`);
    }
    if (globalTipoUser === "Huesped") {
        document.querySelectorAll(".Huesped").forEach(element => {
            element.setAttribute("style", "display:block");
        });
        alert(`${usuario} Has ingresado con éxito! Bienvenido`);
    }


    selectCotizacion(globalTipoUser);  /// se ejecuta la funcion de crear el select en $ o dolares, solo pesos o no crearlo varia segun el tipo de usuario logeado.
    mostrarInmuebles();

}
//// SALIDA
function salir() {
    //// For each limpia todos lo que sea clase texto (todos inputs). logea mostrando la clase visitante y envia un alert avisando que se salio con éxito
    document.querySelectorAll(".texto").forEach(element => {
        element.innerHTML = "";
    });
    ingreso("Visitante", "Visitante");
    alert("Has cerrado sesion con éxito!");
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

    if (!validacionPass(nPass, nPassComp)) { mensaje += "Las claves no coinciden o no es es valida. Recuerde incluir una mayuscula, una letra, un numero y la longitud de la clave debe ser mayor a 5 caracteres." }

    if (!verificarNoExisteUser(nUser)) { mensaje += "Ya existe otro usuario con ese nombre"; }

    if (verificarNoExisteUser(nUser) && verificarTextoNoVacio(nUser) && verificarTextoNoVacio(nNombre) && verificarTextoNoVacio(nApellido) && validacionEmail(nMail) && validarCel(nTel) && validacionPass(nPass, nPassComp)) {
        let agregarActual = new Usuarios();                   // Se crea un objeto de clase usuario
        agregarActual.nombreUsu = nUser;                          //comienza  a ese objeto se le pone el dato que corresponde
        agregarActual.nombre = nNombre;
        agregarActual.apellido = nApellido;
        agregarActual.email = nMail;
        agregarActual.celular = nTel;
        agregarActual.clave = nPass;                              // termina ponerle datos a objeto
        let ntipo = "";
        if (globalTipoUser === "Visitante") {      /// si la pagina la esta viendo un visitante (el unico que deberia poder verlo porque no hay upgrade de user)
            ntipo = "Huesped"                 /// si es visitante su tipo de user va ser huesped
            agregarActual.tipo = ntipo;
        }
        if (globalTipoUser === "Administrador") {
            ntipo = "Anfitrion"                 //// si es admi tipo user = anfitrion
            agregarActual.tipo = ntipo;
        }
        listaUsuarios.push(agregarActual); /// se agrega al array 
        mensaje = "El usuario fue creado con éxito";
    }
    alert(mensaje);
}

function verificarNoExisteUser(nUser) {
    let validacion = true;
    listaUsuarios.forEach(element => {  // para cada entrada de listaUsuarios verifica si existe un nombre usuario igual que queremos registrar si lo encuentra no permite validar. 
        if (element.nombreUsu === nUser) { validacion = false; }
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

    if (verificarEsNum(cel) && cel.length === 8) { validacion = true; }
    return validacion;
}

function validacionEmail(texto) {
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
        if ((texto.charCodeAt(i) > 63 && texto.charCodeAt(i) < 91) || (texto.charCodeAt(i) > 96 && texto.charCodeAt(i) < 123) || (texto.charCodeAt(i) === 46)) {
            validacionTexto = false;
            comprobacion = comprobacion + texto.charAt(i);
        }
        if (texto.charCodeAt(i) === 64) {
            contadorArroba = contadorArroba + 1;
            encontroArroba = true;
            if ((texto.charCodeAt(i + 1) !== 64) && (texto.charCodeAt(i + 1) !== 46)) {
                textoDespArroba = true;
            }

        }
        if (encontroArroba && texto.charAt(i) === ".") {
            tieneUnPuntoValido = true;
            contadorPunto = contadorPunto + 1;
            if ((texto.charCodeAt(i + 1) !== 64) && (texto.charCodeAt(i + 1) !== 46)) { textoDespPunto = true; }
        }
        if ((texto.charCodeAt(0) !== 64) && (texto.charCodeAt(0) !== 46)) { textoAntesArroba = true; }

    }
    if (comprobacion.length === texto.length) { validacionTexto = true; } else { validacionTexto = false; }
    //  console.log("comprobacion" + "         " + comprobacion)
    //  console.log("tiene punto" + "   " + tieneUnPuntoValido + "   " + contadorPunto)
    //  console.log("tiene @" + "   " + encontroArroba + "   " + contadorArroba)
    //  console.log("validacion texto" + "   " + validacionTexto)
    if (validacionTexto && contadorArroba === 1 && contadorPunto === 1 && tieneUnPuntoValido && textoAntesArroba && textoDespArroba && textoDespPunto) {
        validacion = true;
    }
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
                    validacionNumeros = true;
                }

                if ((clave.charCodeAt(i) < 65 && clave.charCodeAt(i) > 90)) { validacionMay = false; }
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
function cotizar() {
    let nuevoValor = document.querySelector("#txtCotizar").value.trim();
    if (verificarEsNum(nuevoValor)) {
        cotizacion = nuevoValor;
        alert("El valor del dolar fue actualizado corretamente.");
    } else { alert("El valor ingresado no es valido."); }
}

// CREAR SELECT COTIZACION
function selectCotizacion(usr) {
    let divCotizacion = document.querySelector("#divCotizacion");

    if (usr === "Visitante" || usr === "Huesped") {
        divCotizacion.innerHTML = `<select id="selectCot"><option value="$">$</option><option value="U$S">U$S</option></select>`;
        document.querySelector("#selectCot").addEventListener("change", cambiarMoneda);
    }
    if (usr === "Anfitrion") { divCotizacion.innerHTML = `<select><option value="$">$</option></select>`; }
    if (usr === "Administrador") { divCotizacion.innerHTML = ""; }
}
function cambiarMoneda() {
    mostrarInmuebles();
}
//////////////<--------------------- COTIZACION FIN----------------------------->/////////////////////

//////////////<--------------------- ORDENAMIENTO INICIO----------------------------->/////////////////////
//function ordenarInmuebles()
//{
//    mostrarInmuebles();
//}
//////////////<--------------------- ORDENAMIENTO FIN----------------------------->////////////////////////



//////////////<--------------------- INMUEBLES INICIO -------------------------->/////////////////////
//// MOSTRAR INMUEBLES
function mostrarInmuebles() {
    let divMostrar = document.querySelector("#divInmuebles");
    divMostrar.setAttribute("style", "display:block");
    divMostrar.innerHTML = "";
    

    listaInmuebles.sort((function (a, b) {
        if (Number(a.promedioCalif) < Number(b.promedioCalif)) { return 1; }
        if (Number(a.promedioCalif) > Number(b.promedioCalif)) { return -1; }
        if (Number(a.promedioCalif) === Number(b.promedioCalif)) { return 0; }
    }));

    if (globalTipoUser === "Visitante") {
        if (document.querySelector("#selOrdenar").value === "Ascendente") {
            listaInmuebles.sort((function (a, b) {
                if (Number(a.precioPorNoche) > Number(b.precioPorNoche)) { return 1; }
                if (Number(a.precioPorNoche) < Number(b.precioPorNoche)) { return -1; }
                if (Number(a.precioPorNoche) === Number(b.precioPorNoche)) { return 0; }
            }));
        }
        if (document.querySelector("#selOrdenar").value === "Descendente") {
            listaInmuebles.sort((function (a, b) {
                if (Number(a.precioPorNoche) < Number(b.precioPorNoche)) { return 1; }
                if (Number(a.precioPorNoche) > Number(b.precioPorNoche)) { return -1; }
                if (Number(a.precioPorNoche) === Number(b.precioPorNoche)) { return 0; }
            }));
        }

        let divCotiChild = document.getElementById("divCotizacion").children[0].value;
        if (divCotiChild === "U$S") {
            listaInmuebles.forEach(element => {
                if (element.estado === "on") {
                    divMostrar.innerHTML +=
                        `<table border=1><tr><td><img src="${element.fotos[0]}.jpg"></td></tr>
    <tr><td>Titulo: ${element.titulo}</td></tr>
    <tr><td>Descripcion: ${element.descripcion}</td></tr>
    <tr><td>Ciudad: ${element.ciudad}</td></tr>
    <tr><td>Precio por noche: <span class="precio">${divCotiChild} ${Number(element.precioPorNoche)/cotizacion }</span></td></tr>
    <tr><td>Calificación promedio: ${element.promedioCalif}</td> </tr>
    </table><br><br>`;
                }
            });
        } else {
            listaInmuebles.forEach(element => {
                if (element.estado === "on") {
                    divMostrar.innerHTML +=
                        `<table border=1><tr><td><img src="${element.fotos[0]}.jpg"></td></tr>
    <tr><td>Titulo: ${element.titulo}</td></tr>
    <tr><td>Descripcion: ${element.descripcion}</td></tr>
    <tr><td>Ciudad: ${element.ciudad}</td></tr>
    <tr><td>Precio por noche:  <span class="precio">${divCotiChild} ${Number(element.precioPorNoche)}</span></td></tr>
    <tr><td>Calificación promedio: ${element.promedioCalif}</td> </tr>
    </table><br><br>`;
                }
            });
        }
    }

    if (globalTipoUser === "Huesped") {
        
        if (divCotiChild === "U$S") {
            listaInmuebles.forEach(element => {
                if (element.estado === "on") {
                    divMostrar.innerHTML +=
                        `<table border=1><tr><td><img src="${element.fotos[0]}.jpg"></td></tr>
       <tr><td>Titulo: ${element.titulo}</td></tr>
       <tr><td>Descripcion: ${element.descripcion}</td></tr>
       <tr><td>Ciudad: ${element.ciudad}</td></tr>
       <tr><td>Precio por noche: <span class="precio">${divCotiChild} ${Number(element.precioPorNoche)/cotizacion}</span></td></tr>
       <tr><td>Calificación promedio: ${element.promedioCalif}</td></tr><div id="${element.id}"></div>
       </table><br><br>`;
                }
            });
        } else {
            listaInmuebles.forEach(element => {
                if (element.estado === "on") {
                    divMostrar.innerHTML +=
                        `<table border=1><tr><td><img src="${element.fotos[0]}.jpg"></td></tr>
       <tr><td>Titulo: ${element.titulo}</td></tr>
       <tr><td>Descripcion: ${element.descripcion}</td></tr>
       <tr><td>Ciudad: ${element.ciudad}</td></tr>
       <tr><td>Precio por noche:  <span class="precio">${divCotiChild} ${Number(element.precioPorNoche)}</span></td></tr>
       <tr><td>Calificación promedio: ${element.promedioCalif}</td> </tr>
       <input type="button"  id="btnVerMas" class="vermas" name=${element.id} style="display: block;" value="Ver más"><div id="${element.id}"></div>
       </table><br><br>`;
                }
            });
        }
    }


    if (globalTipoUser === "Anfitrion") {
        let nombreUsuarioAnfitrion = document.getElementById("usuario-actual-nombre").innerHTML;
        listaInmuebles.forEach(element => {
            if (element.usuarioAnfitrion === nombreUsuarioAnfitrion) {
                divMostrar.innerHTML += `<table border=1><tr><td><img src="${element.fotos[0]}.jpg"></td></tr>
<tr><td>Titulo: ${element.titulo}</td></tr>
<tr><td>Descripcion: ${element.descripcion}</td></tr>
<tr><td>Ciudad: ${element.ciudad}</td></tr>
<tr><td>Precio por noche: <span class"precio">${divCotiChild} ${Number.element.precioPorNoche}</span></td></tr>
<tr><td>Calificación promedio: ${element.promedioCalif}</td> </tr>
<input type="button" name="${element.id}" class="habilitar" value="Habilitar inmueble">
<input type="button" name="${element.id}" class="inhabilitar" value="Inhabilitar inmueble"><div class="Huesped" id="${element.id}"></div>
</table><br><br>`;
            }
            habilitacionYInabilitacion();
            mostrarFotosRegistrarInmueble();
        });
    }
}

function habilitacionYInabilitacion() {
    document.querySelectorAll(".habilitar").forEach(element => {
        element.addEventListener("click", habilitar);
    });
    document.querySelectorAll(".inhabilitar").forEach(element => {
        element.addEventListener("click", inhabilitar);
    });
}

function habilitar() {
    let name = this.name;
    listaInmuebles.forEach(element => {
        if (element.id === name) { element.estado = "on" }
    });
}
function inhabilitar() {
    let name = this.name;
    listaInmuebles.forEach(element => {
        if (element.id === name) { element.estado = "off" }
    });
}

function registrarInmueble() {
    let mensaje = "";
    let validarFotos = false;
    let validarCamposDeTexto = false;
    let contador = 0;
    document.querySelectorAll(".checkboxRegistro").forEach(element => { if (element.checked) { contador = contador + 1 } });
    if (contador > 2) {
        validarFotos = true;
        if (document.querySelector("#txtTitulo").value) {
            if (verificarTextoNoVacio(document.querySelector("#txtDescripcion").value)) { if (verificarTextoNoVacio(document.querySelector("#txtCiudad").value)) { if (verificarEsNum(document.querySelector("#txtPrecioPorNoche").value)) { validarCamposDeTexto = true; } } }
        }
    } else { mensaje = "Seleccione al menos 3 fotos y rellene los campos de texto de título, ciudad, descipción y precio." }
    if (validarCamposDeTexto && validarFotos) {
        let nuevoInmueble = new Inmuebles
        nuevoInmueble.id = `inmueble${listaInmuebles.length}`
        nuevoInmueble.titulo = document.querySelector("#txtTitulo").value;
        nuevoInmueble.descripcion = document.querySelector("#txtDescripcion").value;
        nuevoInmueble.ciudad = document.querySelector("#txtCiudad").value;
        nuevoInmueble.precioPorNoche = document.querySelector("#txtPrecioPorNoche").value;
        nuevoInmueble.usuarioAnfitrion = document.querySelector("#usuario-actual-nombre").textContent;
        nuevoInmueble.estado = document.querySelector("#selRegInm").value;
        let fotosSeleccionadas = new Array();
        for (let i = 0; i < document.querySelectorAll(".checkboxRegistro").length; i++) {
            let element = document.querySelectorAll(".checkboxRegistro")[i];
            if (element.checked) { fotosSeleccionadas.push(i); }
        }
        nuevoInmueble.fotos = fotosSeleccionadas;
        listaInmuebles.push(nuevoInmueble);
        mensaje = "Inmueble agregado con éxito!"
    }
    document.querySelector("#spanEstadoRegInmueble").innerHTML = mensaje;
}

function mostrarFotosRegistrarInmueble() {

    let imagenes = `<table border="1">`;

    for (let i = 0; i < listaFotos.length; i++) {
        let element = listaFotos[i];

        imagenes += `<tr><td><input class="checkboxRegistro" value="${i}" type="checkbox">Imagen ${i}<img class="miniatura" src="${element}"></td></tr>`;
    }

    imagenes += `</table>`
    document.querySelector("#regFotos").innerHTML = imagenes;
}

function activarVerMas() {
    document.querySelectorAll(".vermas").forEach(element => {
        element.addEventListener("click", verMas)
    });
}
function verMas() {
    let div = this.name;
    document.querySelector(`#${div}`).innerHTML = `<input type="button" class"siguiente" value="Siguiente"><input type="button" "anterior" value="Anterior">`;
}

function buscador() {
    arrayResultado = [];
    let tipoUserActual = globalTipoUser;
    let usuarioActual = globalUser;
    let mensaje = ``;
    let txtBuscado = document.getElementById("txtBusqueda").value;
    let txtBuscadoPro = txtNoTildesNiMayus(txtBuscado);  // sin tildes y sin mayusculas 

    if (verificarTextoNoVacio(txtBuscadoPro)) {

        if (tipoUserActual !== "Anfitrion") {
            listaInmuebles.forEach(element => {
                let tituloPro = txtNoTildesNiMayus(element.titulo);
                let ciudadPro = txtNoTildesNiMayus(element.ciudad);
                let descripcionPro = txtNoTildesNiMayus(element.descripcion);

                if (txtBuscadoPro == tituloPro) {

                    arrayResultado.push(element);
                } else {
                    if (txtBuscadoPro == ciudadPro) {
                        arrayResultado.push(element);
                    } else {
                        if (txtBuscadoPro == descripcionPro) {
                            arrayResultado.push(element);
                        }
                    }
                }
            })
            if (arrayResultado.length < 1) {
                mensaje += `No existen resultados para su búsqueda`
            }
        }
        if (tipoUserActual == "Anfitrion") {
            listaInmuebles.forEach(element => {
                let propietarioInm = element.usuarioAnfitrion;
                let tituloPro = txtNoTildesNiMayus(element.titulo);
                let ciudadPro = txtNoTildesNiMayus(element.ciudad);
                let descripcionPro = txtNoTildesNiMayus(element.descripcion);

                if (txtBuscadoPro == tituloPro && propietarioInm == usuarioActual) {

                    arrayResultado.push(element);
                } else {
                    if (txtBuscadoPro == ciudadPro && propietarioInm == usuarioActual) {
                        arrayResultado.push(element);
                    } else {
                        if (txtBuscadoPro == descripcionPro && propietarioInm == usuarioActual) {
                            arrayResultado.push(element);
                        }
                    }
                }
            })
            if (arrayResultado.length < 1) {
                mensaje += `No existen resultados para su búsqueda`

            }
        }
    } else {
        mensaje += `Debe ingresar algo para buscar`;
    }

    console.log(`Resultado buscador: ${mensaje} y array: ${arrayResultado}`)

    return arrayResultado;
    //devuelve array con inmuebles pronto para funcion inmuebles 
    //(si es anfitrión devuelve solo los de ese anfitrión)
}

//////////////<--------------------- INMUEBLES FIN ----------------------------->/////////////////////

function txtNoTildesNiMayus(txt) {

    let txtSintildesNiMayus = "";

    let tildes = new Array(
        "á", "ä", "â", "à", "å", "ã", "À", "Á", "Â", "Ã", "Ä", "Å", //12
        "è", "é", "ê", "ë", "È", "É", "Ê", "Ë", //20
        "ì", "í", "î", "ï", "Ì", "Í", "Î", "Ï", //28
        "ò", "ó", "ô", "õ", "ö", "Ò", "Ó", "Ô", "Õ", "Ö", //38
        "ù", "ú", "û", "ü", "Ù", "Ú", "Û", "Ü", //46
        "´", "`" //48
    );

    for (let i = 0; i < txt.length; i++) {
        let letra = txt.charAt(i);

        for (let ite = 1; ite < tildes.length; ite++) {
            let element = tildes[ite];

            if (letra == element) {
                if (ite <= 13) {
                    letra = "a";
                }
                if (ite >= 13 && ite < 20) {
                    letra = "e";
                }
                if (ite >= 21 && ite < 28) {
                    letra = "i";
                }
                if (ite >= 29 && ite < 38) {
                    letra = "o";
                }
                if (ite >= 39 && ite < 46) {
                    letra = "u";
                }
                if (ite >= 46) {
                    letra = " ";
                }
            }
        }
        minus = letra.toLowerCase();
        txtSintildesNiMayus += minus;
    }

    return txtSintildesNiMayus;
}

