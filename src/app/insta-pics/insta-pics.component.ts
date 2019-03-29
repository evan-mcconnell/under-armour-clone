import { Component, OnInit, Input } from '@angular/core';
import { InstaPic } from '../models/instaPic.model';


@Component({
  selector: 'app-insta-pics',
  templateUrl: './insta-pics.component.html',
  styleUrls: ['./insta-pics.component.scss']
})
export class InstaPicsComponent implements OnInit {
  @Input() instaData: InstaPic;
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }
  getSize() {
    if (this.id === 0 || this.id === 8) {
      return "large";
    }
  }
}
