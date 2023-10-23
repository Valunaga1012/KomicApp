export interface Character {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  etag: string;
  status: string;
  data:Array<CharacterData>
}

export interface CharacterData {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: Array<CharacterResults>
}

export interface CharacterResults {
  comics: Comics;
  description: string;
  id: number;
  modified: string;
  name: string;
  title?: string;
  resourceURI: string;
  series: Comics
  stories:Comics
  thumbnail:Thumbnail
  urls:any
}

export interface Comics {
  resourceURI: string;
    name: string;
}

export interface Thumbnail {
  extension: string;
path: string;
}
