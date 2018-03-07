import { Component, OnInit } from '@angular/core';
import { RijksmuseumDataService } from '../shared/rijksmuseum-data.service';
import { ArtObject } from '../shared/collection-response';
import { ArtObjectDetail } from '../shared/collection-detail-response';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-art-object-list',
  providers: [ RijksmuseumDataService ],
  templateUrl: './art-object-list.component.html',
  styleUrls: ['./art-object-list.component.css']
})

export class ArtObjectListComponent implements OnInit {
  title = 'Rijksmuseum';
  makerUnknown: string = 'Maker onbekend';
  searchTerm: string;
  artObjects$: Observable<ArtObject[]>;
  artObjectDetail$: Observable<ArtObjectDetail>;
  currentPage: number = 1;

  constructor(
    private service: RijksmuseumDataService,
    private router: Router
  ) {}

  ngOnInit() {}

  navigateToDetail(id: string): void {
    this.router.navigate([`detail/${id}`]);
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.getPage();
  }

  private getPage(): void {
    this.artObjects$ = this.service.Search(this.searchTerm, this.currentPage)
      .map((artObjects: ArtObject[]) => artObjects.filter((artObject: ArtObject) => artObject.hasImage));
  }

  getMaker(name: string): string {
    return name === undefined || name === '' ? this.makerUnknown : name;
  }
}
