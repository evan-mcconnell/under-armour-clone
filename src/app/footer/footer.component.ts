import { Component, OnInit } from '@angular/core';
import { footerLinks } from './footerData';
import { FooterMenu, FooterLinks } from '../models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkMenus: FooterMenu = footerLinks;
  // links: FooterLinks[] = this.linkMenus.links;
  constructor() { }

  ngOnInit() {
    console.log("footer menus", this.linkMenus[0].links[0].name);
  }

}
