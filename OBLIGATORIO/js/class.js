class Usuarios{
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

class Inmuebles{
  constructor(){
    this.id;
    this.titulo;
    this.descripcion;
    this.ciudad;
    this.precioPorNoche; //en pesos
    this.promedioCalif; // del 1 al 5 un decimal obligatorio
    this.fotos; // nombre array de fotos de ese inmueble
  }
}

class Fotos{
  constructor(){
    this.id;
    this.idInmuebleRel;
    this.rutaImg;
  }
}

console.log("Class cargado")