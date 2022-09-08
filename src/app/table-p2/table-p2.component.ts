import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-p2',
  templateUrl: './table-p2.component.html',
  styleUrls: ['./table-p2.component.css']
})
export class TableP2Component implements OnInit {

  @Input() datos:any[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
