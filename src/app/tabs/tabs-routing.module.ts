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
        loadChildren: () => import('../page/tabs/scanner/scanner.module').then(m => m.ScannerPageModule)
      },
      {
        path: 'local',
        loadChildren: () => import('../page/tabs/local/local.module').then(m => m.LocalPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../page/tabs/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../page/tabs/tab3/tab3.module').then(m => m.Tab3PageModule)
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
