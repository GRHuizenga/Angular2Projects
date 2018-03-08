import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { RijksmuseumDataService } from '../shared/rijksmuseum-data.service';
import { CollectionResponse, ArtObject } from '../shared/collection-response';
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

  // MatPaginator Inputs
  currentPage: number = 0;
  length: number = 100;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  showPaginator: boolean = false;

  // MatPaginator Output
  pageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex++;
    this.pageSize = event.pageSize;
    this.getPage();
  }

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
    this.showPaginator = true;
    this.getPage();
  }

  private getPage(): void {
    this.artObjects$ = this.service.Search(this.searchTerm, this.currentPage, this.pageSize)
      .map((response: CollectionResponse) => {
        this.length = response.count;
        return response.artObjects;
      })
      .map((response: ArtObject[]) => response.filter((artObject: ArtObject) => artObject.hasImage));
  }

  getMaker(name: string): string {
    return name === undefined || name === '' ? this.makerUnknown : name;
  }
}
