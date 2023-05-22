import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROLE } from 'src/app/shared/constants/roles.constant';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {
  public userLoginForm!: FormGroup;


  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth,
    private afs: Firestore,
    private toastr: ToastrService,
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.userLoginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  loginUser(){
    const{ email, password} = this.userLoginForm.value;
    this.login(email, password).then(()=>{
      console.log('login done')
    }).catch(e=>{
      console.log('error', e)
      this.toastr.error('Перевірте правильність заповнення полів');
    })
  }

  async login( email:string, password: string): Promise<void>{
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    const usersSub =  docData(doc(this.afs, 'Users', credential.user.uid)).subscribe(user => {
      const currentUser = { ...user, uid: credential.user.uid };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      if(user['role'] === ROLE.USER) {
        this.closeWindow();
        this.router.navigate([`/cabinet/userData`]);
      } else {
        this.router.navigate(['/']);
      }
      usersSub.unsubscribe();
    }, (e) => {
      this.router.navigate(['/']);
      console.log('error', e);
      usersSub.unsubscribe();
    })
  }

  closeWindow():void{
    this.dialogRef.close();
  }
  register(){
    this.closeWindow();
    this.dialog.open(RegisterDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'auth-dialog',
      autoFocus: false,
      disableClose: false,
      enterAnimationDuration: 300,
      exitAnimationDuration: 300,
      hasBackdrop: true,
    })
  }
}
