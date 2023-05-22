import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDialogComponent } from './auth-dialog.component';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AuthDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AuthDialogModule { }
