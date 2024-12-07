import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../service/item.service";
import {ToastController} from "@ionic/angular";
import {LoadingService} from "../../service/loading.service";

export interface Local {
  id: number,
  idLocal: string,
  nome: string
}

export interface TipoMovimento {
  id: number,
  data: Date,
  nome: string
}


@Component({
  selector: 'app-mover-local-tab',
  templateUrl: './mover-local-tab.html',
  styleUrls: ['./mover-local-tab.scss'],
})
export class MoverLocalTab implements OnInit{

  public loading!: HTMLIonLoadingElement;

  public selectedLocalOrigem!: Local  |null;
  public quantidadeTagsLocalOrigem!: number |null;

  public selectedLocalDestino!: Local  |null ;
  public quantidadeTagsLocalDestino!: number |null;

  public selectedTipoMovimentacao!: TipoMovimento |null;
  public message!: string;

  public data: { localOrigemId: number, localDestinoId: number, tipoMovimentacaoId: number } = {
    localOrigemId: 0,
    localDestinoId: 0,
    tipoMovimentacaoId: 0
  } ;

  constructor(private itemService: ItemService, private toastController: ToastController, private loadingService: LoadingService) {
  }

  async ngOnInit() {
    this.loading = await this.loadingService.showLoading('Carregando...');
  }


  async onModalDismiss(event: CustomEvent<any>, local: string) {
    const {data, role} = event.detail;
    if (role === 'confirm') {
      if (local === 'origem') {
        if (this.selectedLocalDestino) {
          if (data.id === this.selectedLocalDestino.id) {
            const toast = await this.toastController.create({
              message: 'O local de Origem não pode ser igual ao de destino',
              duration: 1500,
              position: 'bottom',
              color: 'danger'
            });
            await toast.present();
            this.selectedLocalOrigem = null
            this.quantidadeTagsLocalOrigem = null

          }else{
            this.selectedLocalOrigem = data;
          }
        }else {
          this.selectedLocalOrigem = data;
        }

        // @ts-ignore
        this.itemService.getQuantidedeTagsPorLocal(this.selectedLocalOrigem.id)
          .subscribe(
            (quantidade) => {
              this.quantidadeTagsLocalOrigem = quantidade
            })

      } else if (local === 'destino') {

        if (this.selectedLocalOrigem) {
          if (data.id === this.selectedLocalOrigem.id) {
            const toast = await this.toastController.create({
              message: 'O local de destino não pode ser igual ao de origem',
              duration: 1500,
              position: 'bottom',
              color: 'danger'
            });
            await toast.present();
            this.selectedLocalDestino = null
            this.quantidadeTagsLocalDestino = null

          }else{
            this.selectedLocalDestino = data;
          }
        }else{
          this.selectedLocalDestino = data;
        }

        // @ts-ignore
        this.itemService.getQuantidedeTagsPorLocal(this.selectedLocalDestino.id)
          .subscribe(
            (quantidade) => {
              this.quantidadeTagsLocalDestino = quantidade
            })
      } else {
        this.selectedTipoMovimentacao = data;
      }
    } else if (role === 'cancel') {
      console.log('Modal foi cancelado');
    }
  }


  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Movimentar',
      role: 'confirm',
      handler: () => {
        this.loadingService.showLoading('Carregando...')
          .then(async loading => {
            await loading.present();

            if (this.selectedLocalOrigem && this.selectedTipoMovimentacao && this.selectedLocalDestino) {
              this.data.localOrigemId = this.selectedLocalOrigem.id;
              this.data.localDestinoId = this.selectedLocalDestino.id;
              this.data.tipoMovimentacaoId = this.selectedTipoMovimentacao.id;

              this.itemService.moverItemLocal(this.data).subscribe({
                next: async () => {
                  console.log('Movimentação realizada com sucesso');
                  // Reseta os valores selecionados
                  this.selectedLocalOrigem = null;
                  this.selectedLocalDestino = null;
                  this.selectedTipoMovimentacao = null;
                },
                error: (e) => {
                  console.error('Erro ao mover o item:', e);
                },
                complete: async () => {
                  // Encerra o loading quando a movimentação é concluída
                  await loading.dismiss();
                }
              });
            } else {
              // Valores obrigatórios não preenchidos
              console.warn('Campos obrigatórios não preenchidos.');
              await loading.dismiss(); // Encerra o loading
            }
          })
          .catch(error => {
            console.error('Erro ao exibir o loading:', error);
          });
      },

    },
  ];

  isAlertOpen = false;

  setOpen(isOpen: boolean) {
    // @ts-ignore
    this.message = `Estão sendo Movimentados ${this.quantidadeTagsLocalOrigem} Itens do local ${this.selectedLocalOrigem.nome} para o destino ${this.selectedLocalDestino.nome} `
    this.isAlertOpen = isOpen;
  }
}
