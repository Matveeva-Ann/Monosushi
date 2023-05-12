import { Component, Inject } from '@angular/core';
// import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ROLE } from 'src/app/shared/constants/roles.constant';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent {
  public signUpForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private auth: Auth,
    private afs: Firestore,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    
  }

 
  closeRegister(): void {
    this.closeWindow();
    this.dialog.open(AuthDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'register-dialog',
      autoFocus: false,
      disableClose: false,
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      hasBackdrop: true,
    });
  }

  initForm():void{
    this.signUpForm = this.fb.group({
      userEmail: [null, [Validators.required, Validators.email]],
      userFirstName: [null, [Validators.required]],
      userLastName: [null, [Validators.required]],
      userPhoneNumber: [null, [Validators.required]],
      userPassword: [null, [Validators.required]],
      userRepeatPassword: [null, [Validators.required]],
      termsAndConditions: [false, [Validators.requiredTrue]],
    })

  }


  registerUser():void {
    const {userEmail, userPassword} = this.signUpForm.value;
    this.userSignUp(userEmail, userPassword).then(()=>{
        console.log('login done')
      }).catch(e=>{
        console.log('error', e)
        this.toastr.error('Перевірте правильність заповнення полів');
      }
    );
  }

  async userSignUp(email:string, password:string): Promise<void>{
    const credential = await createUserWithEmailAndPassword( this.auth, email, password);
    const newUser = {
      email: credential.user.email,
      firstName: this.signUpForm.value.userFirstName,
      lastName: this.signUpForm.value.userLastName,
      phoneNumber: this.signUpForm.value.userPhoneNumber,
      uid: credential.user.uid,
      orders: [],
      role: ROLE.USER,
    }
    setDoc(doc(this.afs, 'Users', credential.user.uid), newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    this.router.navigate([`/cabinet/userData`]);
    this.closeWindow();
  }
  
  closeWindow(): void {
    this.dialogRef.close();
  }

}
