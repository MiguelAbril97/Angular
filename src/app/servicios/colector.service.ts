import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColectorService {

  protected favoritosIds = new BehaviorSubject<number[]>([]);
  
  public favoritosIds$ = this.favoritosIds.asObservable();

  constructor() {}

  esFavorito(id: number): boolean {
    return this.favoritosIds.value.includes(id);
  }
  
  agregarFavorito(id: number): void {
    
    if (!this.esFavorito(id)) {

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


  obtenerFavoritos(): number[] {
    return this.favoritosIds.value;
  }

}