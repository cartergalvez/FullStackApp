import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serivecs/data.service';

@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.scss']
})
export class EndscreenComponent implements OnInit {
  score;
  constructor(private dServ:DataService) { }

  ngOnInit() 
  { this.score = this.dServ.score;
    this.dServ.score = 0;
  }

}
