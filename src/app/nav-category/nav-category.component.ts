import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../models/nav-category.model'

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.scss']
})
export class NavCategoryComponent implements OnInit {
  @Input() dropData;
  constructor() { }

  ngOnInit() {
    console.log("dropData", this.dropData)
  }

}
