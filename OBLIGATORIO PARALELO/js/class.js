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
    this.inmuebles = new Array;
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
    this.promedioCalif; // del 1 al 5 un decimal obligatorio
    this.fotos = new Array();
  }
}


console.log("Class cargado")