import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoadUpdateConfirmComponent } from './modal-load-update-confirm.component';

describe('ModalLoadUpdateConfirmComponent', () => {
  let component: ModalLoadUpdateConfirmComponent;
  let fixture: ComponentFixture<ModalLoadUpdateConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoadUpdateConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoadUpdateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
