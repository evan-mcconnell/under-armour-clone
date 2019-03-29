import { Component, OnInit } from '@angular/core';
import { navData } from './headerData'
import { Nav } from '../models/nav.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navDrops: Nav[] = navData;
  constructor() { }

  ngOnInit() {
    console.log("header init", this.navDrops)
  }

}
