import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes=[
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path:'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'**',
        redirectTo: '' //con esas comillas vacías estoy haciendo referencia al primer path
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes) 
        //debemos asegurarnos de haberlo importado de "angular/router"
        //como hasta ahora no tenemos rutas hijas debemos colocar root
        //Le paso por parametro "routes" que es la constante que antes definí
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule{}