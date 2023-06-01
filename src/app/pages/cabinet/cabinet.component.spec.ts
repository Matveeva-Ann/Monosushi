import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CabinetComponent } from './cabinet.component';
import { NavComponent } from './nav/nav.component';
import { PagesComponent } from './pages/pages.component';

describe('CabinetComponent', () => {
  let component: CabinetComponent;
  let fixture: ComponentFixture<CabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CabinetComponent,
        PagesComponent,
        NavComponent,
       ],
       imports: [
        RouterModule
       ],
       providers: [
        { provide: ActivatedRoute, useValue: {}  },
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
