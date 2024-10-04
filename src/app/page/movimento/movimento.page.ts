import {Component} from '@angular/core';
import {StandardDataSource} from "../../@core/standard-data-source";
import {Router} from "@angular/router";
import {httpParamsAdapter} from "../../@core/data-table/http-params-adapter";
import {MovimentoService} from "../../service/movimento.service";

@Component({
  selector: 'app-movimento',
  templateUrl: 'movimento.page.html',
  styleUrls: ['movimento.page.scss']
})
export class MovimentoPage {

  dataSource!: StandardDataSource;

  constructor(
    private movimentoService: MovimentoService,
    private router: Router
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.movimentoService.findAll(httpParamsAdapter(loadOptions))
    });
    console.log(this.dataSource.totalPages)
  }

  async novoTipoMovimentacao() {
    await this.router.navigate(['/movimento/form']);
  }
  navigateTo = async (): Promise<void> => {
    await this.router.navigate(["/tabs/preferencia"])
  }

}
