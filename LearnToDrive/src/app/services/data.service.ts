import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PTestComponent } from '../pages/p-test/p-test.component';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  question;
  answeredQuestions: any[] = [];
  public isLoggedIn = false;
  check;
  history;
  counter = 0;
  score = 0;
  wrongQuestions: any[] = [];
  wrong: any[] = [];
  Categories: any[] = []
  wrongAnswer: any[] = [];
  loginCreds = {
    ID: 0,
    username: '',
  };
  //https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/1/public/full?alt=json
  apiURL = environment.api;
  private loginURL = this.apiURL + 'api/auth/login';
  private getTest = this.apiURL + 'Tests';
  private addUserURL = this.apiURL + 'login';
  Quiz = this.apiURL + 'QuizResult';
  private token;

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // }

  constructor(private http: HttpClient, 
    private router: Router,
    private toast: ToastService) {
    this.GetQuiz();
  }
  
  Login(credentials: any) {
    this.token = this.http.post(this.loginURL, credentials).subscribe(data => {
      if (data != null) {
        this.token = data;
        this.token = this.token.token;
        localStorage.setItem('jwtKey', this.token);
        localStorage.setItem('user', this.loginCreds.username);
        this.router.navigate(['home']);
        this.toast.successToast(`Welcome ${localStorage.getItem("user")}`);
        console.log(localStorage.getItem('user'))
      }
      else {
        this.toast.errorToast("Username or password is wrong")
      }
      
    })
  }
  
  GetQuiz() {
    return this.http.get(this.getTest).toPromise();
  }
  
  // GetQuiz() {
    //   this.http.get(this.getTest).subscribe(data => {
      //     this.question = data;
      //     console.log(this.question);
      //     this.getNextQuestions();
      //     console.log
      //   })
      // }
      
      setLogin(LoginValue) {
        if (LoginValue != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
      
      getLogin() {
        return this.isLoggedIn;
      }
  
      addToAnsweredQuestions(arr) {
        this.answeredQuestions.push(...arr.splice(this.getRandomNum(arr), 1));
      }
      
      getRandomNum(arr) {
        const rNum = Math.floor(Math.random() * arr.length);
        return rNum
      }
      
      getNextQuestions(arr) {
        const randomQuestion = arr[this.getRandomNum(arr)]; 
        this.counter++
        this.addToAnsweredQuestions(arr);
        return randomQuestion;
      }

  AddUser(Add: any) {
    this.http.post(this.addUserURL, Add).subscribe(data => {
      if (data == false) {
        this.toast.errorToast("User Name is Taken")
      }
      else {
        this.toast.successToast("Thanks for siging up, Now please Login");
        this.router.navigate(['Login']);
      }
    })
  }

  QuizInfo(Add) {
    this.http.post<any>(this.Quiz, Add).subscribe(data => {
      console.log(data);
    })
  }

  // QuizInfo(Add) {

  //   const tokenInfo = `bearer ${JSON.parse(localStorage.getItem('jwtKey'))}`;
  //   debugger
  //   this.httpOptions.headers = this.httpOptions.headers.set('Authorization', tokenInfo);
  //   this.http.post(this.Quiz, Add, this.httpOptions).subscribe(data => {
  //     console.log(data);
  //   })
  // }


}
