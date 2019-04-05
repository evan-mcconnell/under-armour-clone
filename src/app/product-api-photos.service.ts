import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_KEY } from './api-keys';


@Injectable()
export class ProductApiPhotosService {

  constructor(private http: Http) { }

  getProductPhotos() {
    return this.http.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=shoes`)
  }
}
