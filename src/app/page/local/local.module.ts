import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocalPage} from './local.page';
import {LocalPageRoutingModule} from "./local-routing.module";
import {StandardListComponent} from "../../@core/components/standard-list/standard-list.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";
import {LocalForm} from "./form/local.form";
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {SelecionaLocalModalComponent} from "./components/seleciona-local-modal/seleciona-local-modal.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LocalPageRoutingModule,
    StandardListComponent,
    StandardSearchbarComponent,
    StandardHeaderComponent,
    ReactiveFormsModule,
  ],
  exports: [
    SelecionaLocalModalComponent
  ],
  declarations: [LocalPage, LocalForm, SelecionaLocalModalComponent]
})
export class LocalPageModule {
}
