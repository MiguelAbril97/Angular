import { Component } from '@angular/core';
import { BuscadorService } from '../servicios/buscador.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  imports: [],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
  providers: [BuscadorService]
})
export class BusquedaComponent {
  public busqueda: string;
  public resultados: Array<any>;
  public filtro: Array<any>;
  public artistas: boolean;
  public albums: boolean;
  public canciones: boolean;

  constructor(public buscadorService: BuscadorService) {
    this.busqueda = '';
    this.resultados = [];
    this.filtro = [];
    this.artistas = true;
    this.albums = true;
    this.canciones = true;
  }

  /*buscar() {
    this.buscadorService.buscar(this.busqueda).subscribe({
      next: (respuesta) => {
        this.resultados = [...respuesta];
        this.filtro = this.resultados;  
        if(!this.resultados) {
         alert('No se encontraron resultados');
        }
       
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  filtrar(){
    this.filtro = this.resultados.filter((element) => {
        if (this.artistas && element.type === 'artista') {
          return true;
        }
        if (this.albums && element.type === 'album') {
          return true;
        }
        if (this.canciones && element.type === 'cancion') {
          return true;
        }else{
          return false;
        }
      }
  );
  return this.filtro;
}

ordenarAlfabeticamente(){
  this.filtro.sort((a, b) => a.title.localeCompare(b.title));
}
*/
}
