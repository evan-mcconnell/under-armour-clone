import { Component, OnInit } from '@angular/core';
import { buttonBannerData } from './bannerData';
import { ButtonBanner } from './btnBanner.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public ButtonBanner: any;
  public buttonBanners: ButtonBanner[] = buttonBannerData;
  constructor() {
  }
  ngOnInit() {
    console.log(this.buttonBanners);
  }
}
