import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.scss']
})
export class ButtonBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log("button banner init", this.bannerData);
    // console.log("button banner init", this.buttonBanner);
  }

}
