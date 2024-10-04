import {Component, Input} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-router-card',
  templateUrl: './router-card.component.html',
  styleUrls: ['./router-card.component.scss'],
  imports: [
    IonicModule,
    NgIf
  ],
  standalone: true
})
export class RouterCardComponent {

  @Input({required: true}) card!: { title: string, subtitle?: string, icon?: string, route: string };
  constructor(private router: Router) {}
  async navigate() {
    await this.router.navigate([this.card.route]);
  }
}
