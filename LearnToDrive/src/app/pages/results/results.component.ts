import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  result: any;
  // wrongQuestions: string[] = this.resultService.wrongQuestion;
  // wrongAnswers: string[] = this.resultService.wrongAnswer;
  // categories: string[] = this.resultService.categories;
  get testResult(){
    console.log(this.resultService.currentTest)
    return this.resultService.currentTest;
  }
  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.result = this.resultService.GetHistory();
    console.log(this.result)
    
  }

 

}
