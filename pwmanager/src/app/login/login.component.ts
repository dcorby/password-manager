import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  login(): void {
    let username = this.loginForm.get('username')!.value;
    let password = this.loginForm.get('password')!.value;
    if (username && password) {
      this.authService.login(username, password).subscribe(() => this.router.navigateByUrl("/passwords"));
    }
  }
}
