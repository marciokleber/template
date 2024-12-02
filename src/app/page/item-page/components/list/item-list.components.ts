import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../../../../service/item.service";
import {StandardDataSource} from "../../../../@core/standard-data-source";
import {httpParamsAdapter} from "../../../../@core/data-table/http-params-adapter";
import {LoadingService} from "../../../../service/loading.service";
import {finalize, Observable} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.components.html',
  styleUrls: ['item-list.components.scss']
})
export class ItemListComponents implements OnInit {

  dataSource!: StandardDataSource;
  load!: HTMLIonLoadingElement;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private loadService: LoadingService
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => {
        // Retorna um Observable diretamente
        const loading$ = this.loadService.showLoading('Carregando dados...')
          .then(loading => {
            loading.present();
            return this.itemService.findAllListView(httpParamsAdapter(loadOptions))
              .pipe(
                finalize(() => loading.dismiss()) // Fecha o loading quando o Observable finaliza
              );
          });

        // Precisamos encapsular em um Observable
        return new Observable(subscriber => {
          loading$.then(observable => {
            observable.subscribe(
              result => subscriber.next(result),
              error => subscriber.error(error),
              () => subscriber.complete()
            );
          });
        });
      }
    });


  }

  async novoItem() {
    await this.router.navigate(['/item/form']);
  }

  navigateTo = (): void => {
    this.router.navigate(["/tabs/preferencia"])
  }

  async ngOnInit(): Promise<void> {
    this.dataSource.load();
  }

  onIonInfinite(e: any) {
    if (this.dataSource.totalPages === this.dataSource.currentPage) {
      e.target.complete();
      return;
    }
    // this.loadOptions.currentPage = ++this.currentPage;
    this.dataSource.setPage(++this.dataSource.currentPage);
    console.log(++this.dataSource.currentPage)
    this.dataSource.load();
  }

}

