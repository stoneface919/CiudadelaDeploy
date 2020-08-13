import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list: {  estado: string,  link:string, img:string, total: number}[] = [
    {
      
      estado: 'En aprobación',
      link: '',
      img: '../../../assets/img/2.jpg',
      total: 62425
    },
    {
      estado: 'En camino',
      link: '',
      img: '../../../assets/img/pc-gamer.png',
      total: 62425
    }
  ];
}
