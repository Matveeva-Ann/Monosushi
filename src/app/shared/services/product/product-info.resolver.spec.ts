import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { ProductInfoResolver } from './product-info.resolver';
import { IGoodsResponse } from '../../interface/goodsInterface/goods-interface';
import { GoodsServiceService } from '../goodsSevice/goods-service.service';


describe('ProductInfoResolver', () => {
  let resolver: ProductInfoResolver;
  let goodsService: GoodsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    resolver = TestBed.inject(ProductInfoResolver);
    goodsService = TestBed.inject(GoodsServiceService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call getOneGood method of GoodsServiceService with correct parameter', () => {
    const mockGoodId = 1;
    const mockGoodsResponse: IGoodsResponse = { 
      category: 'string',
      categoryPath: 'string',
      title: 'string',
      path: 'string',
      ingredients: 'string',
      weight: 4,
      img: 'string',
      price: 4,
      count: 2,
      unit: 'string',
      categoryRol: 'string',
      id: mockGoodId, 
    };

    spyOn(goodsService, 'getOneGood').and.returnValue(of(mockGoodsResponse));

    const routeSnapshot: ActivatedRouteSnapshot = {
      paramMap: {
        get: (param: string) => {
          if (param === 'id') {
            return mockGoodId.toString();
          }
          return null;
        },
      },
    } as ActivatedRouteSnapshot;
    const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;

    resolver.resolve(routeSnapshot, stateSnapshot).subscribe((response) => {
      expect(response).toEqual(mockGoodsResponse);
      expect(goodsService.getOneGood).toHaveBeenCalledWith(mockGoodId);
    });
  });
  
});
