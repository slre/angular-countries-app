import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _countryService: CountryService
  ) {}
  country! : Country;
  ngOnInit(): void {


    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this._countryService.getCountryById(id).subscribe((country) => {
    //     this.tmp = JSON.stringify(country);
    //     console.log(country);
    //   });
    // });
    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } )=> this._countryService.getCountryById( id )),
        tap( console.log)
      )
      .subscribe( country => this.country = country[0]);

    
  }



}
