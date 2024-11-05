import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovimentoPage} from './movimento.page';
import {MovimentoRoutingModule} from './movimento-routing.module';
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {StandardListComponent} from "../../@core/components/standard-list/standard-list.component";
import {MovimentoFormComponents} from "./components/form/movimento-form.components";
import {
  SelecionaTipoMovimentoModalComponent
} from "./components/others/seleciona-tipo-movimento-modal/seleciona-tipo-movimento-modal.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";
import {MovimentoListComponents} from "./components/list/movimento-list.components";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MovimentoRoutingModule,
    StandardHeaderComponent,
    StandardListComponent,
    ReactiveFormsModule,
    StandardSearchbarComponent
  ],
  exports: [
    SelecionaTipoMovimentoModalComponent
  ],
  declarations: [MovimentoPage, MovimentoListComponents, MovimentoFormComponents, SelecionaTipoMovimentoModalComponent]
})
export class MovimentoModule {
}
