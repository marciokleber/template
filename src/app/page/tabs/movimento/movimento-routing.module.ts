import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovimentoPage} from './movimento.page';
import {MovimentoForm} from "./form/movimento.form";

const routes: Routes = [
  {
    path: '',
    component: MovimentoPage,
  },
  {
    path: 'form',
    component: MovimentoForm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentoRoutingModule {
}
