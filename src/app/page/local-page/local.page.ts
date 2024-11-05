import {Component} from '@angular/core';
import {StandardDataSource} from "../../@core/standard-data-source";
import {LocalsService} from "../../service/locals.service";
import {httpParamsAdapter} from "../../@core/data-table/http-params-adapter";
import {Router} from "@angular/router";

@Component({
  selector: 'app-local',
  template: `<div><router-outlet></router-outlet></div>`,
  styles: `div {height: 100vh;}`
})
export class LocalPage { }
