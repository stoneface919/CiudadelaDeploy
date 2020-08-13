import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.scss'],
})
export class ListCategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() categorias:  { nombre: string, link:string, }[];
}
