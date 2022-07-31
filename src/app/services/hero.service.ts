import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  API_PATH = 'https://gateway.marvel.com:443';
  PARAMS_AUTH = 'ts=1&apikey=e1e521be6564e67c749837f9362054ab&hash=d66ddc13135c4254b0d03e7813aa0bac';

  constructor( private http: HttpClient ) {}

  getList() {
    return this.http.get( this.API_PATH + '/v1/public/characters?limit=50&' + this.PARAMS_AUTH);
  }

  getDetails( characterId: string ) {
    return this.http.get( this.API_PATH + `/v1/public/characters/${characterId}?` + this.PARAMS_AUTH);
  }

  getListByTerms( terms: string ) {
    let newParams = this.PARAMS_AUTH.replace('ts=1&', '');
    return this.http.get( this.API_PATH + `/v1/public/characters?limit=50&name=${terms}&${this.PARAMS_AUTH}` );
  }

}
