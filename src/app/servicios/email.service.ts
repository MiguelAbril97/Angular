import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private serviceID: string = 'Angularapp';
  private templateID: string = 'template_xuwqrv2';
  private userID: string = 'yjaoy8xlFIL1aKy4z'; // La API key publica

  constructor() {
    emailjs.init(this.userID);
  }

  /**
   * Envía un correo utilizando EmailJS.
   * @param formData Objeto con los datos del formulario.
   * deben coincidir con los campos del template que tenga en EmailJS
   * 
   */
  public sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, formData)
      .then((response: EmailJSResponseStatus) => {
        console.log('Correo enviado exitosamente', response.status, response.text);
        return response;
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
        throw error;
      });
  }
}
