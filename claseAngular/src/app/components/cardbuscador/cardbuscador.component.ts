import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cardbuscador',
  imports: [CommonModule],
  templateUrl: './cardbuscador.component.html',
  styleUrl: './cardbuscador.component.css'
})
export class CardbuscadorComponent {
  @Output() buscar = new EventEmitter<string>();

  onBuscar(termino: string): void {
    this.buscar.emit(termino);


  }
}
