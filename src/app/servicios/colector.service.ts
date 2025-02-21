import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColectorService {

  protected favoritosIds = new BehaviorSubject<number[]>([]);
  
  public favoritosIds$ = this.favoritosIds.asObservable();

  constructor() {}

  agregarFavorito(id: number): void {
    
    if (!this.favoritosIds.value.includes(id)) {

      let nuevosFavoritos = [...this.favoritosIds.value, id];

      this.favoritosIds.next(nuevosFavoritos);
    }
  }

  eliminarFavorito(id: number): void {

    let nuevosFavoritos = this.favoritosIds.value.filter(
      favoritoId => favoritoId !== id
    );
    this.favoritosIds.next(nuevosFavoritos);
  }

  esFavorito(id: number): boolean {
    return this.favoritosIds.value.includes(id);
  }

  obtenerFavoritos(): number[] {
    return this.favoritosIds.value;
  }
}