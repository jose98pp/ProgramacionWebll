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
        {nombre:"Audifonos JBL", precio: 100,descripcion: "Especificaciones técnicas JBL Tune 520BT", img: "https://tecnocomprasbolivia.com/cdn/shop/files/prod_ce65a97ab1fd81dccd9b231781d9d9d6_900x.png?v=1702524138", imagen: ""},
        {nombre:"Nike Lunar Gato II", precio: 90, descripcion: "Zapatillas de fútbol sala de piel Nike suela lisa IC - blancas", img: "https://media.futbolmania.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/5/8/580456-105_zapatillas-futbol-sala-color-blanco-nike-lunar-gato-ii_1_pie-derecho.jpg", imagen: ""},
        {nombre:"Smartwatch - Watch Serie 8 - GPS – 41 mm – Negro - Apple", precio: 300, descripcion: "El Apple Watch Series 8 viene con apps y sensores de salud avanzados. Además, incluye datos sobre las fases del sueño y métricas avanzadas de entrenamiento.", img: "https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/1/2/1252.gif", imagen: ""},
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