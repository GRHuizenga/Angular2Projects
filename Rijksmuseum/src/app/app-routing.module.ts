import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';
import { ArtObjectListComponent } from './art-object-list/art-object-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: ArtObjectListComponent },
  { path: 'detail/:id', component: ArtObjectDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
