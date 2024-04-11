import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinopeitoPageRoutingModule } from './treinopeito-routing.module';

import { TreinopeitoPage } from './treinopeito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinopeitoPageRoutingModule
  ],
  declarations: [TreinopeitoPage]
})
export class TreinopeitoPageModule {}
