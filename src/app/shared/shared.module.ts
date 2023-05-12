import { NgModule } from "@angular/core";

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


const MATERIAL = [
  MatDialogModule, 
  MatFormFieldModule, 
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL
  ],
  exports: [
    ...MATERIAL
  ]
})

export class SharedModule {}