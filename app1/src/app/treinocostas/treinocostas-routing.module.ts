import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinocostasPage } from './treinocostas.page';

const routes: Routes = [
  {
    path: '',
    component: TreinocostasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinocostasPageRoutingModule {}
