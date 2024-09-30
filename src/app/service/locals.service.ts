import {Injectable} from '@angular/core';
import {StandardNgService} from "../@core/standard-ng-service";
import {environment} from "../../environments/environment";
import {Local} from "../page/tabs/local/local";


@Injectable({
  providedIn: 'root',
})
export class LocalsService extends StandardNgService<Local, number>{

  protected API_PATH: string = `${environment.contextPath}/api/locals`;

}
