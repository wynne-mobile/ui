import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFileComponent } from './menu-file.component';

describe('MenuFileComponent', () => {
  let component: MenuFileComponent;
  let fixture: ComponentFixture<MenuFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
