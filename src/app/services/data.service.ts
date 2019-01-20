import { Injectable } from '@angular/core';

import { Data } from '../classes/data';
import { IData } from '../interfaces/IData';

const MOCK_DATA: Data[] = [
  {
    id: 1,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/1.png',
    city: 'London', 
    category: 'Architecture', 
    price: 50
  },
  {
    id: 2,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/2.png',
    city: 'New York', 
    category: 'Business', 
    price: 249
  },
  {
    id: 3,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/3.png',
    city: 'Madrid', 
    category: 'Design', 
    price: 1
  },
  {
    id: 4,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/1.png',
    city: 'Las Vegas', 
    category: 'Development', 
    price: 150
  },
  {
    id: 5,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/2.png',
    city: 'Paris', 
    category: 'Marketing', 
    price: 200
  },
  {
    id: 6,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/3.png',
    city: 'London', 
    category: 'Photography', 
    price: 50
  },
  {
    id: 7,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/1.png',
    city: 'New York', 
    category: 'Architecture', 
    price: 100
  },
  {
    id: 8,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/2.png',
    city: 'Madrid', 
    category: 'Business', 
    price: 1
  },
  {
    id: 9,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/3.png',
    city: 'Las Vegas', 
    category: 'Design', 
    price: 150
  },
  {
    id: 10,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/1.png',
    city: 'Paris', 
    category: 'Development', 
    price: 200
  },
  {
    id: 11,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/2.png',
    city: 'London', 
    category: 'Marketing', 
    price: 150
  },
  {
    id: 12,
    name:'Affiliate Marketing - A Beginner\'s Guide to Earning Online', 
    img: '/src/assets/imgs/3.png',
    city: 'New York', 
    category: 'Photography', 
    price: 200
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMockData(): IData[] {
    return MOCK_DATA;
  }

}
