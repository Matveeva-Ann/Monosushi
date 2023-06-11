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

  // private phoneNumber!: CollectionReference<DocumentData>;
  constructor(
    private callBackService: CallBackService
  ){
    // this.phoneNumber = collection(this.afs, 'callBack');
  }

  phoneMask = ['+', '3', '8', ' ', '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
  public closeWindow(){
    this.willCall = false;
    this.closeFormCall.emit();
  }

  public sendPhoneNumber(){
    this.willCall = false;
    const userData = {
      name: this.name,
      phone: this.phone,
    }

    this.callBackService.sendPhoneNumber(userData).then();
  }
}
