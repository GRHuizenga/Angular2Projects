import { Image } from './image';

export interface ArtObject {
  hasImage: boolean;
  headerImage: Image;
  id: string;
  links: {
    self: string,
    web: string,
  },
  longTitle: string;
  objectNumber: string;
  permitDownload: boolean;
  principalOrFirstMaker: string;
  productionPlaces: string[];
  showImage: boolean;
  title: string;
  webImage: Image;
  rowspan: number;
}
