import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(result => console.log("User created",result));
  }

  gotoUserList() {
    this.router.navigate(['/']);
  }


}
