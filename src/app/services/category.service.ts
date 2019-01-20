import { Injectable } from '@angular/core';

import { Category } from '../classes/category';
import { ICategory } from '../interfaces/ICategory';

const MOCK_CATEGORIES: Category[] = [
  {id:1,name:'Architecture', isChecked: false},
  {id:2,name:'Business', isChecked: false},
  {id:3,name:'Design', isChecked: false},
  {id:4,name:'Development', isChecked: false},
  {id:5,name:'Marketing', isChecked: false},
  {id:6,name:'Photography', isChecked: false}
];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getMockCategories(): ICategory[] {
    return MOCK_CATEGORIES;
  }
}
