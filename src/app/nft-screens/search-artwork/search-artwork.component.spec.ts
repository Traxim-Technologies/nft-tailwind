import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArtworkComponent } from './search-artwork.component';

describe('SearchArtworkComponent', () => {
  let component: SearchArtworkComponent;
  let fixture: ComponentFixture<SearchArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchArtworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
