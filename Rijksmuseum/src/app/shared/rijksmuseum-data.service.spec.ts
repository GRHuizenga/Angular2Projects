import { TestBed, inject } from '@angular/core/testing';

import { RijksmuseumDataService } from './rijksmuseum-data.service';

describe('RijksmuseumDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RijksmuseumDataService]
    });
  });

  it('should be created', inject([RijksmuseumDataService], (service: RijksmuseumDataService) => {
    expect(service).toBeTruthy();
  }));
});
