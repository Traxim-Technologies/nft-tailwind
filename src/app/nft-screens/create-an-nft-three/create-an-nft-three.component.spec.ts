import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnNftThreeComponent } from './create-an-nft-three.component';

describe('CreateAnNftThreeComponent', () => {
  let component: CreateAnNftThreeComponent;
  let fixture: ComponentFixture<CreateAnNftThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnNftThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnNftThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
