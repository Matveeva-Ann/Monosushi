import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminNavComponent } from './admin-nav.component';

describe('AdminNavComponent', () => {
  let component: AdminNavComponent;
  let fixture: ComponentFixture<AdminNavComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ AdminNavComponent ],
      imports: [
        RouterTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});




