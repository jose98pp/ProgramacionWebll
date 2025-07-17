import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Disponible en toda la aplicación
})
export class BuscadorService {
  private terminoBusqueda = new BehaviorSubject<string>(''); // Inicializa con cadena vacía
  terminoBusqueda$ = this.terminoBusqueda.asObservable(); // Observable para suscribirse

  setTerminoBusqueda(termino: string): void {
    this.terminoBusqueda.next(termino.trim()); // Emite el término limpio
  }
}