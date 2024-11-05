import {AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../../../../service/item.service";
import {StandardDataSource} from "../../../../@core/standard-data-source";
import {httpParamsAdapter} from "../../../../@core/data-table/http-params-adapter";
import {LoadingService} from "../../../../service/loading.service";

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
      load: loadOptions => this.itemService.findAllListView(httpParamsAdapter(loadOptions))
    });
  }

  async novoItem() {
    await this.router.navigate(['/item/form']);
  }

  navigateTo = (): void => {
    this.router.navigate(["/tabs/preferencia"])
  }

  async ngOnInit(): Promise<void> {
    this.load = await this.loadService.showLoadingTiming('Carregando...',3000);
    await this.load.present();
    this.dataSource.load();
    console.log(this.dataSource);
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

