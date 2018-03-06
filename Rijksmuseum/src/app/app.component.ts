import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { RijksmuseumDataService } from './shared/rijksmuseum-data.service';
import { ArtObject } from './shared/art-object';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  providers: [ RijksmuseumDataService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //@ViewChildren('matImage') images;
  //showGrid: boolean = false;

  title = 'app';
  cols: number = 4;
  gutterSize: number = 20;
  artObjects$: Observable<ArtObject[]>;

  constructor(private service: RijksmuseumDataService) {}

  ngOnInit() {}

  //ngAfterViewInit() {
  //  this.images.changes.subscribe(() => {
  //   console.log('We done...?');
  //    setTimeout(() => {
  //      this.showGrid = true;
  //    }, 2000);
  //  });
  //}

  //setLast(isLast: boolean): void {
  //  this.last = isLast;
  //}

  search(searchTerm: string) {
    this.artObjects$ = this.service.SearchByMaker(searchTerm)
      .map((artObjects: ArtObject[]) => artObjects.filter((artObject: ArtObject) => artObject.hasImage));
  }
}
