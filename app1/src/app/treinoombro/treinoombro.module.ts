import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoombroPageRoutingModule } from './treinoombro-routing.module';

import { TreinoombroPage } from './treinoombro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoombroPageRoutingModule
  ],
  declarations: [TreinoombroPage]
})
export class TreinoombroPageModule {}
