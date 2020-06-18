import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.scss']
})
export class EndscreenComponent implements OnInit {
   dateFormat;
   now = new Date();
  score;
  subString
  QuizTable = {};
  constructor(private dServ: DataService) {
  }

  ngOnInit() {
    this.dateFormat = this.now ;
    this.score = this.dServ.score;
    // let stringCategories = this.dServ.Categories.toString();
    // const parseCategories = stringCategories.split(',',34);
    // let stringWrongAnswer = this.dServ.wrongAnswer.toString();
    // const wAnswer = stringWrongAnswer.split(',', 34);
    // console.log(this.dServ.wrongAnswer.toString());
    // console.log(this.dServ.wrongQuestions.toString());
    // let substring = this.dServ.wrongQuestions.toString();
    // const yes = substring.split(',',34);
    // console.log(yes);
    let parseWrongQuestions = this.dServ.wrongQuestions.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    let parseWrongAnswer = this.dServ.wrongAnswer.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    let parseCategories = this.dServ.wrongAnswer.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    console.log();
    // console.log(wAnswer);
    // console.log(parseCategories);
    this.QuizTable = {
      id: 0,
      userId: this.dServ.loginCreds.username,
      score: this.score,
      progress:0,
      quizType: 'written',
      Date: this.dateFormat,
      wrongQuestions: parseWrongQuestions.toString(),
      wrongAnswer: parseWrongAnswer.toString(),
      Categories: parseCategories.toString()
    };
    this.submitQuiz();
    console.log(this.QuizTable);
    this.dServ.score = 0;
  }

  submitQuiz() {
      this.dServ.QuizInfo(this.QuizTable);
  }
}


