import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { AboutUsComponent } from "./about-us.component";
import { AboutUsRoutingModule } from "./about-us-routing.module";

@NgModule({
  declarations: [
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutUsRoutingModule,
  ]
})
export class AboutUsModule { }
