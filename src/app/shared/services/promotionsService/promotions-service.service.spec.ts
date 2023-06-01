import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PromotionsServiceService } from './promotions-service.service';

describe('PromotionsServiceService', () => {
  let service: PromotionsServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(PromotionsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch promotions from the API via GET request', () => {
    const mockData = [
      {
        promoTitle: 'string',
        promoPath: 'string',
        description: 'string',
        img:'string',
        imgForHome: 'string',
        date: 'string',
        categoryPath: 'string',
        id: 1 
      },
      { 
        promoTitle: 'string',
        promoPath: 'string',
        description: 'string',
        img:'string',
        imgForHome: 'string',
        date: 'string',
        categoryPath: 'string', 
        id: 2 
      },
    ];

    service.getPromotions().subscribe((promotions) => {
      expect(promotions).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/promo');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should fetch a single promotion from the API via GET request', () => {
    const promoId = 1;
    const mockData = {
      promoTitle: 'string',
      promoPath: 'string',
      description: 'string',
      img:'string',
      imgForHome: 'string',
      date: 'string',
      categoryPath: 'string',
      id: 1 
    };

    service.getOnePromotion(promoId).subscribe((promotion) => {
      expect(promotion).toEqual(mockData);
    });

    const req = httpMock.expectOne(`http://localhost:3000/promo/${promoId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

});
