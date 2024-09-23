import {Component, OnInit} from '@angular/core';
import {CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHintALLOption} from "@capacitor/barcode-scanner";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  protected barcodes: string[] = ['teste'];

  constructor() { }

  ngOnInit() {
  }

  async scan(){
    const value = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL
    })
    console.log(value.ScanResult);
    this.barcodes.push(value.ScanResult);
  }

}
