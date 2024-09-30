import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovimentoPage } from './movimento.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

import { MovimentoRoutingModule } from './movimento-routing.module';
import {StandardHeaderComponent} from "../../../@core/components/standard-header/standard-header.component";
import {StandardListComponent} from "../../../@core/components/standard-list/standard-list.component";
import {MovimentoForm} from "./form/movimento.form";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MovimentoRoutingModule,
    StandardHeaderComponent,
    StandardListComponent,
    ReactiveFormsModule
  ],
  declarations: [MovimentoPage,MovimentoForm]
})
export class MovimentoModule {}
