import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  product = {
    emailId: '',
    password: '',
    available: false
  };
  submitted = false;
  constructor(private LoginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  loginBtn() {
  }
  Login(): void {
    const data = {
      emailId: this.product.emailId,
      password: this.product.password
    };

    this.LoginService.create(data)
      .subscribe(
        response => {
          console.log(response);
          if(response!=null)
          {
             //alert(response.txtUserName);
            // alert(response.txtEmpNo);
            sessionStorage.setItem('loggedUser', response.txtUserName);
            sessionStorage.setItem('empno',response.txtEmpNo);
            this.router.navigate(['home/dashboard'])
          }
          else
          {
            sessionStorage.clear()
            this.submitted = true;
          }
        },
        error => {
          console.log(error);
        });
      }
}
