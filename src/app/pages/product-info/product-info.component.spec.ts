import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductInfoComponent } from './product-info.component';
import { BreadCrumbsComponent } from 'src/app/shared/components/bread-crumbs/bread-crumbs.component'
import { ControlsComponent } from 'src/app/shared/components/controls/controls.component'
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  const mockActivatedRoute = {
    data: of({ productInfo: { ingredients: null } })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductInfoComponent,
        BreadCrumbsComponent,
        ControlsComponent,
       ],
      imports: [
        RouterModule,
        HttpClientTestingModule        
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute  },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showIngredients to false if currentProduct ingredients is null', () => {
    expect(component.showIngredients).toBe(false);
  });

});
