import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlsComponent } from 'src/app/shared/components/controls/controls.component';

import { BasketComponent } from './basket.component';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BasketComponent,
        ControlsComponent
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products and calculate total price if basket is not empty', () => {
    const mockBasket = [
      { id: 1, name: 'Product 1', price: 10, count: 2 },
      { id: 2, name: 'Product 2', price: 20, count: 1 },
      { id: 3, name: 'Product 3', price: 30, count: 3 }
    ];

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockBasket));
    component.loudProducts()

    expect(component.priseProd).toBe(10*2+20*1+30*3);
  });

  it('should not load products if basket is empty', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.loudProducts();

    expect(component.orderProducts).toBeNull();
    expect(component.priseProd).toBe(0);
  });

  it('should delete product from orderProducts', () => {
    component.orderProducts = [
      { category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 0,
        img: 'string',
        price: 0,
        count: 0,
        unit: 'string',
        categoryRol: 'string',
        id: 0
      },
      { category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 0,
        img: 'string',
        price: 0,
        count: 0,
        unit: 'string',
        categoryRol: 'string',
        id: 2
      },
    ];
    const productToDelete = {
      category: 'string',
      categoryPath: 'string',
      title: 'string',
      path: 'string',
      ingredients: 'string',
      weight: 0,
      img: 'string',
      price: 0,
      count: 0,
      unit: 'string',
      categoryRol: 'string',
      id: 2
    };
    component.deleteProduct(productToDelete);
    expect(component.orderProducts).not.toContain(productToDelete);
  });
});
