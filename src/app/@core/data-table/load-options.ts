export class LoadOptions {
  /**
   * Variável contendo a página atual.
   */
  currentPage: number = 1;
  /**
   * Variável com o valor do tamanho da página
   */
  pageSize: number = 20;

  filter?: any[];

  searchFields?: string[] = [];

  searchOperation?: string = "contains"

  searchValue?: string;

  sort?: { field: string, desc: boolean }[]

}
