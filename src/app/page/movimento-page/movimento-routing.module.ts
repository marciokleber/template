import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovimentoPage} from './movimento.page';
import {MovimentoFormComponents} from "./components/form/movimento-form.components";
import {MovimentoListComponents} from "./components/list/movimento-list.components";

const routes: Routes = [
  {
    path: '',
    component: MovimentoListComponents
  },
  {
    path: 'form',
    component: MovimentoFormComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentoRoutingModule {
}
