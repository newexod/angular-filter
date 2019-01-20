import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ICity } from '../../interfaces/ICity';
import { City } from '../../classes/city';

import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-filter-city',
  templateUrl: './filter-city.component.html',
  styleUrls: ['./filter-city.component.scss']
})
export class FilterCityComponent implements OnInit {
  cities: City[];
  city: string = '';

  @Output() onCityEmitter = new EventEmitter();

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.getMockSities();

    if (localStorage.selectedCity) {
      this.city = localStorage.selectedCity;
    } else {
      this.city = this.cities[0].name;
      localStorage.selectedCity = this.city;
    }
  }

  selectedCity(e): void {
    const value = e.target.value;    

    this.onCityEmitter.emit(value);

    localStorage.selectedCity = value;
  }

}
