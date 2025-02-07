import { Component } from '@angular/core';
import { BuscadorService } from '../servicios/buscador.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule, CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css',
  providers: [BuscadorService, HttpClient],
})

export class BusquedaComponent {
  public busqueda: string;
  public resultados: Array<any>;
  public filtro: Array<any>;
  public artistas: boolean;
  public albums: boolean;
  public canciones: boolean;
  public verTodo: boolean;

  constructor(public buscadorService: BuscadorService) {
    this.busqueda = '';
    this.resultados = [];
    this.filtro = [];
    this.artistas = false;
    this.albums = false;
    this.canciones = false;
    this.verTodo = true;
  }
  buscar() {
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
    if(this.verTodo){
      this.filtro = this.resultados;
    }else{
      this.filtro = this.resultados.filter((element) => {
        if (this.artistas && element.type === 'artista') {
          return true;
        }
        if (this.albums && element.type === 'album') {
          return true;
        }
        if (this.canciones && element.type === 'cancion') {
          return true;
        }
        return false;
      }
  );
    }
  return this.filtro;
  }

  ordenarAlfabeticamente(){
    this.filtro.sort((a, b) => a.title.localeCompare(b.title));
  }
}