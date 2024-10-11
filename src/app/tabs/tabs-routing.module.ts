import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'scanner',
        loadChildren: () => import('../tabs/scanner-tab/scanner-tab.module').then(m => m.ScannerTabModule)
      },
      {
        path: 'preferencia',
        loadChildren: () => import('../tabs/preferencia-tab/preferencia-tab.module').then(m => m.PreferenciaTabModule)
      },
      {
        path: 'mover-local',
        loadChildren: () => import('../tabs/mover-local-tab/mover-local-tab.module').then(m => m.MoverLocalTabModule)
      },
      {
        path: '',
        redirectTo: '/tabs/local',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/local',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
