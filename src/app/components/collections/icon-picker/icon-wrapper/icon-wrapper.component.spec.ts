import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWrapperComponent } from './icon-wrapper.component';

describe('IconWrapperComponent', () => {
  let component: IconWrapperComponent;
  let fixture: ComponentFixture<IconWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
