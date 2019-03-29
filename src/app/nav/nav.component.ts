import { Component, OnInit, Input } from '@angular/core';
import { Nav } from '../models/nav.model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 @Input() navData: Nav;
 @Input() id: number;
  constructor() { }

  ngOnInit() {
    console.log("nav init", this.navData)
  }
  getLeftLinks() {
    return this.navData.leftLinks[id].link;
  }
}
