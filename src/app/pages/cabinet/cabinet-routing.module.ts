import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthCabinetGuard} from "../../shared/guards/authCabinet/auth-cabinet.guard";
import {CabinetComponent} from "./cabinet.component";
import {UserDataComponent} from "./pages/user-data/user-data.component";
import {OrderHistoryComponent} from "./pages/order-history/order-history.component";



const routes: Routes = [
  {path:'', component: CabinetComponent, children: [
      {path: 'userData', component:UserDataComponent},
      {path: 'orderHistory', component: OrderHistoryComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
