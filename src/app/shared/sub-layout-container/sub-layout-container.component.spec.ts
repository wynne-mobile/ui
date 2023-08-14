import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLayoutContainerComponent } from './sub-layout-container.component';

describe('SubLayoutContainerComponent', () => {
  let component: SubLayoutContainerComponent;
  let fixture: ComponentFixture<SubLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLayoutContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
