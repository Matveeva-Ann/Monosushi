import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';
import { TableComponent } from '../../table/table.component';

import { CategoryTableComponent } from './category-table.component';

describe('CategoryTableComponent', () => {
  let component: CategoryTableComponent;
  let fixture: ComponentFixture<CategoryTableComponent>;
  let service: CategoryServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CategoryTableComponent,
        TableComponent,
       ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CategoryServiceService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve categories from service ', function () {
    const mockData = [
      {
        title: 'string',
        path: 'string',
        img: 'string',
        id: 1
      },
      {
        title: 'string',
        path: 'string',
        img: 'string',
        id: 2
      },
      ];
    spyOn(service, 'getCategory').and.returnValue(of(mockData));

    component.loadCategories();

    expect(component.categoryArr).toEqual(mockData);
  });
});
