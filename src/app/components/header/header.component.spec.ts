import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { HeaderComponent } from './header.component';
import { NavPagesComponent } from './nav-pages/nav-pages.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ActivatedRoute, RouterModule } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        NavPagesComponent,
        BurgerMenuComponent
       ],
      imports: [
        HttpClientTestingModule,
        RouterModule,
        
      ],
      providers: [
        { provide: MatDialog, useValue: {}  },
        { provide: ActivatedRoute, useValue: {}  },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set countProd and priseProd when allBasket is not null', () => {
    const basket = [
      { price: 10, count: 5 },
      { price: 18, count: 6 },
      { price: 0, count: 6 },
    ];

    localStorage.setItem('basket', JSON.stringify(basket));
    component.loadBasket();

    expect(component.countProd).toEqual(basket.length);
    expect(component.priseProd).toEqual(10*5 + 18*6 + 0*6)

  });

  it('should set countProd to 0 when allBasket is null', () => {
    localStorage.removeItem('basket');
    component.loadBasket();

    expect(component.countProd).toEqual(0);
    expect(component.priseProd).toEqual(0);
  });

});
