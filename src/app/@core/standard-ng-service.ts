import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Page } from './types/page';
import { catchError, take } from 'rxjs/operators';
import { inject } from '@angular/core';

export abstract class StandardNgService<T, ID> {

  public http = inject(HttpClient);

  protected abstract API_PATH: string;


  public findAll(params: HttpParams = new HttpParams()): Observable<Page<T>> {
    // const params = new HttpParamsAdapter(loadOptions).httpParams();
    return this.http.get<Page<T>>(this.API_PATH, { params }).pipe(
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

  public findById(id: ID): Observable<T> {
    return this.http.get<T>(`${this.API_PATH}/${id}`);
  }

  public findByExample(resource: T): Observable<T> {
    return this.http.post<T>(`${this.API_PATH}/by-example`, resource);
  }

  public save(resource: T): Observable<T> {
    // @ts-ignore
    return resource['id'] ? this.update(resource['id'], resource) : this.insert(resource);
  }

  private insert(resource: T): Observable<T> {
    return this.http.post<T>(this.API_PATH, resource);
  }

  private update(id: ID, resource: T): Observable<T> {
    return this.http.put<T>(`${this.API_PATH}/${id}`, resource);
  }

  public patch(id: ID, resource: Partial<T>) {
    return this.http.patch(`${this.API_PATH}/${id}`, resource);
  }

  public delete(id: ID): Observable<void> {
    return this.http.delete<void>(`${this.API_PATH}/${id}`);
  }

}
