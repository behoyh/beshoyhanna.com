import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { signInWithPopup, GithubAuthProvider, fetchSignInMethodsForEmail, signInWithEmailAndPassword, linkWithCredential } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CopierService {

  constructor(private db: Firestore, private afAuth: Auth, private http: HttpClient) {

  }

public ForkParentRepository(authToken:string)
{
const headers = new HttpHeaders()
  .set('Accept', 'application/vnd.github.v3+json')
  .set('Authorization', 'token ' + authToken);

return this.http.post("https://api.github.com/repos/behoyh/AngularFirestoreK8s/forks", {}, { headers })
}

  public SignInGithub() {
    var provider = new GithubAuthProvider();
    provider.addScope('repo');

    provider.setCustomParameters({
      'allow_signup': 'true'
    });

    return signInWithPopup(this.afAuth, provider as any);
  }

  public LinkToAccount(email, password, pendingCred) {
    // Get sign-in methods for this email.
    fetchSignInMethodsForEmail(this.afAuth, email as string).then((methods) => {
      // Step 3.
      // If the user has several sign-in methods,
      // the first method in the list will be the "recommended" method to use.
      if (methods[0] === 'password') {
        // Asks the user his password.
        // In real scenario, you should handle this asynchronously.
        // TODO: Setup a extra feild with a password prompt to take in a password instead of hardcoded string.
        signInWithEmailAndPassword(this.afAuth, email, password).then((user:any) => {
          // Step 4a.
          return linkWithCredential(user, pendingCred);
        }).then(function () {
          // GitHub account successfully linked to the existing Firebase user.
          return;
        });
        return;
      }
    });
  };
}
