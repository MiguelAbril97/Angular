import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ColectorService } from './colector.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  protected logged = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private colector:ColectorService) {
    if (isPlatformBrowser(this.platformId)) {
      this.logged = new BehaviorSubject<boolean>(this.checkSesion());
    }
  }

  inicio(user: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.logged.next(true);
    }
  }

  cerrar(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
      this.logged.next(false);
    }
  }

  getLogged() {
    return this.logged.asObservable();
  }

  getCurrentUser() {
    if (isPlatformBrowser(this.platformId)) {
      let user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  asociarColeccion(){
    let usuario = this.getCurrentUser();
    usuario['coleccion'].value = this.colector.obtenerFavoritos();
  }

  private checkSesion(): boolean {
    return isPlatformBrowser(this.platformId) && localStorage.getItem('currentUser') ? true : false;
  }
}