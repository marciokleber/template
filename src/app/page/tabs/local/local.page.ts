import {Component} from '@angular/core';
import {StandardDataSource} from "../../../@core/standard-data-source";
import {LocalsService} from "../../../service/locals.service";
import {httpParamsAdapter} from "../../../@core/data-table/http-params-adapter";
import {Router} from "@angular/router";

@Component({
  selector: 'app-local',
  templateUrl: 'local.page.html',
  styleUrls: ['local.page.scss']
})
export class LocalPage {

  dataSource!: StandardDataSource;

  constructor(
    private localsService: LocalsService,
    private router: Router
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.localsService.findAll(httpParamsAdapter(loadOptions))
    });
    console.log(this.dataSource.totalPages)
  }

  novoLocal() {
    this.router.navigate(['tabs/local/form'])
  }
}
