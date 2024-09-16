import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocalPage} from './local.page';

const routes: Routes = [
  {
    path: '',
    component: LocalPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalPageRoutingModule {
}
