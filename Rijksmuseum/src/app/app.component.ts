import { Component, OnInit } from '@angular/core';
import { RijksmuseumDataService } from './shared/rijksmuseum-data.service';
import { ArtObject } from './shared/collection-response';
import { ArtObjectDetail } from './shared/collection-detail-response';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  providers: [ RijksmuseumDataService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Rijksmuseum';
  makerUnknown: string = 'Maker onbekend';
  cols: number = 4;
  gutterSize: number = 20;
  searchTerm: string;
  artObjects$: Observable<ArtObject[]>;
  artObjectDetail$: Observable<ArtObjectDetail>;
  currentPage: number = 1;

  constructor(private service: RijksmuseumDataService) {}

  ngOnInit() {
    this.artObjectDetail$ = this.service.getArtObjectByID('sk-c-5');
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.getPage();
  }

  private getPage(): void {
    this.artObjects$ = this.service.SearchByMaker(this.searchTerm, this.currentPage)
      .map((artObjects: ArtObject[]) => artObjects.filter((artObject: ArtObject) => artObject.hasImage));
  }

  getMaker(name: string): string {
    return name === undefined || name === '' ? this.makerUnknown : name;
  }
}
