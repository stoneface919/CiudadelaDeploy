import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';
import {  Tienda } from '../../interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/interfaces';

declare var window: any;
@Component({
  selector: 'app-mi-tienda',
  templateUrl: './mi-tienda.page.html',
  styleUrls: ['./mi-tienda.page.scss'],
})
export class MiTiendaPage implements OnInit {
  VerificarTienda=true;
  post: Post[]=[];
  tienda: Tienda = {
    nombreTienda: '',
    usuario: '',
    descripcion: '',
    calificaciones: 0,
    codigoPostal: null,
    NoExterior: null,
    NoInterior: null,
    colonia: '',
    calle: '',
    municipio: '',
    estado: '',
    etiquetas: '',
  };
  
  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService, private postService: PostsService ) { }

    ngOnInit() {
      this.postService.getTiendas().subscribe(resp =>{
        console.log(resp);
        if ( resp['ok'] ) {
         this.VerificarTienda=true;
        } else {
         this.VerificarTienda=false;
        }
      });
    }
  async crearTienda( fTienda: NgForm ) {

    if ( fTienda.invalid ) { return; }

    const valido = await this.usuarioService.crearTienda( this.tienda );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/mi-tienda', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ya existe esa tienda.');
    }


  }
  

}
