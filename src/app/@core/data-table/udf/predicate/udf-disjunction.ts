import { UdfFilterable } from '../udf-filterable';
import { UdfExpression } from './udf-expression';

export class UdfDisjunction extends UdfFilterable {
  override type = 'or';

  constructor(predicates?: UdfExpression[]) {
    super();
    if (predicates) {
      this.concatPredicates(predicates);
    }
  }
}
