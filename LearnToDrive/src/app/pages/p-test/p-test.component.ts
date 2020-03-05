import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serivecs/data.service';

@Component({
  selector: 'app-p-test',
  templateUrl: './p-test.component.html',
  styleUrls: ['./p-test.component.scss']
})
export class PTestComponent implements OnInit {

  constructor(private dServ: DataService) { }

  ngOnInit() {
  }

}
