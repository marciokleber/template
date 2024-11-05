import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocalPage} from './local.page';
import {LocalFormComponent} from "./components/form/local-form.component";
import {LocalListComponent} from "./components/list/local-list.component";
import {ItemListComponents} from "../item-page/components/list/item-list.components";
import {ItemFormComponents} from "../item-page/components/form/item-form.components";

const routes: Routes = [
  {
    path: '',
    component:LocalListComponent,
  },
  {
    path: 'form',
    component: LocalFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalPageRoutingModule {
}
