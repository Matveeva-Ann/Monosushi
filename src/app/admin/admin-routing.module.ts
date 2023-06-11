import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminOrderComponent } from './pages/admin-order/admin-order.component';
import { AdminGoodsComponent } from './pages/admin-goods/admin-goods.component';
import { AdminCategoryComponent } from './pages/admin-category/admin-category.component';
import { AdminPromotionsComponent } from './pages/admin-promotions/admin-promotions.component';
import { AdminCallBackComponent } from './pages/admin-call-back/admin-call-back.component';


const routes: Routes = [
  {path:'', component: AdminComponent, children:[
      {path:'category', component: AdminCategoryComponent},
      {path:'goods', component: AdminGoodsComponent},
      {path:'order', component: AdminOrderComponent},
      {path:'promotions', component: AdminPromotionsComponent},
      {path:'callBack', component: AdminCallBackComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
