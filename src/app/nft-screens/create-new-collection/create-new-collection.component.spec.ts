import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCollectionComponent } from './create-new-collection.component';

describe('CreateNewCollectionComponent', () => {
  let component: CreateNewCollectionComponent;
  let fixture: ComponentFixture<CreateNewCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
