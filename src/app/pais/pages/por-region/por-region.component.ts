import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [` /*son BACKTICKS */
    button{margin-right:5px;}`
  ]
})
export class PorRegionComponent{
  regiones          :string[]=[ "africa", "americas", "asia", "europe", "oceania"]
  regionSeleccionada: string="";
  paises:Country[]=[];

  getClase(region:string):string{
    return(region===this.regionSeleccionada) 
          ? 'btn btn-primary'
          : 'btn btn-outline-primary';
  }
  constructor( private servicio:PaisService) { }
  activarRegion(region:string){
    if(region===this.regionSeleccionada){
      return; 
      /*esto es para no recargar la pantalla cuando el usuario
      consulta nuevamente la misma region*/
    }
    this.regionSeleccionada=region;
    this.paises=[]; /*esto se hace 
    para purgar el arreglo de paises sino
     puede que se vayan sumando los paises de distintas consultas*/
    this.servicio.buscarRegion(region)
        .subscribe(res=>{
          this.paises=res
        })
  }
}
