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
 public isHovering: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log("nav init", this.navData)
  }
  //this will get links from the data file (or database) eventually
  // getLeftLinks() {
  //   return this.navData.leftLinks[id].link;
  // }
  mouseHovering() {
    this.isHovering = true;
  }
  mouseLeft() {
    this.isHovering = false;
  }
}
