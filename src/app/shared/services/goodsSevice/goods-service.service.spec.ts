import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GoodsServiceService } from './goods-service.service';


describe('GoodsServiceService', () => {
  let httpMock: HttpTestingController;
  let service: GoodsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(GoodsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch goods from the API via GET request', () => {
    const mockData = [
      { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 8,
        img: 'string',
        price: 4,
        count: 5,
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
        weight: 8,
        img: 'string',
        price: 4,
        count: 5,
        unit: 'string',
        categoryRol: 'string',
        id: 2 
      },
    ];

    service.getGoods().subscribe((goods) => {
      expect(goods).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/goods');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should fetch goods by category from the API via GET request', () => {
    const categoryName = 'category1';
    const mockData = [
      { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 8,
        img: 'string',
        price: 4,
        count: 5,
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
        weight: 8,
        img: 'string',
        price: 4,
        count: 5,
        unit: 'string',
        categoryRol: 'string',
        id: 2 
      },
    ];

    service.getGoodsByCategory(categoryName).subscribe((goods) => {
      expect(goods).toEqual(mockData);
    });

    const req = httpMock.expectOne(`http://localhost:3000/goods?categoryPath=${categoryName}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should fetch a single good from the API via GET request', () => {
    const goodId = 2;
    const mockData = { 
        category: 'string',
        categoryPath: 'string',
        title: 'string',
        path: 'string',
        ingredients: 'string',
        weight: 8,
        img: 'string',
        price: 4,
        count: 5,
        unit: 'string',
        categoryRol: 'string',
        id: 2
     };

    service.getOneGood(goodId).subscribe((good) => {
      expect(good).toEqual(mockData);
    });

    const req = httpMock.expectOne(`http://localhost:3000/goods/${goodId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

});
