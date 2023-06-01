import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';

import { GoodsFormComponent } from './goods-form.component';
import {EMPTY, of} from "rxjs";
import { CategoryServiceService } from 'src/app/shared/services/categoryService/category-service.service';

describe('GoodsFormComponent', () => {
  let component: GoodsFormComponent;
  let fixture: ComponentFixture<GoodsFormComponent>;
  let service: CategoryServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsFormComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: Storage, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CategoryServiceService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with controls', ()=>{
    expect(component.goodsForm.contains('category')).toBeTruthy();
    expect(component.goodsForm.contains('categoryRol')).toBeTruthy();
    expect(component.goodsForm.contains('categoryPath')).toBeTruthy();
    expect(component.goodsForm.contains('title')).toBeTruthy();
    expect(component.goodsForm.contains('path')).toBeTruthy();
    expect(component.goodsForm.contains('ingredients')).toBeTruthy();
    expect(component.goodsForm.contains('weight')).toBeTruthy();
    expect(component.goodsForm.contains('unit')).toBeTruthy();
    expect(component.goodsForm.contains('price')).toBeTruthy();
    expect(component.goodsForm.contains('img')).toBeTruthy();
  })
  it('should mark category as invalid if empty value', ()=>{
    const control = component.goodsForm.get('category')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark categoryRol as invalid if empty value', ()=>{
    const control = component.goodsForm.get('categoryRol')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark path as invalid if empty value', ()=>{
    const control = component.goodsForm.get('path')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark price as invalid if empty value', ()=>{
    const control = component.goodsForm.get('price')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark weight as invalid if empty value', ()=>{
    const control = component.goodsForm.get('weight')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })

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

    component.getCategories();

    expect(component.allCategories).toEqual(mockData);
  });
});
