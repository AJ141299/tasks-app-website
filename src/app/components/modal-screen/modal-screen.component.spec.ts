import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScreenComponent } from './modal-screen.component';

describe('ModalScreenComponent', () => {
  let component: ModalScreenComponent;
  let fixture: ComponentFixture<ModalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
