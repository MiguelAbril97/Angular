import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../servicios/buscador.service';

@Component({
  selector: 'app-desarrollador',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css'],
  providers: [BuscadorService]
})
export class DesarrolladorComponent implements OnInit {
  desarrollador: any;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private buscadorService: BuscadorService
  ) {}

  ngOnInit(): void {
    // Tutorial de como pillo el parametro
    // https://medium.com/@yonem9/angular-c%C3%B3mo-se-pasan-datos-entre-urls-1a9ec5d779ea
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.buscadorService.obtenerDesarrollador(id).subscribe({
        next: (data) => {
          this.desarrollador = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al obtener desarrollador:', err);
          this.error = 'No se pudo cargar la información del desarrollador.';
          this.loading = false;
        }
      });
    } else {
      this.error = 'No se ha encontrado el id';
      this.loading = false;
    }
  }
}
