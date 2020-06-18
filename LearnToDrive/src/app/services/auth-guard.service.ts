import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  public isLoggedIn = false;
  constructor(private DServ:DataService, 
    private jwtHelper: JwtHelperService, 
    private route: Router, 
    private toast: ToastService) { }
  
  canActivate()
  {
    const tokenInfo = localStorage.getItem('jwtKey');
    if(tokenInfo && !this.jwtHelper.isTokenExpired(tokenInfo)){
      return true
    }
    else 
    {
      localStorage.removeItem('jwtKey');
      this.route.navigate(['Login']);
      this.toast.errorToast('Please Login')
      return false
    }
   }
}
