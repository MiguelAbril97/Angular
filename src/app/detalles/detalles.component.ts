import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../servicios/buscador.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
  providers: [BuscadorService, HttpClient],
  
})
export class DetallesComponent {
  public busqueda: string = '';
  public resultados: any[] = [];
  public tipo: string = 'games';

  constructor(private buscadorService: BuscadorService) {}
  
  buscar(): void {
    this.buscadorService.buscar(this.tipo, this.busqueda).subscribe({
      next: (respuesta) => {
        this.resultados = respuesta.results;
        if (!this.resultados || this.resultados.length === 0) {
          alert('No se ha encontrado ningún elemento');
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
