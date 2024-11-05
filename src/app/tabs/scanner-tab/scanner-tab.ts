import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {LocalsService} from "../../service/locals.service";
import {Router} from "@angular/router";
import {StandardDataSource} from "../../@core/standard-data-source";
import {httpParamsAdapter} from "../../@core/data-table/http-params-adapter";
import {Barcode, BarcodeFormat, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHintALLOption} from "@capacitor/barcode-scanner";
import {ItemService} from "../../service/item.service";


@Component({
  selector: 'app-scanner-tab',
  templateUrl: './scanner-tab.html',
  styleUrls: ['./scanner-tab.scss'],
})
export class ScannerTab implements OnInit {

  protected barcodes: string[] = [];
  message!: string;
  dataSource!: StandardDataSource;

  selectedResource!: { id: number, idLocal: string, nome: string };

  constructor(
    private localsService: LocalsService,
    private itemService: ItemService,
    private router: Router,
    private modalCtrl: ModalController
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.localsService.findAll(httpParamsAdapter(loadOptions))
    });
  }

  ngOnInit() {
    this.dataSource.load();
  }

  // Método chamado quando o modal é fechado
  onModalDismiss(event: CustomEvent<any>) {
    const { data, role } = event.detail;

    if (role === 'confirm') {
      console.log('Selected resource:', data);
      this.selectedResource = data;
      // Faça o tratamento necessário com o recurso confirmado
    } else if (role === 'cancel') {
      console.log('Modal foi cancelado');
    }
  }

  async tagExist(epc: string){
    console.log('###################')
    const value = await this.itemService.exist(epc);
    console.log(value)
    console.log('###################')
    console.log("existe na base de dados" + value)
    console.log(value)
    return value != null;
  }

  async scan() {
    const value = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL
    });
    console.log(value.ScanResult)

    await this.itemService.exist(value.ScanResult).subscribe(response => {
      console.log(`${value.ScanResult} - valor encontrado na base!`);
      this.barcodes.push(value.ScanResult);
    }, error => {
      console.log('não Existe');
    })
  }
}
