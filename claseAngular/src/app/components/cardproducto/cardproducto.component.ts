// src/app/components/cardproducto/cardproducto.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../models/Producto.models-';

@Component({
  selector: 'app-cardproducto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cardproducto.component.html',
  styleUrls: ['./cardproducto.component.css']
})
export class CardproductoComponent implements OnInit {
  producto: Producto | undefined;
  colorActivo: string = ''; // Almacena el nombre del color activo
  imagenActual: string = ''; // Imagen correspondiente al color activo
  colorPrimario: string = '#000'; // Color de fondo por defecto
  colorSecundario: string = '#212121'; // Color secundario por defecto

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.producto = this.productosService.getProducto(parseInt(id));
    if (this.producto && this.producto.colores && this.producto.colores.length > 0) {
      // Inicializa con el primer color
      this.colorActivo = this.producto.colores[0].nombre;
      this.imagenActual = this.producto.colores[0].img;
      this.colorPrimario = this.producto.colores[0].colorPrimario;
      this.colorSecundario = this.producto.colores[0].colorSecundario;
    }
  }

  cambiarColor(color: { nombre: string; colorPrimario: string; colorSecundario: string; img: string }): void {
    this.colorActivo = color.nombre;
    this.imagenActual = color.img;
    this.colorPrimario = color.colorPrimario;
    this.colorSecundario = color.colorSecundario;
  }
}