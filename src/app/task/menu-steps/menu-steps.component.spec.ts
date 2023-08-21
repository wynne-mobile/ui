import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStepsComponent } from './menu-steps.component';

describe('MenuStepsComponent', () => {
  let component: MenuStepsComponent;
  let fixture: ComponentFixture<MenuStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
