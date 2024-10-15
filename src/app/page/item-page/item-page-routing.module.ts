import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemPage} from "./item.page";
import {ItemFormComponents} from "./components/form/item-form.components";
import {ItemListComponents} from "./components/list/item-list.components";

const routes: Routes = [
  {
    path: '',
    component:ItemListComponents,
  },
  {
    path: 'form',
    component: ItemFormComponents,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemPageRoutingModule {
}
