import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocalPage} from './local.page';
import {LocalForm} from "./form/local.form";

const routes: Routes = [
  {
    path: '',
    component: LocalPage,
  },
  {
    path: 'form',
    component:LocalForm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalPageRoutingModule {
}
