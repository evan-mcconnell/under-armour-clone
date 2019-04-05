import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductApiPhotosService } from "../product-api-photos.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [ ProductApiPhotosService ]
})
export class StoreComponent implements OnInit {
  photos: any[] = null;
  constructor(private productPhotos: ProductApiPhotosService) { }
  ngOnInit() {
    console.log("loaded store");
  }
  getProducts(){
    console.log("got here");
    this.productPhotos.getProductPhotos().subscribe( response => {
      this.photos = response.json();
      console.log(this.photos);
    })
  }
}
