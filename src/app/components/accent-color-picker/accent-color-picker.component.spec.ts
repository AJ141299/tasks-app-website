import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentColorPickerComponent } from './accent-color-picker.component';

describe('AccentColorPickerComponent', () => {
  let component: AccentColorPickerComponent;
  let fixture: ComponentFixture<AccentColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccentColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccentColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
