import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StandardListComponent} from "../../@core/components/standard-list/standard-list.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {ItemPage} from "./item.page";
import {ItemPageRoutingModule} from "./item-page-routing.module";
import {ItemForm} from "./form/item.form";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StandardListComponent,
    StandardSearchbarComponent,
    StandardHeaderComponent,
    ReactiveFormsModule,
    ItemPageRoutingModule
  ],
  declarations: [ItemPage,ItemForm]
})
export class ItemPageModule {
}
