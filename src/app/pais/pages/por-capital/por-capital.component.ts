import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino :string="";
  hayError:boolean=false;
  paises  :Country[]=[];
  constructor( private paisService:PaisService) { }
  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;  //cambio
    this.paisService.bucarCapital(termino) //cambio
      .subscribe((paises)=>{
        console.log(paises)
        this.paises=paises;
      }, (error:any)=>{
        this.hayError=true;
        console.log('El pais no existe en la base de datos');
        console.info(error);
        this.paises=[];
      })
  }
  sugerencia(termino:string){
    this.hayError=false;
    //To Do: agregar sugerencias
  }

  
  

}
