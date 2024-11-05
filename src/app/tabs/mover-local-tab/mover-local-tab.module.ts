import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MoverLocalTabRoutingModule} from './mover-local-tab-routing.module';

import {MoverLocalTab} from './mover-local-tab';
import {StandardListComponent} from "../../@core/components/standard-list/standard-list.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {IonButtons, IonMenuButton} from "@ionic/angular/standalone";
import {LocalPageModule} from "../../page/local/local.module";
import {MovimentoModule} from "../../page/movimento-page/movimento.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoverLocalTabRoutingModule,
    StandardListComponent,
    StandardSearchbarComponent,
    StandardHeaderComponent,
    IonButtons,
    IonMenuButton,
    LocalPageModule,
    MovimentoModule

  ],
  declarations: [MoverLocalTab]
})
export class MoverLocalTabModule {
}
