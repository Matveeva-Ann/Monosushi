import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { AuthDialogComponent } from './auth-dialog.component';


describe('AuthDialogComponent', () => {
  let component: AuthDialogComponent;
  let fixture: ComponentFixture<AuthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDialogComponent ],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatInputModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: ToastrService, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create form with controls', ()=>{
    expect(component.userLoginForm.contains('email')).toBeTruthy();
    expect(component.userLoginForm.contains('password')).toBeTruthy();
  })
  it('should mark email as invalid if empty value', ()=>{
    const control = component.userLoginForm.get('email')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark password as invalid if empty value', ()=>{
    const control = component.userLoginForm.get('password')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
});
