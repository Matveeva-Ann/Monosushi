
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './category-form.component';

describe('CategoryFormComponent', () => {
  let component: CategoryFormComponent;
  let fixture: ComponentFixture<CategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFormComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule 
      ],
      providers: [
        { provide: Storage, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with controls', ()=>{
    expect(component.categoryForm.contains('title')).toBeTruthy();
    expect(component.categoryForm.contains('path')).toBeTruthy();
    expect(component.categoryForm.contains('img')).toBeTruthy();
  })
  it('should mark title as invalid if empty value', ()=>{
    const control = component.categoryForm.get('title')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark path as invalid if empty value', ()=>{
    const control = component.categoryForm.get('path')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark img as invalid if empty value', ()=>{
    const control = component.categoryForm.get('img')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
});
