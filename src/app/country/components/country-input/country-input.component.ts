import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input()  placeholder : string = '';
  debouncer: Subject<string> = new Subject();
  term: string = '';
  search() {
    this.onEnter.emit(this.term);
  }
  keyPressed(){
    this.debouncer.next(this.term);
  }
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit( value )
    });
  }
}
