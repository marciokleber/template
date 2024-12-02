import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {LocalsService} from "../../service/locals.service";
import {Router} from "@angular/router";
import {StandardDataSource} from "../../@core/standard-data-source";
import {httpParamsAdapter} from "../../@core/data-table/http-params-adapter";
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

  selectedLocalResource!: { id: number, idLocal: string, nome: string };

  constructor(
    private localsService: LocalsService,
    private itemService: ItemService,
    private toastController: ToastController
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
    const {data, role} = event.detail;

    if (role === 'confirm') {
      console.log('Selected resource:', data);
      this.selectedLocalResource = data;
      // Faça o tratamento necessário com o recurso confirmado
    } else if (role === 'cancel') {
      console.log('Modal foi cancelado');
    }
  }

  async tagExist(epc: string) {
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
    const toast = await this.toastController.create({
      message: 'item já escaneado.',
      duration: 1500,
      position: 'bottom',
      color: 'danger'
    });


    this.itemService.exist(value.ScanResult).subscribe(async response => {
      if (!this.barcodes.includes(value.ScanResult)) {
        console.log(`${value.ScanResult} - valor encontrado na base!`);
        this.barcodes.push(value.ScanResult);
      } else {
        await toast.present();
      }

    }, error => {
      console.log('não Existe');
    })
  }

  removeBarcode(index: number) {
    this.barcodes.splice(index, 1);
  }

  async movimentar() {
    if (this.selectedLocalResource){

    }else {
      const toast = await this.toastController.create({
        message: 'Local não selecionado',
        duration: 1500,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
    }
  }
}
