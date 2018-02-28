import { ArtObject } from './art-object';

export interface RijksmuseumResponse {
  artObjects: ArtObject[];
  count: number;
  countFacets: {
    hasimage: number,
    ondisplay: number,
  };
  elapsedMiliseconds: number;
  facets: [
    {
      facets: [{ key: string, value: number }],
      name: string,
      otherTerms: number,
      prettyName: number,
    }
  ];
}
