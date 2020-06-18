import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { __values } from 'tslib';
import { VirtualTimeScheduler } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-p-test',
  templateUrl: './p-test.component.html',
  styleUrls: ['./p-test.component.scss']
})
export class PTestComponent implements OnInit {
  displayQuestion: any;
  wrongQuestion: any[] = [];
  wrongAnswer: string[] = [];
  aCouter = 0;
  questionsList;

  constructor(private dServ: DataService, private router: Router, private toast: ToastService) {
  }

  ngOnInit() {
    this.nextQuestion();
  }

  nextQuestion() {
    this.dServ.GetQuiz().then(res => {
      this.questionsList = res;
      this.displayQuestion = this.dServ.getNextQuestions(res);
   
    })
    //this.displayQuestion = this.dServ.getNextQuestions();
    // console.log(this.dServ.answeredQuestions);
  }



  checkQuestion(answer) {
    if (answer == this.displayQuestion.correct) {
      this.dServ.score++
      this.toast.successToast('Correct')
      this.aCouter = this.dServ.score;
    } else {
      this.dServ.wrongQuestions.push(this.displayQuestion.questions);
      this.dServ.wrongAnswer.push(answer);
      this.dServ.Categories.push(this.displayQuestion.categories)
      this.toast.errorToast('Incorrect')
    }
    if (this.dServ.counter < 34) {
      this.nextQuestion();
    }
    else {
      this.dServ.counter = 0;
      this.router.navigate(['/endScreen']);
    }
  }



}




