import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Producto } from './components/models/Producto.models-';
import { ProductosService } from './services/productos.service';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
export const routes: Routes = [
    {
        path:'inicio',component:InicioComponent
    },
    {
        path:'acercade',component:AcercadeComponent
    },
   

    {
        path: 'productos', component: CardproductosComponent
    },
    {
        path: 'producto/:id', component: CardproductoComponent
    },
    {
        path: 'buscar/:termino', component: CardbuscadorComponent
    },
     {
        path:'**',component:InicioComponent
    },
];
