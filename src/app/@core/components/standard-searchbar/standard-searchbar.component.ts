import {Component, Input} from '@angular/core';
import {StandardDataSource} from "../../standard-data-source";
import {IonicModule} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'std-searchbar',
  templateUrl: './standard-searchbar.component.html',
  styleUrls: ['./standard-searchbar.component.scss'],
  imports: [
    IonicModule
  ]
})
export class StandardSearchbarComponent {

  @Input({required: true}) dataSource!: StandardDataSource;

  @Input() searchPlaceholder: string = 'Pesquisar...';

  constructor() {
  }

  onInputSearch(e: any) {
    // this.loadOptions.searchFields = [this.dataField];
    // this.loadOptions.searchValue = e.detail.value;
    // this.loadOptions.currentPage = this.currentPage = 1;
    this.dataSource.setPage(1);
    this.dataSource.searchBy({dataFields: ['nome'], value: e.detail.value});
    // this.dataSource.load()
  }

  onCancelSearch() {
    // this.loadOptions.currentPage = this.currentPage = 1;
    // this.loadOptions.searchValue = undefined;
    this.dataSource.load();
  }

}
