import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { SesionService } from '../servicios/sesion.service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule,RouterLink],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public nombre: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  
  public loading: boolean = false;
  public mensaje: string = '';

  constructor(private router: Router,
    private sesionService: SesionService
  ) {}
//Creo el array de usuarios para poder registrar varios. Asi tambien puedo hacer 
// varios arrays con playlist y almacenarlas dentro de los usuarios simulando
// una base de datos
  registrarUsuario(form: NgForm): void {
    if (form.invalid) {
      this.mensaje = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    this.loading = true;
    
    let usuariosGuardados = localStorage.getItem('usuarios') || '[]';
    let usuarios = [];
    
    usuarios = [...JSON.parse(usuariosGuardados)];
    
    //Si ussuarios tiene al menos 1 elemento lo valida, 
    if(usuarios.length > 0){
      let comprobarEmails = usuarios.find((e) => e.email === this.email);
      
      if (comprobarEmails) {
        this.mensaje = 'El email ya se encuentra registrado.';
        this.loading = false;
        return;
      }
    }
    
    let usuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };
    
    usuarios.push(usuario);
 
    // El JSON.stringify convierte el objeto a un JSON string
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    //La sesion pasa a ser la del uusario registrado
    this.sesionService.inicio(usuario);

    this.mensaje = 'Usuario registrado';
    form.resetForm();
    
    this.loading = false;
    this.nombre = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);

  }
  
}
