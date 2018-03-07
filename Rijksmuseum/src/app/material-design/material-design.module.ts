import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
  	MatButtonModule,
  	MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: []
})
export class MaterialDesignModule { }
