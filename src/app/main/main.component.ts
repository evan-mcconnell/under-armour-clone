import { Component, OnInit } from '@angular/core';
import { buttonBannerData, imgBannerData, exploreData, instaData } from './bannerData';
import { ButtonBanner } from '../models/btnBanner.model';
import { ImgBanner } from '../models/imgBanner.model';
import { Explore } from '../models/explore.model';
import { InstaPic } from '../models/instaPic.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public buttonBanners: ButtonBanner[] = buttonBannerData;
  public imgBanners: ImgBanner[] = imgBannerData;
  public explores: Explore[] = exploreData;
  public instaPics: InstaPic[] = instaData;

  constructor() {
  }
  ngOnInit() {
    console.log("button banners: ", this.buttonBanners);
    console.log("image banners: ", this.imgBanners);
    console.log("explore links: ", this.explores);
    console.log("instagrams: ", this.instaPics);
  }

}
