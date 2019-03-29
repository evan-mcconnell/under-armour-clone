import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPicsComponent } from './insta-pics.component';

describe('InstaPicsComponent', () => {
  let component: InstaPicsComponent;
  let fixture: ComponentFixture<InstaPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
