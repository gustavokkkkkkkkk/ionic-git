import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinocostasPageRoutingModule } from './treinocostas-routing.module';

import { TreinocostasPage } from './treinocostas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinocostasPageRoutingModule
  ],
  declarations: [TreinocostasPage]
})
export class TreinocostasPageModule {}
