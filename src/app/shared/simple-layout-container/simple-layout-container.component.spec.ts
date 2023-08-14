import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLayoutContainerComponent } from './simple-layout-container.component';

describe('SimpleLayoutContainerComponent', () => {
  let component: SimpleLayoutContainerComponent;
  let fixture: ComponentFixture<SimpleLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleLayoutContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
