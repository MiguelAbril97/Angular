import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  public url:string='';

  constructor(public http: HttpClient) { 
    this.url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q='
  }

  buscar(query: string): Observable<any> {
    const songs = `${this.url}${query}`;
    return this.http.get(songs);
  }
}