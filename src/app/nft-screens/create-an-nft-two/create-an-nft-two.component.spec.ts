import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnNftTwoComponent } from './create-an-nft-two.component';

describe('CreateAnNftTwoComponent', () => {
  let component: CreateAnNftTwoComponent;
  let fixture: ComponentFixture<CreateAnNftTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnNftTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnNftTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
