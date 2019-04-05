import { Component, OnInit } from '@angular/core';
import { footerLinks } from './footerData';
import { FooterMenu } from '../models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkMenus: FooterMenu[] = footerLinks;
  constructor() { }

  ngOnInit() {
  }

}
