// src/app/services/productos.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../components/models/Producto.models-';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private productos: Producto[] = [
    {
      nombre: 'Audifonos JBL',
      precio: 100,
      descripcion: 'Especificaciones técnicas JBL Tune 520BT. Sonido de alta calidad con cancelación de ruido.',
      img: 'img/auricula.png',
      colores: [
        { nombre: 'black', colorPrimario: '#000', colorSecundario: '#212121', img: 'img/auricula.png' },
        { nombre: 'red', colorPrimario: '#7E021C', colorSecundario: '#bd072d', img: 'img/jbl.png' },
        { nombre: 'blue', colorPrimario: '#1C3F7E', colorSecundario: '#2d6fbd', img: 'https://tecnocomprasbolivia.com/cdn/shop/files/J_1024x1024@2x.jpg?v=1702524203' }
      ]
    },
    {
      nombre: 'Nike Lunar Gato II',
      precio: 90,
      descripcion: 'Zapatillas de fútbol sala de piel Nike suela lisa IC - blancas. Ligereza y tracción para superficies variadas.',
      img: 'img/gato1.png',
      colores: [
        { nombre: 'white', colorPrimario: '#FFF', colorSecundario: '#F5F5F5', img: 'img/gato1.png' },
        { nombre: 'black', colorPrimario: '#000', colorSecundario: '#212121', img: 'https://media.futbolmania.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/8/580456-061_zapatillas-futbol-sala-color-negro-nike-lunargato-2_1_pie-derecho.jpg' },
        { nombre: 'red', colorPrimario: '#7E021C', colorSecundario: '#bd072d', img: 'https://media.futbolmania.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/8/580456-802_zapatillas-futbol-sala-color-naranja-y-rojo-nike-lunar-gato-ii_1_pie-derecho.jpg' }
      ]
    },
    {
      nombre: 'Producto 3',
      precio: 300,
      descripcion: 'Descripción del producto 3. Ideal para uso diario con materiales de alta calidad.',
      img: 'https://via.placeholder.com/150',
      colores: [
        { nombre: 'gray', colorPrimario: '#A2A2A2', colorSecundario: '#CCCCCC', img: 'https://via.placeholder.com/150' },
        { nombre: 'orange', colorPrimario: '#CE5B39', colorSecundario: '#F18557', img: 'https://via.placeholder.com/150/FFA500' }
      ]
    }
  ];

  constructor() {
    console.log('Servicio de productos inicializado');
  }

  getProductos(): Producto[] {
    return this.productos;
  }

  getProducto(id: number): Producto | undefined {
    return this.productos[id];
  }

  buscarProductos(termino: string): Producto[] {
    let productosArr: Producto[] = [];
    termino = termino.toLowerCase();
    for (let producto of this.productos) {
      let nombre = producto.nombre.toLowerCase();
      if (nombre.includes(termino)) {
        productosArr.push(producto);
      }
    }
    return productosArr;
  }
}