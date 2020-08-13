import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private usuarioService: UsuarioService, private postsService: PostsService ) { 
    
  }

  ngOnInit() {
  }
  logout() {

    this.postsService.paginaPosts = 0;
    this.usuarioService.logout();

  }
}
