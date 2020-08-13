import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaPosts, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  paginaPosts = 0;

  subirProducto = new EventEmitter<Post>();
  nuevaTienda = new EventEmitter<Post>();
  constructor( private http: HttpClient,
    private usuarioService: UsuarioService) { }
  paginasPost = 0;
  getPost(){
    this.paginasPost ++;
    return this.http.get<RespuestaPosts>(`${URL}/posts/?pagina=1`);
  }
  getTiendas(){
    
    return this.http.get<RespuestaPosts>(`${URL}/tienda`);
  }
  subirProductos( post ) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise( resolve => {
      this.http.post(`${ URL }/posts`, post, { headers })
        .subscribe( resp => {
          this.subirProducto.emit( resp['post'] );
          resolve(true);
        });
    });
  }
  crearTienda( post ) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise( resolve => {

      this.http.post(`${ URL }/tienda`, post, { headers })
        .subscribe( resp => {

          this.nuevaTienda.emit( resp['tienda'] );
          resolve(true);
        });
    });
  }


  
}
