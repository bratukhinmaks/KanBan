import {Directive, HostListener} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {from, Observable} from 'rxjs';
import {distinct, distinctUntilChanged, first, map} from 'rxjs/operators';

@Directive({
  selector: '[appGoogleSignin]'
})



export class GoogleSigninDirective {
  stream$: Observable<any> = from(('Hhhhello it is me ').toLowerCase().trim().split(''));
  constructor(private afAuth: AngularFireAuth) { }
 @HostListener('click') onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }
}
