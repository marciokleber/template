import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoverLocalTab} from './mover-local-tab';

const routes: Routes = [
  {
    path: '',
    component: MoverLocalTab
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoverLocalTabRoutingModule {
}
