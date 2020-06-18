import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  get token(){
    return (localStorage.getItem('jwtKey')) || null;
  }
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(this.token){
      request = request.clone({
        setHeaders: {
          Authriztion: `Bearer ${this.token}`
        }
      })
    }
    return next.handle(request);
  }
}
