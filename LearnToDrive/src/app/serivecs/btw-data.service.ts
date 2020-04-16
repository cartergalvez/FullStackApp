import { Injectable } from '@angular/core';
import { BTW } from '../interfaces/btw';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BtwDataService {
  pics: BTW [] = [];
  parseURL
  
  private url = 'https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/2/public/full?alt=json'
  constructor(private http: HttpClient) { 
    this.parseDate()
  }


  parseDate() {
    this.parseURL = this.http.get(this.url);
    this.parseURL.subscribe(
      x => {
        console.log(x);
        for (const s of x.feed.entry) {
          const nFo: BTW = {
            img: s.gsx$pics.$t

          }; this.pics.push(nFo);
        } console.log(this.pics);
      }
    )
  }
}
