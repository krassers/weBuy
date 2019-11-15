import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from '../model/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public findById(id: number) {
    let url = 'http://localhost:8080/user/search/findById';
    let headers = new HttpHeaders().set("Accept", "application/json");

    let params = new HttpParams().set("id", id + "");

    return this.http.get<User>(url, { headers, params });
  }

  public createUser(user:User
    // username: string,
    // email: string,
    // role: string,
    // street: string,
    // city: string,
    // zipcode: number,
    // password: string
  ) {
    let url = "http://localhost:8080/user";

    let headers = new HttpHeaders();
    headers.set("Accept", "application/json");

    return this.http.post(
      url,
      {...user
        // username: username,
        // email: email,
        // role: role,
        // street: street,
        // city: city,
        // zipcode: zipcode,
        // password: password
      },
      { headers: headers }
    );
  }
}
