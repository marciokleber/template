import {LoadOptions} from "./data-table/load-options";
import {Observable, tap} from "rxjs";
import {Page} from "./types/page";
import {take} from "rxjs/operators";

export class StandardDataSourceOptions {
  load!: (loadOptions: LoadOptions) => Observable<Page<any>>;
  pageLength?: number;
  filter?: any[];
  sort?: { field: string, desc: boolean }[];
}

export class StandardDataSource {

  totalPages: number = -1;

  currentPage = 1;

  items: any[] = []

  constructor(private options: StandardDataSourceOptions) {
  }

  load() {
    const loadOptions = new LoadOptions();
    return this.options.load(loadOptions).pipe(
      take(1),
    ).subscribe(page => {
      this.items = page.content;
      this.totalPages = page.totalPages
    });
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  searchBy(searchOption: { dataFields: string[], value: any }) {
    const loadOptions = new LoadOptions();
    loadOptions.searchFields = searchOption.dataFields;
    loadOptions.searchValue = searchOption.value;
    return this.options.load(loadOptions).subscribe(page => {
      this.items = page.content;
      this.totalPages = page.totalPages
    });
  }

}
