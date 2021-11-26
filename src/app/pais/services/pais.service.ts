import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string= 'https://restcountries.eu/rest/v2';
  get filtroHttp(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');
  }
  constructor( private httPistola:HttpClient) { }
  
  buscarPaises(termino:string) : Observable<Country[]>{
  const url=`${ this.apiURL }/name/${ termino }`;  
  return this.httPistola.get<Country[]>(url , { params :this.filtroHttp});
  }

  bucarCapital(termino:string)  : Observable<Country[]>{
    const url=`${this.apiURL}/capital/${termino}`;
    return this.httPistola.get<Country[]>(url , { params :this.filtroHttp});
  }

  getPaisPorAlpha( id: string)  : Observable<Country>{
    const url=`${this.apiURL}/alpha/${id}`;
    return this.httPistola.get<Country>(url);
  }

  buscarRegion( region: string)  : Observable<Country[]>{
    const url=`${this.apiURL}/region/${region}`;
    return this.httPistola.get<Country[]>(url , { params :this.filtroHttp});
  }
}
