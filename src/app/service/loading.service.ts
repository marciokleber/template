import { Injectable } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading(message: string) {
    return await this.loadingCtrl.create({message: message});
  }

  async showLoadingTiming(message: string, duration: number) {
    return await this.loadingCtrl.create({message: message, duration: duration});
  }
}
