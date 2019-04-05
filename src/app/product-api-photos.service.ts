import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductApiPhotosService {

  constructor(private http: Http) { }

  getProductPhotos() {
    return this.http.get(`https://api.unsplash.com/photos/?client_id={process.env.API_KEY}`)
  }
}
