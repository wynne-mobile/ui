import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPartComponent } from './menu-part.component';

describe('MenuPartComponent', () => {
  let component: MenuPartComponent;
  let fixture: ComponentFixture<MenuPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
