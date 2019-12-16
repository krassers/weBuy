import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }
  login() {
    this.router.navigate(["/login"]);
  }

  navigateToMyProducts() {
    this.userService.getUserId();
  }
}
