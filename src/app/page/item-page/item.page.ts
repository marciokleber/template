import {Component} from '@angular/core';
import {StandardDataSource} from "../../@core/standard-data-source";
import {LocalsService} from "../../service/locals.service";
import {httpParamsAdapter} from "../../@core/data-table/http-params-adapter";
import {Router} from "@angular/router";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-item-page',
  templateUrl: 'item.page.html',
  styleUrls: ['item.page.scss']
})
export class ItemPage {

  dataSource!: StandardDataSource;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.itemService.findAll(httpParamsAdapter(loadOptions))
    });
    console.log(this.dataSource)
  }

  async novoItem() {
    await this.router.navigate(['/item/form']);
  }

  navigateTo = (): void => {
    this.router.navigate(["/tabs/preferencia"])
  }
}
