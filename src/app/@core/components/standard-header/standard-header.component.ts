import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'std-header',
  templateUrl: './standard-header.component.html',
  styleUrls: ['./standard-header.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    AsyncPipe,
    NgIf
  ]
})
export class StandardHeaderComponent implements OnInit {

  @Input({required: true}) title!: string;
  @Input() buttonLeft?: { text?: string, iconName?: string; action: () => void };
  @Input() buttonRight?: { text?: string, iconName?: string; action: () => void };

  constructor() {
  }

  ngOnInit(): void {
  }

}
