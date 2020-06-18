import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { ResultService } from 'src/app/services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
 ResultHistory;
 History = `${this.dService.Quiz}/${localStorage.getItem('user')}`;
Categories: any[] = [];
ParseCategories
  constructor(private dService: DataService, 
    private http: HttpClient, 
    private resultService: ResultService,
    private router: Router) { console.log(this.dService.loginCreds.username)}

  ngOnInit() {
     this.GetHistory()
  }

  GetHistory(){
    this.http.get(this.History).subscribe(data => {
      this.ResultHistory = data;
      console.log(this.ResultHistory)
    })
  }
  testResult(data){
    data.categories = data.categories.split(',');
    data.wrongAnswer = data.wrongAnswer.split(',');
    data.wrongQuestions = data.wrongQuestions.split(',');
    this.resultService.currentTest = data
    console.log(data)
    this.router.navigate([`result/${data.id}`]);
  }

}
