import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snack: MatSnackBar, private router: Router) { }

  authErrore() {
    this.snack.open('You must be logged in!','OK', {
      duration: 5000
    })

    return this.snack._openedSnackBarRef
      .onAction()
      .pipe(
        tap(_ => this.router.navigate['/login'])
      ).subscribe();
  }
}
