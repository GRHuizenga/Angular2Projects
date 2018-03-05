import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
  	MatButtonModule,
  	MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
  ],
  declarations: []
})
export class MaterialDesignModule { }
