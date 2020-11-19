document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btnAcceso").addEventListener("click", validarLogin);
    document.querySelector("#btnRegistro").addEventListener("click", registro);
    document.querySelector("#btnAltaAnfitrion").addEventListener("click", registro);
    document.querySelector("#btnCotizar").addEventListener("click", cotizar);
    document.querySelector("#btnSalir").addEventListener("click", salir);
    document.querySelector("#btnRegistrarInmueble").addEventListener("click", registrarInmueble);
    document.querySelector("#btnOrdenar").addEventListener("click", mostrarInmuebles);
    document.querySelector("#btnBuscar").addEventListener("click", buscador);
    document.querySelector("#btnAgregarFotos").addEventListener("click", mostrarFotosRegistrarInmueble);
    document.querySelector("#btnReporteInmueble").addEventListener("click", mostrarReporteInmueble);
    document.querySelector("#btnMostrarReservas").addEventListener("click", mostrarReservas);
    document.querySelector("#btnMosInm").addEventListener("click", mostrarInmuebles);
    
    cargarListaFotos();
    precargaImuebles();
    precargaUsuarios();
    limpiarInput();
    ingreso("Visitante", "Visitante");
});


var globalTipoUser = "Visitante";
var globalUser = "Visitante";
document.querySelector("#txtCotizar").value = 40;
var cotizacion = Number(document.querySelector("#txtCotizar").value);
var moneda = "$";


//////////////<---------------------- PRECARGA DE DATOS INICIO--------------->//////////////////
//// PRECARGA FOTOS

let listaFotos = new Array();

function cargarListaFotos() {
    for (let i = 0; i < 224; i++) {
        let fotoActual = `img/${i}.jpg`;
        listaFotos.push(fotoActual);
    }
}
//// PRECARGA USUARIOS
let listaUsuarios = new Array();
let listaPrecargaUsuarios = [
    { id: 0, nombreUsu: "agu22", nombre: "Agustín", apellido: "Rodriguez", email: "agu22@gmail.com", celular: "099123456", clave: "bSaDfklj123", tipo: "Huesped", inmuebles: [0, 3, 8, 18] },
    { id: 1, nombreUsu: "AlmiSua345", nombre: "Almicar", apellido: "Vazques", email: "almicar@hotmail.com", celular: "096234654", clave: "Almicar1995", tipo: "Huesped", inmuebles: [1, 4, 9, 10, 11, 12, 13, 14, 18] },
    { id: 2, nombreUsu: "Camiiii_ok", nombre: "Camila", apellido: "Carrasco", email: "camila@zoho.com", celular: "095236547", clave: "Camilita123", tipo: "Anfitrion", inmuebles: [7, 8, 15, 20] },
    { id: 3, nombreUsu: "Este_rodriguez", nombre: "Esteban", apellido: "Quito", email: "estebanquito@gmail.com", celular: "099456456", clave: "Quitoroto456", tipo: "Huesped", inmuebles: [1, 4, 6, 9, 11, 13, 15, 17, 19] },
    { id: 4, nombreUsu: "Américo_V", nombre: "Dardo", apellido: "Fuseneco", email: "dardo2020@yahoo.com", celular: "099222222", clave: "YMari4Elen4", tipo: "Huesped", inmuebles: [1, 3, 4, 7, 10, 12, 13, 14, 16, 18, 19, 20] },
    { id: 5, nombreUsu: "admin", nombre: "Administrador", apellido: "admin", email: "admin@hotmail.com", celular: "097111111", clave: "1234", tipo: "Administrador", inmuebles: [] },
    { id: 6, nombreUsu: "Pepe_1", nombre: "José", apellido: "Gomez", email: "josesito@gmail.com", celular: "094446456", clave: "EncimadeRacing27", tipo: "Anfitrion", inmuebles: [19, 6, 18, 17, 9, 13] },
    { id: 7, nombreUsu: "Homer.78", nombre: "Homero", apellido: "Simpson", email: "homerojsimpson@gmail.com", celular: "099777756", clave: "Marge1967", tipo: "Anfitrion", inmuebles: [10, 11, 6] },
    { id: 8, nombreUsu: "Robert_63", nombre: "Roberto", apellido: "Carlos", email: "robert@gmail.com", celular: "099888888", clave: "1millondeAmigos", tipo: "Anfitrion", inmuebles: [2, 3, 1] },
    { id: 9, nombreUsu: "R2D2", nombre: "Arturo", apellido: "Luro", email: "arturoduro@hotmail.com", celular: "099199956", clave: "unaClavede8mildigitos", tipo: "Anfitrion", inmuebles: [13, 16, 0, 9, 8] },
    { id: 10, nombreUsu: "DebyBolso", nombre: "Débora", apellido: "Lopez", email: "debielo@adinet.com", celular: "099557456", clave: "mwBk5255", tipo: "Huesped", inmuebles: [0, 2, 6, 8, 9, 12, 14, 15, 16, 17, 19] },
    { id: 11, nombreUsu: "Pablosky27", nombre: "Pablo", apellido: "Marmol", email: "pablomarmol@outlook.com", celular: "099651456", clave: "randoMpasSword99", tipo: "Huesped", inmuebles: [1, 4, 7, 10, 13, 16, 19] },
    { id: 12, nombreUsu: "Marge96", nombre: "Marjorie", apellido: "Simpson", email: "MargeS@gmail.com", celular: "099095430", clave: "sinFonica269", tipo: "Huesped", inmuebles: [0, 1, 3, 4, 5, 7, 8, 9, 13, 15, 16, 17, 18, 19, 20] },
    { id: 13, nombreUsu: "Liiisa", nombre: "Lucía", apellido: "Diaz", email: "luciaD@zoho.com", celular: "099231576", clave: "Millhouse789", tipo: "Huesped", inmuebles: [0, 3, 6, 7, 9, 12, 14, 15, 18, 20] },
    { id: 14, nombreUsu: "GabitomanyaCAP", apellido: "Figueredo", nombre: "Gabriel", email: "gaby22@gmail.com", celular: "099194456", clave: "CacaHuate44", tipo: "Anfitrion", inmuebles: [12, 14, 4, 5] },
    { id: 15, nombreUsu: "Nachocapo1", apellido: "Silva", nombre: "Juan Ignacio", email: "juancho@yahoo.com", celular: "099658456", clave: "bolsoAmuerte1899", tipo: "Huesped", inmuebles: [2, 5, 6, 8, 10, 11, 14, 15, 17, 20] },
    { id: 16, nombreUsu: "Rickymaravilla", apellido: "Perez", nombre: "Ricardo", email: "ricky@adinet.com", celular: "099858456", clave: "r1ckYmorty", tipo: "Huesped", inmuebles: [2, 4, 5, 8, 11, 14, 16, 17, 20] }
];

function precargaUsuarios() {
    for (let i = 0; i < listaPrecargaUsuarios.length; i++) { //recorre lista precargaUsuarios
        let element = listaPrecargaUsuarios[i];

        let id = element.id;
        let user = element.nombreUsu;
        let nombre = element.nombre; // declara los atributos para preparar la carga
        let apellido = element.apellido;
        let email = element.email;
        let tel = element.celular;
        let clave = element.clave;
        let tipo = element.tipo;
        let agregarUsuActual = new Usuarios();

        agregarUsuActual.id = id;
        agregarUsuActual.nombreUsu = user;
        agregarUsuActual.nombre = nombre;
        agregarUsuActual.apellido = apellido; //agrega atributos
        agregarUsuActual.email = email;
        agregarUsuActual.celular = tel;
        agregarUsuActual.clave = clave;
        agregarUsuActual.tipo = tipo;

        listaUsuarios.push(agregarUsuActual); //los pushea al array de lista de usuarios

        for (let p = 0; p < element.inmuebles.length; p++) {
            relacionarUsuarioConInmueble(i, p)
        }
    }
}

//// PRECARGA INMUEBLES
let listaInmuebles = new Array();
let listaPrecargaInmuebles = [{
    id: 0,
    estado: "on",
    titulo: "Complejo Los Balcones, tercera unidad. ",
    descripcion: "Living amplio con hogar, comedor con cocina integrada, baño social, cocina con cómodos placares",
    ciudad: "Punta Colorada",
    precioPorNoche: 1500,
    usuarioAnfitrion: "Camiiii_ok",
    calificaciones: [2.0, 4.0, 2.0, 4.0],
    calificacionActual: 3.0,
    fotos: [0, 8, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    fotoActual: 0,
    calificadoPor: [0, 13, 10, 12],
},
{
    id: 1,
    estado: "off",
    titulo: "Dionisio Lopez Y Av. Italia",
    descripcion: "Alquiler de casa en zona Buceo Dionisio Lopez y Av. Italia todo en planta baja, sin gtos. comunes.",
    ciudad: "Montevideo",
    precioPorNoche: 2500,
    usuarioAnfitrion: "Camiiii_ok",
    calificaciones: [2.0, 3.0, 3.0, 2.0, 2.0],
    calificacionActual: 2.2,
    fotos: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    fotoActual: 0,
    calificadoPor: [3, 1, 4, 11, 12],
},
{
    id: 2,
    estado: "on",
    titulo: "De categoría Impecable",
    descripcion: "Impecable, lista para ocupar en el corazon de la Ciudad Vieja a pasos de la Plaza Matriz, Plaza Independencia, bancos, redes de cobranza y organismos publicos.",
    ciudad: "Montevideo",
    precioPorNoche: 3500,
    usuarioAnfitrion: "Camiiii_ok",
    calificaciones: [2.0, 3.0, 4.0],
    calificacionActual: 3.0,
    fotos: [24, 25, 26, 27, 28, 29],
    fotoActual: 0,
    calificadoPor: [16, 15, 10],
},
{
    id: 3,
    estado: "on",
    titulo: "Apartamento a estrenar con estacionamiento y patio privado",
    descripcion: "Un excelente punto para vivir. Consiste de 1 dormitorio, cocina-comedor, baño, patio. Todos los ambientes tienen ventanales al exterior.",
    ciudad: "Montevideo",
    precioPorNoche: 1700,
    usuarioAnfitrion: "Camiiii_ok",
    calificaciones: [1.0, 2.0, 3.0, 2.0],
    calificacionActual: 2.0,
    fotos: [30, 31, 32, 33, 34],
    fotoActual: 0,
    calificadoPor: [13, 12, 4, 0],
},
{
    id: 4,
    estado: "on",
    titulo: "Casa en Punta Negra ´EL ESKP´",
    descripcion: "Casa en Punta Negra. Ambiente principal luminoso comprende living comedor con aire acondicionado y cama marinera y kitchenette; dormitorio matrimonial con placard empotrado y ventilador de techo y baño completo. ",
    ciudad: "Punta Negra",
    precioPorNoche: 2200,
    usuarioAnfitrion: "Robert_63",
    calificaciones: [3.0, 3.0, 3.0, 3.0, 2.0, 4.0],
    calificacionActual: 3.0,
    fotos: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    fotoActual: 0,
    calificadoPor: [1, 3, 4, 11, 12, 16],
},
{
    id: 5,
    estado: "off",
    titulo: "Alquiler temporal en Piriápolis",
    descripcion: "Cómoda construcción ideal para sus vacaciones, con increíbles vistas. Comodidades para 10 personas, distribuidas en dos plantas. ",
    ciudad: "Piriápolis",
    precioPorNoche: 4800,
    usuarioAnfitrion: "Robert_63",
    calificaciones: [4.0, 3.0, 4.0],
    calificacionActual: 3.7,
    fotos: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
    fotoActual: 0,
    calificadoPor: [16, 15, 12],
},
{
    id: 6,
    estado: "on",
    titulo: "Casa en Bella Vista ´LA BLANCA´",
    descripcion: "Ubicada en el Balneario Bella Vista, en un amplio y en ajardinado terreno, en un entorno de buenas construcciones. A tan solo 10 minutos de Piriápolis y a minutos de los servicios en Balneario Las Flores.",
    ciudad: "Bella Vista",
    precioPorNoche: 5100,
    usuarioAnfitrion: "Pepe_1",
    calificaciones: [3.0, 3.0, 2.0, 2.0],
    calificacionActual: 2.5,
    fotos: [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    fotoActual: 0,
    calificadoPor: [3, 13, 10, 15],
},
{
    id: 7,
    estado: "on",
    titulo: "Apto en Rambla con Amenities. Bolivia y Gonzalez Moreno",
    descripcion: "Muy lindo depto en Rambla Costanera con amenities",
    ciudad: "Colonia del Sacramento",
    precioPorNoche: 4500,
    usuarioAnfitrion: "Pepe_1",
    calificaciones: [2.0, 3.0, 3.0, 4.0],
    calificacionActual: 3.0,
    fotos: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    fotoActual: 0,
    calificadoPor: [13, 4, 11, 12],
},
{
    id: 8,
    estado: "off",
    titulo: "Hermoso apartamento en el corazón de paysandu",
    descripcion: "Apartamento en excelentes condiciones, en la mejor ubicacion de paysandu, muy amplio. Cuenta con gran balcon con vista al rio uruguay. Tambien se evalua venta, consulte no molesta. Dueño directo!",
    ciudad: "Paysandú",
    precioPorNoche: 1800,
    usuarioAnfitrion: "Pepe_1",
    calificaciones: [2.0, 1.0, 3.0, 2.0, 1.0],
    calificacionActual: 1.8,
    fotos: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91],
    fotoActual: 0,
    calificadoPor: [12, 0, 16, 15, 10],
},
{
    id: 9,
    estado: "on",
    titulo: "Excelente local comercial en alquiler",
    descripcion: "Excelente local en la ciudad de Salto ubicado en calle Chiazzaro cercano a zona de Restaurantes. Cómodo y luminoso. Amplio y en un excelente estado, cuenta con un baño, kitchinette y amplia oficina con blindex, y patio interior. Muy buena vidriera, ideal para comercio.",
    ciudad: "Salto",
    precioPorNoche: 1500,
    usuarioAnfitrion: "Pepe_1",
    calificaciones: [2.0, 3.0, 1.0, 2.0, 3.0],
    calificacionActual: 2.2,
    fotos: [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103],
    fotoActual: 0,
    calificadoPor: [3, 1, 13, 10],
},
{
    id: 10,
    estado: "on",
    titulo: "CASA 2 DORMITORIOS. Próximo a Rambla y 28",
    descripcion: "CASA 2 Dormitorios muy buena ubicación, a 1 cuadra del arroyo, 1 del bus y super. Amplio estar comedor con cocina integrada, baño completo. terreno esquina totalmente cercado",
    ciudad: "Parque del Plata",
    precioPorNoche: 3000,
    usuarioAnfitrion: "Homer.78",
    calificaciones: [3.0, 3.0, 3.0, 4.0],
    calificacionActual: 3.3,
    fotos: [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],
    fotoActual: 0,
    calificadoPor: [1, 4, 11, 15],
},
{
    id: 11,
    estado: "on",
    titulo: "Alquiler de Chacra en Durazno a 5 min del centrocasa 11",
    descripcion: "Se alquila chacra amueblada, 3 dormitorios más escritorio, 2 baños, cocina con comedor definida. Living con estufa a leña, parque con piscina. Muy buena vista, sobre ruta 14 a 5 minutos de Durazno.",
    ciudad: "Durazno",
    precioPorNoche: 3200,
    usuarioAnfitrion: "Homer.78",
    calificaciones: [2.0, 4.0, 3.0, 4.0],
    calificacionActual: 3.3,
    fotos: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127],
    fotoActual: 0,
    calificadoPor: [3, 16, 15, 1],
},
{
    id: 12,
    estado: "off",
    titulo: "Chacra - Balneario Buenos Aires, VillaLagos. Barrio Privado,",
    descripcion: "Espectacular Chacra con vista al mar, 7 dormitorios. Terraza al frente con parrillero y solárium . Piscina y piscina para niños. Sala de Estar. Dependencia de servicio. Estufa a leña y hogar exterior. Villalagos Se trata del plan perfecto: la privacidad de una moderna y lujosa residencia, inmersa en un entorno natural paradisíaco, a pasos de la playa y que no se priva de la cercanía de bares, restaurantes y la energía de La Barra y de José Ignacio. ",
    ciudad: "José Ignacio",
    precioPorNoche: 7600,
    usuarioAnfitrion: "Robert_63",
    calificaciones: [4.0, 3.0, 5.0, 2.0],
    calificacionActual: 4.0,
    fotos: [128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139],
    fotoActual: 0,
    calificadoPor: [1, 13, 10, 4],
},
{
    id: 13,
    estado: "off",
    titulo: "ALQUILER / VENTA EDIFICIO PARAISO 1 DE LA COSTA CHUY",
    descripcion: "Consta de 4 mono ambientes con parrilla. 1 departamento para 4 1 departamento matrimonial 1 departamento matrimonial 1 depart. Matrimonio + 1 1 depart. Matrimonio 1 departamento matrimonio 1 departamento 4 solteros 4 depart motrim+ 2 + parrilla Primer piso 1 departamento para 4 1 departamento para 8 Segundo piso 2 departamento para 4 2 depart.",
    ciudad: "Chuy",
    precioPorNoche: 1750,
    usuarioAnfitrion: "Homer.78",
    calificaciones: [2.0, 3.0, 3.0, 3.0, 3.0],
    calificacionActual: 2.8,
    fotos: [140, 141, 142, 143, 144],
    fotoActual: 0,
    calificadoPor: [1, 3, 4, 11, 12],
},
{
    id: 14,
    estado: "off",
    titulo: "CASA 3 dormitorios, 3 baños, parrillero, hogar, equipada!",
    descripcion: "LO QUE NO HAY!!! CASA EN LA PEDRERA, ROCHA DIVINA, COMPLEJO CERRADO, POCOS AÑOS DE CONSTRUIDA. 3 CUADRAS DE LA RAMBLA! , A 1 cuadra de la principal TOTALMENTE EQUIPADA hasta con ropa de cama!!! Capacidad para 8 personas!. 1 cama matrimonial y 6 camas simples.",
    ciudad: "La pedrera",
    precioPorNoche: 6200,
    usuarioAnfitrion: "Homer.78",
    calificaciones: [4.0, 3.0, 3.0, 4.0, 3.0, 3.0],
    calificacionActual: 3.3,
    fotos: [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156],
    fotoActual: 0,
    calificadoPor: [4, 1, 13, 16, 15, 10],
},
{
    id: 15,
    estado: "on",
    titulo: "Casa para 5 personas Punta Rubia rocha",
    descripcion: "Eco Casa Contêiner a estrenar, esta ubicada en Punta Rubia departamento de Rocha, a menos de 1 Km. del centro de la Pedrera, al cual puedes llegar tanto en vehículo, bicicleta o caminando. Equipada para 5 personas, cuenta con dos dormitorios, uno con cama matrimonial y el otro con tres camas, baño con cabina y calefón que también alimenta la cocina, en el estar cuenta con aire acondicionado y para los dias mas frescos podes disfrutar de la estufa a leña, todo en una misma planta. Todas las aberturas cuentan con mosquitero",
    ciudad: "Punta Rubia",
    precioPorNoche: 5500,
    usuarioAnfitrion: "R2D2",
    calificaciones: [3.0, 3.0, 3.0, 3.0, 4.0],
    calificacionActual: 3.2,
    fotos: [157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168],
    fotoActual: 0,
    calificadoPor: [12, 3, 13, 10, 15],
},
{
    id: 16,
    estado: "on",
    titulo: "Oportunidad, no paga gastos comunes. Cerca de todo",
    descripcion: "Santiago Gadea y Maipú a una cuadra de Dr. Luis Alberto de Herrera, excelente ubicación, con una red de servicios muy próxima. Apartamento en planta baja, es el primer apartamento del corredor, tiene patio frontal con parrillero, al mismo da el living comedor, cocina definida con estar diario, baño a nuevo, dormitorio en planta baja. En planta alta tiene un gran dormitorio y la salida a la terraza. No paga gastos comunes, contador de agua independiente. ",
    ciudad: "Montevideo",
    precioPorNoche: 2550,
    usuarioAnfitrion: "R2D2",
    calificaciones: [2.0, 4.0, 3.0, 3.0, 2.0],
    calificacionActual: 2.6,
    fotos: [169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
    fotoActual: 0,
    calificadoPor: [10, 4, 11, 12],
},
{
    id: 17,
    estado: "off",
    titulo: "Alquiler Apartamento 1 Dormitorio A Estrenar Centro",
    descripcion: "Hermoso Apartamento a Estrenar! Ubicado sobre Soriano, esquina Aquiles Lanza, a pasos de 18 de Julio. Amplio Living comedor con balcón al frente. Cocina integrada con placares. Dormitorio con Gran vista al Río. Planta de 55 m2, amplios ambientes. Único!!",
    ciudad: "Montevideo",
    precioPorNoche: 3450,
    usuarioAnfitrion: "R2D2",
    calificaciones: [2.0, 3.0, 3.0, 2.0, 3.0],
    calificacionActual: 2.8,
    fotos: [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192],
    fotoActual: 0,
    calificadoPor: [12, 3, 16, 15, 10],
},
{
    id: 18,
    estado: "on",
    titulo: "Departamento - Treinta y Tres, Manuel Lavalleja al 1500",
    descripcion: "Excelente apartamento a media cuadra de la Plaza 19 de Abril, muy luminoso, dos dormitorios con placares, dos baños, terraza lavadero. Sin Gastos Comunes. Contrato a dos años",
    ciudad: "Treinta y Tres",
    precioPorNoche: 4750,
    usuarioAnfitrion: "R2D2",
    calificaciones: [2.0, 2.0, 2.0, 2.0, 2.0],
    calificacionActual: 2.6,
    fotos: [193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203],
    fotoActual: 0,
    calificadoPor: [1, 13, 12, 4, 0],
},
{
    id: 19,
    estado: "on",
    titulo: "Carrasco alquiler con muebles 2 dormitorios",
    descripcion: "Divino apartamento en Faros de Carrasco equipado full. Living comedor, 2 dormitorios, 2 baños (1 en suite), cocina definida, terraza lavadero. Calefacción y agua caliente por caldereta a gas. Vigilancia las 24 hs, circuito cerrado de cámaras. Amenities: Piscina abierta y cerrada Gimnasio con sauna. Jacuzzi Spa Hidromasaje Salón de eventos Barbacoa. Un lugar de cochera. El precio ya incluye wifi, electricidad, gastos comunes, uso de amenities.",
    ciudad: "Montevideo",
    precioPorNoche: 8800,
    usuarioAnfitrion: "Robert_63",
    calificaciones: [4.0, 3.0, 5.0, 3.0, 5.0],
    calificacionActual: 4.0,
    fotos: [204, 205, 206, 207, 208, 209, 210, 211],
    fotoActual: 0,
    calificadoPor: [3, 10, 11, 12, 4],
},
{
    id: 20,
    estado: "off",
    titulo: "Espectacular vista limpia a la rambla, doble frente",
    descripcion: "Comodísimo apartamento con vista super limpia a la rambla. 3er Piso con ascensor. 4 dormitorios, todos al frente por calle Cabildo, 3 baños completos, cocina integrada al living-comedor, lo que hace que en cualquier lado del living y la cocina, se esté disfrutando la vista. Regatas, cruceros, amaneceres, puestas de sol, etc.",
    ciudad: "Punta del Este",
    precioPorNoche: 8500,
    usuarioAnfitrion: "Marge96",
    calificaciones: [4.0, 3.0, 5.0, 4.0, 4.0],
    calificacionActual: 4.0,
    fotos: [212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223],
    fotoActual: 0,
    calificadoPor: [4, 13, 16, 15, 12],
},
];


function precargaImuebles() {
    listaPrecargaInmuebles.forEach(element => {
        let id = element.id;
        let titu = element.titulo;
        let desc = element.descripcion;
        let ciud = element.ciudad; // declara los atributos para preparar la carga
        let precioNoche = element.precioPorNoche;
        let prom = element.calificacionActual;
        let user = element.usuarioAnfitrion;
        let foto = element.fotos;
        let estado = element.estado;
        let califi = element.calificaciones;
        let califiActual = element.calificacionActual;
        let fotoAct = element.fotoActual;
        let calificacAnt = element.calificadoPor;
        let agregarInmActual = new Inmuebles();

        agregarInmActual.calificacionActual = califiActual;
        agregarInmActual.id = id;
        agregarInmActual.titulo = titu;
        agregarInmActual.descripcion = desc;
        agregarInmActual.ciudad = ciud; //agrega atributos
        agregarInmActual.precioPorNoche = precioNoche;
        agregarInmActual.calificacionActual = prom;
        agregarInmActual.usuarioAnfitrion = user;
        agregarInmActual.calificaciones = califi;
        agregarInmActual.estado = estado;
        agregarInmActual.fotoActual = fotoAct;
        agregarInmActual.calificadoPor = calificacAnt;
        let p = 0;
        listaInmuebles.push(agregarInmActual); //los pushea al array de lista de inmuebles

        while (p < foto.length) {
            relacionarInmuebleConFoto(element.id, foto[p])
            p++;
        }
    });
}

function actualizarCalificacionesInmuebles() {
    for (let i = 0; i < listaInmuebles.length; i++) {
        let calificacion = calculadoraDeCalificaciones(i) / listaInmuebles[i].calificaciones.length;
        listaInmuebles[i].calificacionActual = Number(calificacion).toFixed(1);

    }
}

function relacionarInmuebleConFoto(inmueble, photo) {
    listaInmuebles[inmueble].fotos.push(listaFotos[photo])
}

function relacionarUsuarioConInmueble(usuario, inmueble) {
    listaUsuarios[usuario].inmuebles.push(listaInmuebles[inmueble])
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
        } else {
            document.querySelector("#divResultadoLogin").innerHTML = `No se pudo ingresar verifique los datos ingresados.`;
        }
    }
}
//// INGRESO
function ingreso(tipoUsuario, usuario) {
    limpiarDivs();

    globalTipoUser = tipoUsuario; /// se cambia la variables globales por la ingresada
    globalUser = usuario;
    document.getElementById("usuario-actual-tipo").innerHTML = tipoUsuario; // se muestra en pantalla el nombre de usuario, el tipo de usuario actual
    document.getElementById("usuario-actual-nombre").innerHTML = usuario;

    document.querySelectorAll("div").forEach(element => { // se ocultan todos los div y se muestran solos que coincidan con la clase que coincida con el tipo de usr actual y se envia un mensaje de que se logro ingresar
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

    }
    if (globalTipoUser === "Anfitrion") {
        moneda = "$";
        document.getElementById("moneda-actual").innerHTML = moneda;
        document.querySelectorAll(".Anfitrion").forEach(element => {
            element.setAttribute("style", "display:block");
        });

    }
    if (globalTipoUser === "Huesped") {
        document.querySelectorAll(".Huesped").forEach(element => {
            element.setAttribute("style", "display:block");
        });

    }
    selectCotizacion(globalTipoUser); /// se ejecuta la funcion de crear el select en $ o U$S, solo pesos o no crearlo varia segun el tipo de usuario logeado.

    if (globalTipoUser !== "Visitante") {

        document.querySelector("#divResultadoLogin").innerHTML = `Bienvenido ${usuario}. Has ingresado con éxito!`;
    }
    mostrarInmuebles();

}
//// SALIDA
function salir() {
    //// For each limpia todos lo que sea clase texto (todos inputs). logea mostrando la clase visitante y envia un mensaje avisando que se salio con éxito
    document.querySelectorAll(".texto").forEach(element => {
        element.innerHTML = "";
    });
    ingreso("Visitante", "Visitante");
    moneda = "$";
    document.getElementById("moneda-actual").innerHTML = moneda;
    limpiarDivs();
    document.querySelector("#divResultadoLogin").innerHTML = `Has cerrado sesion con éxito!`;
    limpiarInput();
}
//// REGISTRO
function registro() {

    let nUser = document.querySelector("#txtRegistroNomUsu").value.trim(); /// comienza seleccion de valores del html///
    let nNombre = document.querySelector("#txtRegistroNom").value.trim();
    let nApellido = document.querySelector("#txtRegistroApe").value.trim();
    let nMail = document.querySelector("#txtRegistroEmail").value.trim();
    let nTel = document.querySelector("#txtRegistroTel").value.trim();
    let nPass = document.querySelector("#txtRegistroContraseña").value.trim();
    let nPassComp = document.querySelector("#txtRegistroContraseñaComp").value.trim(); // termina seleccion de valores del html
    let mensaje = "";

    if (!verificarTextoNoVacio(nUser)) {
        mensaje += "Ingrese datos válidos en el campo de usuario"
    }

    if (!verificarTextoNoVacio(nNombre)) {
        mensaje += "Ingrese datos válidos en el campo de nombre.<br>"
    }

    if (!verificarTextoNoVacio(nApellido)) {
        mensaje += "Ingrese datos válidos en el campo de apellido.<br>"
    }

    if (!validacionEmail(nMail)) {
        mensaje += "Email no válido.<br>"
    }

    if (!validarCel(nTel)) {
        mensaje += "Teléfono no válido. Debe ser de 8 números.<br>"
    }

    if (!validacionPass(nPass, nPassComp)) { mensaje += "Las claves no coinciden o no es es valida. Recuerde incluir una mayuscula, una letra, un numero y la longitud de la clave debe ser mayor a 5 caracteres." }

    if (!verificarNoExisteUser(nUser)) { mensaje += "Ya existe otro usuario con ese nombre"; }

    if (verificarNoExisteUser(nUser) && verificarTextoNoVacio(nUser) &&
        verificarTextoNoVacio(nNombre) && verificarTextoNoVacio(nApellido) &&
        validacionEmail(nMail) && validarCel(nTel) && validacionPass(nPass, nPassComp)) {
        let agregarActual = new Usuarios(); // Se crea un objeto de clase usuario
        agregarActual.nombreUsu = nUser; //comienza  a ese objeto se le pone el dato que corresponde
        agregarActual.nombre = nNombre;
        agregarActual.apellido = nApellido;
        agregarActual.email = nMail;
        agregarActual.celular = nTel;
        agregarActual.clave = nPass; // termina ponerle datos a objeto
        let ntipo = "";
        if (globalTipoUser === "Visitante") { /// si la pagina la esta viendo un visitante (el unico que deberia poder verlo porque no hay upgrade de user)
            ntipo = "Huesped" /// si es visitante su tipo de user va ser huesped
            agregarActual.tipo = ntipo;
        }
        if (globalTipoUser === "Administrador") {
            ntipo = "Anfitrion" //// si es admi tipo user = anfitrion
            agregarActual.tipo = ntipo;
        }
        listaUsuarios.push(agregarActual); /// se agrega al array 
        mensaje = "El usuario fue creado con éxito";
    }
    limpiarDivs();
    document.querySelector("#divResultadoRegistro").innerHTML = `${mensaje}`;
}

function verificarNoExisteUser(nUser) {
    let validacion = true;
    listaUsuarios.forEach(element => { // para cada entrada de listaUsuarios verifica si existe un nombre usuario igual que queremos registrar si lo encuentra no permite validar. 
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
    let mensaje = ``;
    if (verificarEsNum(nuevoValor)) {
        cotizacion = nuevoValor;
        mensaje = `El valor del dólar fue actualizado correctamente.`;

    } else { mensaje = `El valor ingresado no es válido.`; }

    document.querySelector("#divResultadoCotizacion").innerHTML = `${mensaje}`;
}

// CREAR SELECT COTIZACION
function selectCotizacion(usr) {

    let divCotizacion = document.querySelector("#divCotizacion");

    if (usr === "Visitante" || usr === "Huesped") {
        divCotizacion.innerHTML = `<select id="selCoti" ><option value="$">$</option><option value="U$S">U$S</option></select>`;
        document.querySelector("#btnMoneda").addEventListener("click", cambiarMoneda);
    }

    document.getElementById("moneda-actual").innerHTML = moneda;
}

function cambiarMoneda() {
    let nuevaMoneda = document.querySelector("#selCoti").value;
    moneda = nuevaMoneda;
    document.getElementById("moneda-actual").innerHTML = moneda;
    mostrarInmuebles();

}
//////////////<--------------------- COTIZACION FIN----------------------------->/////////////////////

//////////////<--------------------- INMUEBLES INICIO -------------------------->/////////////////////
//// MOSTRAR INMUEBLES
function mostrarInmuebles() {
    actualizarCalificacionesInmuebles();

    let tipoUsuario = globalTipoUser;
    let mostrar = document.querySelector("#divMostrarInmuebles");
    let coti = 0;

    mostrar.setAttribute("style", "display:block");
    mostrar.innerHTML = "";
    mostrar.innerHTML += `<h3> INMUEBLES PARA ALQUILAR </h3>`;

    listaInmuebles.sort((function (a, b) {
        if (Number(a.calificacionActual) < Number(b.calificacionActual)) { return 1; }
        if (Number(a.calificacionActual) > Number(b.calificacionActual)) { return -1; }
        if (Number(a.calificacionActual) === Number(b.calificacionActual)) { return 0; }
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
    }

    if (moneda === "$") {
        coti = 1;
    }
    if (moneda === "U$S") {
        coti = cotizacion;
    }

    for (let i = 0; i < listaInmuebles.length; i++) {
        let element = listaInmuebles[i];
        let fotoAct = element.fotoActual;
        if (tipoUsuario === "Visitante" && element.estado == "on") {

            mostrar.innerHTML += `<br><table border=2><tr><td><img id="img${element.id}" src="${element.fotos[fotoAct]}"></td><tr><table>
            <table border=2>
            <tr><td>id: ${element.id}</td><tr>
            <tr><td>Titulo: ${element.titulo}</td><tr>
            <tr><td>Descripción: ${element.descripcion}</td><tr>
            <tr><td>Calificación: ${Number(element.calificacionActual).toFixed(1)}</td><tr>
            <tr><td>Precio por noche: ${moneda}<span id="precio${element.id}">${Number(element.precioPorNoche) / coti}<span></td><tr> 
            <tr><td>Ciudad: ${element.ciudad}</td><tr><table><br>`
        }
        if (tipoUsuario === "Huesped" && element.estado == "on") {

            mostrar.innerHTML += `<br><table border=2><tr><td><img id="img${element.id}" src="${element.fotos[fotoAct]}"></td><table>
            <table border=2>
            <tr><td>id: ${element.id}</td><tr>
            <tr><td>Titulo: ${element.titulo}</td><tr>
            <tr><td>Descripción: ${element.descripcion}</td><tr>
            <tr><td>Calificación: ${Number(element.calificacionActual).toFixed(1)}</td><tr>
            <tr><td>Precio por noche: ${moneda}<span id="precio${element.id}">${Number(element.precioPorNoche) / coti}<span></td><tr>
            <tr><td>Ciudad: ${element.ciudad}</td><tr>            
            <tr><td><input type="button" class="verMas" Value="Ver Más" name="${element.id}">
            <div id="divVerMas${element.id}" style="display:none">
            <input type="button" name="${element.id}" class="fotoAnterior" value=" << ">
            <input type="button" name="${element.id}" class="fotoSiguiente" value=" >> "><br> 
            <h3> Para reservar </h3><br> 
            <input type="text" id="txtReserva${element.id}" style="width: 200px;" placeholder="Ingrese cantidad de noches"><br> 
            <input type="button" name="${element.id}" class="realizarReserva" value="Realizar reserva"><br> 
            <div id="divConfirmar${element.id}" style="display:none"></div></div></td><table><br>`;
        }
        if (tipoUsuario === "Anfitrion" && globalUser == element.usuarioAnfitrion) {
            mostrar.innerHTML += `<br><table border=2><tr><td><img id="img${element.id}" src="${element.fotos[fotoAct]}"></td><tr><table>
            <table border=2><tr><td>Titulo: ${element.titulo}</td><tr>
            <tr><td>Descripción: ${element.descripcion}</td><tr>
            <tr><td>Calificación: ${Number(element.calificacionActual).toFixed(1)}</td><tr>
            <tr><td>Precio por noche: ${moneda}<span id="precio${element.id}">${Number(element.precioPorNoche) / coti}<span></td><tr>
            <tr><td>Ciudad: ${element.ciudad}</td><tr><input type="button" class="btnHab" name="${element.id}" value="Habilitar"><input type="button" class="btnDesab" name="${element.id}" value="Deshabilitar"><span id="span${element.id}"></span><table><br>`

        }
        habilitarbotones();

    }
}

function habilitar() {

    let name = this.name;
    listaInmuebles.forEach(element => {
        if (element.usuarioAnfitrion === globalUser) { element.estado = "on" }
    });
    limpiarDivs();
    document.querySelector(`#span${name}`).innerHTML = " Inmueble Habilitado";
}

function inhabilitar() {
    let name = this.name
    listaInmuebles.forEach(element => {
        if (element.usuarioAnfitrion === globalUser) { element.estado = "off" }
    });
    limpiarDivs();
    document.querySelector(`#span${name}`).innerHTML = " Inmueble Deshabilitado";

}

function habilitarbotones() {
    document.querySelectorAll(".btnHab").forEach(element => {
        element.addEventListener("click", habilitar);
    });
    document.querySelectorAll(".btnDesab").forEach(element => {
        element.addEventListener("click", inhabilitar);
    });

    document.querySelectorAll(".fotoSiguiente").forEach(element => {
        element.addEventListener("click", fotoSiguiente);
    });
    document.querySelectorAll(".fotoAnterior").forEach(element => {
        element.addEventListener("click", fotoAnterior);
    });
    document.querySelectorAll(".verMas").forEach(element => {
        element.addEventListener("click", mostrarVerMas);
    });
    document.querySelectorAll(".realizarReserva").forEach(element => {
        element.addEventListener("click", realizarReserva);
    });
}

function realizarReserva() {
    let idInmueble = this.name;
    let costoTotal = (Number(document.querySelector(`#txtReserva${idInmueble}`).value) * Number(document.querySelector(`#precio${idInmueble}`).textContent));

    document.querySelector(`#divConfirmar${idInmueble}`).innerHTML = `El costo total es de ${moneda} ${costoTotal} <input type="button" name="${idInmueble}" class="confirmaReserva" value="Confimar">`;
    document.querySelector(`#divConfirmar${idInmueble}`).removeAttribute("style");
    document.querySelectorAll(".confirmaReserva").forEach(element => {
        element.addEventListener("click", confirmaReserva);
    });
}

function confirmaReserva() {
    //FALTA VALIDACION DE VACIO Y QUE NO SEA LETRA
    let idInmueble = this.name;
    let idUser = obtenerNumeroDeUser();
    relacionarUsuarioConInmueble(idUser, idInmueble)

}

function obtenerNumeroDeUser() {
    let numeroUser = -1;
    for (let i = 0; i < listaUsuarios.length; i++) {

        let element = listaUsuarios[i];
        if (element.nombreUsu === globalUser) { numeroUser = i }
    }
    return numeroUser;
}

function mostrarVerMas() {
    let idInmueble = this.name;
    document.querySelector(`#divVerMas${idInmueble}`).removeAttribute("style");
}

function fotoSiguiente() {
    let idInmueble = this.name;
    let imagen = document.querySelector(`#img${idInmueble}`)

    if (listaInmuebles[idInmueble].fotoActual + 1 < listaInmuebles[idInmueble].fotos.length) {
        listaInmuebles[idInmueble].fotoActual = listaInmuebles[idInmueble].fotoActual + 1;
        imagen.src = listaInmuebles[idInmueble].fotos[listaInmuebles[idInmueble].fotoActual];
    }
}

function fotoAnterior() {
    let idInmueble = this.name;
    let imagen = document.querySelector(`#img${idInmueble}`)

    if (listaInmuebles[idInmueble].fotoActual - 1 >= 0) {
        listaInmuebles[idInmueble].fotoActual = listaInmuebles[idInmueble].fotoActual - 1;
        imagen.src = listaInmuebles[idInmueble].fotos[listaInmuebles[idInmueble].fotoActual];
    }
}

function mostrarReservas() {
    let numeroUser = obtenerNumeroDeUser();
    let divMostrar = document.querySelector("#divReservas");
    let divInmuebles = document.querySelector("#divMostrarInmuebles");
    divInmuebles.innerHTML = "";
    divMostrar.innerHTML = "";
    divMostrar.innerHTML += `<h3> MIS RESERVAS </h3>`;
    let coti = 0;
    if (moneda === "$") {
        coti = 1;
    }
    if (moneda === "U$S") {
        coti = cotizacion;
    }
    for (let i = 0; i < listaUsuarios[numeroUser].inmuebles.length; i++) {
        let element = listaUsuarios[numeroUser].inmuebles[i];
        
        divMostrar.innerHTML += `<br><table border=2>
        <tr><td>id: ${element.id}</td><tr>
        <tr><td>Titulo: ${element.titulo}</td></tr>
        <tr><td>Descripción: ${element.descripcion}</td></tr>
        <tr><td>Precio por noche: ${moneda} ${Number(element.precioPorNoche) / coti}</td></tr>
        <tr><td>Ciudad: ${element.ciudad}</td></tr>
        <tr><td>Título: ${element.titulo}</td></tr>
        <tr><td>Calificación: ${element.calificacionActual}</td></tr>
        <tr><td><img id="img${element.id}" src="${element.fotos[element.fotoActual]}"></tr></td>
        <td><select id="selCalificar${element.id}">
        <option value="Seleccione una Opción">Seleccione una opción</option><option value="1">1</option> 
        <option value="2" >2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option>
        </select><input type="button" class="calificarInmueble" name="${element.id}" value="Calificar"></td></tr><table><br>`
    }
    document.querySelectorAll(`.calificarInmueble`).forEach(element => {
        element.addEventListener("click", calificarInmueble);
    });
}

function calificarInmueble() {
    let idInmueble = this.name;
    let calificacionActual = Number(document.querySelector(`#selCalificar${idInmueble}`).value);
    let validacion = true;
    let idUser = obtenerNumeroDeUser();
    listaInmuebles.forEach(element => {
        for (let i = 0; i < element.calificadoPor.length; i++) {
            let user = element.calificadoPor[i];       
        if(user === idUser){
            validacion = false;
        }
    }
        if (validacion && (element.id === idInmueble)) {
            element.calificaciones.push(calificacionActual);
            element.calificacionActual = Number((calculadoraDeCalificaciones(idInmueble) / listaInmuebles[idInmueble].calificaciones.length)).toFixed(1);
        }
        
    });

    
    limpiarDivs;
    mostrarInmuebles();
    mostrarReservas();


}

function registrarInmueble() {

    let mensaje = "";
    let validarFotos = false;
    let validarCamposDeTexto = false;
    let contador = 0;
    document.querySelectorAll(".checkboxRegistro").forEach(element => {
        if (element.checked) {
            contador = contador + 1
        }
    });
    if (verificarTextoNoVacio(document.querySelector("#txtTitulo").value)) {
        if (verificarTextoNoVacio(document.querySelector("#txtDescripcion").value)) {
            if (verificarTextoNoVacio(document.querySelector("#txtCiudad").value)) {
                if (verificarEsNum(document.querySelector("#txtPrecioPorNoche").value)) {
                    validarCamposDeTexto = true;
                    if (contador > 2) {
                        validarFotos = true;
                    } else { mensaje = "Seleccione al menos 3 fotos"; }
                } else { mensaje = "Complete Precio por Noche"; }
            } else { mensaje = "Complete Ciudad"; }
        } else { mensaje = "Complete Descripción"; }
    } else { mensaje = "Complete Título"; }

    if (validarCamposDeTexto && validarFotos) {
        let nuevoInmueble = new Inmuebles
        nuevoInmueble.id = `inmueble${listaInmuebles.length}`
        nuevoInmueble.estado = document.querySelector("#selRegInm").value;
        nuevoInmueble.titulo = document.querySelector("#txtTitulo").value;
        nuevoInmueble.descripcion = document.querySelector("#txtDescripcion").value;
        nuevoInmueble.ciudad = document.querySelector("#txtCiudad").value;
        nuevoInmueble.precioPorNoche = document.querySelector("#txtPrecioPorNoche").value;
        nuevoInmueble.usuarioAnfitrion = document.querySelector("#usuario-actual-nombre").textContent; //QUE ES TEXT CONTENT?
        nuevoInmueble.calificaciones = [];
        nuevoInmueble.calificacionActual = [];

        let fotosSeleccionadas = new Array();
        for (let i = 0; i < document.querySelectorAll(".checkboxRegistro").length; i++) {
            let element = document.querySelectorAll(".checkboxRegistro")[i];
            if (element.checked) { fotosSeleccionadas.push(i); }
        }
        nuevoInmueble.fotos = fotosSeleccionadas;
        nuevoInmueble.calificadoPor = [];
        //nuevoInmueble.fotoActual = ; Hay que ver como hacer para que traiga la primer foto agregada
        listaInmuebles.push(nuevoInmueble);
        mensaje = "Inmueble agregado con éxito!"
    }
    limpiarDivs();
    document.querySelector("#spanEstadoRegInmueble").innerHTML = mensaje;
}

function mostrarFotosRegistrarInmueble() {
    let imagenes = `<br>Marque las fotos a agregar al inmueble (mín 3)<br><br><table border=2>`;

    for (let i = 0; i < listaFotos.length; i++) {
        let element = listaFotos[i];                    ///esta generando con id mal no se visualiza cuando se registra con exito dps
        imagenes += `<tr><td><input class="checkboxRegistro" value="${i}" type="checkbox">Imagen ${i}
        <img class="miniatura" src="${element}"></td></tr>`;
        imagenes += `</table><br>`;
        document.querySelector("#divFotos").innerHTML = imagenes;
    }
}

function buscador() {

    let arrayResultado = new Array;
    let tipoUserActual = globalTipoUser;
    let usuarioActual = globalUser;
    let mensaje = ``;
    let txtBuscado = document.getElementById("txtBusqueda").value;
    let txtBuscadoPro = txtNoTildesNiMayus(txtBuscado); // sin tildes y sin mayusculas 

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
        }
        if (arrayResultado.length < 1) {
            mensaje += `No existen resultados para su búsqueda`;
            limpiarDivs();
            document.querySelector("#divResultadoBusqueda").innerHTML = `${mensaje}`;
        }
    } else {
        mensaje += `Debe ingresar algo para buscar`;
        limpiarDivs();
        document.querySelector("#divResultadoBusqueda").innerHTML = `${mensaje}`;
    }

    //repetimos codigo mostrarInmuebles utilizando array resultado

    actualizarCalificacionesInmuebles();

    let tipoUsuario = globalTipoUser;
    let mostrar = document.querySelector("#divMostrarInmuebles");
    let coti = 0;

    mostrar.setAttribute("style", "display:block");
    mostrar.innerHTML = "";
    mostrar.innerHTML += `<h3> INMUEBLES PARA ALQUILAR </h3>`;

    arrayResultado.sort((function (a, b) {
        if (Number(a.calificacionActual) < Number(b.calificacionActual)) { return 1; }
        if (Number(a.calificacionActual) > Number(b.calificacionActual)) { return -1; }
        if (Number(a.calificacionActual) === Number(b.calificacionActual)) { return 0; }
    }));

    if (globalTipoUser === "Visitante") {
        if (document.querySelector("#selOrdenar").value === "Ascendente") {
            arrayResultado.sort((function (a, b) {
                if (Number(a.precioPorNoche) > Number(b.precioPorNoche)) { return 1; }
                if (Number(a.precioPorNoche) < Number(b.precioPorNoche)) { return -1; }
                if (Number(a.precioPorNoche) === Number(b.precioPorNoche)) { return 0; }
            }));
        }
        if (document.querySelector("#selOrdenar").value === "Descendente") {
            arrayResultado.sort((function (a, b) {
                if (Number(a.precioPorNoche) < Number(b.precioPorNoche)) { return 1; }
                if (Number(a.precioPorNoche) > Number(b.precioPorNoche)) { return -1; }
                if (Number(a.precioPorNoche) === Number(b.precioPorNoche)) { return 0; }
            }));
        }
    }

    if (moneda === "$") {
        coti = 1;
    }
    if (moneda === "U$S") {
        coti = cotizacion;
    }

    for (let i = 0; i < arrayResultado.length; i++) {
        let element = arrayResultado[i];
        let fotoAct = element.fotoActual;
        if (tipoUsuario === "Visitante" && element.estado == "on") {

            mostrar.innerHTML += `<br><table border=2><tr><td><img id="img${element.id}" src="${element.fotos[fotoAct]}"></td><tr><table>
            <table border=2><tr><td>Titulo: ${element.titulo}</td><tr>
            <tr><td>Descripción: ${element.descripcion}</td><tr>
            <tr><td>Calificación: ${Number(element.calificacionActual).toFixed(1)}</td><tr>
            <tr><td>Precio por noche: ${moneda}<span id="precio${element.id}">${Number(element.precioPorNoche) / coti}<span></td><tr> 
            <tr><td>Ciudad: ${element.ciudad}</td><tr><table><br>`
        }
        if (tipoUsuario === "Huesped" && element.estado == "on") {

            mostrar.innerHTML += `<br><table border=2><tr><td><img id="img${element.id}" src="${element.fotos[fotoAct]}"></td><table>
            <table border=2><tr><td>Titulo: ${element.titulo}</td><tr>
            <tr><td>Descripción: ${element.descripcion}</td><tr>
            <tr><td>Calificación: ${Number(element.calificacionActual).toFixed(1)}</td><tr>
            <tr><td>Precio por noche: ${moneda}<span id="precio${element.id}">${Number(element.precioPorNoche) / coti}<span></td><tr>
            <tr><td>Ciudad: ${element.ciudad}</td><tr>            
            <tr><td><input type="button" class="verMas" Value="Ver Más" name="${element.id}">
            <div id="divVerMas${element.id}" style="display:none">
            <input type="button" name="${element.id}" class="fotoAnterior" value=" << ">
            <input type="button" name="${element.id}" class="fotoSiguiente" value=" >> "><br> 
            <h3> Para reservar </h3><br> 
            <input type="text" id="txtReserva${element.id}" style="width: 200px;" placeholder="Ingrese cantidad de noches"><br>   
            <input type="button" name="${element.id}" class="realizarReserva" value="Realizar reserva"><br> 
            <div id="divConfirmar${element.id}" style="display:none"></div></div></td><table><br>`;
        }
        habilitarbotones();

    }
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

function limpiarDivs() {
    document.querySelector("#divResultadoLogin").innerHTML = ``;
    document.querySelector("#divResultadoRegistro").innerHTML = ``;
    document.querySelector("#divResultadoCotizacion").innerHTML = ``;
    document.querySelector("#divResultadoBusqueda").innerHTML = ``;
}

function calculadoraDeCalificaciones(codigoInmueble) {
    let suma = 0;
    for (let i = 0; i < listaInmuebles[codigoInmueble].calificaciones.length; i++) {
        let element = listaInmuebles[codigoInmueble].calificaciones[i];
        suma = suma + element;
    }

    return suma;
}
function mostrarReporteInmueble()
{
let min = Number.NEGATIVE_INFINITY;
let max = Number.POSITIVE_INFINITY;
let textoDesde = document.querySelector("#divReporteInmueble").children[1].value.trim();
let textoHasta = document.querySelector("#divReporteInmueble").children[2].value.trim();
let mostrar = document.querySelector("#divMostrarInmuebles");
mostrar.innerHTML = "";
    if(textoDesde.length>0)
    {
        if (!isNaN(textoDesde)) {
    min = textoDesde;         
        }
    }
    if(textoHasta.length>0)
    {
        if (!isNaN(textoHasta)) {
    max = textoHasta;         
        }
    }

listaInmuebles.forEach(element => {
    let fotoAct = element.fotoActual;
    if(Number(element.precioPorNoche)>min && Number(element.precioPorNoche)<max)
{
    mostrar.innerHTML += `<br><table border=2><tr><td><img id="img${element.id}" src="${element.fotos[fotoAct]}"></td><table>
    <table border=2><tr><td>Titulo: ${element.titulo}</td><tr>
    <tr><td>Descripción: ${element.descripcion}</td><tr>
    <tr><td>Calificación: ${Number(element.calificacionActual).toFixed(1)}</td><tr>
    <tr><td>Precio por noche: ${moneda}<span id="precio${element.id}">${Number(element.precioPorNoche)}<span></td><tr>
    <tr><td>Ciudad: ${element.ciudad}</td><tr>            
    <tr><td><input type="button" class="verMas" Value="Ver Más" name="${element.id}">
    <div id="divVerMas${element.id}" style="display:none">
    <input type="button" name="${element.id}" class="fotoAnterior" value=" << ">
    <input type="button" name="${element.id}" class="fotoSiguiente" value=" >> "><br> 
    <h3> Para reservar </h3><br> 
    <input type="text" id="txtReserva${element.id}" style="width: 200px;" placeholder="Ingrese cantidad de noches"><br> 
    <input type="button" name="${element.id}" class="realizarReserva" value="Realizar reserva"><br> 
    <div id="divConfirmar${element.id}" style="display:none"></div></div></td><table><br>`;
}
});



}

function limpiarInput()
{
    document.querySelectorAll("input").forEach(element => {
        if(element.type === "text")
        {
            element.innerHTML = "";
        }
    });
}

console.log("Init cargado")