import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: 'busqueda', component: BusquedaComponent},
    //{path: '**',    redirectTo: 'buscar', pathMatch: 'full'}
];
