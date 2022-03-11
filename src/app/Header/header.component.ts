
import { Component } from "@angular/core";
import { clientes } from "../clientes/clientes.json";

@Component({
    selector: 'app-header',
    template: 
    `<nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid" id="header">
      <a class="navbar-brand" href="#">{{title}}</a>
   
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link clientes" href="/clientes">{{nCliente}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link proveedores" href="/proveedores">{{nProveedores}}</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`
}
)

export class HeaderComponent {
    title:string = 'Foraneo Black';
    nCliente = 'Cliente';
    nProveedores = 'Proveedores';
    
}

