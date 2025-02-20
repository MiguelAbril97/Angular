// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = '' 

  constructor(private http: HttpClient) { }

  sendEmail(formData: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}