import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  tito!:Country;
  constructor( 
      private cualquierNombre :ActivatedRoute,
      private servicio        :PaisService
      ) { }

  ngOnInit(): void {
    this.cualquierNombre.params
      .pipe(
        switchMap(  (  {  id  }   )=> this.servicio.getPaisPorAlpha(  id  )),
        tap(console.log)
      )
      .subscribe ( (pais) => this.tito=pais)
  }
}
