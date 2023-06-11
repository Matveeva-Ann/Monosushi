import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCallBackComponent } from './admin-call-back.component';

describe('AdminCallBackComponent', () => {
  let component: AdminCallBackComponent;
  let fixture: ComponentFixture<AdminCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCallBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
