import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanhoPage } from './ganho.page';

const routes: Routes = [
  {
    path: '',
    component: GanhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanhoPageRoutingModule {}
