
export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: Post[];
  }
  
  export interface Post {
    imgs?: string[];
    _id?: string;
    nombreProducto?: string;
    precio?: number;
    descripcion?: string;
    oferta?:string;
    caracteristicas?: string[];
    etiquetas?: string[];
    calificaciones?: number;
    coords?: string;
    usuario?: Usuario;
    created?: string;
    
  }
  
  export interface Usuario {
    _id?: string;
    nombre?: string;
    apellidos?: string;
    email?: string;
    password?: string;
    edad?: string;
    municipio?: string;
    estado?: string;
    codigoPostal?: number,
    NoExterior?: number,
    NoInterior?: number,
    colonia?: string,
    calle?: string,
  }
  
  export interface Tienda {
    _id?: string;
    created?: Date;
    nombreTienda?: string;
    usuario?: string;
    descripcion?: string;
    calificaciones?: number;
    municipio?: string;
    estado?: string;
    etiquetas?: string;
    codigoPostal?: number,
    NoExterior?: number,
    NoInterior?: number,
    colonia?: string,
    calle?: string,

  }
  