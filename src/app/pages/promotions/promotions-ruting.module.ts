import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PromotionsComponent} from "./promotions.component";
import {PromotionsInfoComponent} from "../promotions-info/promotions-info.component";
import {PromoResolver} from "../../shared/services/resolver/promo.resolver";


const routes: Routes = [
  {path:'', component: PromotionsComponent},
  {path:':id', component: PromotionsInfoComponent, resolve:{
    promoInfo: PromoResolver
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRutingModule { }
