import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  articulo: { icon: string, titulo: string, desc: string, link:string, img:string}[] = [
    {
      
      icon: 'cart',
      titulo: 'Ofertas del dia',
      desc: 'Nombre del producto',
      link: '',
      img: '../../../assets/img/pc-gamer.png'
    },
    {
      
      icon: 'cart',
      titulo: 'Ofertas del dia',
      desc: 'Nombre del producto',
      link: '',
      img: '../../../assets/img/pc-gamer.png'
    }

  ];
}
