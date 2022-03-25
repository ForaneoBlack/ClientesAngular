import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import { clientes } from './clientes.json';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})


export class FormComponent implements OnInit {


  public cliente: Cliente = new Cliente()
  public titulo: string ="Crear Cliente"



  constructor(private clienteService: ClienteService, private router:Router, private activatedRouter:ActivatedRoute){ }

  ngOnInit(): void {
  this.cargar();

  }
  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Guardado', `Cliente ${cliente.nombre} Guardado con Exito`,'success')
      }
    )
  }
  
  cargar():void{
    this.activatedRouter.params.subscribe(params=>{
        let id= params['id'];
        if(id){
          this.clienteService.getCliente(id).subscribe(
            cliente => this.cliente= cliente
          );
        }
      }
    )  
    }

    update():void{
      this.clienteService.update(this.cliente).subscribe(
        response => this.router.navigate(['./clientes'])
      )
    }

  public cancelar(): void{
    this.router.navigate(['/clientes'])
  }
}
