import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component'
import { ButtonBanner } from '../models/btnBanner.model';


@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.scss']
})
export class ButtonBannerComponent implements OnInit {
  public isMobileResolution: boolean;
  @Input() data: ButtonBanner;
  constructor() {
  if (window.innerWidth < 768) {
    this.isMobileResolution = true;
  } else {
    this.isMobileResolution = false;
  }
}

  ngOnInit() {
    console.log("button banner init: ", this.data.name);
  }

  @HostListener('window:resize') onResize(event) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

  }

}
