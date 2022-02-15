import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnNftComponent } from './create-an-nft.component';

describe('CreateAnNftComponent', () => {
  let component: CreateAnNftComponent;
  let fixture: ComponentFixture<CreateAnNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
