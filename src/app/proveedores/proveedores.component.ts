import { Component, OnInit } from '@angular/core';
import { Proveedores } from './proveedores';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit {

  prov: Proveedores[] = [];
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.prov = this.proveedoresService.getProveedores();
  }

}
