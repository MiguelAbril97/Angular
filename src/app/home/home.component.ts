import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../servicios/buscador.service';
import { Juego } from '../clases/juego';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public popularGames: Juego[] = [];
  public sortBy:string = '';
  public resultados = [];
  constructor(private buscadorService: BuscadorService) {}

  ngOnInit(): void {
   this.buscarPopulares();
  }

  buscarPopulares(): void {
    this.buscadorService.buscar('games','').subscribe({
      next: (respuesta) => {
        this.resultados = respuesta.results;
        this.popularGames = [...this.resultados]
        // Se guarda la copia original para poder reiniciar los filtros
        if (!this.resultados || this.resultados.length === 0) {
          alert('No se encontraron resultados');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ordenar(): void {
    this.popularGames.sort((a: Juego, b: Juego) => {
      if (this.sortBy === 'metacritic') {
          return (b.metacritic || 0) - (a.metacritic || 0);
      }else if (this.sortBy === 'playtime'){
        return b.playtime - a.playtime;
      }else if (this.sortBy === 'released'){
        return new Date(b.released).getTime() - new Date(a.released).getTime();
      }else{
        return 0;
      }
    });
  }

}
