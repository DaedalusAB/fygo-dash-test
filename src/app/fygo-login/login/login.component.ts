import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fygo-core/services/auth.service';
import { FygoUser } from 'src/app/fygo-shared/models/fygo-user.model';

@Component({
  selector: 'fygo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  public isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buildAuthForm();
  }

  public login(): void {
    if (this.authForm.invalid) {
      return;
    }

    this.isLoading = true;
    const data = this.authForm.getRawValue();
    this.authService.login(data.username, data.password).subscribe(
      (fygoUser: FygoUser) => {
        this.router.navigate(['dashboard']).then(
          () => this.isLoading = false
        );
      },
      error => {
        //  TODO tell user about login error
        this.isLoading = false;
      }
    );
  }

  public shouldDisplayUsernameValidation(): boolean {
    return this.authForm && this.authForm.controls['username'].dirty && this.authForm.controls['username'].invalid;
  }

  public getUsernameValidationMessage(): string {
    //  TODO - if I have time, I wanna do a specific error for validation rule
    return 'This field is not valid :(';
  }

  public shouldDisplayPasswordValidation(): boolean {
    return this.authForm && this.authForm.controls['password'].dirty 
    && this.authForm.controls['password'].errors && this.authForm.controls['password'].errors.required;
  }

  public keyDownFunction(event): void {
    if (event.key === 'Enter' && this.authForm.valid) {
      this.login();
    }
  }

  private buildAuthForm(): void {
    this.authForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.maxLength(150),
          Validators.minLength(1),
          Validators.pattern(/^[\w.@+-]+$/),
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(128),
          Validators.minLength(1),
        ]
      ],
    });
  }

}
