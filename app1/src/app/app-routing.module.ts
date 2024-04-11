import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'treinopeito',
    loadChildren: () => import('./treinopeito/treinopeito.module').then( m => m.TreinopeitoPageModule)
  },
  {
    path: 'treinocostas',
    loadChildren: () => import('./treinocostas/treinocostas.module').then( m => m.TreinocostasPageModule)
  },
  {
    path: 'treinoombro',
    loadChildren: () => import('./treinoombro/treinoombro.module').then( m => m.TreinoombroPageModule)
  },
  {
    path: 'treino',
    loadChildren: () => import('./treino/treino.module').then( m => m.TreinoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
