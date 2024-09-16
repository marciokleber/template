import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {StorageService} from "./storage.service";
import {LoadingService} from "./loading.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private keycloakUrl = 'http://localhost:8085/auth/realms/APP-PONTO/protocol/openid-connect/token';
  private clientId = 'app-ponto-frontend';
  private isGetAccessToken!: boolean;
  //private clientSecret = '2ZD3tmsrYi0p9LQx8fnXpGQBGCRys0JU'; // opcional, se for confidencial

  constructor(private http: HttpClient, private storageService: StorageService, private loadService: LoadingService) {}

  async login(username: string, password: string): Promise<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', this.clientId);
    body.set('username', username);
    body.set('password', password);
    //body.set('client_secret',this.clientSecret )

    const load = await this.loadService.showLoading('Carregando...')
     await load.present();

    try {
      // Fazendo a requisição para obter o token
      const response: any = await this.http.post(this.keycloakUrl, body.toString(), { headers }).toPromise();

      const accessToken = response.access_token;

      // Armazenando o token no storage do Capacitor
      await this.storageService.save('access_token', accessToken);
      console.log('Token armazenado com sucesso:', accessToken);

      await load.dismiss();

      return true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      await load.dismiss();
      return false;
    }




    // // Fazendo a requisição para obter o token
    // await this.http.post(this.keycloakUrl, body.toString(), { headers })
    //   .subscribe(
    //     async (res: any) => {
    //       const accessToken = res.access_token;
    //       // Armazenando o token no storage do Capacitor
    //       await this.storageService.save('access_token', accessToken);
    //       await load.dismiss();
    //       console.log('Token armazenado com sucesso:', accessToken);
    //       this.isGetAccessToken = true;
    //
    //     },
    //     async (err) => {
    //       console.log(err);
    //       await load.dismiss();
    //       this.isGetAccessToken = false;
    //     }
    //   );
    // return this.isGetAccessToken;
  }


  // Método para obter o token armazenado
  async getAccessToken(): Promise<string | null> {
    const token = await this.storageService.find('access_token');
    return token.value;
  }
}
