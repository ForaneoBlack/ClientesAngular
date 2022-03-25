import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import {Observable, of} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import { identifierName } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string= 'http://localhost:8080/api/clientes/clientes';
  private urlEndPoint2:string= 'http://localhost:8080/api/clientes/clientes/{id}';
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  constructor(private http: HttpClient) { }


  getClientes(): Observable<Cliente[]>  {
   // return of (clientes);

   return this.http.get<Cliente[]>(this.urlEndPoint);
    map(response => response as Cliente[])
  }


  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

 
  getCliente(id:number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }
  //actualizar
  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.urlEndPoint, cliente)
  }

  //eliminar
  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.urlEndPoint+'/'+id)
  }


}
