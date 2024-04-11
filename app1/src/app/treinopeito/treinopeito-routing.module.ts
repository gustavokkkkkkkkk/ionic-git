import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinopeitoPage } from './treinopeito.page';

const routes: Routes = [
  {
    path: '',
    component: TreinopeitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinopeitoPageRoutingModule {}
