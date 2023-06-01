import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { BreadCrumbsComponent } from 'src/app/shared/components/bread-crumbs/bread-crumbs.component';
import { PromotionsInfoComponent } from './promotions-info.component';

describe('PromotionsInfoComponent', () => {
  let component: PromotionsInfoComponent;
  let fixture: ComponentFixture<PromotionsInfoComponent>;
  const mockActivatedRoute = {
    data: of ({ promotionsInfo: { } })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PromotionsInfoComponent,
        BreadCrumbsComponent,
       ],
      imports: [
        RouterModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
