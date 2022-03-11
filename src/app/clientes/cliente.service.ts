import { Injectable } from '@angular/core';
import { clientes } from './clientes.json'
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Cliente[] {
    return clientes;
  }
}
