import { Component, OnInit } from '@angular/core';
import { BtwDataService } from 'src/app/serivecs/btw-data.service';
import { BTW } from 'src/app/interfaces/btw';

@Component({
  selector: 'app-guide-book',
  templateUrl: './guide-book.component.html',
  styleUrls: ['./guide-book.component.scss']
})
export class GuideBookComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  Pics: BTW[];
  constructor(private BtwServ: BtwDataService) { }

  ngOnInit() {
    this.Pics = this.BtwServ.pics;
  }

}
