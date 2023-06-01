import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';
import { TableComponent } from '../../table/table.component';

import { GoodsTableComponent } from './goods-table.component';

describe('GoodsTableComponent', () => {
  let component: GoodsTableComponent;
  let fixture: ComponentFixture<GoodsTableComponent>;
  let service: GoodsServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GoodsTableComponent,
        TableComponent
       ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(GoodsServiceService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve goods from service ', function () {
    const mockData = [
      {
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 7,
        img: 'string',
        price: 2,
        count: 3,
        unit: 'string',
        categoryRol: 'string',
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
        price: 2,
        count: 3,
        unit: 'string',
        categoryRol: 'string',
        id: 3
      },
      ];
    spyOn(service, 'getGoods').and.returnValue(of(mockData));
    component.getAllGoods();
    expect(component.goodsArr).toEqual(mockData);
  });
});
