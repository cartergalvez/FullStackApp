import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serivecs/data.service';
import { GoogleSheet } from 'src/app/interfaces/google-sheet';

@Component({
  selector: 'app-p-test',
  templateUrl: './p-test.component.html',
  styleUrls: ['./p-test.component.scss']
})
export class PTestComponent implements OnInit {
  displayQuestion: GoogleSheet;
   aC = 0;
  constructor(private dServ: DataService) { }

  ngOnInit() {
    this.displayQuestion = this.dServ.getFirstQuestion();
    console.log(this.displayQuestion);
  }

  nextQuestion(id){
    this.displayQuestion = this.dServ.getNextQuestion(id);
  }


}
