import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Importa RouterLink
import { ProductosService } from '../../services/productos.service';
import { BuscadorService } from '../../services/buscador.service';
import { Producto } from '../models/Producto.models-';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cardproductos',
  standalone: true,
  imports: [CommonModule, RouterLink], // Agrega RouterLink
  templateUrl: './cardproductos.component.html',
  styleUrls: ['./cardproductos.component.css']
})
export class CardproductosComponent implements OnInit, OnDestroy {
  productos: Producto[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private productosService: ProductosService,
    private buscadorService: BuscadorService
  ) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
    this.subscription = this.buscadorService.terminoBusqueda$.subscribe(termino => {
      this.buscar(termino);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buscar(termino: string): void {
    if (termino.trim()) {
      this.productos = this.productosService.buscarProductos(termino);
    } else {
      this.productos = this.productosService.getProductos();
    }
  }
}