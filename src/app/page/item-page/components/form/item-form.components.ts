import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {ItemService} from "../../../../service/item.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-item-form',
  templateUrl: 'item-form.components.html',
  styleUrls: ['item-form.components.scss']
})
export class ItemFormComponents {

  form: FormGroup;
  constructor(private router: Router, private toastController: ToastController, private itemService: ItemService) {
    this.form = new FormGroup({});
  }

  navigateTo = async (): Promise<void> => {
    await this.router.navigate(["/item"])
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

    this.itemService.save(this.form.value).subscribe(async (response) => {
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

