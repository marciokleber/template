import {Component, OnInit} from "@angular/core";
import {ModalController} from "@ionic/angular";
import {LocalsService} from "../../../../service/locals.service";
import {Router} from "@angular/router";
import {StandardDataSource} from "../../../../@core/standard-data-source";
import {httpParamsAdapter} from "../../../../@core/data-table/http-params-adapter";


@Component({
  selector: 'app-seleciona-local-modal',
  templateUrl: './seleciona-local-modal.component.html',
  styleUrls: ['./seleciona-local-modal.component.scss']
})
export class SelecionaLocalModalComponent implements OnInit{
  selectedResource!: { id: number, idLocal: string, nome: string };

  dataSource!: StandardDataSource;

  constructor(private localsService: LocalsService, private router: Router, private modalCtrl: ModalController) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.localsService.findAll(httpParamsAdapter(loadOptions))
    });
  }

  ngOnInit() {
    this.dataSource.load();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.selectedResource, 'confirm');
  }

  navigateTo = async (): Promise<void> => {
    await this.router.navigate(["/movimento"])
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

}
