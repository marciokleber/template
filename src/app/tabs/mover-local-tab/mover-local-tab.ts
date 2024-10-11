import {Component} from '@angular/core';
import {ItemService} from "../../service/item.service";

export interface Local {id: number, idLocal: string, nome: string}
export interface TipoMovimento {id: number, data: Date, nome: string}


@Component({
  selector: 'app-mover-local-tab',
  templateUrl: './mover-local-tab.html',
  styleUrls: ['./mover-local-tab.scss'],
})
export class MoverLocalTab {

  public selectedLocalOrigem!: Local;
  public quantidadeTagsLocalOrigem!: number;

  public selectedLocalDestino!: Local;
  public quantidadeTagsLocalDestino!: number;

  public selectedTipoMovimentacao!: TipoMovimento;

  constructor(private itemService: ItemService) {
  }

  verificaLocaisSelecionadosDirentes(): void {
    if (this.selectedLocalOrigem && this.selectedLocalDestino) {
      if (this.selectedLocalOrigem.id === this.selectedLocalDestino.id) {
        console.log('Locais iguais');
      }
    }
  }


  getQuantidadeTagsPorLocal(): void {
    this.itemService.getQuantidedeTagsPorLocal(this.selectedLocalOrigem.id)
      .subscribe(
        (quantidade) => {console.log(quantidade)},
        (error) => console.error('Error loading tags', error)
      );
  }

  onModalDismiss(event: CustomEvent<any>, local: string) {
    const { data, role } = event.detail;
    if (role === 'confirm') {
      if (local === 'origem') {
        this.selectedLocalOrigem = data;
        this.getQuantidadeTagsPorLocal()
        this.verificaLocaisSelecionadosDirentes()
      }
      else if(local === 'destino'){
        this.selectedLocalDestino = data;
        this.verificaLocaisSelecionadosDirentes()
      }
      else {
        this.selectedTipoMovimentacao = data;
      }
    } else if (role === 'cancel') {
      console.log('Modal foi cancelado');
    }
  }


  async movimentar() {
    console.log('Movimentar: ', this.selectedLocalOrigem.id, this.selectedLocalDestino.id, this.selectedTipoMovimentacao.id);
  }
}
