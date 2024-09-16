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

  @Input() searchPlaceholder: string = 'Pesquisar...';

  loadOptions: LoadOptions = new LoadOptions();

  resources: any[] = [];

  totalPages = -1;

  currentPage = 1;

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource.options.load(this.loadOptions)
      .pipe(
        take(1),
      ).subscribe(page => {
      this.resources = page.content;
      this.totalPages = page.totalPages;
    });
  }


  onIonInfinite(e: any) {
    if (this.totalPages === this.currentPage) {
      e.target.complete();
      return;
    }
    this.loadOptions.currentPage = ++this.currentPage;
    this.dataSource.options.load(this.loadOptions).pipe(take(1))
      .subscribe(page => {
          this.resources.push(...page.content);
          this.totalPages = page.totalPages;
          e.target.complete();
        }
      )
  }

  onInputSearch(e: any) {
    this.loadOptions.searchFields = [this.dataField];
    this.loadOptions.searchValue = e.detail.value;
    this.loadOptions.currentPage = this.currentPage = 1;
    this.dataSource.options.load(this.loadOptions).pipe(take(1))
      .subscribe(page => {
          this.resources = page.content;
          this.totalPages = page.totalPages;
        }
      )
  }

  onCancelSearch() {
    this.loadOptions.currentPage = this.currentPage = 1;
    this.loadOptions.searchValue = undefined;
    this.dataSource.options.load(this.loadOptions).pipe(take(1))
      .subscribe(page => {
          this.resources.push(...page.content);
          this.totalPages = page.totalPages;
        }
      )
  }


}
