import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryLikeComponent } from './discovery-like.component';

describe('DiscoveryLikeComponent', () => {
  let component: DiscoveryLikeComponent;
  let fixture: ComponentFixture<DiscoveryLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
