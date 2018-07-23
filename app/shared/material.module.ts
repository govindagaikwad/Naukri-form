import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
   MatCheckboxModule, 
   MatInputModule,MatFormFieldModule, 
   MatSelectModule, MatOptionModule, 
   MatRadioModule, 
    MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,MatRadioModule,
    MatProgressSpinnerModule
  ],
exports:[
  MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatProgressSpinnerModule
]
})
export class MaterialModule { }
