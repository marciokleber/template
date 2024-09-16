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

  @Input() displayValue: string = '';

  @Input() searchPlaceholder: string = 'Pesquisar...';

  resources: any[] = [];

  totalPages = -1;

  currentPage = 1;

  constructor() {

  }

  ngOnInit(): void {
    const loadOptions = new LoadOptions()
    this.dataSource.options.load(loadOptions)
      .pipe(
        take(1),
      ).subscribe(page => {
      this.resources = page.content;
      this.totalPages = page.totalPages;
      // this.currentPage = page.
    });
  }

  onCancelSearch() {

  }

  onIonInfinite(e: any) {
    if (this.totalPages === this.currentPage) {
      e.target.complete();
      return;
    }
    const loadOptions = new LoadOptions()
    loadOptions.currentPage = ++this.currentPage;
    this.dataSource.options.load(loadOptions).pipe(take(1))
      .subscribe(page => {
          this.resources.push(...page.content);
          this.totalPages = page.totalPages;
          e.target.complete();
        }
      )
  }

  onInputSearch($event: any) {

  }


}
