import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemPage} from "./item.page";
import {ItemForm} from "./form/item.form";

const routes: Routes = [
  {
    path: '',
    component: ItemPage,
  },
  {
    path: 'form',
    component: ItemForm,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemPageRoutingModule {
}
