import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleSheet } from '../interfaces/google-sheet';
import { PTestComponent } from '../pages/p-test/p-test.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  parseURL;
  question = []
  counter = 0;
  score = 0;
  //https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/1/public/full?alt=json
  apiURL = environment.api;
  private url = this.apiURL;
  constructor(private http: HttpClient) {
    this.parseDate();
  }
  
  parseDate() {
    this.parseURL = this.http.get(this.url);
    this.parseURL.subscribe(
      x => {
        
        this.question = x;
        console.log(this.question)
      }
      
      
      );


      
}

  getFirstQuestion() {
    return this.question[0]
    
  }

  getNextQuestions(): GoogleSheet {
    this.counter++;
    return this.question[this.counter]
  }




}
