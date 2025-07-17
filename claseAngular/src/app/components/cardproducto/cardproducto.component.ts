// src/app/components/cardproducto/cardproducto.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas como *ngIf
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../models/Producto.models-'; // Corrige la importación

@Component({
  selector: 'app-cardproducto',
  standalone: true, // Configura como standalone
  imports: [CommonModule, RouterLink], // Agrega CommonModule
  templateUrl: './cardproducto.component.html',
  styleUrls: ['./cardproducto.component.css']
})
export class CardproductoComponent implements OnInit {
  producto: Producto | undefined; // Puede ser undefined si no se encuentra

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.producto = this.productosService.getProducto(parseInt(id));
    console.log(this.producto);
  }
}