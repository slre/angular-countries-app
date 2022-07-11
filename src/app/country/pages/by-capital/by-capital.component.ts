import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent  {

  term: string = '';
  flagError : boolean = false;
  countries : Country[] = [];

  constructor( private countryService : CountryService){}
  search( term :string){
    this.term = term;
    this.flagError = false;
    this.countryService.searchCapital(this.term)
      .subscribe( (countries) => {
        this.countries = countries;
        console.log(this.countries)
      },(err)=>{
        this.countries = [];
        this.flagError = true;
      })
  }


}
