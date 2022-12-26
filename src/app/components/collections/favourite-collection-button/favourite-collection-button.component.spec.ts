import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCollectionButtonComponent } from './favourite-collection-button.component';

describe('FavouriteCollectionButtonComponent', () => {
  let component: FavouriteCollectionButtonComponent;
  let fixture: ComponentFixture<FavouriteCollectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCollectionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteCollectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
