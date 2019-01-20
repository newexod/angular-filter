import { Pipe, PipeTransform } from '@angular/core';

import { Data } from '../classes/data';

@Pipe({
  name: 'cardFilter'
})
export class CardFilterPipe implements PipeTransform {
  
  transform(cards: Data[], data: any): any[] {
    debugger;
    const filteredArr = [];
    const selectedCity = localStorage.selectedCity;
    let coincidence = '';
    
    if (data === undefined) {
      return cards;
    }

    cards = JSON.parse(localStorage.cards);
    data.categories = JSON.parse(localStorage.categories);

    data.categories.forEach(category => {
      if (category.isChecked) {
        cards.forEach(card => {
          if (card.category === category.name) {
            if ((card.city === selectedCity) && (data.minValue <= card.price && card.price <= data.maxValue)) {
              filteredArr.push(card);
            } else {
              coincidence = 'Нет Совпадений';
            }
          } 
        });
      }
    });

    if (filteredArr.length) {
      localStorage.filteredCards = JSON.stringify(filteredArr);

      return filteredArr;
    } else if (!filteredArr.length && coincidence) {
      localStorage.filteredCards = JSON.stringify([]);

      return [];
    } else if (!filteredArr.length) {
      localStorage.filteredCards = JSON.stringify(cards);

      return cards;
    }
  }

}
