import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewClockTimeComponent } from './modal-new-clock-time.component';

describe('ModalNewClockTimeComponent', () => {
  let component: ModalNewClockTimeComponent;
  let fixture: ComponentFixture<ModalNewClockTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewClockTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewClockTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
