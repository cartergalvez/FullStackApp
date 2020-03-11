import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serivecs/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dServ: DataService) { }

  ngOnInit() {
  }

}
