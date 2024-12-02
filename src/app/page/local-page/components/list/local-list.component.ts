import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LocalsService} from "../../../../service/locals.service";
import {StandardDataSource} from "../../../../@core/standard-data-source";
import {httpParamsAdapter} from "../../../../@core/data-table/http-params-adapter";

@Component({
  selector: 'app-local-list',
  templateUrl: 'local-list.component.html',
  styleUrls: ['local-list.component.scss']
})
export class LocalListComponent {
  dataSource!: StandardDataSource;

  constructor(
    private localsService: LocalsService,
    private router: Router
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.localsService.findAll(httpParamsAdapter(loadOptions))
    });

  }

  async novoLocal() {
    await this.router.navigate(['/local/form']);
  }

  navigateTo = (): void => {
    this.router.navigate(["/tabs/preferencia"])
  }

}
