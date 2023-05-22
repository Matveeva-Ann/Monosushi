import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import { AuthGuard } from './shared/guards/auth/auth.guard';
import { AuthCabinetGuard } from './shared/guards/authCabinet/auth-cabinet.guard';


const routes: Routes = [
  {
    path:'oferta',
    loadChildren: () => import('./pages/oferta/oferta.module').then(m => m.OfertaModule)
  },
  {
    path:'promotions',
    loadChildren: () => import('./pages/promotions/promotions.module').then(m => m.PromotionsModule)
  },
  {
    path:'cabinet',
    canActivate: [AuthCabinetGuard],
    loadChildren: () => import('./pages/cabinet/cabinet.module').then(m => m.CabinetModule)
  },
  {
    path:'deliveryPayment',
    loadChildren: () => import('./pages/delivery-payment/delivery-payment.module').then(m => m.DeliveryPaymentModule)
  },
  {
    path:'aboutUs',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path:'products',
    canActivate: [AuthCabinetGuard],
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./admin/admin-auth/admin-auth.module').then(m => m.AdminAuthModule)
  },
  {
    path:'',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
