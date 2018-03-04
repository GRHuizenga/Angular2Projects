import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
  ],
  exports: [
  	MatButtonModule,
  	MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
  ],
  declarations: []
})
export class MaterialDesignModule { }
