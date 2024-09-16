import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  username: string = '';
  password: string = '';
  passwordView: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],  // Campo obrigatório
      password: ['', Validators.required],  // Campo obrigatório
    });
  }


  toggePassword() {
    this.passwordView = !this.passwordView;
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onReset() {
    this.router.navigate(['/reset-password']);
  }

  //onSubmit() {}

  async onSubmit() {
    console.log(this.loginForm.valid)
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      const isToken = await this.authService.login(username, password).then()
      console.log('Token:', isToken);
      if (isToken) {
        await this.router.navigate(['tabs']);
      }
    } else {
      console.log('Formulário inválido');
    }
  }


  ngOnInit(): void {
  }

}
