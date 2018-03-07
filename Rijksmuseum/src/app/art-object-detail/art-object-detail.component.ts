import { Component, OnInit, Input } from '@angular/core';
import { RijksmuseumDataService } from '../shared/rijksmuseum-data.service';
import { ArtObject } from '../shared/collection-response';
import { ArtObjectDetail } from '../shared/collection-detail-response';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-art-object-detail',
  providers: [ RijksmuseumDataService ],
  templateUrl: './art-object-detail.component.html',
  styleUrls: ['./art-object-detail.component.css']
})
export class ArtObjectDetailComponent implements OnInit {
  @Input() headerImageUrl: string;
  artObjectDetail$: Observable<ArtObjectDetail>;
  headerImageUrl$: Observable<string>;

  constructor(
    private service: RijksmuseumDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.headerImageUrl$ = this.service.getHeaderImageUrl(id);
    this.artObjectDetail$ = this.service.getArtObjectByID(id);
  }

}
