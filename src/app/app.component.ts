import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleado } from './empleado/empleado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Empleado],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola';
}
