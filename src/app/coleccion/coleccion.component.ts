import { Component,OnInit } from '@angular/core';
import { SesionService } from '../servicios/sesion.service';
import { ColectorService } from '../servicios/colector.service';

@Component({
  selector: 'app-coleccion',
  imports: [],
  templateUrl: './coleccion.component.html',
  styleUrl: './coleccion.component.css'
})
export class ColeccionComponent {
  
  public mensaje : String = ''; 
  public coleccion : Array <any> = []
  constructor(    
      protected sesionService: SesionService,
      private colectorService: ColectorService
    ) {}

    getColeccion(): void{
      this.coleccion = this.colectorService.obtenerFavoritos();
      if(this.sesionService.getCurrentUser()==null){
        this.mensaje = "Inicie sesion o create una cuenta para añadir juegos aquí"
      }else if(this.coleccion.length < 1){
        this.mensaje = "Añade juegos a favoritos para verlos aquí"
      }
    }

    ngOnInit(): void{
      this.getColeccion();
    }



}
