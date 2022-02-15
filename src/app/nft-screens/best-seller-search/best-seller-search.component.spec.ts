import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerSearchComponent } from './best-seller-search.component';

describe('BestSellerSearchComponent', () => {
  let component: BestSellerSearchComponent;
  let fixture: ComponentFixture<BestSellerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
