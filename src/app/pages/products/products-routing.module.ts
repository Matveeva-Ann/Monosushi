import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductInfoComponent} from "../product-info/product-info.component";
import {ProductInfoResolver} from "../../shared/services/product/product-info.resolver";


const routes: Routes = [
  {path:'products/:category', component: ProductsComponent},
  {path:'products/:category/:id', component: ProductInfoComponent, resolve:{
      productInfo: ProductInfoResolver,
   }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
