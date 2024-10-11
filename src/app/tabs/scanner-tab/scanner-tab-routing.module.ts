import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ScannerTab} from './scanner-tab';

const routes: Routes = [
  {
    path: '',
    component: ScannerTab
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerTabRoutingModule {
}
