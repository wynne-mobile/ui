import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLayoutContainerComponent } from './error-layout-container.component';

describe('ErrorLayoutContainerComponent', () => {
  let component: ErrorLayoutContainerComponent;
  let fixture: ComponentFixture<ErrorLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLayoutContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
