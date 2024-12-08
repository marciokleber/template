import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";
import {LocalsService} from "../../service/locals.service";
import {StandardDataSource} from "../../@core/standard-data-source";
import {httpParamsAdapter} from "../../@core/data-table/http-params-adapter";
import {CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHintALLOption} from "@capacitor/barcode-scanner";
import {ItemService} from "../../service/item.service";
import {LoadingService} from "../../service/loading.service";
import {Barcode, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";


@Component({
  selector: 'app-scanner-tab',
  templateUrl: './scanner-tab.html',
  styleUrls: ['./scanner-tab.scss'],
})
export class ScannerTab implements OnInit {

  protected barcodes: string[] = [];
  isSupported = false;

  Ionicbarcodes: Barcode[] = [];
  message!: string;
  dataSource!: StandardDataSource;

  selectedLocalResourceLocal: { id: number, idLocal: string, nome: string } | null = null;
  selectedLocalResourceMovimento: { id: number, data: Date, nome: string } | null = null;

  constructor(
    private localsService: LocalsService,
    private itemService: ItemService,
    private toastController: ToastController,
    private loadingService: LoadingService,
    private alertController: AlertController
  ) {
    this.dataSource = new StandardDataSource({
      load: loadOptions => this.localsService.findAll(httpParamsAdapter(loadOptions))
    });
  }

  ngOnInit() {
    this.dataSource.load();
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  // Método chamado quando o modal é fechado
  onModalDismissLocal(event: CustomEvent<any>) {
    const {data, role} = event.detail;

    if (role === 'confirm') {
      console.log('Selected resource:', data);
      this.selectedLocalResourceLocal = data;
      // Faça o tratamento necessário com o recurso confirmado
    } else if (role === 'cancel') {
      console.log('Modal foi cancelado');
    }
  }

  onModalDismissMovimento(event: CustomEvent<any>) {
    const {data, role} = event.detail;

    if (role === 'confirm') {
      console.log('Selected resource:', data);
      this.selectedLocalResourceMovimento = data;
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

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async scan() {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const barcodes = await BarcodeScanner.scan();
    console.log(barcodes.barcodes[0].displayValue)

    const toast = await this.toastController.create({
      message: 'item já escaneado.',
      duration: 1500,
      position: 'bottom',
      color: 'danger'
    });

    this.itemService.exist(barcodes.barcodes[0].displayValue).subscribe(async response => {
      if (!this.barcodes.includes(barcodes.barcodes[0].displayValue)) {
        console.log(`${barcodes.barcodes[0].displayValue} - valor encontrado na base!`);
        this.barcodes.push(barcodes.barcodes[0].displayValue);
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
    if (!this.selectedLocalResourceLocal) {
      const toast = await this.toastController.create({
        message: 'Local não selecionado',
        duration: 1500,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
      return;
    }

    if (!this.selectedLocalResourceMovimento) {
      const toast = await this.toastController.create({
        message: 'Tipo movimento não selecionado',
        duration: 1500,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
      return;
    }

    if (this.barcodes.length === 0) {
      const toast = await this.toastController.create({
        message: 'Não há itens para movimentar',
        duration: 1500,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
      return;
    }


    console.log("Iniciando movimentação...");
    const data: { resources: string[], localDestinoId: number, tipoMovimentoId: number } = {
      resources: this.barcodes,
      localDestinoId: this.selectedLocalResourceLocal.id,
      tipoMovimentoId: this.selectedLocalResourceMovimento.id
    };


    this.loadingService.showLoading('Carregando...')
      .then(async loading => {
        await loading.present();
        this.itemService.scannerMove(data).subscribe({
          next: async () => {
            this.selectedLocalResourceMovimento = null
            this.selectedLocalResourceLocal = null
            this.barcodes = [];
            const toast = await this.toastController.create({
              message: 'Movimentação realizada com sucesso',
              duration: 1500,
              position: 'bottom',
              color: 'success'
            });
            await toast.present();
            console.log('Movimentação realizada com sucesso');
          },
          error: async (e) => {
            await loading.dismiss();

            const toast = await this.toastController.create({
              message: 'Erro durante a movimentação',
              duration: 1500,
              position: 'bottom',
              color: 'danger'
            });
            await toast.present();
            console.error('Erro durante movimentação', e);
            throw e;
          },
          complete: async () => {
            await loading.dismiss();
          }
        });
      }).catch(e => {
      console.error('Erro ao exibir o loading:', e);
      throw e;
    })


    // const data: {resources: string[],localDestinoId: number, tipoMovimentoId:number } = {
    //   resources: this.barcodes,
    //   localDestinoId: this.selectedLocalResourceLocal.id,
    //   tipoMovimentoId: this.selectedLocalResourceMovimento.id
    // };
    // this.itemService.scannerMove(data).subscribe()
  }

}
