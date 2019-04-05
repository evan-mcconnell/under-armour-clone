import { Component, OnInit, Input } from '@angular/core';
import { Nav } from '../models/nav.model'
import { Category } from '../models/nav-category.model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 @Input() navData: Nav;
 @Input() id: number;
 public isHovering: boolean = false;
 // selectedCategory: Category;
  constructor() { }

  ngOnInit() {
    console.log("nav init", this.navData.categories)
  }
  //this will get links from the data file (or database) eventually
  // getLeftLinks() {
  //   return this.navData.leftLinks[id].link;
  // }
  mouseHover() {
    this.isHovering = true;
  }
  mouseHovering() {
    this.isHovering = true;
  }
  mouseLeft() {
    setTimeout( () => {
      this.isHovering = false;
    }, 300);
  }
}
