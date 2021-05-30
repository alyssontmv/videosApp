import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsVingadoresPage } from './os-vingadores.page';

const routes: Routes = [
  {
    path: '',
    component: OsVingadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsVingadoresPageRoutingModule {}
