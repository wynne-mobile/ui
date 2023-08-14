import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetailDialogComponent } from './load-detail-dialog.component';

describe('LoadDetailDialogComponent', () => {
  let component: LoadDetailDialogComponent;
  let fixture: ComponentFixture<LoadDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
