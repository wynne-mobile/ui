import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCertificateComponent } from './menu-certificate.component';

describe('MenuCertificateComponent', () => {
  let component: MenuCertificateComponent;
  let fixture: ComponentFixture<MenuCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
