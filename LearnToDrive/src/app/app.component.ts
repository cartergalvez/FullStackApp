import { Component } from '@angular/core';
import { DataService } from './serivecs/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnToDrive';
  constructor(private dServe: DataService){}

}
