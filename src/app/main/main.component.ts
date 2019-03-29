import { Component, OnInit } from '@angular/core';
import { buttonBannerData, imgBannerData } from './bannerData';
import { ButtonBanner } from '../models/btnBanner.model';
import { ImgBanner } from '../models/imgBanner.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public ButtonBanner: any;
  public buttonBanners: ButtonBanner[] = buttonBannerData;
  public imgBanners: ImgBanner[] = imgBannerData;

  constructor() {
  }
  ngOnInit() {
    console.log("button banners: ", this.buttonBanners);
    console.log("image banners: ", this.imgBanners);
  }
  
}
