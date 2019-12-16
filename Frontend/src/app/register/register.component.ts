import { Component, OnInit } from "@angular/core";
import { User } from "../model/user";
import { UserService } from "../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      password: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl()
    });
  }

  onSubmit() {
    const user: User = this.userForm.value;
    user.role = "user";
    console.log(user);
    this.userService.createUser(user).subscribe(
      response => this.navigateToLogin(),
      err => {
        console.log(err);
        this.toastr.error("User could not be created", "NO");
      }
    );
  }

  navigateToLogin() {
    this.toastr.success("User created successfully!", "YES");
    this.router.navigate(["/login"]);
  }
}
