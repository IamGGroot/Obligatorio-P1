class Usuarios {
  constructor() {
    this.nombreUsu;
    this.nombre;
    this.apellido;
    this.email;
    this.celular;
    this.clave;
    this.tipo;
    this.reservas;
    this.inmuebles;
  }
}

class Inmuebles {
  constructor() {
    this.id;
    this.titulo;
    this.descripcion;
    this.ciudad;
    this.precioPorNoche; //en pesos
    this.promedioCalif; // del 1 al 5 un decimal obligatorio
    this.cantidadFotosInm;
    this.rutaImg;
    this.usuario;
    this.fotos;
  }
}

class Fotos {
  constructor() {
    this.id;
    this.idInmuebleRel;
    this.codigoFoto;
  }
}

console.log("Class cargado")