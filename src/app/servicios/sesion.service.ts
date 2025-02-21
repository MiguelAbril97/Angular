import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private logged  = new BehaviorSubject <boolean>(this.checkSesion());

  constructor() { }

  inicio(user : any):void{
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.logged.next(true);
  }

  cerrar():void{
    localStorage.removeItem('currentUser');
    this.logged.next(false);
  }

  getLogged(){
    return this.logged.asObservable();
  }

  getCurrentUser() {
    let user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  private checkSesion(): boolean{
    return localStorage.getItem('currentUser') ? true : false;
  }

}
