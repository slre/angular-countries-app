import { Component, EventEmitter } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  flagError : boolean = false;
  countries : Country[] = [];

  constructor( private countryService : CountryService){}
  search( term :string){
    this.term = term;
    this.flagError = false;
    this.countryService.searchCountry(this.term)
      .subscribe( (countries) => {
        this.countries = countries;
        console.log(this.countries)

      },(err)=>{
        this.countries = [];
        this.flagError = true;
      })
  }
  suggestions( term : string){
    this.flagError = false;
    //create suggestion
  }
}
