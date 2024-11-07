import {Injectable} from '@angular/core';
import {StandardNgService} from "../@core/standard-ng-service";
import {environment} from "../../environments/environment";
import {Item} from "../page/item-page/models/item";
import {Observable, throwError} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {Page} from "../@core/types/page";
import {catchError, take} from "rxjs/operators";
import {ItemList} from "../page/item-page/models/item-list";

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

  public exist(tag: string): Observable<any> {
    return this.http.get<any>(`${this.API_PATH}/tag/${tag}`);
  }

  public findAllListView(params: HttpParams = new HttpParams()): Observable<Page<ItemList>> {
    // const params = new HttpParamsAdapter(loadOptions).httpParams();
    return this.http.get<Page<ItemList>>(`${environment.contextPath}/api/tags-list-view`, { params }).pipe(
      take(1),
      // map((page: Page<Entrada>) => ({
      //   data: page.content,
      //   items: page.totalElements,
      // })),
      catchError(error => {
        return throwError(() => new Error(error.message));
      })
    );
  }

  public moverItemLocal(data: { localOrigemId: number; localDestinoId: number; tipoMovimentacaoId: number }): Observable<any> {
    return this.http.post(`${this.API_PATH}/mover-local`, data);
  }


}
