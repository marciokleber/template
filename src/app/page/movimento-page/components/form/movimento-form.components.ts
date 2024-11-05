import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastController} from "@ionic/angular";
import {MovimentoService} from "../../../../service/movimento.service";

@Component({
  selector: 'app-movimento-form',
  templateUrl: 'movimento-form.components.html',
  styleUrls: ['movimento-form.components.scss']
})
export class MovimentoFormComponents {

  form: FormGroup;

  constructor(private router: Router, private toastController: ToastController, private movimentoService: MovimentoService) {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
    });
  }


  navigateTo = async (): Promise<void> => {
    await this.router.navigate(["/movimento"])
  }

  async OnSubmit() {
    if (this.form.invalid) {
      const toast = await this.toastController.create({
        message: 'Formulario Invalido',
        duration: 1500,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
      throw new Error('Formulario Invalido')
    }

    console.log(this.form.value)

    this.movimentoService.save(this.form.value).subscribe(async () => {
      const toast = await this.toastController.create({
        message: 'Local Salvo com Sucesso',
        duration: 1500,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();
      this.form.reset();
      await this.navigateTo();
    });

  }


}
