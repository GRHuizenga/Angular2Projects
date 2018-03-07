import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtObjectDetailComponent,
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
