import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanhoPageRoutingModule } from './ganho-routing.module';

import { GanhoPage } from './ganho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanhoPageRoutingModule
  ],
  declarations: [GanhoPage]
})
export class GanhoPageModule {}
