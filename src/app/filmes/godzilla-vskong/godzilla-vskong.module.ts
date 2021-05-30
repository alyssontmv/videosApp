import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodzillaVskongPageRoutingModule } from './godzilla-vskong-routing.module';

import { GodzillaVskongPage } from './godzilla-vskong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodzillaVskongPageRoutingModule
  ],
  declarations: [GodzillaVskongPage]
})
export class GodzillaVskongPageModule {}
