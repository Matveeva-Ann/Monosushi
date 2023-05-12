import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ROLE } from 'src/app/shared/constants/roles.constant';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent {
  public adminLoginForm!: FormGroup;
 
  constructor (
    private router: Router,
    private fb: FormBuilder,
    private auth: Auth,
    private afs: Firestore,
    private toastr: ToastrService,
  ){}

  ngOnInit(): void {
    this.initForm();
    const currentUser = JSON.parse( localStorage.getItem('currentUser') as string );
    if(currentUser !== null && currentUser.role === ROLE.ADMIN){
      this.router.navigate(['/admin/promotions'])
    }
  }
  closeWindow(): void{
    this.router.navigate(['/'])
  }

  initForm(){
    this.adminLoginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  loginAdmin(){
    const{ email, password} = this.adminLoginForm.value;
    this.login(email, password).then(()=>{
      console.log('login done')
    }).catch(e=>{
      console.log('error', e)
      this.toastr.error('Перевірте правильність заповнення полів');
    })
  }

  async login( email:string, password: string): Promise<void>{
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    docData(doc(this.afs, 'Users', credential.user.uid)).subscribe(user => {
      const currentUser = { ...user, uid: credential.user.uid };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      if(user['role'] === ROLE.ADMIN) {
        this.router.navigate(['/admin/promotions'])
      } else {
        this.router.navigate(['/']);
      }
    }, (e) => {
      this.router.navigate(['/']);
      console.log('error', e);
    })
  }
  

}
