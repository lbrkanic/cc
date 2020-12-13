import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { UserInput } from '../user-input';

@Component({
  selector: 'dh-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {

  loginFormGroup: FormGroup;
  errorFlag: boolean;
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.errorFlag = false;
    this.loginFormGroup = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('.*[0-9].*')
      ])
    });
    this.subscription = this.authService.isLoggedIn().pipe(
      filter(isLoggedIn => isLoggedIn)
    ).subscribe(() => {
      this.router.navigate(['/encoder']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(): void {
    this.authService.login(this.userInput).subscribe(() => {
      this.router.navigate(['/encoder']);
    }, (error) => {
      this.errorFlag = true;
    });
  }

  get userInput(): UserInput {
    return {
      email: this.loginFormGroup.value.email,
      password: this.loginFormGroup.value.password
    };
  }

}
