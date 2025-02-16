import { Component } from '@angular/core';
import { BuscadorService } from '../servicios/buscador.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [BuscadorService, HttpClient],
})
export class BusquedaComponent {
  public busqueda: string = '';
  public resultados: any[] = [];
  public verTodo: boolean = true;
  public tipo: string = 'games';

  // Copia de los resultados originales para reiniciar filtros
  private resultadosOriginales: any[] = [];

  // Controles de filtros (checkboxes)
  public filtrarReleased: boolean = false;
  public filtrarMetacritic: boolean = false;
  public filtrarPlaytime: boolean = false;
  public filtrarPlatforms: boolean = false;

  public valorReleased: string = '';     // p. ej.: "2020" o "2020-04"
  public valorMetacritic: string = '';     // p. ej.: "85"
  public valorPlaytime: string = '';       // p. ej.: "10"
  public valorPlatforms: string = '';      // p. ej.: "PC"

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
    if (this.resultados && this.resultados.length > 0) {
      this.resultados.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  filtrosJuegos(): void {
    this.resultados = this.resultadosOriginales.filter(item => {
      let cumple = true;

      // Filtro por released (fecha de lanzamiento)
      if (this.filtrarReleased && this.valorReleased) {
        if (typeof item.released === 'string') {
          cumple = cumple && item.released.toLowerCase().includes(this.valorReleased.toLowerCase());
        } else {
          cumple = false;
        }
      }

      // Filtro por metacritic (puntuación)
      if (this.filtrarMetacritic && this.valorMetacritic) {
        if (typeof item.metacritic === 'number') {
          cumple = cumple && item.metacritic === Number(this.valorMetacritic);
        } else {
          cumple = false;
        }
      }

      // Filtro por playtime (tiempo de juego)
      if (this.filtrarPlaytime && this.valorPlaytime) {
        if (typeof item.playtime === 'number') {
          cumple = cumple && item.playtime === Number(this.valorPlaytime);
        } else {
          cumple = false;
        }
      }

      // Filtro por platforms (array de objetos con 'platform.name')
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
