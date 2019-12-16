import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { map } from "rxjs/operators";
import { Subject, BehaviorSubject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  isAdmin: boolean;
  isLoggedIn = false;
  loggedInChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isAdminChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  jwtHelperService: JwtHelperService;

  users: Array<User>;

  accessTokenLocalStorageKey = "access_token";

  constructor(private http: HttpClient, private router: Router) {
    this.jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem(this.accessTokenLocalStorageKey);
    if (token) {
      console.log(
        "Token expiration date: " +
          this.jwtHelperService.getTokenExpirationDate(token)
      );
      this.loggedInChange.next(!this.jwtHelperService.isTokenExpired(token));

      this.isAdminChange.subscribe(value => {
        this.isAdmin = value;
      });
    }
  }

  public findById(id: number) {
    let url = "http://localhost:8080/user/search/findById";
    let headers = new HttpHeaders().set("Accept", "application/json");

    let params = new HttpParams().set("id", id + "");

    return this.http.get<User>(url, { headers, params });
  }

  public createUser(user: User) {
    return this.http.post("/api/registration", user);
  }

  login(user) {
    return this.http
      .post("/api/auth/", user, {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        responseType: "text",
        observe: "response"
      })
      .pipe(
        map((res: any) => {
          const token = res.headers
            .get("Authorization")
            .replace(/^Bearer /, "");
          console.log("login header", res.headers);
          localStorage.setItem(this.accessTokenLocalStorageKey, token);
          console.log(this.jwtHelperService.decodeToken(token));
          this.loggedInChange.next(true);
          this.router.navigate(["/products"]);
          //this.isAdminChange.next(this.getRole());
          // if (this.isAdmin) {
          //   this.router.navigate(["/banduser-list"]);
          //   return res;
          // }
          // this.navHome();
        })
      );
  }
  logout() {
    localStorage.removeItem(this.accessTokenLocalStorageKey);
    this.loggedInChange.next(false);
    this.isAdminChange.next(false);
    this.router.navigate(["/login"]);
  }

  getUserId() {
    const username = this.jwtHelperService.decodeToken(
      localStorage.getItem(this.accessTokenLocalStorageKey)
    ).sub;
    return this.http.get(`/api/user/${username}`);
  }
}
