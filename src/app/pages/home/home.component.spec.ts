import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { SushiNavigationComponent } from './sushi-navigation/sushi-navigation.component';
import { InfoComponent } from './info/info.component';

import { HomeComponent } from './home.component';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { InfoDeliverySushiComponent } from './info-delivery-sushi/info-delivery-sushi.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        CarrouselComponent,
        SushiNavigationComponent,
        InfoComponent,
        ProductCardComponent,
        InfoDeliverySushiComponent
       ],
      imports: [
        HttpClientTestingModule,
        CarouselModule,
        RouterModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {}  },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products based on categoryRolClick', () => {
  
    component.userProducts = [
      { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category2',
        id: 1
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 3
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 4
       },
    ];

    component.categoryRol('category1');

    expect(component.categoryRolClick).toBe('category1');
    expect(component.products).toEqual([
    { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 3
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 4
       },
    ]);
  });

  it('should filter products when categoryRolClick is "all"', () => {
    component.userProducts = [
      { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 3
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category2',
        id: 4
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 3
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category3',
        id: 4
       },
    ];

    component.categoryRol('all');

    expect(component.categoryRolClick).toBe('all');
    expect(component.products).toEqual(component.userProducts);
  });

  it('should filter products when categoryRolClick does not match any categoryRol', () => {
    component.userProducts = [
      { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 3
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category2',
        id: 4
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category1',
        id: 3
       },
       { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 3,
        count: 4,
        unit: 'string',
        categoryRol: 'category3',
        id: 4
       },
    ];

    component.categoryRol('category4');

    expect(component.categoryRolClick).toBe('category4');
    expect(component.products).toEqual([]);
  });
});
