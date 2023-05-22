import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PromotionsComponent} from "./promotions.component";
import {PromotionsInfoComponent} from "../promotions-info/promotions-info.component";
import {PromotionsRutingModule} from "./promotions-ruting.module";
import {RouterModule} from '@angular/router';
import {CardComponent} from "./card/card.component";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    PromotionsComponent,
    PromotionsInfoComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    PromotionsRutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PromotionsModule { }
