import { Component, OnInit, Input } from '@angular/core';
import { Explore } from '../models/explore.model';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  @Input() exploreData: Explore;
  constructor() { }

  ngOnInit() {
    console.log("expore init", this.exploreData)
  }
  getImg() {
    return this.exploreData.image;
  }
  getLink() {
    return this.exploreData.link;
  }
}
