import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nombre:any = ""
  public cif:any = ""
  public direccion:any = ""
  public grupo:any = ""

  dato:any[] = []
  datos:any[][] = []

  constructor() { this.datos = [] }

  ngOnInit(): void {
  }

  guardarDatos(nombre:any, cif:any, direccion:any, grupo:any){
    this.nombre = nombre
    this.dato.push(this.nombre)
    this.cif = cif
    this.dato.push(this.cif)
    this.direccion = direccion
    this.dato.push(this.direccion)
    this.grupo = grupo
    this.dato.push(this.grupo)

    this.datos.push(this.dato)

    this.dato = []
  }

}
