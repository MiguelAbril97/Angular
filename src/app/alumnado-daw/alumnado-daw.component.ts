import { Component } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumnado-daw',
  imports: [],
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {
  public alumnosPrimero:Array<Alumno>;
  public alumnosSegundo:Array<Alumno>;
  public verSegundo:boolean;
  constructor(){
    this.verSegundo=true;
    this.alumnosPrimero = [
      new Alumno("12345678A", "Juan Pérez", new Date(2004, 5, 15), "Madrid", 612345678, 1, 
      ["Programación", "Bases de Datos"]),
     
      new Alumno("23456789B", "Ana Gómez", new Date(2003, 8, 22), "Barcelona", 623456789, 1, 
      ["Lenguaje de Marcas", "Sistemas Informáticos"])
    ];

    this.alumnosSegundo = [
      new Alumno("34567890C", "Carlos López", new Date(2002, 3, 10), "Valencia", 634567890, 2, 
      ["Desarrollo Web", "Desarrollo Servidor"]),
      new Alumno("45678901D", "María Sánchez", new Date(2001, 11, 5), "Sevilla", 645678901, 2, 
      ["Interfaces", "Despliege"])
    ];
  }

}
