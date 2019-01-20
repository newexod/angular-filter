import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Options } from 'ng5-slider';

import { City } from '../../classes/city';
import { Category } from '../../classes/category';

import { ICity } from '../../interfaces/ICity';

import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss']
})
export class FilterPriceComponent implements OnInit {
  minValue: number = 35;
  maxValue: number = 250;
  options: Options = {
    floor: 0,
    ceil: 250,
    step: 1,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  cities: City[];

  @Input() city: string;
  @Input() categories: Category[];

  @Output() onFilterEmitter = new EventEmitter();

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.cities = this.cityService.getMockSities();

    if (localStorage.minValue && localStorage.maxValue) {
      this.minValue = +localStorage.minValue;
      this.maxValue = +localStorage.maxValue;
    }
  }

  filter(): void {
    if (!this.city) {
      this.city = this.cities[0].name;
    }

    if (!this.categories) {
      this.categories = [];
    }
    
    const data = {};

    data['city'] = this.city;
    data['categories'] = this.categories;
    data['minValue'] = this.minValue;
    data['maxValue'] = this.maxValue;
    this.onFilterEmitter.emit(data);

    localStorage.minValue = this.minValue;
    localStorage.maxValue = this.maxValue;
  }

}
