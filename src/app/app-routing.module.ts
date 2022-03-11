import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  
  { path: 'clientes', component: ClientesComponent },
  { path: 'proveedores', component: ProveedoresComponent}
];



@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }