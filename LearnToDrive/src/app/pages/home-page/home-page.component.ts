import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isLoggedIn = this.dServ.isLoggedIn;
  constructor(private dServ: DataService , private router: Router) { }

  ngOnInit() {
  }

  isAbleToTest(){
      !this.dServ.isLoggedIn ? this.router.navigate(['Login']) : this.router.navigate(['TestPage']);
  }

}
