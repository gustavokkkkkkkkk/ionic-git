import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoombroPage } from './treinoombro.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoombroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoombroPageRoutingModule {}
