import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminOrderComponent } from './pages/admin-order/admin-order.component';
import { AdminGoodsComponent } from './pages/admin-goods/admin-goods.component';
import { AdminCategoryComponent } from './pages/admin-category/admin-category.component';
import { AdminPromotionsComponent } from './pages/admin-promotions/admin-promotions.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { GoodsTableComponent } from './pages/admin-goods/goods-table/goods-table.component';
import { GoodsFormComponent } from './pages/admin-goods/goods-form/goods-form.component';
import { TableComponent } from './pages/table/table.component';
import { CategoryTableComponent } from './pages/admin-category/category-table/category-table.component';
import { CategoryFormComponent } from './pages/admin-category/category-form/category-form.component';
import { PromotionsTableComponent } from './pages/admin-promotions/promotions-table/promotions-table.component';
import { PromotionsFormaComponent } from './pages/admin-promotions/promotions-forma/promotions-forma.component';
import { AdminAuthModule } from "./admin-auth/admin-auth.module";
import { AdminCallBackComponent } from './pages/admin-call-back/admin-call-back.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminOrderComponent,
    AdminGoodsComponent,
    AdminCategoryComponent,
    AdminPromotionsComponent,
    AdminNavComponent,
    GoodsTableComponent,
    GoodsFormComponent,
    TableComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    PromotionsTableComponent,
    PromotionsFormaComponent,
    AdminCallBackComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AdminAuthModule
  ]
})
export class AdminModule { }
