import {LoadOptions} from "./data-table/load-options";
import {Observable} from "rxjs";
import {Page} from "./types/page";

export class StandardDataSourceOptions {
  load!: (loadOptions: LoadOptions) => Observable<Page<any>>;
  pageLength?: number;
  filter?: any[];
  sort?: { field: string, desc: boolean }[];
}

export class StandardDataSource {
  constructor(public options: StandardDataSourceOptions) {
  }
}
