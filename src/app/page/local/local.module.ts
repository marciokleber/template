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
  declarations: [LocalPage, LocalForm]
})
export class LocalPageModule {
}
