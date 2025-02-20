import { Component } from '@angular/core';
import { BuscadorService } from '../servicios/buscador.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Juego } from '../clases/juego';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [BuscadorService, HttpClient],
})
export class BusquedaComponent {
  public busqueda: string = '';
  public resultados: any[] = [];
  public verTodo: boolean = true;
  public tipo: string = 'games';
  public juego: Juego = new Juego(0, '', '', '', 0, 0, []);

  // Copia de los resultados originales para reiniciar filtros
  private resultadosOriginales: any[] = [];

  // Controles de filtros (checkboxes)
  public filtrarReleased: boolean = false;
  public filtrarMetacritic: boolean = false;
  public filtrarPlaytime: boolean = false;
  public filtrarPlatforms: boolean = false;

  public valorReleased: string = '';     
  public valorMetacritic: string = '';     
  public valorPlaytime: string = '';       
  public valorPlatforms: string = '';

  constructor(private buscadorService: BuscadorService) {}

  buscar(): void {
    this.buscadorService.buscar(this.tipo, this.busqueda).subscribe({
      next: (respuesta) => {
        this.resultados = respuesta.results;
        // Se guarda la copia original para poder reiniciar los filtros
        this.resultadosOriginales = [...this.resultados];
        if (!this.resultados || this.resultados.length === 0) {
          alert('No se encontraron resultados');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ordenarAlfabeticamente(): void {
    if (this.resultados.length > 0) {
      this.resultados.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  filtrosJuegos(): void {
    this.resultados = this.resultadosOriginales.filter(item => {
      let cumple = true;

      // Filtro por released (fecha de lanzamiento)
      if (this.valorReleased) {
        if (typeof item.released === 'string') {
          cumple = cumple && item.released.toLowerCase().includes(this.valorReleased.toLowerCase());
        } else {
          cumple = false;
        }
      }

    
      if (this.filtrarMetacritic && this.valorMetacritic) {
        if (typeof item.metacritic === 'number') {
          cumple = cumple && item.metacritic >= Number(this.valorMetacritic);
        } else {
          cumple = false;
        }
      }

      // Filtro por playtime 
      if (this.filtrarPlaytime && this.valorPlaytime) {
        if (typeof item.playtime === 'number') {
          cumple = cumple && item.playtime >= Number(this.valorPlaytime);
        } else {
          cumple = false;
        }
      }

      if (this.filtrarPlatforms && this.valorPlatforms) {
        if (Array.isArray(item.platforms)) {
          cumple = cumple && item.platforms.some((p: any) => {
            return p.platform && p.platform.name.toLowerCase().includes(this.valorPlatforms.toLowerCase());
          });
        } else {
          cumple = false;
        }
      }

      return cumple;
    });
  }

  /**
   * Reinicia los filtros
   */
  resetearFiltro(): void {
    this.resultados = [...this.resultadosOriginales];
  }
}
