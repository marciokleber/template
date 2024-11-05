import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./page/local-page/local.module').then(m => m.LocalPageModule)
  },
  {
    // Tipo de movimento
    path: 'movimento',
    loadChildren: () => import('./page/movimento-page/movimento.module').then(m => m.MovimentoModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./page/item-page/item-page.module').then(m => m.ItemPageModule)
  },
  {
    path: 'mover-local',
    loadChildren: () => import('./tabs/mover-local-tab/mover-local-tab.module').then(m => m.MoverLocalTabModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
