import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  loginCreds = {
    ID: 0,
    username: '',
    password: '',
    email: ''
  };
  // A quick way to reference fields from the html side
  get ID() { return this.registerForm.get('ID'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get email() { return this.registerForm.get('email'); }


  constructor(private formBuilder: FormBuilder,
    private dService: DataService,
    private router: Router,
    private toast: ToastService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.toast.errorToast("Form Error");
    }
    else {
      console.log(this.registerForm.value);
      this.dService.AddUser(this.registerForm.value);
      this.registerForm.reset();
    }
  }
  // // This function is used if you didn't use a reactive form.
  // // onSubmission(uName, pWord, id) {
  // //   // this.username
  // //   // this.password
  // //   this.loginCreds.username = uName;
  // //   this.loginCreds.password = pWord;
  // //   this.loginCreds.ID = id;
  // //   this.dService.loginCreds = this.loginCreds;
  // //   this.dService.AddUser(this.loginCreds);
  // }

}
