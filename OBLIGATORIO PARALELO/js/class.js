class Usuarios {
    constructor() {
        this.id;
        this.nombreUsu;
        this.nombre;
        this.apellido;
        this.email;
        this.celular;
        this.clave;
        this.tipo;
        this.reservas;
        this.inmuebles = new Array; //si es anfitrion el inmueble es de el
        //si es huesped es lo reservado
    }
}

class Inmuebles {
    constructor() {
        this.id;
        this.estado;
        this.titulo;
        this.descripcion;
        this.ciudad;
        this.precioPorNoche; //en pesos
        this.usuarioAnfitrion;
        this.calificaciones = new Array();
        this.calificacionActual; // del 1 al 5 un decimal obligatorio
        this.fotos = new Array();
        this.fotoActual;
        this.calificadoPor = new Array; //id usuario que calificó este inmueble
    }
}


console.log("Class cargado")