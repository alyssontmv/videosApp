/* eslint-disable @typescript-eslint/naming-convention */
export interface ISerieApi {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  //release_date?: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids?: number[];
  id?: number;
  //original_title?: string;
  original_name?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  //video?: boolean;
  vote_average?: number;
  name: string;
}

export interface IListaSeries {
  page: number;
  results: ISerieApi[];
  total_results: number;
  total_pages: number;
}
