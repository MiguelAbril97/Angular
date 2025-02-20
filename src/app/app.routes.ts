import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColeccionComponent } from './coleccion/coleccion.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetallesComponent } from './detalles/detalles.component';
import path from 'path';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'coleccion', component: ColeccionComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'detalles', component: DetallesComponent},
    //{path: '**',    redirectTo: 'buscar', pathMatch: 'full'}
];
