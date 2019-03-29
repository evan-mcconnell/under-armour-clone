import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ButtonBanner } from '../models/btnBanner.model';


@Component({
  selector: 'app-splash-banner',
  templateUrl: './splash-banner.component.html',
  styleUrls: ['./splash-banner.component.scss']
})
export class SplashBannerComponent implements OnInit {
  public isMobile: boolean;
  @Input() topBannerData: ButtonBanner;
  constructor() { }

  ngOnInit() {
    console.log("splash in init", this.topBannerData);
    this.getIsMobile();
  }
  @HostListener('window:resize') onResize(event) {
    this.getIsMobile();
  }
  getIsMobile() {
    if (window.innerWidth > 985) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
