import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
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
  @ViewChildren('allTheseThings') tiles: QueryList<any>;
  title = 'app';
  cols: number = 4;
  gutterSize: number = 20;
  artObjects$: Observable<ArtObject[]>;

  constructor(private service: RijksmuseumDataService) {}

  ngOnInit() {
    console.log('In onInit...getting data...');
    this.getByMaker('Rembrandt');
  }

  ngAfterViewInit() {
    
  }

  setRowspan(artObject: ArtObject): void {
    console.log(artObject);
    let tileWidth: number = (this.getWidth() - (this.cols - 1) * this.gutterSize) / this.cols;
    let ratio: number = artObject.webImage.width / artObject.webImage.height;
    artObject.rowspan = tileWidth * ratio;
    //console.log('tileWdith: ' + tileWidth + ' ratio: ' + ratio + ' rowspan: ' + artObject.rowspan);
  }

  getRowspan(artObject: ArtObject): number {


    return 2;
  }

  getWidth(): number {
    return 0;// this.gridViewContainer.nativeElement.offsetWidth;
  }

  getByMaker(maker: string) {
    this.artObjects$ = this.service.SearchByMaker(maker);
  }

  getData() {
    this.artObjects$ = this.service.getObjects();
  }
}
