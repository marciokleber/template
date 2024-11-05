import {Component, OnInit} from "@angular/core";
import {ModalController} from "@ionic/angular";
import {StandardDataSource} from "../../../../../@core/standard-data-source";
import {httpParamsAdapter} from "../../../../../@core/data-table/http-params-adapter";
import {MovimentoService} from "../../../../../service/movimento.service";


@Component({
  selector: 'app-tipo-movimento-modal',
  templateUrl: './seleciona-tipo-movimento-modal.component.html',
  styleUrls: ['./seleciona-tipo-movimento-modal.component.scss']
})
export class SelecionaTipoMovimentoModalComponent implements OnInit {
  selectedResource!: { id: number, data: Date, nome: string };

  dataSource!: StandardDataSource;

  constructor(private movimentoService: MovimentoService, private modalCtrl: ModalController) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.movimentoService.findAll(httpParamsAdapter(loadOptions))
    });
  }

  ngOnInit() {
    this.dataSource.load();
    console.log(this.dataSource)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.selectedResource, 'confirm');
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
