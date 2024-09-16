import {Component} from '@angular/core';
import {LocalsService} from "../service/locals.service";
import {HttpParams} from "@angular/common/http";
import {Local} from "./local";
import {take} from "rxjs/operators";
import {InfiniteScrollCustomEvent} from "@ionic/angular";
import {LoadOptions} from "../@core/data-table/load-options";
import {httpParamsAdapter} from "../@core/data-table/http-params-adapter";
import {StandardDataSource} from "../@core/standard-data-source";

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
