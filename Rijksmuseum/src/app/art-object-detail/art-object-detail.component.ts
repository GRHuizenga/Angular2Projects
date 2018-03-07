import { Component, OnInit, Input } from '@angular/core';
import { RijksmuseumDataService } from '../shared/rijksmuseum-data.service';
import { ArtObject } from '../shared/collection-response';
import { ArtObjectDetail } from '../shared/collection-detail-response';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-art-object-detail',
  templateUrl: './art-object-detail.component.html',
  styleUrls: ['./art-object-detail.component.css']
})
export class ArtObjectDetailComponent implements OnInit {
  @Input() artObjectID: string;
  artObjectDetail$: Observable<ArtObjectDetail>;

  constructor(private service: RijksmuseumDataService) { }

  ngOnInit() {
    this.artObjectDetail$ = this.service.getArtObjectByID('');
  }

}
