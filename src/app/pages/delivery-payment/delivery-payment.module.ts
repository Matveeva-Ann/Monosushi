import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeliveryPaymentComponent} from "./delivery-payment.component";
import {RouterModule} from '@angular/router';
import {MapComponent} from "./map/map.component";
import {DeliveryPaymentRoutingModule} from "./delivery-payment-routing.module";



@NgModule({
  declarations: [
    DeliveryPaymentComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DeliveryPaymentRoutingModule
  ]
})
export class DeliveryPaymentModule { }
