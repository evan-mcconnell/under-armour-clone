import { Component, OnInit } from '@angular/core';
import { footerMenus } from './footerData';
import { FooterMenu } from '../models/footer.model';
import { FooterMenuService } from '../footer-menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterMenuService]
})
export class FooterComponent implements OnInit {
  linkMenus: FooterMenu[];
  constructor(private footerService: FooterMenuService) { }

  ngOnInit() {
    this.linkMenus = this.footerService.getFooterMenus();
    console.log("footer menus", this.linkMenus);
  }
}
