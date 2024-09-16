import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {StandardDataSource} from "../../standard-data-source";
import {LoadOptions} from "../../data-table/load-options";
import {AsyncPipe, NgForOf} from "@angular/common";
import {map, Observable} from "rxjs";
import {take} from "rxjs/operators";
import {httpParamsAdapter} from "../../data-table/http-params-adapter";

@Component({
  standalone: true,
  selector: 'std-list',
  templateUrl: './standard-list.component.html',
  styleUrls: ['./standard-list.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    AsyncPipe
  ]
})
export class StandardListComponent implements OnInit {

  @Input({required: true}) dataSource!: StandardDataSource;

  @Input() dataField: string = '';



  // loadOptions: LoadOptions = new LoadOptions();

  // resources: any[] = [];

  // totalPages = -1;

  // currentPage = 1;

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource.load();
  }


  onIonInfinite(e: any) {
    if (this.dataSource.totalPages === this.dataSource.currentPage) {
      e.target.complete();
      return;
    }
    // this.loadOptions.currentPage = ++this.currentPage;
    this.dataSource.setPage(++this.dataSource.currentPage);
    this.dataSource.load();
  }

  onInputSearch(e: any) {
    // this.loadOptions.searchFields = [this.dataField];
    // this.loadOptions.searchValue = e.detail.value;
    // this.loadOptions.currentPage = this.currentPage = 1;
    this.dataSource.setPage(1);
    this.dataSource.load();
  }

  // onCancelSearch() {
  //   // this.loadOptions.currentPage = this.currentPage = 1;
  //   // this.loadOptions.searchValue = undefined;
  //   this.dataSource.load().pipe(take(1))
  //     .subscribe(page => {
  //         this.resources.push(...page.content);
  //         // this.totalPages = page.totalPages;
  //       }
  //     )
  // }


}
