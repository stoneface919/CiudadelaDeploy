import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categorias:  { nombre: string, link:string}[] = [
    {
    nombre: 'Electronica',
    link: ''
  },
  {
    nombre: 'Hogar y cocina',
    link: ''
  },
  {
    nombre: 'Computación',
    link: ''
  },
  {
    nombre: 'Hecho a mano',
    link: ''
  },
  {
    nombre: 'Ropa, Zapatos y Accesorios',
    link: ''
  },
  {
    nombre: 'Deporte ',
    link: ''
  },
  {
    nombre: 'Jugueteria',
    link: ''
  },
  {
    nombre: 'Mascotas',
    link: ''
  },
  {
    nombre: 'Oficina',
    link: ''
  },
  {
    nombre: 'Servicios',
    link: ''
  },
  {
    nombre: 'Software',
    link: ''
  },
  {
    nombre: 'Videojuegos',
    link: ''
  }
];
}
