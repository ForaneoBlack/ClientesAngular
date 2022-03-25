import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarform',
  templateUrl: './editarform.component.html',
  styleUrls: ['./editarform.component.css']

})
export class EditarformComponent implements OnInit {

  public titulo: string= "Editar Cliente";
  public cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) { }

  
  ngOnInit(): void {
  }

  public editar(cliente: Cliente): void {
    this.clienteService.update(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes/id'])
        Swal.fire('Cliente Modificado', `Cliente ${cliente.id} Modificado con Exito`,'success')
      }
    )
  }


  public cancelar(): void{
    this.router.navigate(['/clientes'])
  }

}
