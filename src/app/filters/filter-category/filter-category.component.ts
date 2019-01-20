import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Category } from '../../classes/category';
import { Data } from '../../classes/data';

import { ICategory } from '../../interfaces/ICategory';

import { CategoryService } from 'src/app/services/category.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {
  categories: Category[];
  data: Data[];

  @Output() onCategoriesEmitter = new EventEmitter();

  constructor(
    private categoryService: CategoryService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.categories = this.categoryService.getMockCategories();
    this.data = this.dataService.getMockData();

    if (localStorage.categories) {
      const storageCategories = JSON.parse(localStorage.categories);

      storageCategories.forEach(storageCat => {
        this.categories.forEach(cat => {
          if (cat.id === storageCat.id) {
            cat.isChecked = storageCat.isChecked;
          }
        });
      });
    }
  }

  onToggle(category: ICategory): void {
    category.isChecked ? false : true;

    this.onCategoriesEmitter.emit(this.categories);

    localStorage.categories = JSON.stringify(this.categories);
  }

  getLengthData(catName: string): number {
    const resultArr = [];

    this.data.map(el => {
      if (el.category === catName) {
        resultArr.push(el);
      }
    });
    return resultArr.length;
  }

}
