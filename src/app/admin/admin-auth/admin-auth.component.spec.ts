import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { ModalWindowComponent } from 'src/app/shared/components/modal-window/modal-window.component';

import { AdminAuthComponent } from './admin-auth.component';

describe('AdminAuthComponent', () => {
  let component: AdminAuthComponent;
  let fixture: ComponentFixture<AdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AdminAuthComponent,
        ModalWindowComponent,
       ],
       imports: [
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
       ],
      providers: [
        { provide: Auth, useValue: {}  },
        { provide: Firestore, useValue: {}  },
        { provide: ToastrService, useValue: {} },
        { provide: MatDialog, useValue: {}  },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with controls', ()=>{
    expect(component.adminLoginForm.contains('email')).toBeTruthy();
    expect(component.adminLoginForm.contains('password')).toBeTruthy();
  })
  it('should mark email as invalid if empty value', ()=>{
    const control = component.adminLoginForm.get('email')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })
});


