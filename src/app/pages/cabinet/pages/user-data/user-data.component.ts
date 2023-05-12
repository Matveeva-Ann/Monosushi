import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROLE } from 'src/app/shared/constants/roles.constant';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {
  public userDataForm!:FormGroup;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.userDataForm = this.fb.group({
      userName: [null, [Validators.required]],
      userLastName: [null, [Validators.required]],
      userPhone: [null, [Validators.required]],
      userEmail: [null, [Validators.required]],
    })
    const currentUser = JSON.parse( localStorage.getItem('currentUser') as string );
    if(currentUser !== null && currentUser.role === ROLE.USER){
      this.userDataForm.setValue({
      userName: currentUser.firstName,
      userLastName: currentUser.lastName,
      userPhone: currentUser.phoneNumber,
      userEmail: currentUser.email,
      })
    }
  }

}
