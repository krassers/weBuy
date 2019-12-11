import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  isAdmin: boolean;
  isLoggedIn = false;
  jwtHelperService: JwtHelperService;

  //users: Array<User>;

  accessTokenLocalStorageKey = 'access_token';


  constructor(private http: HttpClient) {
    this.jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem(this.accessTokenLocalStorageKey);
    if (token) {
      console.log('Token expiration date: '
        + this.jwtHelperService.getTokenExpirationDate(token));
      this.isLoggedIn = !this.jwtHelperService.isTokenExpired(token);
    }
    // this.loggedInChange.subscribe((value) => {
    //   this.isLoggedIn = value;
    // });
    // this.isAdminChange.subscribe((value) => {
    //   this.isAdmin = value;
    // });
   }

   
}
