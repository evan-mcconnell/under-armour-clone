import { Injectable } from '@angular/core';
import { FooterMenu } from './models/footer.model';
import { footerMenus } from './footer/footerData';


@Injectable()
export class FooterMenuService {

  constructor() { }

  getFooterMenus() {
    return footerMenus;
  }
}
