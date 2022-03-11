import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresService } from './proveedores/proveedores.service';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ClienteService,ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
