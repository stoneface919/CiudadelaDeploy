import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListCategoriasComponent } from './list-categorias/list-categorias.component';
import { PopoverComponent } from './popover/popover.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { AltaTiendaComponent } from './alta-tienda/alta-tienda.component';



@NgModule({
  declarations: [
    EtiquetasComponent,
    SlidesComponent,
    HeaderComponent,
    CarrucelComponent,
    ToolbarComponent,
    ListCategoriasComponent,
    PopoverComponent,
    CardProductoComponent,
    AltaTiendaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[
    EtiquetasComponent,
    SlidesComponent,
    HeaderComponent,
    CarrucelComponent,
    ToolbarComponent, 
    ListCategoriasComponent,
    PopoverComponent,
    CardProductoComponent,
    AltaTiendaComponent
  ]
})
export class ComponentsModule { }
