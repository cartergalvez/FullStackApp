import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serivecs/data.service';
import { GoogleSheet } from 'src/app/interfaces/google-sheet';
import { __values } from 'tslib';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-p-test',
  templateUrl: './p-test.component.html',
  styleUrls: ['./p-test.component.scss']
})
export class PTestComponent implements OnInit {
  displayQuestion: GoogleSheet;
  aCouter = 0;
  constructor(private dServ: DataService) { }

  ngOnInit() {
    this.displayQuestion = this.dServ.getFirstQuestion();
    console.log(this.displayQuestion);
  }

  nextQuestion(){
   this.displayQuestion = this.dServ.getNextQuestions();
  
  }

  checkQuestion(answer) {
    if (answer == this.displayQuestion.correct) {
        this.aCouter++;
        console.log(this.aCouter);
    } else {
      alert('wrong');
    }
    this.nextQuestion();
    
  }



}
