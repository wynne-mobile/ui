import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnRouteComponent } from './modal-en-route.component';

describe('ModalEnRouteComponent', () => {
  let component: ModalEnRouteComponent;
  let fixture: ComponentFixture<ModalEnRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEnRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEnRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
