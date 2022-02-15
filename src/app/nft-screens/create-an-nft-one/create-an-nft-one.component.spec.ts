import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnNftOneComponent } from './create-an-nft-one.component';

describe('CreateAnNftOneComponent', () => {
  let component: CreateAnNftOneComponent;
  let fixture: ComponentFixture<CreateAnNftOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnNftOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnNftOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
