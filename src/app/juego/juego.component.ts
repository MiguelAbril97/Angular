import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from '../servicios/buscador.service';

@Component({
  selector: 'app-juego',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
  providers: [BuscadorService]
})
export class JuegoComponent implements OnInit {
  juego: any;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private buscadorService: BuscadorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.buscadorService.obtenerJuego(id).subscribe({
        next: (data) => {
          this.juego = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al obtener el juego:', err);
          this.error = 'No se pudo cargar la información del juego.';
          this.loading = false;
        }
      });
    } else {
      this.error = 'No se ha encontrado el juego';
      this.loading = false;
    }
  }
}
