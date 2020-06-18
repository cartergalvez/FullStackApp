import { Component, OnInit } from '@angular/core';
import { BtwDataService } from 'src/app/services/btw-data.service';
import { BTW } from 'src/app/interfaces/btw';

@Component({
  selector: 'app-guide-book',
  templateUrl: './guide-book.component.html',
  styleUrls: ['./guide-book.component.scss']
})
export class GuideBookComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  Pics;
  constructor(private BtwServ: BtwDataService) { 
  }

  ngOnInit() {
    this.firstpage()
  }
  firstpage(){
    this.Pics = this.BtwServ.getFirstPage();
  }
  parking(){
    this.Pics = this.BtwServ.getParking();
  }
  SpecialDrivingSituations(){
    this.Pics = this.BtwServ.getSpecialDrivingSituations();
  }
  alcoholAndDrugs(){
    this.Pics = this.BtwServ.getALCOHOLANDDRUGS()
  }
  SharingTheRoad(){
    this.Pics = this.BtwServ.getSharingTheRoad();
  }
  VehiclePosittoning(){
    this.Pics = this.BtwServ.getVEHICLEPOSITIONING();
  }
  SafeDriving(){
    this.Pics = this.BtwServ.getSAFEDRIVINGPRACTICESSIGNALING();
  }
  turn(){
    this.Pics = this.BtwServ.getTurn();
  }
  laneControl(){
    this.Pics = this.BtwServ.getLaneControl();
  }
  getVISUALSEARCH(){
    this.Pics = this.BtwServ.getVISUALSEARCH();
  }
  LawsAndRules(){
   this.Pics = this.BtwServ.getLawsRules();
  }
  nextPage(){
    this.Pics = this.BtwServ.getNextPage();
  }

  pervPage(){
    this.Pics = this.BtwServ.getPervPage();
  }

}
