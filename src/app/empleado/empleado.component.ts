import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',

})
export class EmpleadoComponent {
  public title = "Bienvenido Empleado";
  public empleadoExt:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajadorExterno:boolean;
  constructor(){
    this.empleadoExt = new Empleado ("Pedro",47,true);
    this.trabajadores = [
      new Empleado('Marta',30,true),
      new Empleado('Luis',29,true),
      new Empleado('Maria',45,false),
    ]
    this.trabajadorExterno=true;
  }

  ngOnInit(){
    console.log(this.empleadoExt);
  
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }

  anyadirEmpleado(objeto:Empleado){
    this.trabajadores.push(objeto);
  }
}
