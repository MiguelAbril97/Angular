import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { EmailService } from '../servicios/email.service';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public nombre: string = '';
  public email: string = '';
  public mensaje: string = '';
  
 
  public loading: boolean = false;
  public info: string = '';

  constructor(private emailService: EmailService) {}

  enviarEmail(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.loading = true;
    const formData = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };

    this.emailService.sendEmail(formData)
      .then((response: any) => {
        console.log('Email enviado correctamente:', response);
        this.info = '¡Tu mensaje se ha enviado correctamente!';
        form.reset();
      })
      .catch((error: any) => {
        console.error('Error al enviar el email:', error);
        this.info = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
