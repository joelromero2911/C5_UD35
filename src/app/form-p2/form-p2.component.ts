import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-p2',
  templateUrl: './form-p2.component.html',
  styleUrls: ['./form-p2.component.css']
})
export class FormP2Component implements OnInit {

  public nombre:any = ""
  public email:any = ""
  public mensaje:any = ""
  public suma:any = ""

  dato:any[] = []
  datos:any[][] = []

  constructor() { this.datos = [] }

  ngOnInit(): void {
  }

  guardarDatos(nombre:any, email:any, mensaje:any, suma:any){
    this.nombre = nombre
    this.dato.push(this.nombre)
    this.email = email
    this.dato.push(this.email)
    this.mensaje = mensaje
    this.dato.push(this.mensaje)
    this.suma = suma
    this.dato.push(this.suma)

    this.datos.push(this.dato)

    this.dato = []
  }
}
