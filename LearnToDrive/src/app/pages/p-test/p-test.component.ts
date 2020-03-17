import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serivecs/data.service';
import { GoogleSheet } from 'src/app/interfaces/google-sheet';
import { __values } from 'tslib';
import { VirtualTimeScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-test',
  templateUrl: './p-test.component.html',
  styleUrls: ['./p-test.component.scss']
})
export class PTestComponent implements OnInit {
  displayQuestion: GoogleSheet;
  aCouter = 0;
  constructor(private dServ: DataService, private router: Router) { 
    console.log(this.displayQuestion);
  }

  ngOnInit() {
    this.displayQuestion = this.dServ.getFirstQuestion();
    console.log(this.displayQuestion);
  }

  nextQuestion() {


    this.displayQuestion = this.dServ.getNextQuestions();
  }



  checkQuestion(answer) {
     
      if (answer == this.displayQuestion.correct) {
        this.dServ.score++
        console.log(this.aCouter);
        this.aCouter = this.dServ.score;
      } 
    if(this.dServ.counter < 34){
      this.nextQuestion();
      }
      else{
        this.dServ.counter = 0;
      this.router.navigate(['/endScreen']);
      
      }
    }

  }




