import {AfterContentInit, Component, ContentChild, ElementRef, Input} from '@angular/core';
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
export class StandardHeaderComponent implements AfterContentInit {

  @Input({required: true}) title!: { text: string, count?: number };
  @Input() dataSource!: StandardDataSource;
  @Input() buttonLeft?: { text?: string, iconName?: string; action: () => void };
  @Input() buttonRight?: { text?: string, iconName?: string; action: () => void };

  @ContentChild('content', { static: false }) content!: ElementRef;
  hasContent = false;

  constructor() {}
  ngAfterContentInit() {
    this.hasContent = !!this.content;
  }
}
