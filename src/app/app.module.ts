import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterCityComponent } from './filters/filter-city/filter-city.component';
import { FilterCategoryComponent } from './filters/filter-category/filter-category.component';
import { FilterPriceComponent } from './filters/filter-price/filter-price.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';

import { CardFilterPipe } from './pipes/card-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilterCityComponent,
    FilterCategoryComponent,
    FilterPriceComponent,
    CardListComponent,
    CardComponent,
    CardFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
