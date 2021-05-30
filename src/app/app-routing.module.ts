import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'sem-remorso',
    loadChildren: () => import('./filmes/sem-remorso/sem-remorso.module').then( m => m.SemRemorsoPageModule)
  },
  {
    path: 'os-vingadores',
    loadChildren: () => import('./filmes/os-vingadores/os-vingadores.module').then( m => m.OsVingadoresPageModule)
  },
  {
    path: 'godzilla-vskong',
    loadChildren: () => import('./filmes/godzilla-vskong/godzilla-vskong.module').then( m => m.GodzillaVskongPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
