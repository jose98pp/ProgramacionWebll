import { Component } from '@angular/core';
import { CardbuscadorComponent } from "../cardbuscador/cardbuscador.component";

@Component({
  selector: 'app-navbar',
  imports: [CardbuscadorComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
onBuscar($event: string) {
throw new Error('Method not implemented.');
}

}
