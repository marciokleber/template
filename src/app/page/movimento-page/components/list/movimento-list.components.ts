import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {StandardDataSource} from "../../../../@core/standard-data-source";
import {httpParamsAdapter} from "../../../../@core/data-table/http-params-adapter";
import {MovimentoService} from "../../../../service/movimento.service";

@Component({
  selector: 'app-movimento-list',
  templateUrl: 'movimento-list.components.html',
  styleUrls: ['movimento-list.components.scss']
})
export class MovimentoListComponents {

  dataSource!: StandardDataSource;

  constructor(
    private movimentoService: MovimentoService,
    private router: Router
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.movimentoService.findAll(httpParamsAdapter(loadOptions))
    });
    console.log(this.dataSource)
  }

  async novoTipoMovimentacao() {
    await this.router.navigate(['/movimento/form']);
  }

  navigateTo = async (): Promise<void> => {
    await this.router.navigate(["/tabs/preferencia"])
  }
}

