import { RijksmuseumResponse } from './rijksmuseum-response';
import { ArtObject } from './art-object';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RijksmuseumDataService {
  private baseURL: string = 'https://www.rijksmuseum.nl/api/nl/collection?q=Q&ps=10&key=4DQ6B8sF&format=json';
  private apiKey: string = '4DQ6B8sF';

  constructor(private http: HttpClient) { }

  public getObjects(): Observable<ArtObject[]> {
    return this.http.get<RijksmuseumResponse>(this.baseURL + this.apiKey + '&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614')
      .map((response: RijksmuseumResponse) => response.artObjects);
  }

  public SearchByMaker(maker: string): Observable<ArtObject[]> {
    return this.http.get<RijksmuseumResponse>(this.baseURL.replace('q=Q', 'q=' + maker))
      .map((response: RijksmuseumResponse) => {
        console.log(response.artObjects);
        return response.artObjects;
      });
  }
}
