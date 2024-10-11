import {Injectable} from '@angular/core';
import {StandardNgService} from "../@core/standard-ng-service";
import {environment} from "../../environments/environment";
import {Item} from "../page/item-page/item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class ItemService extends StandardNgService<Item, number> {
  protected API_PATH: string = `${environment.contextPath}/api/tags`;

  protected constructor() {
    super();
  }
  public getQuantidedeTagsPorLocal(localId: number): Observable<number> {
    return this.http.get<number>(`${this.API_PATH}/quantidade-tags-por-local/${localId}`);
  }

}
