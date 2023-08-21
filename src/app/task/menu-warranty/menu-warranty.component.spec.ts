import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWarrantyComponent } from './menu-warranty.component';

describe('MenuWarrantyComponent', () => {
  let component: MenuWarrantyComponent;
  let fixture: ComponentFixture<MenuWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWarrantyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
