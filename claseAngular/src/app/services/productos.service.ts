import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../components/models/Producto.models-";
@Injectable({providedIn: 'root'})
export class ProductosService {
    constructor(){
        console.log("Servicio de productos inicializado");
    }
    private productos: Producto[] = [
        {nombre:"Audifonos JBL", precio: 100,descripcion: "Especificaciones técnicas JBL Tune 520BT", img: "https://tecnocomprasbolivia.com/cdn/shop/files/prod_ce65a97ab1fd81dccd9b231781d9d9d6_900x.png?v=1702524138"},
        {nombre:"Nike Lunar Gato II", precio: 90, descripcion: "Zapatillas de fútbol sala de piel Nike suela lisa IC - blancas", img: "https://media.futbolmania.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/8/580456-105_zapatillas-futbol-sala-color-blanco-nike-lunar-gato-ii_1_pie-derecho.jpg"},
        {nombre:"Producto 3", precio: 300, descripcion: "Descripción del producto 3", img: "https://via.placeholder.com/150"},
    ];
    getProductos(): Producto[] {return this.productos;}
    getProducto(id: number){return this.productos[id];}
    buscarProductos(termino: string): Producto[] {
        let productosArr: Producto[] = [];
        termino = termino.toLowerCase();
        for (let i=0;i<this.productos.length;i++){
            let producto = this.productos[i];
            let nombre = producto.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0){
                productosArr.push(producto);
            }
        }
        return productosArr;
    }
}