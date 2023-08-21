import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHistoryComponent } from './menu-history.component';

describe('MenuHistoryComponent', () => {
  let component: MenuHistoryComponent;
  let fixture: ComponentFixture<MenuHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
