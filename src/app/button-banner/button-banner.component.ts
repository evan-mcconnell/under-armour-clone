import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main/main.component'
import { ButtonBanner } from '../models/btnBanner.model';


@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.scss']
})
export class ButtonBannerComponent implements OnInit {
  @Input() data: ButtonBanner;
  constructor() { }

  ngOnInit() {
    console.log("button banner init: ", this.data.name);
  }

}
