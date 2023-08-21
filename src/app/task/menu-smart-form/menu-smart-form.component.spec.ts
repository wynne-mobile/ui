import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSmartFormComponent } from './menu-smart-form.component';

describe('MenuSmartFormComponent', () => {
  let component: MenuSmartFormComponent;
  let fixture: ComponentFixture<MenuSmartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSmartFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSmartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
