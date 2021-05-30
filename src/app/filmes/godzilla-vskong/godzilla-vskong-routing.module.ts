import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodzillaVskongPage } from './godzilla-vskong.page';

const routes: Routes = [
  {
    path: '',
    component: GodzillaVskongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodzillaVskongPageRoutingModule {}
