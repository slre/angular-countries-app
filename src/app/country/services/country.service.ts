import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _apiUrl:string = 'https://restcountries.com/v3.1';
  private _apiUrlRegion:string = 'https://restcountries.com/v2/regionalbloc';
  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,population,flags');
  }
  constructor( private _http : HttpClient ) { }

  searchCountry( term : string ):Observable<Country[]>{
    const url = `${this._apiUrl}/name/${term}`;
    return this._http.get<Country[]>( url );
  }
  searchCapital( term : string ):Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${term}`;
    return this._http.get<Country[]>( url);
  }
  getCountryById( id : string ):Observable<Country>{
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>( url );
  }
  searchRegionBloc( term : string ):Observable<Country[]>{

    const url = `${this._apiUrlRegion}/${term}`;
    return this._http.get<Country[]>( url,{ params:this.httpParams} );
  }        


}
