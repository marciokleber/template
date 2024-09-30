import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastController} from "@ionic/angular";
import {LocalsService} from "../../../../service/locals.service";

@Component({
  selector: 'app-local-form',
  templateUrl: 'local.form.html',
  styleUrls: ['local.form.scss']
})
export class LocalForm {

  form: FormGroup;
  constructor(private router: Router, private toastController: ToastController, private localsService: LocalsService) {
    this.form = new FormGroup({
      idLocal: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      nome: new FormControl('', [Validators.required]),
    });
  }


  navigateToList = (): void => {
    this.router.navigate(["tabs/local"])
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

    this.localsService.save(this.form.value).subscribe(async (response) => {
      const toast = await this.toastController.create({
        message: 'Local Salvo com Sucesso',
        duration: 1500,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();
      this.form.reset();
      this.navigateToList();
    });

  }


}
