import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { User } from "../model/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(
    private toastrService: ToastrService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = {
      username: "",
      password: ""
    };
  }

  login() {
    this.userService.login(this.user).subscribe(
      (res: any) => {},
      error => {
        this.toastrService.error("wrong username or password", "NONONO");
      }
    );
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
