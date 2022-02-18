import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNftComponent } from './home-nft.component';

describe('HomeNftComponent', () => {
  let component: HomeNftComponent;
  let fixture: ComponentFixture<HomeNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
