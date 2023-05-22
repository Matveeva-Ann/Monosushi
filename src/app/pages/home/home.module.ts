import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDeliverySushiComponent } from './info-delivery-sushi/info-delivery-sushi.component';
import { SushiNavigationComponent } from './sushi-navigation/sushi-navigation.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HomeComponent } from "./home.component";
import { InfoComponent } from './info/info.component';

import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ProductsModule} from "../products/products.module";

@NgModule({
  declarations: [
    InfoDeliverySushiComponent,
    // SushiNavigationComponent,
    CarrouselComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ProductsModule,
  ]
})
export class HomeModule { }
