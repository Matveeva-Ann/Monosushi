import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from '../table/table.component';
import { of } from 'rxjs';
import { AdminCategoryComponent } from './admin-category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';
import { ICategoryResponse } from 'src/app/shared/interface/categoryInterface/category-interface';

describe('AdminCategoryComponent', () => {
  let component: AdminCategoryComponent;
  let fixture: ComponentFixture<AdminCategoryComponent>;
  let categoryService: CategoryServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AdminCategoryComponent,
        CategoryFormComponent,
        CategoryTableComponent,
        TableComponent,
       ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [CategoryServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryComponent);
    component = fixture.componentInstance;
    categoryService = TestBed.inject(CategoryServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load categories on initialization', () => {
    const mockCategories: ICategoryResponse[] = [
      // Define mock categories here
    ];
    spyOn(categoryService, 'getCategory').and.returnValue(of(mockCategories));

    component.ngOnInit();

    expect(component.categoryArr).toEqual(mockCategories);
  });

  it('should toggle addCategory flag on addCategoryBtn', () => {
    component.addCategory = true;

    component.addCategoryBtn();

    expect(component.addCategory).toBeFalse();
  });

  it('should set sendCategoryEdit and toggle addCategory flag on editedCategory', () => {
    const mockCategory: ICategoryResponse = {
      title: 'string',
      path: 'string',
      img: 'string',
      id: 5
    };
    component.addCategory = true;

    component.editedCategory(mockCategory);

    expect(component.sendCategoryEdit).toEqual(mockCategory);
    expect(component.addCategory).toBeFalse();
  });

  it('should toggle addCategory flag and reset sendCategoryEdit on pressToggle', () => {
    component.addCategory = true;
    component.sendCategoryEdit = {} as ICategoryResponse;

    component.pressToggle();

    expect(component.addCategory).toBeFalse();
    expect(component.sendCategoryEdit).toBeUndefined();
  });
});
