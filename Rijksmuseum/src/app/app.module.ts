import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ArtObjectListComponent } from './art-object-list/art-object-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtObjectDetailComponent,
    ArtObjectListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
