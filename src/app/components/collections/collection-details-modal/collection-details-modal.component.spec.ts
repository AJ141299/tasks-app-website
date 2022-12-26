import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsModalComponent } from './collection-details-modal.component';

describe('CollectionDetailsModalComponent', () => {
  let component: CollectionDetailsModalComponent;
  let fixture: ComponentFixture<CollectionDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
