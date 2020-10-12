import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {SnackBarService} from '../services/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth ,public snack: SnackBarService) {
  }
  async  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.auth.currentUser;
    const isLogged = !!user;
    if(!isLogged) {
      this.snack.authErrore()
    }
    return  isLogged;
  }

}
