import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColeccionComponent } from './coleccion/coleccion.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import path from 'path';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { JuegoComponent } from './juego/juego.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'coleccion', component: ColeccionComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'desarrollador/:id', component: DesarrolladorComponent},
    {path: 'juego/:id', component: JuegoComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    //{path: '**',    redirectTo: 'buscar', pathMatch: 'full'}
];
