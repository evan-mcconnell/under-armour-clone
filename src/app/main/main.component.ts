import { Component, OnInit } from '@angular/core';
import { buttonBannerData } from './bannerData';
import { buttonBanner } from './btnBanner.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public buttonBanner: any;
  public buttonBanners: buttonBanner[] = buttonBannerData;
  constructor() {
  }
  ngOnInit() {
  }
}
