import {Injectable} from '@angular/core';
import {StandardNgService} from "../@core/standard-ng-service";
import {environment} from "../../environments/environment";
import {Local} from "../page/local-page/models/local";


@Injectable({
  providedIn: 'root',
})
export class MovimentoService extends StandardNgService<Local, number>{

  protected API_PATH: string = `${environment.contextPath}/api/movimento`;

}
