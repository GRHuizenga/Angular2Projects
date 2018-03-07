import { CollectionResponse, ArtObject } from './collection-response';
import { CollectionDetailResponse, ArtObjectDetail } from './collection-detail-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RijksmuseumDataService {
  private baseURL: string = 'https://www.rijksmuseum.nl/api/nl/collection'; //?q=Q&p=P&ps=10&key=4DQ6B8sF&format=json';
  //private detailURL: string = 'https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=4DQ6B8sF&format=json';
  private apiKey: string = '4DQ6B8sF';
  private format: string = 'json';
  private resultsPerPage: number = 25;

  constructor(private http: HttpClient) { }

  public getArtObjectByID(id: string): Observable<ArtObjectDetail> {
    return this.http.get<CollectionDetailResponse>(`${this.baseURL}/${id}?key=${this.apiKey}&format=${this.format}`)
      .map((response: CollectionDetailResponse) => {
        return response.artObject;
      });
  }

  public getHeaderImageUrl(id: string): Observable<string> {
    console.log('headerImageUrl: ' + id);
    return this.http.get<CollectionResponse>(`${this.baseURL}?q=${id}&key=${this.apiKey}&format=${this.format}`)
      .map((response: CollectionResponse) => {
        console.log('found url: ' + response.artObjects[0].headerImage.url);
        return response.artObjects[0].headerImage.url;
      })
  }

  public Search(searchTerm: string, page: number): Observable<ArtObject[]> {
    return this.http.get<CollectionResponse>(`${this.baseURL}?q=${searchTerm}&p={page}&ps=${this.resultsPerPage}&key=${this.apiKey}&format=${this.format}`)
      .map((response: CollectionResponse) => {
        return response.artObjects;
      });
  }
}
