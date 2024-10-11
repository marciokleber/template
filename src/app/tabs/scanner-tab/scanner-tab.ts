import { Component, OnInit } from '@angular/core';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHintALLOption } from "@capacitor/barcode-scanner";
import { ModalController } from "@ionic/angular";
import { LocalsService } from "../../service/locals.service";
import { Router } from "@angular/router";
import { StandardDataSource } from "../../@core/standard-data-source";
import { httpParamsAdapter } from "../../@core/data-table/http-params-adapter";



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

  async scan() {
    const value = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL
    });

    console.log(value.ScanResult);
    this.barcodes.push(value.ScanResult);
  }
}
