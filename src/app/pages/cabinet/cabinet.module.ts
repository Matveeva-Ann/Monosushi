import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetComponent } from './cabinet.component';
import { NavComponent } from './nav/nav.component';
import { PagesComponent } from './pages/pages.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import {SharedModule} from "../../shared/shared.module";
import {CabinetRoutingModule} from "./cabinet-routing.module";

@NgModule({
  declarations: [
    CabinetComponent,
    NavComponent,
    PagesComponent,
    UserDataComponent,
    OrderHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CabinetRoutingModule
  ]
})
export class CabinetModule { }
