import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../ModelandConstants/model';
import { AccountService } from '../Service/Account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;

  fb: FormBuilder = inject(FormBuilder)
  router: Router = inject(Router)
  actSvc: AccountService = inject(AccountService)

  isUserValid: Boolean = false


  ngOnInit(): void {
    this.loginForm = this.createLoginForm()
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const user: User = this.loginForm.value;
    console.info('>> Login info: ', user);

    this.actSvc.verifyUser(user).subscribe(
      (response: any) => {
        console.log('Response from server: ', response);

        this.isUserValid = true;
        this.router.navigate(['/create']);

      },
      (error: any) => {
        alert('Invalid credentials');
        console.error('Error occurred:', error);
      }
    );
  }

  invalidForm() {
    return this.loginForm.invalid
  }

  private createLoginForm(): FormGroup {
    return this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(3)])
    })
  }
}