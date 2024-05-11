import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements  OnInit {


  ngOnInit(): void {
    localStorage.clear();
  }

    userService: UserService = new UserService();


  constructor(private router: Router) { }

  signUp() {
    const firstName = (document.getElementById('firstname') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    let userService = new UserService();
    userService.getAllUsers().subscribe(users => {
      const user: User = {
        id: users.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };

      this.userService.setCurrentUserId(user.id ?? null);
      this.userService.setCurrentUserFirstName(firstName ?? null);
      this.userService.setCurrentUserLastName(lastName ?? null);
      this.userService.setCurrentUserEmail(email);
      this.userService.setCurrentUserPassword(password);

      localStorage.setItem('userId', String(user.id));
      localStorage.setItem('firstName', firstName ?? '');
      localStorage.setItem('lastName', lastName ?? '');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      localStorage.setItem('token', String(user.id));


      this.router.navigate(['voting']);
    });
  }


  contact(){
    alert('Contact button clicked!');
  }
}