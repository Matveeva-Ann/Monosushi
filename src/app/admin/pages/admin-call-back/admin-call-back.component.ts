import { Component } from '@angular/core';
import { CallBackService } from 'src/app/shared/services/callBack/call-back.service';

@Component({
  selector: 'app-admin-call-back',
  templateUrl: './admin-call-back.component.html',
  styleUrls: ['./admin-call-back.component.scss'],
})
export class AdminCallBackComponent {
  public dataArr = [
    {
    name: '',
    phone: '',
    }
   ];

  constructor(private callBackService: CallBackService) {  }

  ngOnInit(): void {
   this.loadPhoneData();
  }

  async loadPhoneData() {
    this.callBackService.getPhoneData().subscribe((data) => {
      console.log(data)
      this.dataArr = data as any;
    });
  }
  
  delete(userData: any) {
    this.callBackService.deletePhoneData(userData.id).then(()=>{
      this.loadPhoneData();
    })
  }
}
