import { Injectable } from '@angular/core';

import { City } from '../classes/city';
import { ICity } from '../interfaces/ICity';

const MOCK_CITIES: City[] = [
  {id:1,name:'London'},
  {id:2,name:'New York'},
  {id:3,name:'Madrid'},
  {id:4,name:'Las Vegas'},
  {id:5,name:'Paris'},
];

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getMockSities(): ICity[] {
    return MOCK_CITIES;
  }
}
