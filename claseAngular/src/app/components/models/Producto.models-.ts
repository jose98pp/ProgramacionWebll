export class Producto {
    nombre: string;
    img: string;
    precio: number;
    descripcion?: string;
    colores?: { // Nuevo campo para colores
    nombre: string;
    colorPrimario: string;
    colorSecundario: string;
    img: string;
  }[];

  constructor() {
    this.nombre = '';
    this.img = '';
    this.precio = 0;
    this.descripcion = '';
    this.colores = [];
    
  }
}