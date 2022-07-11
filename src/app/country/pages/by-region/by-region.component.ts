import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class ByRegionComponent {

  constructor( private _countryService : CountryService) { }
  regions : string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA','SAARC'];
  regionActive : string = '';
  countries : Country[] = [];
  getCssClass( region : string){
    return ( region===this.regionActive ) ? 'btn btn-primary':'btn btn-outline-primary';
  }
  activateRegion( region: string){
    if( region === this.regionActive ){return;}
    this.regionActive = region;
    this.countries = [];
    this._countryService.searchRegionBloc( region )
      .subscribe( countries=>{
        this.countries = countries;
        console.log(this.countries);
      })
      
  }

}
