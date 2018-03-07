import { CollectionResponse, ArtObject } from './collection-response';
import { CollectionDetailResponse, ArtObjectDetail } from './collection-detail-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RijksmuseumDataService {
  private baseURL: string = 'https://www.rijksmuseum.nl/api/nl/collection?q=Q&p=P&ps=10&key=4DQ6B8sF&format=json';
  private detailURL: string = 'https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=4DQ6B8sF&format=json';
  private apiKey: string = '4DQ6B8sF';

  constructor(private http: HttpClient) { }

  public getArtObjectByID(ID: string): Observable<ArtObjectDetail> {
    return this.http.get<CollectionDetailResponse>(this.detailURL)
      .map((response: CollectionDetailResponse) => {
        return response.artObject;
      });
  }

  public SearchByMaker(maker: string, page: number): Observable<ArtObject[]> {
    return this.http.get<CollectionResponse>(this.baseURL.replace('q=Q', 'q=' + maker).replace('p=P', 'p=' + page))
      .map((response: CollectionResponse) => {
        return response.artObjects;
      });
  }
}
