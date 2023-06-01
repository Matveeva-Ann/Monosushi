import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';


const MATERIAL = [
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
]

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalWindowComponent } from "./components/modal-window/modal-window.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SushiNavigationComponent } from "../pages/home/sushi-navigation/sushi-navigation.component";
import { ControlsComponent } from "./components/controls/controls.component";
import { BreadCrumbsComponent } from "./components/bread-crumbs/bread-crumbs.component";





const otherModules = [
  FormsModule,
  ReactiveFormsModule,
  CarouselModule,
]

@NgModule({
  declarations: [
    ModalWindowComponent,
    SushiNavigationComponent,
    ControlsComponent,
    BreadCrumbsComponent
  ],
  exports: [
    ...MATERIAL,
    ...otherModules,
    ModalWindowComponent,
    SushiNavigationComponent,
    ControlsComponent,
    BreadCrumbsComponent,
  ],
  imports: [
    ...MATERIAL,
    ...otherModules,
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),

  ]
})

export class SharedModule {}
