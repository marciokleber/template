import {Component} from '@angular/core';
import {StandardDataSource} from "../../../@core/standard-data-source";
import {LocalsService} from "../../../service/locals.service";
import {httpParamsAdapter} from "../../../@core/data-table/http-params-adapter";


// interface Locals {
//   id: number;
//   idLocal: string;
//   nome: string;
// }

@Component({
  selector: 'app-local',
  templateUrl: 'local.page.html',
  styleUrls: ['local.page.scss']
})
export class LocalPage {

  dataSource!: StandardDataSource;

  constructor(private localsService: LocalsService) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.localsService.findAll(httpParamsAdapter(loadOptions))
    });
  }

}
