import { CollectionResponse, ArtObject } from './collection-response';
import { CollectionDetailResponse, ArtObjectDetail } from './collection-detail-response';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RijksmuseumDataService {

  constructor(private http: HttpClient) { }

  public getArtObjectByID(id: string): Observable<ArtObjectDetail> {
    return this.http.get<CollectionDetailResponse>(`${environment.baseUrl}/${id}?key=${environment.apiKey}&format=${environment.format}`)
      .map((response: CollectionDetailResponse) => {
        console.log(response.artObject);
        return response.artObject;
      });
  }

  public getHeaderImageUrl(id: string): Observable<string> {
    console.log('headerImageUrl: ' + id);
    return this.http.get<CollectionResponse>(`${environment.baseUrl}?q=${id}&key=${environment.apiKey}&format=${environment.format}`)
      .map((response: CollectionResponse) => {
        console.log('found url: ' + response.artObjects[0].headerImage.url);
        return response.artObjects[0].headerImage.url;
      })
  }

  public Search(searchTerm: string, page: number, resultsPerPage: number): Observable<CollectionResponse> {
    return this.http.get<CollectionResponse>(`${environment.baseUrl}?q=${searchTerm}&p=${page}&ps=${resultsPerPage}&key=${environment.apiKey}&format=${environment.format}`);
  }
}
