import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleSheet } from '../interfaces/google-sheet';
import { PTestComponent } from '../pages/p-test/p-test.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  parseURL;
  questions: GoogleSheet[] = []
  counter = 0;
  aCount = 0;
  private url = "https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/1/public/full?alt=json"
  constructor(private http: HttpClient) {
    this.parseDate();
  }

  parseDate() {
    this.parseURL = this.http.get(this.url);
    this.parseURL.subscribe(
      x => {
        console.log(x);
        for (const s of x.feed.entry) {
          const nFo: GoogleSheet = {
            id: s.gsx$id.$t as number,
            questions: s.gsx$questions.$t,
            a1: s.gsx$answer1.$t,
            a2: s.gsx$answer2.$t,
            a3: s.gsx$answer3.$t,
            a4: s.gsx$answer4.$t,
            correct: s.gsx$answer.$t
          }; this.questions.push(nFo);
        } console.log(this.questions);
      }
    )
  }

  getFirstQuestion(): GoogleSheet {
    return this.questions[0]
  }

  getNextQuestions(): GoogleSheet {
    this.counter++;
    return this.questions[this.counter]
  }




}
