import { Component, OnInit } from '@angular/core';
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
  title = 'app';
  cols: number = 4;
  gutterSize: number = 20;
  artObjects$: Observable<ArtObject[]>;

  constructor(private service: RijksmuseumDataService) {}

  ngOnInit() {
    console.log('In onInit...getting data...');
    this.getByMaker('Rembrandt');
  }

  setRowspan(artObjects: ArtObject[]): ArtObject[] {

    artObjects.forEach((artObject: ArtObject) => {
      let tileWidth: number = 337.25;
      let img = new Image();
      img['ao'] = artObject;
      img.addEventListener('load', function() {
        //debugger;
        let factor: number = tileWidth / this.naturalWidth;
        let desiredHeight: number = factor * this.naturalHeight;
        //let rowspan: number = desiredHeight / 100;
        //this['ao'].rowspan = rowspan;
        this['ao'].webImage.width = 337.25;
        this['ao'].webImage.height = desiredHeight;
        //console.log('width: ' + this.naturalWidth + ' height: ' + this.naturalHeight + ' rowspan: ' + rowspan);
      });
      img.src = artObject.webImage.url;
    })

    return artObjects;
  }

  getByMaker(maker: string) {
    this.artObjects$ = this.service.SearchByMaker(maker)
      .map((artObjects: ArtObject[]) => this.setRowspan(artObjects));
  }

  getData() {
    this.artObjects$ = this.service.getObjects();
  }
}
