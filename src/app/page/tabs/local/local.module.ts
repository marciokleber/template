import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ExploreContainerComponentModule} from '../../../explore-container/explore-container.module';

import {LocalPageRoutingModule} from './local-routing.module';
import {LocalPage} from "./local.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LocalPageRoutingModule
  ],
  declarations: [LocalPage]
})
export class LocalPageModule {
}
