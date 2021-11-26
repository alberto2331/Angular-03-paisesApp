import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent{
  termino :string="";
  hayError:boolean=false;
  paises  :Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerenicas:boolean=false;
  constructor( private paisService:PaisService) { }
  buscar(termino:string){
    this.hayError=false;
    this.mostrarSugerenicas=false;
    this.termino=termino;  //cambio
    this.paisService.buscarPaises(termino) //cambio
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
    this.mostrarSugerenicas=true;
    this.hayError=false;
    this.termino=termino;
    //To Do: agregar sugerencias:
    this.paisService.buscarPaises(termino)
      .subscribe(pais=> this.paisesSugeridos=pais.splice(0,5),
      (err)=>this.paisesSugeridos=[],      
      )
  }

  buscarSugerido(termino:string){
    this.buscar(termino); 

  }
}
