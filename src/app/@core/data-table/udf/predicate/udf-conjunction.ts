import { UdfFilterable } from '../udf-filterable';
import { UdfExpression } from './udf-expression';

export class UdfConjunction extends UdfFilterable {
  override type = 'and';

  constructor(predicates?: UdfExpression[]) {
    super();
    if (predicates) {
      this.concatPredicates(predicates);
    }
  }
}
