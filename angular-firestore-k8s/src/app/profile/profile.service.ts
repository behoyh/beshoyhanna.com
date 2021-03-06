import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import * as sha from 'js-sha512';
import { Store } from '@ngxs/store';
import { SetUser } from '../shared/app.actions';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private store: Store, private db: AngularFirestore, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch([
          new SetUser(
            {
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              picture: user.photoURL
            })
        ]);
      }
    });
  }

  public SignInGoogle() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider().setCustomParameters({
      prompt: 'select_account'
    }));
  }

  public SignOut() {
    this.afAuth.signOut();
  }

  public Login(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  public CreateUser(name: string, email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, sha.sha512(password));
  }

  public GetUser(id: string) {
    return this.db.collection('users').doc(id);
  }
}
