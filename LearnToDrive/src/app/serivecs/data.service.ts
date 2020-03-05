import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  parseURL;
  private url = "https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/1/public/full?alt=json"
  constructor(private http: HttpClient) { }

  parseDate(){
    this.parseURL = this.http.get(this.url);
    this.parseURL.subscribe(
      x => console.log(x)
    )
  }  
}
