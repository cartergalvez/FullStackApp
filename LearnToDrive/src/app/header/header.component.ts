import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  get apiKey() {
    return localStorage.getItem('jwtKey') || null;
  }
  navLinks: any[];
  activeLinkIndex = -1;
  checkLogin: Observable<any>;

  constructor(private router: Router, private toast: ToastService, private dService: DataService) {
    
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0
      },
      {
        label: 'GuideBook',
        link: './GuideBook',
        index: 1
      },
       {
        label: 'Test',
        link: './TestPage',
        index: 2
      },
      {
        label: 'History',
        link: './History',
        index: 3
      },
      {
        label: 'SignUp',
        link: './SignUp',
        index: 4
      },
    
     
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  get isLoggedIn(){
    return this.dService.isLoggedIn
  }
 

  logOut() {
    localStorage.clear();
    this.router.navigate(["/Login"]);
    this.toast.successToast("You are Now Logged Out");
  }
}
