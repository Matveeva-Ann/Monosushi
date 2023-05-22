import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductsRoutingModule } from "./products-routing.module";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,

  ],
  exports:[
    ProductCardComponent,
  ]
})
export class ProductsModule { }
