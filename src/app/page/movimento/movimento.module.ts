import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovimentoPage} from './movimento.page';
import {MovimentoRoutingModule} from './movimento-routing.module';
import {StandardHeaderComponent} from "../../@core/components/standard-header/standard-header.component";
import {StandardListComponent} from "../../@core/components/standard-list/standard-list.component";
import {MovimentoForm} from "./form/movimento.form";
import {
  SelecionaTipoMovimentoModalComponent
} from "./components/seleciona-tipo-movimento-modal/seleciona-tipo-movimento-modal.component";
import {StandardSearchbarComponent} from "../../@core/components/standard-searchbar/standard-searchbar.component";

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
  declarations: [MovimentoPage, MovimentoForm, SelecionaTipoMovimentoModalComponent]
})
export class MovimentoModule {
}
