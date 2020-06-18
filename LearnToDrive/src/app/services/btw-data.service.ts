import { Injectable } from '@angular/core';
import { BTW } from '../interfaces/btw';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BtwDataService {
  pics: BTW [] = [];
  apiURL = environment.api;
  parseURL
  currentPages = 0;
  // https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/2/public/full?alt=json
  public url = 'https://spreadsheets.google.com/feeds/list/1E0N0CqYudowd2O6ni7WmEs-dn76j3j7OvnuxEfsSzT4/2/public/full?alt=json'
  constructor(private http: HttpClient) { 
    this.parseDate()
    this.getFirstPage();
  }

  parseDate() {
    this.parseURL = this.http.get(this.url);
    this.parseURL.subscribe(
      x => {
        for (const s of x.feed.entry) {
          const nFo: BTW = {
            img: s.gsx$pics.$t,
            text: s.gsx$text.$t.split('•'),
            Categories: s.gsx$categories.$t
          }; this.pics.push(nFo);
        } console.log(this.pics);
      }
    )
  }

  getFirstPage(){
    return this.pics[0];
  }

  getNextPage(){
    this.currentPages = this.currentPages + 1;
    this.currentPages = this.currentPages % this.pics.length;
   return this.pics[this.currentPages];
  }
  getALCOHOLANDDRUGS(){
    this.currentPages = this.currentPages = 55;
    return this.pics[this.currentPages];
  }
  getSpecialDrivingSituations(){
    this.currentPages = this.currentPages = 47;
    return this.pics[this.currentPages];
  }
  getSharingTheRoad(){
    this.currentPages = this.currentPages = 37;
    return this.pics[this.currentPages];
  }
  getVEHICLEPOSITIONING(){
    this.currentPages = this.currentPages = 32;
    return this.pics[this.currentPages];
  }
  getSAFEDRIVINGPRACTICESSIGNALING(){
    this.currentPages = this.currentPages = 27;
    return this.pics[this.currentPages];
  }
  getParking(){
    this.currentPages = this.currentPages = 22;
    return this.pics[this.currentPages];
  }
  getTurn(){
    this.currentPages = this.currentPages = 17;
    return this.pics[this.currentPages];
  }
  getLawsRules(){
    this.currentPages = this.currentPages = 0;
    return this.pics[this.currentPages];
  }
  getLaneControl(){
    this.currentPages = this.currentPages = 13;
    return this.pics[this.currentPages];
  }
  getVISUALSEARCH(){
    this.currentPages = this.currentPages = 9;
    return this.pics[this.currentPages];
  }
  getPervPage(){
    if(this.currentPages === 0){
      this.currentPages = this.pics.length;
    }
    this.currentPages = this.currentPages - 1;
    return this.pics[this.currentPages];
  }

}
