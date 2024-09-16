import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LocalPage} from './local.page';

import {LocalPageRoutingModule} from './local-routing.module';
import {StandardListComponent} from "../../../@core/components/standard-list/standard-list.component";
import {ExploreContainerComponentModule} from "../../../explore-container/explore-container.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        LocalPageRoutingModule,
        StandardListComponent
    ],
  declarations: [LocalPage]
})
export class LocalPageModule {
}
