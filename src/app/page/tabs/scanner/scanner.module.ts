import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerPageRoutingModule } from './scanner-routing.module';

import { ScannerPage } from './scanner.page';
import {StandardListComponent} from "../../../@core/components/standard-list/standard-list.component";
import {StandardSearchbarComponent} from "../../../@core/components/standard-searchbar/standard-searchbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ScannerPageRoutingModule,
        StandardListComponent,
        StandardSearchbarComponent
    ],
  declarations: [ScannerPage]
})
export class ScannerPageModule {}
