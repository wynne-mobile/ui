import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLaborComponent } from './menu-labor.component';

describe('MenuLaborComponent', () => {
  let component: MenuLaborComponent;
  let fixture: ComponentFixture<MenuLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLaborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
