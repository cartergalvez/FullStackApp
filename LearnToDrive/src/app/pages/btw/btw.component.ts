import { Component, OnInit } from '@angular/core';
import { BtwDataService } from 'src/app/serivecs/btw-data.service';
import { BTW } from 'src/app/interfaces/btw';

@Component({
  selector: 'app-btw',
  templateUrl: './btw.component.html',
  styleUrls: ['./btw.component.scss']
})
export class BTWComponent implements OnInit {
  Pics: BTW[];
  constructor(private BtwServ: BtwDataService) { }

  ngOnInit() {
    this.Pics = this.BtwServ.pics;
  }

}
