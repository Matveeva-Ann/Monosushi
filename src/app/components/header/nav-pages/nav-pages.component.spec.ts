import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { NavPagesComponent } from './nav-pages.component';

describe('NavPagesComponent', () => {
  let component: NavPagesComponent;
  let fixture: ComponentFixture<NavPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPagesComponent ],
      imports: [
        HttpClientTestingModule,
        RouterModule,
      ],
       providers: [
        { provide: ActivatedRoute, useValue: {}  },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
