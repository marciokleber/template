import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PreferenciaTab} from './preferencia-tab';
import {PreferenciaTabRoutingModule} from './preferencia-tab-routing.module';
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";
import {RouterCardComponent} from "./components/router-card/router-card.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PreferenciaTabRoutingModule,
    StandardHeaderComponent,
    StandardSearchbarComponent,
    RouterCardComponent
  ],
  declarations: [PreferenciaTab]
})
export class PreferenciaTabModule {
}
