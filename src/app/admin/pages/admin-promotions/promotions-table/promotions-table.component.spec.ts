import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PromotionsServiceService } from 'src/app/shared/services/promotionsService/promotions-service.service';

import { PromotionsTableComponent } from './promotions-table.component';

describe('PromotionsTableComponent', () => {
  let component: PromotionsTableComponent;
  let fixture: ComponentFixture<PromotionsTableComponent>;
  let service:PromotionsServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsTableComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(PromotionsServiceService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve promo from service ', function () {
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
        id: 3
      },
      ];
    spyOn(service, 'getPromotions').and.returnValue(of(mockData));

    component.loadPromo();

    expect(component.promotionsArr).toEqual(mockData);
  });
});
