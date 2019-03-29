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
  @Input() id: number;
  constructor() {
  }

  ngOnInit() {
    console.log("button banner init: ", this.data.name);
    console.log("banner id: ", this.id);
  }

  @HostListener('window:resize') onResize(event) {
    this.getIsMobile();
  }
  getIsMobile() {
    if (this.id === 0 && window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
}
