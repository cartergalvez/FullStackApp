import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  history = `${this.dService.Quiz}/${localStorage.getItem('user')}`
  resultHistory;
  wrongQuestion: string[] = []
  wrongAnswer: string[] = []
  categories: string[] = []
  parseCategories;
  currentTest = Object.create(null);
  constructor(private http: HttpClient, private dService: DataService) { }

  GetHistory() {
    this.http.get(this.history).subscribe(data => {
      this.resultHistory = data;
      console.log(this.resultHistory)
      for (let r of this.resultHistory) {
        this.categories.push(r.categories.split(',', 34));
        this.wrongAnswer.push(r.wrongAnswer.split(',', 34));
        this.wrongQuestion.push(r.wrongQuestions.split(',', 34));
      }
      console.log(this.wrongQuestion)

      console.log(this.wrongAnswer)
      console.log(this.categories)
      console.log(obj)
      console.log(this.resultHistory);
    })
    let obj = {
      wrongAnswers: this.wrongAnswer,
      wrongQuestions: this.wrongQuestion,
      categories: this.categories
    }
    return obj;
  }

}
