import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {StandardSearchbarComponent} from "../standard-searchbar/standard-searchbar.component";
import {StandardDataSource} from "../../standard-data-source";

@Component({
  standalone: true,
  selector: 'std-header',
  templateUrl: './standard-header.component.html',
  styleUrls: ['./standard-header.component.scss'],
  imports: [
    IonicModule,
    NgForOf,
    AsyncPipe,
    NgIf,
    StandardSearchbarComponent
  ]
})
export class StandardHeaderComponent implements OnInit {

  //@Input({required: true}) title!: string;
  @Input({required: true}) title!:{ text: string, count?: number };
  @Input() dataSource!: StandardDataSource;
  @Input() buttonLeft?: { text?: string, iconName?: string; action: () => void };
  @Input() buttonRight?: { text?: string, iconName?: string; action: () => void };

  constructor() {}

  ngOnInit(): void {
  }

}
