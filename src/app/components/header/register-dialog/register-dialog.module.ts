import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterDialogComponent} from "./register-dialog.component";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [
    RegisterDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RegisterDialogModule { }
