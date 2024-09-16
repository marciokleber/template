export class SummaryResult {
  dataField: string;
  result: number;
  operation: 'sum' | 'max' | 'min' | 'count' | 'dcount' | 'avg'
}
