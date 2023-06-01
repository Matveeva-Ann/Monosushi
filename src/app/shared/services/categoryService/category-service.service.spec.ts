
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CategoryServiceService } from './category-service.service';

describe('CategoryServiceService', () => {
  let service: CategoryServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [CategoryServiceService],
    });
    service = TestBed.inject(CategoryServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch categories from the API via GET request', () => {
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

    service.getCategory().subscribe((categories) => {
      expect(categories).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/category');
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should add a new category via POST request', () => {
    const newCategory = { 
      title: 'string',
      path: 'string',
      img: 'string',
     };

    service.addCategory(newCategory).subscribe((category) => {
      expect(category).toEqual(newCategory);
    });

    const req = httpMock.expectOne('http://localhost:3000/category');;
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCategory);

    req.flush(newCategory);
  });

  it('should delete a category via DELETE request', () => {
    const categoryId = 1;

    service.deleteCategory(categoryId).subscribe();

    const req = httpMock.expectOne(`http://localhost:3000/category/${categoryId}`);
    expect(req.request.method).toBe('DELETE');

    req.flush({});
  });

  it('should update a category via PATCH request', () => {
    const updatedCategory = { 
      title: 'string',
      path: 'string',
      img: 'string',
      id: 1
    };
    const categoryId = 1;

    service.updateCategory(updatedCategory, categoryId).subscribe((category) => {
      expect(category).toEqual(updatedCategory);
    });

    const req = httpMock.expectOne(`http://localhost:3000/category/${categoryId}`);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(updatedCategory);
    
    req.flush(updatedCategory);
  });

});