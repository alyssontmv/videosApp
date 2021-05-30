import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsVingadoresPageRoutingModule } from './os-vingadores-routing.module';

import { OsVingadoresPage } from './os-vingadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsVingadoresPageRoutingModule
  ],
  declarations: [OsVingadoresPage]
})
export class OsVingadoresPageModule {}
