import {HttpParams} from "@angular/common/http";
import {LoadOptions} from "./load-options";
import {UdfContains} from "./udf/predicate/udf-contains";
import {UdfFilterable} from "./udf/udf-filterable";
import {toFilterable} from "./udf/udf-parser";
import {UdfConjunction} from "./udf/predicate/udf-conjunction";
import {UdfDisjunction} from "./udf/predicate/udf-disjunction";

/**
 * Classe Adapter para montagem do HttpParams a partir do LoadOptions
 */
export function httpParamsAdapter(options: LoadOptions) {

  const
    size = options.pageSize,
    page = options.currentPage - 1;
  // sort = this.options.sort || [];
  let params = new HttpParams()
    .append('page', `${page}`)
    .append('size', `${size}`);
  if (options.filter || options.searchValue) params = params.append("q", prepareFilter(options)!)
  if (options.sort) params = prepareSort(options.sort, params);
  // if (this.hasSummary(this.options)) params = params.append("s", this.prepareSummary(this.options))
  return params;

  function prepareSort(sort: { field: string, desc: boolean }[], params: HttpParams): HttpParams {
    if (Array.isArray(sort)) {
      for (let i = 0; i < sort.length; i++) {
        params = params.append('sort', `${sort[i].field},${sort[i].desc ? 'desc' : 'asc'}`);
      }
    }
    return params;
  }

  function prepareFilter(options: LoadOptions): string | undefined {
    console.log(`httpParamsAdapter.prepareFilter:  `, options)
    let udfFilterable = options.filter ? toFilterable(options.filter) : new UdfFilterable();
    if (options.searchFields && options.searchOperation && options.searchValue) {
      if (options.searchOperation === 'contains') {
        const searchPredicate = options.searchFields.map(field => new UdfContains(field, options.searchValue!!))
        udfFilterable?.predicates.push(new UdfDisjunction(searchPredicate))
      }

    }
    return udfFilterable?.toQueryParam();
  }

  // protected hasSummary(options: LoadOptions) {
  //   return options.totalSummary;
  // }
  //
  // protected prepareSummary(options: LoadOptions): string {
  //   // @ts-ignore
  //   const summaries: { selector: string, summaryType: string }[] = options.totalSummary;
  //   return summaries
  //     .map(summary => `${summary.selector},${summary.summaryType}`)
  //     .join(";");
  // }
}
