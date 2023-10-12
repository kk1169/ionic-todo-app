import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public errorMessage: string = '';
  public loginForm!: FormGroup;
  public isToastOpen = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async onLogin() {
    try {
      console.log(this.loginForm.value);
      this.authenticationService.onLogin(this.loginForm.value).subscribe({
        next: (value) => {
          this.router.navigate(['contacts']);
        },
        error: (error) => {
          this.errorMessage = error.error;
          this.isToastOpen = true;
        },
      });
    } catch (e) {
    } finally {
    }
  }
}
