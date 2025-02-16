import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  private apiUrl = 'https://api.rawg.io/api/';
  private apiKey = 'dcb80788e8194214a4dc2a576c5869dd';

  constructor(private http: HttpClient) {}

  buscar(tipo: string, query: string): Observable<any> {
    const url = `${this.apiUrl}${encodeURIComponent(tipo)}?key=${this.apiKey}&search=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }
}
