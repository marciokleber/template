import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import {StorageService} from "./service/storage.service";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private storageService: StorageService
  ) {
    this.storageService.remove('access_token')
    this.initialize();
  }

  async initialize() {
    this.platform.ready().then(async () => {
      const token = await this.storageService.find('access_token');
      // console.log('token != null :' + token.value != null)
      // console.log('Token: ' + token.value)
      if (token.value != null) this.router.navigate(["tabs"]);
      else this.router.navigate(["login"]);
    })
  }
}
