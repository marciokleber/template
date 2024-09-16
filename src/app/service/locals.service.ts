import {Injectable} from '@angular/core';
import {StandardNgService} from "../@core/standard-ng-service";
import {environment} from "../../environments/environment";
import {Local} from "../page/tabs/local/local";


@Injectable({
  providedIn: 'root',
})
export class LocalsService extends StandardNgService<Local, number>{

  // URL_API: string = `http://localhost:8080/app-ponto/api/locals`;
  protected API_PATH: string = `${environment.contextPath}/api/locals`;

  // protected constructor(protected http: HttpClient, private storageService: StorageService) {
  // }

  // async findAll(q: string, page: number, size: number, summaryOptions: string): Promise<Observable<any>> {
  //   const token = await this.storageService.find('access_token');
  //
  //   let headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //
  //   let params = new HttpParams()
  //     //.set('q', q) // seu parâmetro de query RSQLParam
  //     //.set('page', page)
  //     //.set('size', size)
  //     //.set('summaryOptions', summaryOptions);
  //
  //   return this.http.get<any>(`${this.URL_API}`, {params});
  // }

  // async findAll(): Promise<any> {
  //   const token = await this.storageService.find('access_token');
  //   const options = {
  //     url: 'http://localhost:8080/app-ponto/api/locals',
  //     params: { },
  //     headers: {
  //       'Authorization': `Bearer ${token.value}`,
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //
  //   return Http.get(options);
  // }


  // public findAll(): Observable<{ data: LocalsFormData[]; totalCount: number }> {
  //   const params = new HttpParamsAdapter().httpParams();
  //   return this.http.get<PageEx<LocalsFormData>>(this.URL_API, {params}).pipe(
  //     take(1),
  //     map((page: PageEx<LocalsFormData>) => ({
  //       data: page.content,
  //       totalCount: page.totalElements,
  //       summary: page.summaries?.map(s => s.result),
  //     })),
  //     catchError(error => {
  //       return throwError(() => new Error(error.message));
  //     })
  //   );
  // }


}
