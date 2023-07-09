import { Component, EventEmitter, Input, Output } from '@angular/core';
import { collection, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { CallBackService } from 'src/app/shared/services/callBack/call-back.service';


@Component({
  selector: 'app-will-call',
  templateUrl: './will-call.component.html',
  styleUrls: ['./will-call.component.scss']
})
export class WillCallComponent {
  @Input() willCall!:boolean;
  @Output() close = new EventEmitter<void>();
  @Output() closeFormCall = new EventEmitter<void>();
  public name = '';
  public phone = 0;

  constructor(
    private callBackService: CallBackService
  ){  }

  phoneMask = ['+', '3', '8', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
  public closeWindow(){
    this.willCall = false;
    this.closeFormCall.emit();
  }

  public sendPhoneNumber(){
    if (this.name !== '' && this.phone !==0){
      this.willCall = false;
      this.closeFormCall.emit();
      const userData = {
        name: this.name,
        phone: this.phone,
      }
      this.callBackService.sendPhoneNumber(userData).then();
    }
  }
}
