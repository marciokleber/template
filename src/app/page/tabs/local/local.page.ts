import {Component, OnInit} from '@angular/core';
import {LocalsService} from "../../../service/locals.service";

interface Locals {
  id: number;
  idLocal: string;
  nome: string;
}

@Component({
  selector: 'app-local',
  templateUrl: 'local.page.html',
  styleUrls: ['local.page.scss']
})
export class LocalPage implements OnInit{
  rsqlParam = '';
  page = 0;
  size = 10;
  summaryOptions = '';

  locals: Locals[] = [];

  constructor(private localsService: LocalsService) {}

  async ngOnInit(): Promise<void> {
    const request = await this.localsService.findAll(this.rsqlParam, this.page, this.size, this.summaryOptions)
    request.subscribe((response) => {
      this.locals = response.content
      console.log(response)
    }, error => {})
  }



}
