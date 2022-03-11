import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent  {

  listaCurso: string[] = ['TypeScript','JavaScript','Java SE','C#','PHP'];
  listaTemasTS: string[] = ['El manual de TypeScript','Los basicos','Tipos de Objetos'];
  listaTemasJS: string[] = ['Comprendiendo los frameworks JavaScript del lado del cliente','Estructura de datos en JavaScript'];
  listaTemasC: string[] = ['Creacion de un proyecto','Errores Sintacticos y Logicos'];
  constructor() { }
  habilitar: boolean = true;
setHabilitar(): void {
  this.habilitar = (this.habilitar == true)? false: true; 
}
}
