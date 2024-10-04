import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreferenciaTab} from './preferencia-tab';

const routes: Routes = [
  {
    path: '',
    component: PreferenciaTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciaTabRoutingModule {
}
