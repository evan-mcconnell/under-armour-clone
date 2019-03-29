import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main/main.component'
import { ImgBanner } from '../models/imgBanner.model';

@Component({
  selector: 'app-image-banner',
  templateUrl: './image-banner.component.html',
  styleUrls: ['./image-banner.component.scss']
})
export class ImageBannerComponent implements OnInit {
  @Input() imgData: ImgBanner;
  constructor() { }

  ngOnInit() {
    console.log("image banner init", this.imgData)
  }
  getImg() {
    return this.imgData.image;
  }

}
