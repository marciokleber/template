import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from "../service/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Obtenha o token JWT de forma assíncrona
    return from(this.authService.getAccessToken()).pipe(
      switchMap(token => {
        // Verifique se o token existe, então clone a requisição e adicione o cabeçalho Authorization
        if (token) {
          const clonedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(clonedReq);
        }

        // Se não houver token, envie a requisição original
        return next.handle(req);
      })
    );
  }
}
