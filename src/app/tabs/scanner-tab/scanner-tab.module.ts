import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ScannerTabRoutingModule} from './scanner-tab-routing.module';

import {ScannerTab} from './scanner-tab';
import {StandardListComponent} from "../../@core/components/standard-list/standard-list.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {IonButtons, IonMenuButton} from "@ionic/angular/standalone";
import {LocalPageModule} from "../../page/local-page/local.module";
import {MovimentoModule} from "../../page/movimento-page/movimento.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerTabRoutingModule,
    StandardListComponent,
    StandardSearchbarComponent,
    StandardHeaderComponent,
    IonButtons,
    IonMenuButton,
    LocalPageModule,
    MovimentoModule

  ],
  declarations: [ScannerTab]
})
export class ScannerTabModule {
}
