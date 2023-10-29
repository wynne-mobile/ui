import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAssignMechanicComponent } from './menu-assign-mechanic.component';

describe('MenuAssignMechanicComponent', () => {
  let component: MenuAssignMechanicComponent;
  let fixture: ComponentFixture<MenuAssignMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAssignMechanicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAssignMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
