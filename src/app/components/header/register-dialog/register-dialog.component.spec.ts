import { InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

import { RegisterDialogComponent } from './register-dialog.component';

describe('RegisterDialogComponent', () => {
  let component: RegisterDialogComponent;
  let fixture: ComponentFixture<RegisterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDialogComponent ],
      imports:[
        MatDialogModule,
        MatFormFieldModule,
        NoopAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: InjectionToken, useValue: {} },
        { provide: MatDialog, useValue: {}  }, 
        { provide: Auth, useValue: {}  }, 
        { provide: Firestore, useValue: {}  }, 
        { provide: ToastrService, useValue: {}  }, 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with controls', ()=>{
    expect(component.signUpForm.contains('userEmail')).toBeTruthy();
    expect(component.signUpForm.contains('userFirstName')).toBeTruthy();
    expect(component.signUpForm.contains('userLastName')).toBeTruthy();
    expect(component.signUpForm.contains('userPhoneNumber')).toBeTruthy();
    expect(component.signUpForm.contains('userPassword')).toBeTruthy();
    expect(component.signUpForm.contains('userRepeatPassword')).toBeTruthy();
    expect(component.signUpForm.contains('termsAndConditions')).toBeTruthy();
  })
  it('should mark userEmail as invalid if empty value', ()=>{
    const control = component.signUpForm.get('userEmail')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark userFirstName as invalid if empty value', ()=>{
    const control = component.signUpForm.get('userFirstName')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark userLastName as invalid if empty value', ()=>{
    const control = component.signUpForm.get('userLastName')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark userPassword as invalid if empty value', ()=>{
    const control = component.signUpForm.get('userPassword')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark userPhoneNumber as invalid if empty value', ()=>{
    const control = component.signUpForm.get('userPhoneNumber')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
  it('should mark userRepeatPassword as invalid if empty value', ()=>{
    const control = component.signUpForm.get('userRepeatPassword')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })

  it('should set checkPassword to true if passwords match', ()=>{
    const password = 'password123';
    component.signUpForm.patchValue({
      userPassword: password,
      userRepeatPassword: password,
    })
    component.passwordVerification();

    expect(component.checkPassword).toBeTrue;
    expect(component.signUpForm.controls['userRepeatPassword'].hasError('matchError')).toBeFalsy
  })
  it('should set checkPassword to true if passwords match', ()=>{
    const password = 'password123';
    const passwordRepeat = 'password1234';
    component.signUpForm.patchValue({
      userPassword: password,
      userRepeatPassword: passwordRepeat,
    })
    component.passwordVerification();

    expect(component.checkPassword).toBeFalsy;
    expect(component.signUpForm.controls['userRepeatPassword'].hasError('matchError')).toBeTrue;

  })
});
