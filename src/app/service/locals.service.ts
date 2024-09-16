import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root',
})
export class LocalsService {

  URL_API: string = `http://localhost:8080/app-ponto/api/locals`;

  protected constructor(protected http: HttpClient, private storageService: StorageService) {
  }

  async findAll(q: string, page: number, size: number, summaryOptions: string): Promise<Observable<any>> {
    const token = await this.storageService.find('access_token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    let params = new HttpParams()
    //.set('q', q) // seu parâmetro de query RSQLParam
    //.set('page', page)
    //.set('size', size)
    //.set('summaryOptions', summaryOptions);

    return this.http.get<any>(`${this.URL_API}`, {params});
  }
}
