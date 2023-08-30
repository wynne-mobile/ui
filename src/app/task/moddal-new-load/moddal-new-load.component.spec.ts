import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdalNewLoadComponent } from './moddal-new-load.component';

describe('ModdalNewLoadComponent', () => {
  let component: ModdalNewLoadComponent;
  let fixture: ComponentFixture<ModdalNewLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModdalNewLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModdalNewLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
