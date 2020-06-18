import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loginCreds = {
    ID: 0,
    username: '',
    password: '',
  };

  // A quick way to reference fields from the html side
  // get ID() { return this.registerForm.get('ID'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }


  constructor(private formBuilder: FormBuilder,
    private dService: DataService,
    private router: Router,
    private toast: ToastService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.toast.errorToast("Login Form Error");
      // or you can just return
    } else {
      console.log(this.registerForm.value);
      this.dService.Login(this.registerForm.value);
      this.dService.loginCreds = this.registerForm.value;
      this.dService.setLogin(this.registerForm.value);
      this.registerForm.reset();
      
    }
  }
}
