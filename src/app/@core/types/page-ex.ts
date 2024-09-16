import {Page} from "./page";
import {SummaryResult} from "./summary-result";

export class PageEx<T> extends Page<T> {
  summaries?: SummaryResult[];
}
