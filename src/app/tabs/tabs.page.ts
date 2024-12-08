import {Component, ViewChild} from '@angular/core';
import {IonRouterOutlet} from "@ionic/angular";
import {MoverLocalTab} from "./mover-local-tab/mover-local-tab";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  onTabDidChange(event: any) {
    console.log('Tab changed to:', event.tab);
  }

}
