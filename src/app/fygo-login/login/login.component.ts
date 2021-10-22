import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/fygo-core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;

  constructor(    
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.buildAuthForm();
  }

  public login(): void {
    const data = this.authForm.getRawValue();
    console.log("TODO login ", data);    
    this.authService.login(data.username, data.password).subscribe(res => console.log(">> login res", res))
  }

  public shouldDisplayUsernameValidation(): boolean {
    return this.authForm && this.authForm.controls['username'].dirty && this.authForm.controls['username'].invalid;
  }

  public getUsernameValidationMessage(): string {
    //  TODO - if I have time, I wanna do a specific error for validation rule
    return 'This field is not valid :(';
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
