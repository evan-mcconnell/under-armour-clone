import { TestBed, inject } from '@angular/core/testing';

import { ProductApiPhotosService } from './product-api-photos.service';

describe('ProductApiPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductApiPhotosService]
    });
  });

  it('should be created', inject([ProductApiPhotosService], (service: ProductApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
