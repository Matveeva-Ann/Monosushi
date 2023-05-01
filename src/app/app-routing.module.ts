import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrderComponent } from './admin/pages/admin-order/admin-order.component';
import { AdminGoodsComponent } from './admin/pages/admin-goods/admin-goods.component';
import { AdminCategoryComponent } from './admin/pages/admin-category/admin-category.component';
import { AdminPromotionsComponent } from './admin/pages/admin-promotions/admin-promotions.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ProductInfoResolver } from './shared/services/product/product-info.resolver';
import { PromotionsInfoComponent } from './pages/promotions-info/promotions-info.component';
import { PromoResolver } from './shared/services/resolver/promo.resolver';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { UserDataComponent } from './pages/cabinet/pages/user-data/user-data.component';
import { OrderHistoryComponent } from './pages/cabinet/pages/order-history/order-history.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { AuthCabinetGuard } from './shared/guards/authCabinet/auth-cabinet.guard';




const routes: Routes = [
  {path:'deliveryPayment', component: DeliveryPaymentComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'promotions', component: PromotionsComponent},
  {path:'promotions/:id', component: PromotionsInfoComponent, resolve:{
    promoInfo: PromoResolver
  }},
  {path:'', component: HomeComponent},
  {path:'products/:category', component: ProductsComponent},
  {path:'products/:category/:id', component: ProductInfoComponent, resolve:{
    productInfo: ProductInfoResolver,
  }},
  {path:'oferta', component: OfertaComponent},
  {path:'cabinet/userData/:id', component: CabinetComponent, canActivate: [AuthCabinetGuard], children: [
    {path: 'userData', component:UserDataComponent},
    {path: 'orderHistory', component: OrderHistoryComponent}
  ]},
  {path:'admin', component: AdminComponent, canActivate: [AuthGuard] ,children:[
         {path:'category', component: AdminCategoryComponent},
         {path:'goods', component: AdminGoodsComponent},
         {path:'order', component: AdminOrderComponent},
         {path:'promotions', component: AdminPromotionsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
