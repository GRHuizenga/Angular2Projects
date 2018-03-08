import { Component, OnInit, Input } from '@angular/core';
import { RijksmuseumDataService } from '../shared/rijksmuseum-data.service';
import { ArtObject } from '../shared/collection-response';
import { ArtObjectDetail } from '../shared/collection-detail-response';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  showStepper: boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private service: RijksmuseumDataService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.headerImageUrl$ = this.service.getHeaderImageUrl(id);
    this.artObjectDetail$ = this.service.getArtObjectByID(id);
    this.buildFormGroups();
  }

  buildFormGroups(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['']
    });
  }

  toggleShowStepper(): void {
    this.showStepper = !this.showStepper;
  }
}
