import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatPaginatorModule,
    MatListModule,
  ],
  exports: [
  	MatButtonModule,
  	MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatPaginatorModule,
    MatListModule,
  ],
  declarations: []
})
export class MaterialDesignModule { }
