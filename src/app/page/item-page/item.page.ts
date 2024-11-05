import {Component} from '@angular/core';

@Component({
  selector: 'app-item-page',
  template: `<div><router-outlet></router-outlet></div>`,
  styles: `div {height: 100vh;}`
})
export class ItemPage {
}
