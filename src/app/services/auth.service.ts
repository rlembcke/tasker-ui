import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private authClient = new OktaAuth({
  //   issuer: 'https://{YourOktaDomain}/oauth2/default',
  //   clientId: '{ClientId}'
  // });

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

 
  async login(username: string, password: string): Promise<void> {
     this.isAuthenticated.next(true);
  }

  async logout(redirect: string): Promise<void> {
    try {
      // await this.authClient.signOut();
      this.isAuthenticated.next(false);
      await this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}
