export class Producto {
    nombre: string;
    img: string;
    precio: number;
    descripcion?: string;
imagen: any;
  constructor() {
    this.nombre = '';
    this.img = '';
    this.precio = 0;
    this.descripcion = '';
  }
}