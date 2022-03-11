import { Injectable } from '@angular/core';
import { Proveedores } from './proveedores';
import { proveedores } from './proveedores.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  getProveedores(): Proveedores[] {
    return proveedores
  }
}
