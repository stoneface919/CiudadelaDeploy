import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
post: Post[]=[];
  constructor(public actionSheetController: ActionSheetController, private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(resp =>{
      console.log(resp);
      this.post.push(...resp.posts)
    });
  }
  articulo: { nombre: string, link:string, img:string, precio:number}[] = [
    {
      
      nombre: 'Nombre del producto ',
      link: '/producto',
      img: '../../../assets/img/pc-gamer.png',
      precio: 62425
    },
    {
      
      nombre: 'Oferta ',
      link: '/producto',
      img: '../../../assets/img/2.jpg',
      precio: 62425
    }

  ];
  visitado: {  nombre: string,  link:string, img:string, precio: number}[] = [
    {
      
      nombre: 'Visto recientemente',
      link: '/producto',
      img: '../../../assets/img/2.jpg',
      precio: 62425
    },
    {
      nombre: 'Visto recientemente',
      link: '/producto',
      img: '../../../assets/img/pc-gamer.png',
      precio: 62425
    }
  ];
}
