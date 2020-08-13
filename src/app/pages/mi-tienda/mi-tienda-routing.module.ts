import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiTiendaPage } from './mi-tienda.page';

const routes: Routes = [
  {
    path: '',
    component: MiTiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiTiendaPageRoutingModule {}
