import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { SesionService } from '../servicios/sesion.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';
  public loading: boolean = false;
  public mensaje: string = '';

  constructor(private router: Router,    
    private sesionService: SesionService
  ) {}

  login(form: NgForm): void {
    
    if (form.invalid) {
      this.mensaje = 'Por favor, complete todos los campos correctamente.';
      return;
    }
    
    this.loading = true;
    
    let usuariosGuardados = localStorage.getItem('usuarios') || '[]';
    let usuarios = [];
    
    usuarios = [...JSON.parse(usuariosGuardados)];

    let usuario = usuarios.filter((e) => e.email === this.email && 
    e.password === this.password);

    if (usuario.length === 0) {
      this.mensaje = 'El email o la contraseña son incorrectos';
      this.loading = false;
      return;
    }else{
      this.sesionService.inicio(usuario);
      this.router.navigate(['']);
    }
    this.email = '';
    this.password = '';
    this.loading = false;
  }
}
